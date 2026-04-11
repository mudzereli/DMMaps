// Mapping demo: local file picker loader and renderer

let currentLayer = 0;
let currentAreaObj = null;
let showDebugOverlay = false;
// interactive selection state
let selectedRooms = new Set();
let _dragState = null;
// preserve viewBox across re-renders when requested
let preservedViewBox = null;
let activeSvgCleanup = null;
// last populated areas for selection from dropdown
let availableAreas = [];

// Find an area index and room id for a given target identifier (id or vnum)
function findAreaIndexAndRoomForTarget(target){
  if (target === undefined || target === null) return null;
  const tstr = String(target);
  for (let i=0;i<availableAreas.length;i++){
    const a = availableAreas[i];
    for (const r of a.rooms || []){
      if (String(r.id) === tstr) return { idx: i, roomId: r.id };
      if (r.vnum !== undefined && String(r.vnum) === tstr) return { idx: i, roomId: r.id };
    }
  }
  return null;
}

function handleFile(file){
  const reader = new FileReader();
  reader.onerror = (err) => {
    console.error('File read error', err, file);
    alert('Failed to read file');
  };
  reader.onload = () => {
    let json;
    try{
    json = JSON.parse(reader.result);
      document.getElementById('loadedFile').textContent = file.name;
    }catch(e){
      console.error('JSON parse error', e, reader.result);
      alert('Invalid JSON: ' + (e && e.message ? e.message : String(e)));
      return;
    }
    try{
      processData(json);
    }catch(e){
      console.error('Error processing loaded JSON', e);
      alert('Error processing file: ' + (e && e.message ? e.message : String(e)));
    }
  };
  reader.readAsText(file);
}

function processData(data){
  const areas = extractAreas(data);
  // Merge numbered area variants (e.g. "Name I", "Name II") into a single base area
  function mergeNumberedAreas(arr){
    if (!Array.isArray(arr)) return arr;
    const groups = new Map();
    for (const a of arr){
      const name = String(a.name || a.id || '').trim();
      const base = name.replace(/\s+(?:I|II|III|IV|V|VI|VII|VIII|IX|X)$/i, '').trim();
      const key = base || name;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(a);
    }
    const out = [];
    for (const [key, list] of groups.entries()){
      if (list.length === 1){ out.push(list[0]); continue; }
      // merge multiple numbered areas into one
      const merged = { id: key, name: key, rooms: [] };
      for (const part of list){
        if (part.rooms && Array.isArray(part.rooms)) merged.rooms = merged.rooms.concat(part.rooms);
      }
      // recompute z-bounds if present
      const zs = merged.rooms.map(r=>r.z||0);
      merged.minZ = zs.length?Math.min(...zs):0;
      merged.maxZ = zs.length?Math.max(...zs):0;
      out.push(merged);
    }
    return out;
  }
  const mergedAreas = mergeNumberedAreas(areas);
  // auto-apply terrain coloring if MapColorsJS is available
  try{ if (typeof MapColorsJS !== 'undefined' && MapColorsJS && typeof MapColorsJS.applyColors === 'function'){
    areas.forEach(a=>{ try{ MapColorsJS.applyColors(a); }catch(e){} });
  } }catch(e){}
  if (mergedAreas.length===0) return document.getElementById('mapContainer').textContent = 'No areas/rooms found in JSON.';
  populateAreaList(mergedAreas);
}

function extractAreas(data) {
  if (!data) return [];
  // If source uses top-level `rooms` object keyed by vnum
  if (data.rooms && typeof data.rooms === 'object' && !Array.isArray(data.rooms)){
    return areasFromRoomsObject(data.rooms);
  }
  // If file already contains an `areas` array
  if (Array.isArray(data)) return data.map(a=>normalizeArea(a));
  if (data.areas) return data.areas.map(a=>normalizeArea(a));
  // fallback: top-level keys with rooms
  return Object.values(data).filter(v=>v && v.rooms).map(a=>normalizeArea(a));
}

function normalizeArea(a){
  return {
    id: a.id ?? a.name ?? a.areaId ?? Math.random().toString(36).slice(2,8),
    name: a.name ?? a.id ?? 'Area',
    rooms: (a.rooms||a.roomsList||[]).map(r=>r)
  };
}

function areasFromRoomsObject(roomsObj){
  // roomsObj: { "1224": { name, area, exits: {...} }, ... }
  const areas = {};
  for (const [k,v] of Object.entries(roomsObj)){
    const areaName = v.area ?? 'Default';
    if (!areas[areaName]) areas[areaName] = { id: areaName, name: areaName, rooms: [] };
    const room = {
      id: k,
      vnum: Number(k),
      name: v.name ?? k,
      exits: v.exits ?? {}
    };
    areas[areaName].rooms.push(room);
  }
  // For each area, compute layout positions based on exits and z-range
  return Object.values(areas).map(a=>{
    const rooms = layoutAreaRooms(a.rooms);
    const zs = rooms.map(r=>r.z||0);
    const minZ = zs.length?Math.min(...zs):0;
    const maxZ = zs.length?Math.max(...zs):0;
    return {...a, rooms, minZ, maxZ};
  });
}

function layoutAreaRooms(rooms, startId){
  // place rooms using BFS following exits; compute integer grid positions and a level (z) for up/down
  const dirDelta = { north:[0,-1], south:[0,1], east:[1,0], west:[-1,0] };
  const cellSize = 120; // base cell size for placement
  const pos = {}; // vnum -> {x,y}
  const occupied = new Map(); // key 'x,y,z' -> vnum (allow same x,y on different z levels)
  const level = {}; // vnum -> z-level (0 baseline)

  const idMap = new Map();
  rooms.forEach(r=>idMap.set(Number(r.id), r));

  // build reverse mapping: targetId (string) -> array of { source, dir }
  const reverseMap = new Map();
  for (const rr of rooms){
    const exs = rr.exits || {};
    for (const [d, ex] of Object.entries(exs)){
      const tid = Number(ex && (ex.vnum ?? ex));
      if (!tid) continue;
      const key = String(tid);
      if (!reverseMap.has(key)) reverseMap.set(key, []);
      reverseMap.get(key).push({ source: Number(rr.id), dir: String(d) });
    }
  }

  if (rooms.length===0) return rooms;

  // Choose a sensible BFS start. Use provided `startId` if valid; otherwise
  // prefer a room that has outgoing connectors to other rooms in this area.
  // If none have outgoing connectors, prefer a room that is referenced by others
  // (incoming). Fallback to the first room.
  let start = Number(rooms[0].id);
  if (startId !== undefined && startId !== null){
    const asNum = Number(startId);
    if (!Number.isNaN(asNum) && idMap.has(asNum)) start = asNum;
  } else {
    let found = null;
    for (const r of rooms){
      const exits = r.exits || {};
      for (const ex of Object.values(exits)){
        const tid = Number(ex && (ex.vnum ?? ex));
        if (tid && idMap.has(tid)) { found = Number(r.id); break; }
      }
      if (found) break;
    }
    if (!found){
      const targets = new Set();
      for (const r of rooms){
        for (const ex of Object.values(r.exits || {})){
          const tid = Number(ex && (ex.vnum ?? ex));
          if (tid && idMap.has(tid)) targets.add(tid);
        }
      }
      if (targets.size) found = Array.from(targets)[0];
    }
    if (found) start = Number(found);
  }
  pos[start] = {x:0,y:0};
  level[start] = 0;
  const startKey = `${pos[start].x},${pos[start].y},${level[start]}`;
  occupied.set(startKey, start);
  const q = [start];
  const visited = new Set([start]);
  // deferred neighbors (rooms that only point to this one) are processed
  // after the main outgoing-first traversal finishes.
  let deferred = [];
  // debug map: id -> { from:{x,y}, to:{x,y}, z }
  const debugMap = new Map();
  const halfSide = (cellSize - 20) / 2;

  while(q.length){
    const cur = q.shift();
    const curRoom = idMap.get(cur);
    if (!curRoom) continue;
    const curPos = pos[cur];
    // First, process explicit outgoing exits and enqueue them for immediate traversal.
    const exits = curRoom.exits || {};
    const outgoingSet = new Set();
    for (const [dir, ex] of Object.entries(exits)){
      const target = Number(ex.vnum || ex);
      if (!target || !idMap.has(target)) continue;
      if (visited.has(target)) continue;
      // mark as outgoing so reverse processing can skip duplicates
      outgoingSet.add(String(target));
      // determine placement for this outgoing neighbor
      const dirStr = String(dir);
      const curLevel = level[cur] ?? 0;
      let targetLevel = curLevel;
      if (dirStr.toLowerCase() === 'up') targetLevel = curLevel + 1;
      if (dirStr.toLowerCase() === 'down') targetLevel = curLevel - 1;
      const d = dirDelta[dirStr.toLowerCase()];
      let tx = curPos.x + (d?d[0]:0);
      let ty = curPos.y + (d?d[1]:0);
      if (dirStr.toLowerCase() === 'up' || dirStr.toLowerCase() === 'down'){
        tx = curPos.x; ty = curPos.y;
      }
      let key = `${tx},${ty},${targetLevel}`;
      let tries = 0;
      while(occupied.has(key) && occupied.get(key)!==target && tries<100){
        const triesMap = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]];
        const t = triesMap[tries % triesMap.length];
        tx = curPos.x + (d?d[0]:0) + t[0]*(Math.floor(tries/triesMap.length)+1);
        ty = curPos.y + (d?d[1]:0) + t[1]*(Math.floor(tries/triesMap.length)+1);
        key = `${tx},${ty},${targetLevel}`; tries++;
      }
      pos[target] = {x:tx,y:ty}; level[target] = targetLevel; occupied.set(key,target); visited.add(target); q.push(target);
    }
    // Then defer reverse-only neighbors to be processed after the current BFS wave finishes
    const revs = reverseMap.get(String(cur)) || [];
    for (const info of revs){
      const target = Number(info.source);
      if (!target || !idMap.has(target)) continue;
      if (visited.has(target)) continue;
      if (outgoingSet.has(String(target))) continue; // already handled as outgoing
      // infer opposite direction for placement bias
      const dirLower = (info.dir || '').toLowerCase();
      const opposite = ({ north:'south', south:'north', east:'west', west:'east', up:'down', down:'up' }[dirLower]) || dirLower;
      // compute placement but do NOT add to main queue; add to deferred list
      const curLevel = level[cur] ?? 0;
      let targetLevel = curLevel;
      if (opposite === 'up') targetLevel = curLevel + 1;
      if (opposite === 'down') targetLevel = curLevel - 1;
      const d = dirDelta[opposite];
      let tx = curPos.x + (d?d[0]:0);
      let ty = curPos.y + (d?d[1]:0);
      if (opposite === 'up' || opposite === 'down'){ tx = curPos.x; ty = curPos.y; }
      let key = `${tx},${ty},${targetLevel}`;
      let tries = 0;
      while(occupied.has(key) && occupied.get(key)!==target && tries<100){
        const triesMap = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]];
        const t = triesMap[tries % triesMap.length];
        tx = curPos.x + (d?d[0]:0) + t[0]*(Math.floor(tries/triesMap.length)+1);
        ty = curPos.y + (d?d[1]:0) + t[1]*(Math.floor(tries/triesMap.length)+1);
        key = `${tx},${ty},${targetLevel}`; tries++;
      }
      // only add to deferred if not already scheduled there
      if (!deferred.some(x=>x.target===target)){
        deferred.push({ target, tx, ty, targetLevel, key });
      }
    }
    // If main queue empties, move deferred items into the queue for further traversal
    if (q.length === 0 && deferred.length > 0){
      // materialize deferred targets into q (they may have been visited meanwhile)
      const newQ = [];
      for (const item of deferred){ if (!visited.has(item.target)){
          // assign final pos/level now
          pos[item.target] = { x: item.tx, y: item.ty };
          level[item.target] = item.targetLevel;
          occupied.set(item.key, item.target);
          visited.add(item.target);
          newQ.push(item.target);
        }
      }
      deferred = [];
      for (const v of newQ) q.push(v);
    }
  }

  // Gentle straighten pass: nudge leaf rooms one cell to better align cardinal connectors
  function cardinalDegree(id){
    const r = idMap.get(Number(id));
    if (!r) return 0;
    let c=0;
    for(const [dir,ex] of Object.entries(r.exits||{})){
      const dl = dir.toLowerCase(); if (dl==='up' || dl==='down') continue;
      const t = Number(ex && (ex.vnum ?? ex)); if (!t || !idMap.has(t)) continue;
      c++;
    }
    return c;
  }

  function attemptMoveOne(id, newX, newY, z, preferPush=false){
    const k = `${newX},${newY},${z}`;
    if (!occupied.has(k)){
      const old = pos[id];
      if (old) occupied.delete(`${old.x},${old.y},${z}`);
      pos[id] = {x:newX,y:newY};
      occupied.set(k, id);
      // record debug move
      if (old && (old.x !== newX || old.y !== newY)){
        debugMap.set(String(id), { from: { x: old.x * cellSize + halfSide, y: old.y * cellSize + halfSide }, to: { x: newX * cellSize + halfSide, y: newY * cellSize + halfSide }, z });
      }
      return true;
    }
    if (!preferPush) return false;
    const blocker = occupied.get(k);
    if (!blocker) return false;
    // only push a blocker if it's a leaf (degree <= 1)
    if (cardinalDegree(blocker) > 1) return false;
    // try to push blocker one more step in the same vector
    const dx = newX - (pos[id] ? pos[id].x : newX);
    const dy = newY - (pos[id] ? pos[id].y : newY);
    const pushX = newX + dx;
    const pushY = newY + dy;
    const pushKey = `${pushX},${pushY},${z}`;
    if (occupied.has(pushKey)) return false;
    // move blocker then move id
    const oldB = pos[blocker];
    if (oldB) occupied.delete(`${oldB.x},${oldB.y},${z}`);
    pos[blocker] = {x:pushX,y:pushY}; occupied.set(pushKey, blocker);
    // record blocker move
    if (oldB && (oldB.x !== pushX || oldB.y !== pushY)){
      debugMap.set(String(blocker), { from: { x: oldB.x * cellSize + halfSide, y: oldB.y * cellSize + halfSide }, to: { x: pushX * cellSize + halfSide, y: pushY * cellSize + halfSide }, z });
    }
    const old = pos[id]; if (old) occupied.delete(`${old.x},${old.y},${z}`);
    pos[id] = {x:newX,y:newY}; occupied.set(k, id);
    if (old && (old.x !== newX || old.y !== newY)){
      debugMap.set(String(id), { from: { x: old.x * cellSize + halfSide, y: old.y * cellSize + halfSide }, to: { x: newX * cellSize + halfSide, y: newY * cellSize + halfSide }, z });
    }
    return true;
  }

  // Run a few relaxation passes
  for (let pass=0; pass<3; pass++){
    let any=false;
    for (const r of rooms){
      const id = Number(r.id);
      const rp = pos[id];
      if (!rp) continue;
      const z = level[id] ?? 0;
      const exits = r.exits || {};
      for (const [dir, ex] of Object.entries(exits)){
        const dl = dir.toLowerCase(); if (dl==='up' || dl==='down') continue;
        const tid = Number(ex && (ex.vnum ?? ex)); if (!tid || !idMap.has(tid)) continue;
        if ((level[tid] ?? 0) !== z) continue;
        const tp = pos[tid]; if (!tp) continue;
        // if east/west but y mismatch -> try to move the lesser-degree room vertically one step toward the other
        if ((dl==='east' || dl==='west') && tp.y !== rp.y){
          const dy = Math.sign(rp.y - tp.y);
          const degSrc = cardinalDegree(id);
          const degT = cardinalDegree(tid);
          // prefer moving the node with lower degree
          if (degT <= degSrc){
            if (attemptMoveOne(tid, tp.x, tp.y + dy, z, true)) any = true;
          } else {
            if (attemptMoveOne(id, rp.x, rp.y - dy, z, true)) any = true;
          }
        }
        // if north/south but x mismatch -> try to move the lesser-degree room horizontally one step
        if ((dl==='north' || dl==='south') && tp.x !== rp.x){
          const dx = Math.sign(rp.x - tp.x);
          const degSrc = cardinalDegree(id);
          const degT = cardinalDegree(tid);
          if (degT <= degSrc){
            if (attemptMoveOne(tid, tp.x + dx, tp.y, z, true)) any = true;
          } else {
            if (attemptMoveOne(id, rp.x - dx, rp.y, z, true)) any = true;
          }
        }
      }
    }
    if (!any) break;
  }

  // map positions into room objects with pixel coords and sizes
  const outRooms = rooms.map(r=>{
    const p = pos[Number(r.id)] ?? {x:0,y:0};
    const z = level[Number(r.id)] ?? 0;
    const out = {
      ...r,
      x: p.x * cellSize,
      y: p.y * cellSize,
      width: cellSize-20,
      height: cellSize-20,
      z: z
    };
    const dbg = debugMap.get(String(r.id));
    if (dbg) out._debug = dbg;
    return out;
  });
  // Normalize z-levels so the lowest floor is 0
  try{
    const zs = outRooms.map(r=>r.z || 0);
    if (zs.length){
      const minZ = Math.min(...zs);
      if (minZ !== 0){
        outRooms.forEach(r=>{ if (typeof r.z === 'number') r.z = r.z - minZ; });
      }
    }
  }catch(e){}
  return outRooms;
}

// Redraw currently selected area using the first selected room as BFS start
function redrawFromSelectedRoom(){
  if (!currentAreaObj) return alert('No area selected');
  if (!selectedRooms || selectedRooms.size===0) return alert('No room selected to start from');
  const sid = Array.from(selectedRooms)[0];
  try{
    // Relayout the entire area using the selected room as the BFS start.
    // This ensures the traversal begins at the selected room but all rooms
    // in the area are re-laid out.
    const area = currentAreaObj;
    // copy rooms for layout so layoutAreaRooms can mutate safely
    const roomsCopy = (area.rooms || []).map(r => ({ ...r }));
    // preserve the starting room's current position if present
    const startRoomOrig = area.rooms.find(r=>String(r.id)===String(sid));
    let startPos = null;
    if (startRoomOrig){
      if (typeof startRoomOrig.x === 'number' && typeof startRoomOrig.y === 'number') startPos = { x: startRoomOrig.x, y: startRoomOrig.y };
      else {
        const b = Utils.roomBBox(startRoomOrig);
        if (b) startPos = { x: b.minX, y: b.minY };
      }
    }
    const laid = layoutAreaRooms(roomsCopy, sid);
    // If we have an original start position, shift the laid layout so the start keeps its original grid position
    if (startPos){
      const laidStart = laid.find(r=>String(r.id)===String(sid));
      if (laidStart && typeof laidStart.x === 'number' && typeof laidStart.y === 'number'){
        const dx = startPos.x - laidStart.x;
        const dy = startPos.y - laidStart.y;
        if (dx !== 0 || dy !== 0){
          for (const r of laid){ if (typeof r.x === 'number') r.x += dx; if (typeof r.y === 'number') r.y += dy; }
        }
      }
    }
    const laidMap = new Map(laid.map(r=>[String(r.id), r]));
    for (const r of area.rooms){
      const nr = laidMap.get(String(r.id));
      if (nr){
        r.x = nr.x; r.y = nr.y; r.width = nr.width; r.height = nr.height; r.z = nr.z;
        if (nr._debug) r._debug = nr._debug; else delete r._debug;
      }
    }
    const zs = (area.rooms||[]).map(r=>r.z||0);
    area.minZ = zs.length?Math.min(...zs):0;
    area.maxZ = zs.length?Math.max(...zs):0;
    // persist updated positions so reload uses the relaid layout
    try{ savePositions(area); }catch(e){}
    // preserve viewBox across this change
    try{ const container = document.getElementById('mapContainer'); const svgElem = container && container.querySelector && container.querySelector('svg'); const curVB = svgElem && svgElem.getAttribute && svgElem.getAttribute('viewBox'); if (curVB && !preservedViewBox) preservedViewBox = curVB; }catch(e){}
    renderArea(area);
  }catch(e){ console.error('redrawFromSelectedRoom failed', e); alert('Redraw failed: '+(e&&e.message?e.message:String(e))); }
}

// Redraw only the current z-level (floor) using the first selected room on that level as BFS start
function redrawFromSelectedLayer(radius){
  if (!currentAreaObj) return alert('No area selected');
  if (!selectedRooms || selectedRooms.size===0) return alert('No room selected to start from');
  const area = currentAreaObj;
  const layer = currentLayer;
  // gather rooms on the current layer
  const roomsOnLayer = (area.rooms || []).filter(r => (r.z || 0) === layer);
  if (!roomsOnLayer.length) return alert('No rooms on current floor to redraw');
  const idsOnLayer = new Set(roomsOnLayer.map(r=>String(r.id)));
  // choose a start id: prefer a selected room that is on this layer
  let sid = null;
  for (const s of selectedRooms){ if (idsOnLayer.has(String(s))){ sid = s; break; } }
  if (!sid) sid = roomsOnLayer[0].id;
  try{
    // build adjacency limited to this layer
    const idMap = new Map(); area.rooms.forEach(r=>idMap.set(String(r.id), r));
    const adj = new Map();
    for (const r of roomsOnLayer){ const key = String(r.id); if (!adj.has(key)) adj.set(key, new Set()); for (const ex of Object.values(r.exits || {})){ const tid = ex && (ex.vnum ?? ex); if (!tid) continue; if (!idMap.has(String(tid))) continue; const tr = idMap.get(String(tid)); if ((tr.z||0) !== layer) continue; adj.get(key).add(String(tid)); if (!adj.has(String(tid))) adj.set(String(tid), new Set()); adj.get(String(tid)).add(key); } }
    // BFS on this layer with optional radius to collect subset
    const start = String(sid);
    const seen = new Set([start]);
    if (radius === undefined || radius === null){
      const q = [start];
      while(q.length){ const cur = q.shift(); const neigh = adj.get(cur); if (!neigh) continue; for (const n of neigh) if (!seen.has(n)){ seen.add(n); q.push(n); } }
    } else {
      const maxDepth = Number(radius);
      if (Number.isNaN(maxDepth) || maxDepth < 0) return alert('Invalid radius');
      const q = [{id: start, depth: 0}];
      while(q.length){ const cur = q.shift(); if (cur.depth >= maxDepth) continue; const neigh = adj.get(cur.id); if (!neigh) continue; for (const n of neigh){ if (seen.has(n)) continue; seen.add(n); q.push({id: n, depth: cur.depth + 1}); } }
    }
    const subsetCopy = Array.from(seen).map(id=>({ ...idMap.get(String(id)) }));
    // preserve the starting room's current position if present
    const startRoomOrig = area.rooms.find(r=>String(r.id)===String(sid));
    let startPos = null;
    if (startRoomOrig){
      if (typeof startRoomOrig.x === 'number' && typeof startRoomOrig.y === 'number') startPos = { x: startRoomOrig.x, y: startRoomOrig.y };
      else {
        const b = Utils.roomBBox(startRoomOrig);
        if (b) startPos = { x: b.minX, y: b.minY };
      }
    }
    const laid = layoutAreaRooms(subsetCopy, sid);
    // shift laid positions so the start room keeps its original grid position
    if (startPos){
      const laidStart = laid.find(r=>String(r.id)===String(sid));
      if (laidStart && typeof laidStart.x === 'number' && typeof laidStart.y === 'number'){
        const dx = startPos.x - laidStart.x;
        const dy = startPos.y - laidStart.y;
        if (dx !== 0 || dy !== 0){
          for (const r of laid){ if (typeof r.x === 'number') r.x += dx; if (typeof r.y === 'number') r.y += dy; }
        }
      }
    }
    const laidMap = new Map(laid.map(r=>[String(r.id), r]));
    for (const r of area.rooms){
      const nr = laidMap.get(String(r.id));
      if (nr){
        r.x = nr.x; r.y = nr.y; r.width = nr.width; r.height = nr.height; r.z = layer;
        if (nr._debug) r._debug = nr._debug; else delete r._debug;
      }
    }
    // update area z-bounds
    const zs = (area.rooms||[]).map(r=>r.z||0);
    area.minZ = zs.length?Math.min(...zs):0;
    area.maxZ = zs.length?Math.max(...zs):0;
    // persist updated positions so reload uses the relaid layout
    try{ savePositions(area); }catch(e){}
    // preserve viewBox across this change
    try{ const container = document.getElementById('mapContainer'); const svgElem = container && container.querySelector && container.querySelector('svg'); const curVB = svgElem && svgElem.getAttribute && svgElem.getAttribute('viewBox'); if (curVB && !preservedViewBox) preservedViewBox = curVB; }catch(e){}
    renderArea(area);
  }catch(e){ console.error('redrawFromSelectedLayer failed', e); alert('Redraw (layer) failed: '+(e&&e.message?e.message:String(e))); }
}

// NOTE: helper functions formerly proxied here were removed in favor of calling
// `Utils.*` directly. See `utils.js` for implementations.

function renderArea(area){
  if (!area) return;
  // prepare svg container and defs
  const container = document.getElementById('mapContainer');
  if (!container) return;
  const svgNS = 'http://www.w3.org/2000/svg';
  // Try to reuse an existing SVG to avoid tearing down pan listeners and
  // reduce DOM churn (major cause of jitter during pan).
  const existingSvg = container.querySelector && container.querySelector('svg');
  let svg;
  const isNewSvg = !existingSvg;
  if (existingSvg){
    svg = existingSvg;
    // preserve current viewBox so subsequent layout changes don't jump
    try{ const curVB = svg.getAttribute && svg.getAttribute('viewBox'); if (curVB && !preservedViewBox) preservedViewBox = curVB; }catch(e){}
    // clear previous contents but keep the same SVG element and its listeners
    while (svg.firstChild) svg.removeChild(svg.firstChild);
  } else {
    svg = document.createElementNS(svgNS,'svg');
  }
  const defs = document.createElementNS(svgNS,'defs');
  // Arrow marker - default
  const markerArrow = document.createElementNS(svgNS,'marker');
  markerArrow.setAttribute('id','arrow');
  markerArrow.setAttribute('markerWidth','8');
  markerArrow.setAttribute('markerHeight','6');
  markerArrow.setAttribute('refX','6');
  markerArrow.setAttribute('refY','3');
  markerArrow.setAttribute('orient','auto');
  markerArrow.setAttribute('markerUnits','strokeWidth');
  const arrowPath = document.createElementNS(svgNS,'path');
  arrowPath.setAttribute('d','M0,0 L0,6 L6,3 z');
  arrowPath.setAttribute('fill','#374151');
  markerArrow.appendChild(arrowPath);
  defs.appendChild(markerArrow);
  // Connected (highlighted) arrow
  const markerConn = document.createElementNS(svgNS,'marker');
  markerConn.setAttribute('id','arrow_connected');
  markerConn.setAttribute('markerWidth','10');
  markerConn.setAttribute('markerHeight','8');
  markerConn.setAttribute('refX','8');
  markerConn.setAttribute('refY','4');
  markerConn.setAttribute('orient','auto');
  markerConn.setAttribute('markerUnits','strokeWidth');
  const arrowPathConn = document.createElementNS(svgNS,'path');
  arrowPathConn.setAttribute('d','M0,0 L0,8 L8,4 z');
  arrowPathConn.setAttribute('fill','#7c3aed');
  markerConn.appendChild(arrowPathConn);
  defs.appendChild(markerConn);
  // External arrow (red)
  const markerExternal = document.createElementNS(svgNS,'marker');
  markerExternal.setAttribute('id','arrow_external');
  markerExternal.setAttribute('markerWidth','34');
  markerExternal.setAttribute('markerHeight','24');
  markerExternal.setAttribute('refX','26');
  markerExternal.setAttribute('refY','12');
  markerExternal.setAttribute('orient','auto');
  markerExternal.setAttribute('markerUnits','userSpaceOnUse');
  const arrowPathExt = document.createElementNS(svgNS,'path');
  arrowPathExt.setAttribute('d','M0,0 L0,24 L34,12 z');
  arrowPathExt.setAttribute('fill','#ef4444');
  markerExternal.appendChild(arrowPathExt);
  defs.appendChild(markerExternal);
  // Debug arrow
  const markerDebug = document.createElementNS(svgNS,'marker');
  markerDebug.setAttribute('id','arrow_debug');
  markerDebug.setAttribute('markerWidth','10');
  markerDebug.setAttribute('markerHeight','8');
  markerDebug.setAttribute('refX','8');
  markerDebug.setAttribute('refY','4');
  markerDebug.setAttribute('orient','auto');
  markerDebug.setAttribute('markerUnits','userSpaceOnUse');
  const arrowPathDbg = document.createElementNS(svgNS,'path');
  arrowPathDbg.setAttribute('d','M0,0 L0,8 L8,4 z');
  arrowPathDbg.setAttribute('fill','#f59e0b');
  markerDebug.appendChild(arrowPathDbg);
  defs.appendChild(markerDebug);
  svg.appendChild(defs);
  const roomBoxes = Utils.ensurePositions(area.rooms);
  // draw lower layers first so higher layers appear on top
  roomBoxes.sort((a,b)=> (a.r.z||0) - (b.r.z||0));
  const boxes = roomBoxes.map(x=>x.box);
  // map id -> center and side for arrow endpoints
  const centers = {};
  const b = Utils.areaBounds(boxes);
  const margin = Math.max((b.maxX - b.minX),(b.maxY - b.minY)) * 0.06 + 20;
  const viewMinX = b.minX - margin;
  const viewMinY = b.minY - margin;
  const viewW = (b.maxX - b.minX) + margin*2;
  const viewH = (b.maxY - b.minY) + margin*2;
  if (preservedViewBox){
    try{ svg.setAttribute('viewBox', preservedViewBox); }catch(e){ svg.setAttribute('viewBox', `${viewMinX} ${viewMinY} ${viewW} ${viewH}`); }
    preservedViewBox = null;
  } else {
    svg.setAttribute('viewBox', `${viewMinX} ${viewMinY} ${viewW} ${viewH}`);
  }

  const layerOffset = 8;
  // compute connected rooms (rooms with exits to/from any selected room)
  const connectedRooms = new Set();
  if (selectedRooms && selectedRooms.size > 0){
    const idToRoom = new Map(area.rooms.map(rr=>[String(rr.id), rr]));
    // outgoing from selected
    for (const sid of selectedRooms){
      const sroom = idToRoom.get(String(sid));
      if (!sroom) continue;
      for (const ex of Object.values(sroom.exits || {})){
        const tid = ex && (ex.vnum ?? ex);
        if (!tid) continue;
        connectedRooms.add(String(tid));
      }
    }
    // incoming to selected
    for (const rr of area.rooms){
      for (const ex of Object.values(rr.exits || {})){
        const tid = ex && (ex.vnum ?? ex);
        if (!tid) continue;
        if (selectedRooms.has(String(tid))) connectedRooms.add(String(rr.id));
      }
    }
    // ensure selected rooms aren't double-marked as connected
    for (const s of selectedRooms) connectedRooms.delete(String(s));
  }
  // We'll render only current layer fully, plus one layer above (outline) and one below (shadow).
  const adjOffset = 10; // slight offset for adjacent layers
  const belowRooms = [];
  const currentRooms = [];
  const aboveRooms = [];
  roomBoxes.forEach(({r,box},i)=>{
    const w = box.maxX - box.minX;
    const h = box.maxY - box.minY;
    const side = Math.max(w,h);
    const cx = (box.minX + box.maxX)/2;
    const cy = (box.minY + box.maxY)/2;
    const z = r.z || 0;
    if (z < currentLayer - 1 || z > currentLayer + 1) return; // skip distant layers
    if (z === currentLayer - 1) belowRooms.push({r,box,side,cx,cy});
    else if (z === currentLayer) currentRooms.push({r,box,side,cx,cy});
    else if (z === currentLayer + 1) aboveRooms.push({r,box,side,cx,cy});
  });

  // draw shadows for below rooms first
  belowRooms.forEach(obj=>{
    const {r,side,cx,cy} = obj;
    const visCx = cx + adjOffset;
    const visCy = cy + adjOffset;
    const visX = visCx - side/2;
    const visY = visCy - side/2;
    const rect = document.createElementNS(svgNS,'rect');
    rect.setAttribute('x', visX);
    rect.setAttribute('y', visY);
    rect.setAttribute('width', side);
    rect.setAttribute('height', side);
    rect.setAttribute('class','room layer-down');
    svg.appendChild(rect);
  });

  // draw outlines for above rooms now so they render under the current floor
  aboveRooms.forEach(obj=>{
    const {r,side,cx,cy} = obj;
    const visCx = cx - adjOffset;
    const visCy = cy - adjOffset;
    const visX = visCx - side/2;
    const visY = visCy - side/2;
    const rect = document.createElementNS(svgNS,'rect');
    rect.setAttribute('x', visX);
    rect.setAttribute('y', visY);
    rect.setAttribute('width', side);
    rect.setAttribute('height', side);
    rect.setAttribute('class','room layer-up');
    svg.appendChild(rect);
  });

  // build centers for current layer for connectors
  currentRooms.forEach(obj=>{
    const {r,side,cx,cy} = obj;
    centers[String(r.id)] = {cx,cy,side,z: currentLayer};
  });

  const currentAreaIndex = availableAreas.findIndex(a=> (a && (a.id || a.name)) ? (a.id === area.id || a.name === area.name) : false);

  // draw connectors between rooms on the current layer
  Object.entries(centers).forEach(([fromId, source])=>{
    const r = area.rooms.find(rr=>String(rr.id)===fromId);
    if (!r) return;
    const exits = r.exits || {};
    for (const [dir,ex] of Object.entries(exits)){
      if (dir.toLowerCase()==='up' || dir.toLowerCase()==='down') continue;
      const targetId = String(ex.vnum || ex);
      const sCx = source.cx;
      const sCy = source.cy;
      const dxUnit = (function(){ const t = centers[targetId]; if (t) return {tx: t.cx, ty: t.cy, isLocal:true}; const found = findAreaIndexAndRoomForTarget(targetId); return {found, isLocal:false}; })();
      if (dxUnit.isLocal){
        const tCx = dxUnit.tx; const tCy = dxUnit.ty;
        const dx = tCx - sCx; const dy = tCy - sCy; const dist = Math.sqrt(dx*dx + dy*dy) || 1;
        const sOff = source.side/2; const tOff = (centers[targetId] && centers[targetId].side/2) || 20;
        const sx = sCx + (dx/dist) * sOff * 0.85;
        const sy = sCy + (dy/dist) * sOff * 0.85;
        const tx = tCx - (dx/dist) * tOff * 0.85;
        const ty = tCy - (dy/dist) * tOff * 0.85;
        const line = document.createElementNS(svgNS,'path');
        line.setAttribute('d', `M ${sx} ${sy} L ${tx} ${ty}`);
        line.setAttribute('class','exit-line');
        line.setAttribute('data-from', String(fromId));
        line.setAttribute('data-to', String(targetId));
        line.setAttribute('marker-end','url(#arrow)');
        svg.appendChild(line);
      } else {
        // external target: draw an outward red arrow and attach click handler to jump to that area/room
        const found = dxUnit.found;
        if (!found) continue;
        // If the found target is in the same area but not on the current layer,
        // treat it as an intra-area connector (do not mark red as an external area exit).
        if (found.idx === currentAreaIndex){
          // target is in the same area (different layer). Find its box and draw a regular connector
          const targetRoomId = found.roomId;
          const tbEntry = roomBoxes.find(x=> String(x.r.id) === String(targetRoomId));
          if (tbEntry && tbEntry.box){
            const tCx = (tbEntry.box.minX + tbEntry.box.maxX)/2;
            const tCy = (tbEntry.box.minY + tbEntry.box.maxY)/2;
            const dx = tCx - sCx; const dy = tCy - sCy; const dist = Math.sqrt(dx*dx + dy*dy) || 1;
            const sOff = source.side/2; const tOff = (tbEntry.box.maxX - tbEntry.box.minX)/2 || 20;
            const sx = sCx + (dx/dist) * sOff * 0.85;
            const sy = sCy + (dy/dist) * sOff * 0.85;
            const tx = tCx - (dx/dist) * tOff * 0.85;
            const ty = tCy - (dy/dist) * tOff * 0.85;
              const smallLine = document.createElementNS(svgNS,'path');
              smallLine.setAttribute('d', `M ${sx} ${sy} L ${tx} ${ty}`);
              smallLine.setAttribute('class','exit-line');
              smallLine.setAttribute('data-from', String(fromId));
              smallLine.setAttribute('data-to', String(targetRoomId));
              smallLine.setAttribute('marker-end','url(#arrow)');
              svg.appendChild(smallLine);
            continue;
          }
          // if we couldn't find the target box, fallthrough to external arrow behavior
        }
        // direction: use exit direction (if cardinal) to bias arrow; fallback to small offset
        const targetDir = (String(dir||'').toLowerCase());
        const len = Math.max(40, source.side * 0.9);
        let tx = sCx, ty = sCy;
        if (targetDir === 'north' || targetDir === 'n') { tx = sCx; ty = sCy - len; }
        else if (targetDir === 'south' || targetDir === 's') { tx = sCx; ty = sCy + len; }
        else if (targetDir === 'east' || targetDir === 'e') { tx = sCx + len; ty = sCy; }
        else if (targetDir === 'west' || targetDir === 'w') { tx = sCx - len; ty = sCy; }
        else { tx = sCx + len * 0.7; ty = sCy - len * 0.3; }
        const dx = tx - sCx; const dy = ty - sCy; const dist = Math.sqrt(dx*dx + dy*dy) || 1;
        const sOff = source.side/2;
        const sx = sCx + (dx/dist) * sOff * 0.85;
        const sy = sCy + (dy/dist) * sOff * 0.85;
        const line = document.createElementNS(svgNS,'path');
        line.setAttribute('d', `M ${sx} ${sy} L ${tx} ${ty}`);
        line.setAttribute('class','exit-line-external no-pan');
        line.setAttribute('data-from', String(fromId));
        line.setAttribute('data-to', String(found.roomId));
        line.setAttribute('marker-end','url(#arrow_external)');
        line.style.cursor = 'pointer';
        try{ line.setAttribute('pointer-events','none'); }catch(e){}
        const jumpHandler = (ev)=>{ ev.stopPropagation(); try{ console.log('jump to external area', found); selectAreaIndex(found.idx, found.roomId); }catch(e){ console.warn('jump to external area failed', e); } };
        // add a larger invisible hit-path so the arrow is easier to click
        try{
          const hit = document.createElementNS(svgNS,'path');
          hit.setAttribute('d', `M ${sx} ${sy} L ${tx} ${ty}`);
          hit.setAttribute('stroke','transparent');
          hit.setAttribute('fill','none');
          hit.setAttribute('stroke-width', Math.max(12, source.side * 0.6));
          hit.setAttribute('pointer-events','stroke');
          hit.classList.add('no-pan');
          hit.style.cursor = 'pointer';
          hit.addEventListener('click', jumpHandler);
          hit.addEventListener('pointerdown', jumpHandler);
          svg.appendChild(hit);
        }catch(e){}
        svg.appendChild(line);
      }
    }
  });

  // draw current rooms (fill + labels + carets)
  currentRooms.forEach(obj=>{
    const {r,side,cx,cy} = obj;
    const visCx = cx;
    const visCy = cy;
    const visX = visCx - side/2;
    const visY = visCy - side/2;
    const rect = document.createElementNS(svgNS,'rect');
    rect.setAttribute('x', visX);
    rect.setAttribute('y', visY);
    rect.setAttribute('width', side);
    rect.setAttribute('height', side);
    rect.setAttribute('class','room');
    if (r._color) rect.style.fill = r._color;
    rect.dataset.roomId = String(r.id);
    if (selectedRooms.has(String(r.id))) rect.classList.add('selected');
    if (connectedRooms.has(String(r.id))) rect.classList.add('connected');
    // detect external vertical exits (up/down pointing to rooms in other areas)
    try{
      const exs = r.exits || {};
      let hasExternalVertical = false;
      for (const k of ['up','down']){
        const exv = exs[k];
        if (!exv) continue;
        const tid = exv && (exv.vnum ?? exv);
        if (!tid) continue;
        const found = findAreaIndexAndRoomForTarget(tid);
        if (found && found.idx !== -1 && found.idx !== currentAreaIndex) { hasExternalVertical = true; break; }
      }
      // don't color the whole room; we'll color the caret itself if the vertical exit points externally
    }catch(e){}
    rect.dataset.index = 0;
    rect.title = r.name ?? r.id;
    rect.addEventListener('contextmenu', (ev)=>{ ev.preventDefault(); ev.stopPropagation(); showRoomDetails(r); });
    // selection (click/shift+click) and dragging
    rect.addEventListener('mousedown', (ev)=>{
      if (ev.button !== 0) return;
      ev.stopPropagation(); ev.preventDefault();
      const id = String(r.id);
      // multi-select: use Ctrl (or Cmd on Mac) instead of Shift
      if (ev.ctrlKey || ev.metaKey){
        // Restrict multi-select toggles to rooms on the current floor only.
        const rz = (r.z || 0);
        if (rz === currentLayer){
          // add/remove to selection (ctrl/cmd-click)
          if (selectedRooms.has(id)) selectedRooms.delete(id); else selectedRooms.add(id);
        } else {
          // If user ctrl-clicks a room on a different floor, treat as single-select (clear and pick it)
          selectedRooms.clear(); selectedRooms.add(id);
        }
      } else {
        if (!selectedRooms.has(id)) { selectedRooms.clear(); selectedRooms.add(id); }
      }
      // update DOM selection classes immediately
      try{
        const all = svg.querySelectorAll('rect[data-room-id]');
        all.forEach(el=>{ if (selectedRooms.has(String(el.dataset.roomId))) el.classList.add('selected'); else el.classList.remove('selected'); });
      }catch(e){}
      try{ updateConnectorSelectionVisuals(svg); }catch(e){}
      try{ updateRoomInfoPanel(); }catch(e){}
      // begin drag of selected set
      startDrag(ev, svg, currentAreaObj);
    });
    svg.appendChild(rect);
    // labels: vnum on its own line above the name
    const vnumText = (r.vnum !== undefined && r.vnum !== null) ? String(r.vnum) : '';
    const nameText = r.name ?? (r.id ? String(r.id) : '');
    const vnumLabel = Utils.fitLabel(vnumText, side);
    const nameLabel = Utils.fitLabel(nameText, side);
    const spacing = Math.max(2, Math.round(side * 0.06));
    if (vnumText && nameText){
      const total = vnumLabel.fontSize + spacing + nameLabel.fontSize;
      const startY = visCy - total/2 + vnumLabel.fontSize/2;
      const vlabel = document.createElementNS(svgNS,'text');
      vlabel.setAttribute('x', visCx);
      vlabel.setAttribute('y', startY);
      vlabel.setAttribute('text-anchor','middle');
      vlabel.setAttribute('dominant-baseline','middle');
      vlabel.setAttribute('font-size', String(vnumLabel.fontSize));
      vlabel.setAttribute('class','room-label vnum-label');
      vlabel.textContent = vnumLabel.text;
      svg.appendChild(vlabel);
      const nlabel = document.createElementNS(svgNS,'text');
      nlabel.setAttribute('x', visCx);
      nlabel.setAttribute('y', startY + vnumLabel.fontSize + spacing);
      nlabel.setAttribute('text-anchor','middle');
      nlabel.setAttribute('dominant-baseline','middle');
      nlabel.setAttribute('font-size', String(nameLabel.fontSize));
      nlabel.setAttribute('class','room-label');
      nlabel.textContent = nameLabel.text;
      svg.appendChild(nlabel);
    } else if (vnumText){
      const vlabel = document.createElementNS(svgNS,'text');
      vlabel.setAttribute('x', visCx);
      vlabel.setAttribute('y', visCy);
      vlabel.setAttribute('text-anchor','middle');
      vlabel.setAttribute('dominant-baseline','middle');
      vlabel.setAttribute('font-size', String(vnumLabel.fontSize));
      vlabel.setAttribute('class','room-label vnum-label');
      vlabel.textContent = vnumLabel.text;
      svg.appendChild(vlabel);
    } else if (nameText){
      const nlabel = document.createElementNS(svgNS,'text');
      nlabel.setAttribute('x', visCx);
      nlabel.setAttribute('y', visCy);
      nlabel.setAttribute('text-anchor','middle');
      nlabel.setAttribute('dominant-baseline','middle');
      nlabel.setAttribute('font-size', String(nameLabel.fontSize));
      nlabel.setAttribute('class','room-label');
      nlabel.textContent = nameLabel.text;
      svg.appendChild(nlabel);
    }
    // carets (wider, shorter, shaded with black outline)
    if (r.exits && (r.exits.up || r.exits.down)){
      const caretW = Math.max(10, side * 0.45); // base width
      const caretH = Math.max(6, side * 0.18);  // height (shorter)
      const halfW = caretW/2;
      const halfH = caretH/2;
      // pad from top/bottom edges to place carets inside the room rect
      const caretPad = Math.max(6, Math.round(side * 0.06));
      if (r.exits.up){
        const up = document.createElementNS(svgNS,'polygon');
        const px = visCx;
        // place caret near the top edge (inside the rect)
        const py = visY + caretPad + halfH;
        const points = `${px},${py-halfH} ${px-halfW},${py+halfH} ${px+halfW},${py+halfH}`;
        up.setAttribute('points', points);
        up.setAttribute('class','caret-shape caret-up');
        up.setAttribute('title', `Go to floor ${currentLayer + 1}`);
        // If the up exit points into another area, make the caret jump there instead
        try{
          const upEx = r.exits.up;
          const upTid = upEx && (upEx.vnum ?? upEx);
          const found = findAreaIndexAndRoomForTarget(upTid);
          if (found && found.idx !== -1 && found.idx !== currentAreaIndex){
            up.classList.add('caret-external','no-pan');
            up.addEventListener('click', (ev)=>{ ev.stopPropagation(); selectAreaIndex(found.idx, found.roomId); });
          } else {
            up.addEventListener('click', (ev)=>{ ev.stopPropagation(); changeLayer(1); });
          }
        }catch(e){ up.addEventListener('click', (ev)=>{ ev.stopPropagation(); changeLayer(1); }); }
        svg.appendChild(up);
      }
      if (r.exits.down){
        const down = document.createElementNS(svgNS,'polygon');
        const px = visCx;
        // place caret near the bottom edge (inside the rect)
        const py = visY + side - caretPad - halfH;
        const points = `${px-halfW},${py-halfH} ${px+halfW},${py-halfH} ${px},${py+halfH}`;
        down.setAttribute('points', points);
        down.setAttribute('class','caret-shape caret-down');
        down.setAttribute('title', `Go to floor ${currentLayer - 1}`);
        try{
          const downEx = r.exits.down;
          const downTid = downEx && (downEx.vnum ?? downEx);
          const found2 = findAreaIndexAndRoomForTarget(downTid);
          if (found2 && found2.idx !== -1 && found2.idx !== currentAreaIndex){
            down.classList.add('caret-external','no-pan');
            down.addEventListener('click', (ev)=>{ ev.stopPropagation(); selectAreaIndex(found2.idx, found2.roomId); });
          } else {
            down.addEventListener('click', (ev)=>{ ev.stopPropagation(); changeLayer(-1); });
          }
        }catch(e){ down.addEventListener('click', (ev)=>{ ev.stopPropagation(); changeLayer(-1); }); }
        svg.appendChild(down);
      }
    }
  });

  // helper: convert client coords to svg coords
  function svgPointFromEvent(evt){
    const pt = svg.createSVGPoint(); pt.x = evt.clientX; pt.y = evt.clientY;
    const ctm = svg.getScreenCTM(); if (!ctm) return {x:pt.x,y:pt.y};
    return pt.matrixTransform(ctm.inverse());
  }

  // drag handlers: attach to window so redraws don't break the interaction
  function startDrag(ev, svgElem, area){
    const pt = svgPointFromEvent(ev);
    const ids = Array.from(selectedRooms);
    if (!ids.length) return;
    const initial = new Map();
    for (const id of ids){
      const rr = area.rooms.find(x=>String(x.id)===String(id));
      if (!rr) continue;
      // ensure numeric x/y exist (use box if needed)
      if (rr.x === undefined || rr.y === undefined){
          const b = Utils.roomBBox(rr);
        rr.x = b ? b.minX : (rr.x||0);
        rr.y = b ? b.minY : (rr.y||0);
      }
      initial.set(String(id), { x: Number(rr.x), y: Number(rr.y) });
    }
    _dragState = { start: pt, ids, initial };
    // build overlay group for visual feedback during drag
    const boxes = Utils.ensurePositions(area.rooms);
    const boxMap = new Map(); boxes.forEach(({r,box})=> boxMap.set(String(r.id), box));
    let overlay = svgElem.querySelector('#dragOverlay'); if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    overlay = document.createElementNS(svgNS,'g'); overlay.setAttribute('id','dragOverlay'); overlay.setAttribute('pointer-events','none');
    for (const id of ids){
      const b = boxMap.get(String(id)); if (!b) continue;
      const w = b.maxX - b.minX; const h = b.maxY - b.minY;
      const rEl = document.createElementNS(svgNS,'rect');
      rEl.setAttribute('x', b.minX); rEl.setAttribute('y', b.minY); rEl.setAttribute('width', w); rEl.setAttribute('height', h);
      rEl.setAttribute('class','room selected'); overlay.appendChild(rEl);
    }
    svgElem.appendChild(overlay);

    function onMove(e){
      if (!_dragState) return;
      const cur = svgPointFromEvent(e);
      const dx = cur.x - _dragState.start.x;
      const dy = cur.y - _dragState.start.y;
      overlay.setAttribute('transform', `translate(${dx},${dy})`);
    }
    function onUp(e){
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      if (!_dragState) return;
      const cur = svgPointFromEvent(e);
      const dx = cur.x - _dragState.start.x;
      const dy = cur.y - _dragState.start.y;
      // apply final positions to room data — snap to grid based on configured cellSize
      const grid = (typeof layoutSettings !== 'undefined' && layoutSettings.cellSize) ? layoutSettings.cellSize : 120;
      for (const id of _dragState.ids){
        const rr = area.rooms.find(x=>String(x.id)===String(id)); if (!rr) continue;
        const init = _dragState.initial.get(String(id)); if (!init) continue;
        const nx = init.x + dx; const ny = init.y + dy;
        rr.x = Math.round(nx / grid) * grid;
        rr.y = Math.round(ny / grid) * grid;
      }
      _dragState = null;
      if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
      // preserve current viewBox (pan/zoom) across re-render
      try{ const curVB = svgElem.getAttribute && svgElem.getAttribute('viewBox'); if (curVB && !preservedViewBox) preservedViewBox = curVB; }catch(e){}
      // persist moved positions for this area
      try{ savePositions(area); }catch(e){}
      // final render
      try{ renderArea(area); }catch(e){ console.warn('render after drag failed', e); }
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  // marquee selection (shift+drag on background)
  let marqueeRect = null; let marqueeStart = null;
  // (background click-to-clear handled by pan-with-threshold logic below)
  function startMarquee(startPt){
    // clear existing selection on the current floor only when beginning a marquee drag
    try{
      const toRemove = [];
      for (const s of selectedRooms){
        const rr = area.rooms.find(x=>String(x.id)===String(s));
        if (!rr) continue;
        if ((rr.z||0) === currentLayer) toRemove.push(s);
      }
      toRemove.forEach(s=>selectedRooms.delete(s));
      const all = svg.querySelectorAll('rect[data-room-id]'); all.forEach(el=>{
        const rid = String(el.dataset.roomId);
        const rr = area.rooms.find(x=>String(x.id)===rid);
        if (!rr) return;
        if ((rr.z||0) === currentLayer) el.classList.remove('selected');
      });
    }catch(e){}
    marqueeStart = startPt;
    marqueeRect = document.createElementNS(svgNS,'rect');
    marqueeRect.setAttribute('x', marqueeStart.x);
    marqueeRect.setAttribute('y', marqueeStart.y);
    marqueeRect.setAttribute('width', 0);
    marqueeRect.setAttribute('height', 0);
    marqueeRect.setAttribute('class','marquee');
    marqueeRect.setAttribute('fill','rgba(59,130,246,0.12)');
    marqueeRect.setAttribute('stroke','rgba(59,130,246,0.8)');
    svg.appendChild(marqueeRect);
    function onMove(e){
      const p = svgPointFromEvent(e);
      const x = Math.min(p.x, marqueeStart.x); const y = Math.min(p.y, marqueeStart.y);
      const w = Math.abs(p.x - marqueeStart.x); const h = Math.abs(p.y - marqueeStart.y);
      marqueeRect.setAttribute('x', x); marqueeRect.setAttribute('y', y); marqueeRect.setAttribute('width', w); marqueeRect.setAttribute('height', h);
    }
    function onUp(e){
      window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp);
      const p = svgPointFromEvent(e);
      const x1 = Math.min(p.x, marqueeStart.x); const y1 = Math.min(p.y, marqueeStart.y);
      const x2 = Math.max(p.x, marqueeStart.x); const y2 = Math.max(p.y, marqueeStart.y);
      // compute boxes and select rooms intersecting
      const boxes = ensurePositions(area.rooms);
      for (const {r,box} of boxes){
        if (box.maxX < x1 || box.minX > x2 || box.maxY < y1 || box.minY > y2) continue;
        // only select rooms on the current floor
        if ((r.z || 0) !== currentLayer) continue;
        selectedRooms.add(String(r.id));
      }
      if (marqueeRect && marqueeRect.parentNode) marqueeRect.parentNode.removeChild(marqueeRect);
      marqueeRect = null; marqueeStart = null;
      try{ renderArea(area); }catch(e){ console.warn('render after marquee failed', e); }
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  // Always (re)attach a marquee mousedown handler that calls the
  // current `startMarquee` closure. We store the handler on the SVG so
  // we can remove it before replacing to avoid stale closures that
  // reference a previous `area` value.
  try{
    if (svg._marqueeMousedown) svg.removeEventListener('mousedown', svg._marqueeMousedown);
  }catch(e){}
  svg._marqueeMousedown = function(ev){
    if (ev.button!==0) return;
    if (!ev.shiftKey) return; // only marquee with shift
    ev.preventDefault(); ev.stopPropagation();
    // start marquee at the mouse point (works whether target is svg or a room)
    startMarquee(svgPointFromEvent(ev));
  };
  svg.addEventListener('mousedown', svg._marqueeMousedown);

  // debug overlay: draw from->to arrows for small nudges
  if (showDebugOverlay){
    const dbgGroup = document.createElementNS(svgNS,'g');
    dbgGroup.setAttribute('class','debug-overlay');
    (area.rooms||[]).forEach(r=>{
      const dbg = r._debug;
      if (!dbg) return;
      if ((r.z||0) !== currentLayer) return;
      const from = dbg.from;
      const to = dbg.to;
      const path = document.createElementNS(svgNS,'path');
      path.setAttribute('d', `M ${from.x} ${from.y} L ${to.x} ${to.y}`);
      path.setAttribute('stroke','#f59e0b');
      path.setAttribute('stroke-width','2');
      path.setAttribute('fill','none');
      path.setAttribute('stroke-dasharray','6 3');
      path.setAttribute('marker-end','url(#arrow_debug)');
      dbgGroup.appendChild(path);
      const c1 = document.createElementNS(svgNS,'circle');
      c1.setAttribute('cx', from.x);
      c1.setAttribute('cy', from.y);
      c1.setAttribute('r', 4);
      c1.setAttribute('fill', '#f59e0b');
      c1.setAttribute('opacity', '0.95');
      dbgGroup.appendChild(c1);
      const c2 = document.createElementNS(svgNS,'circle');
      c2.setAttribute('cx', to.x);
      c2.setAttribute('cy', to.y);
      c2.setAttribute('r', 4);
      c2.setAttribute('fill', '#60a5fa');
      c2.setAttribute('opacity', '0.95');
      dbgGroup.appendChild(c2);
    });
    svg.appendChild(dbgGroup);
  }
  if (isNewSvg) container.appendChild(svg);
  // Install a requestAnimationFrame-backed scheduler for viewBox writes
  // so rapid pan/zoom events are batched to one DOM update per frame.
  if (!svg._vbScheduler){
    svg._vbPending = null;
    svg._vbRaf = null;
    svg.scheduleSetViewBox = function(vb){
      svg._vbPending = vb;
      if (!svg._vbRaf){
        svg._vbRaf = requestAnimationFrame(function(){
          if (!svg._vbPending){ svg._vbRaf = null; return; }
          try{ svg.setAttribute('viewBox', `${svg._vbPending.x} ${svg._vbPending.y} ${svg._vbPending.w} ${svg._vbPending.h}`); }catch(e){}
          svg._vbPending = null;
          svg._vbRaf = null;
        });
      }
    };
    svg._vbScheduler = true;
  }
  // enable pan & zoom on the svg
  // Also allow left-drag on the background to pan (click+drag on empty space)
  (function enableBgPan(){
    function getVB(){ const vb = svg.getAttribute('viewBox') || '0 0 100 100'; const [x,y,w,h] = vb.split(/\s+/).map(Number); return {x,y,w,h}; }
    function setVB(vb){ if (svg.scheduleSetViewBox) svg.scheduleSetViewBox(vb); else svg.setAttribute('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`); }
    function clientToSvgPoint(evt){ const pt = svg.createSVGPoint(); pt.x = evt.clientX; pt.y = evt.clientY; const ctm = svg.getScreenCTM(); if (!ctm) return {x:pt.x,y:pt.y}; return pt.matrixTransform(ctm.inverse()); }
    // We'll delay starting the actual pan until movement exceeds a small threshold
    function onBgMouseDown(e){
      if (e.button !== 0) return;
      if (e.shiftKey || e.ctrlKey || e.metaKey) return; // don't conflict with marquee or ctrl-pan
      // ignore interactions on elements
      try{
        const tgt = e.target;
        if (tgt.closest && (tgt.closest('[data-room-id]') || tgt.closest('.caret-shape') || tgt.closest('.room-label') || tgt.closest('.exit-line') || tgt.closest('polygon') || tgt.closest('path') || tgt.closest('text') || tgt.closest('circle'))) return;
      }catch(err){ }
      e.preventDefault(); e.stopPropagation();
      const vbStart = getVB();
      // capture client start and pixel->svg scale once to avoid per-move layout reads
      const startClient = { x: e.clientX, y: e.clientY };
      let moved = false; let started = false;
      const rect = svg.getBoundingClientRect();
      const pxToSvgX = vbStart.w / (rect.width || 1);
      const pxToSvgY = vbStart.h / (rect.height || 1);
      function onMoveWindow(ev){
        const dxPx = ev.clientX - startClient.x; const dyPx = ev.clientY - startClient.y;
        if (!moved && Math.hypot(dxPx,dyPx) > 6) moved = true;
        if (!moved) return;
        // start panning once threshold passed
        if (!started){ started = true; svg.classList.add('grabbing'); }
        const dx = dxPx * pxToSvgX; const dy = dyPx * pxToSvgY;
        setVB({ x: vbStart.x - dx, y: vbStart.y - dy, w: vbStart.w, h: vbStart.h });
      }
      function onUpWindow(ev){
        window.removeEventListener('mousemove', onMoveWindow);
        window.removeEventListener('mouseup', onUpWindow);
        if (!moved){
          // treat as click: clear selection
          selectedRooms.clear();
          try{ const all = svg.querySelectorAll('rect[data-room-id]'); all.forEach(el=>el.classList.remove('selected')); }catch(e){}
          try{ updateRoomInfoPanel(); }catch(e){}
          try{ clearSelectionVisuals(); }catch(e){}
          try{ updateConnectorSelectionVisuals(svg); }catch(e){}
        } else {
          if (started) svg.classList.remove('grabbing');
        }
      }
      window.addEventListener('mousemove', onMoveWindow);
      window.addEventListener('mouseup', onUpWindow);
    }
    // If Pointer events are supported we use the pointer-based handler below;
    // only add the mouse-based handler on older browsers to avoid duplicate handlers.
    if (typeof window.PointerEvent === 'undefined') {
      svg.addEventListener('mousedown', onBgMouseDown);
    }
  })();
  // Robust pointer-based background pan (fallback) — attach once per svg
  if (!svg._bgPointerPanAttached){
    svg._bgPointerPanAttached = true;
    svg.addEventListener('pointerdown', function onPointerDown(ev){
      if (ev.button !== 0) return;
      if (ev.shiftKey || ev.ctrlKey || ev.metaKey) return;
      // ignore if pointer is over interactive elements (including .no-pan)
      try{ if (ev.target.closest && (ev.target.closest('[data-room-id]') || ev.target.closest('.caret-shape') || ev.target.closest('.room-label') || ev.target.closest('.exit-line') || ev.target.closest('polygon') || ev.target.closest('path') || ev.target.closest('text') || ev.target.closest('circle') || ev.target.closest('.no-pan'))) return; }catch(e){}
      ev.preventDefault(); ev.stopPropagation();
      // pointer-capture based pan to avoid duplicated mouse/pointer handlers
      try{ svg.setPointerCapture(ev.pointerId); }catch(e){}
      const toSvgPoint = (clientX, clientY) => { const pt = svg.createSVGPoint(); pt.x = clientX; pt.y = clientY; const ctm = svg.getScreenCTM(); return ctm ? pt.matrixTransform(ctm.inverse()) : {x:pt.x,y:pt.y}; };
      const startClient = { x: ev.clientX, y: ev.clientY };
      const vbStart = (function(){ const vb = svg.getAttribute('viewBox')||'0 0 100 100'; const [x,y,w,h] = vb.split(/\s+/).map(Number); return {x,y,w,h}; })();
      const rect = svg.getBoundingClientRect();
      const pxToSvgX = vbStart.w / (rect.width || 1);
      const pxToSvgY = vbStart.h / (rect.height || 1);
      let moved = false; let started = false;
      function onPointerMove(ev2){ if (ev2.pointerId !== ev.pointerId) return; const dxPx = ev2.clientX - startClient.x; const dyPx = ev2.clientY - startClient.y; if (!moved && Math.hypot(dxPx,dyPx) > 6) moved = true; if (!moved) return; if (!started){ started = true; svg.classList.add('grabbing'); } const dx = dxPx * pxToSvgX; const dy = dyPx * pxToSvgY; if (svg.scheduleSetViewBox) svg.scheduleSetViewBox({ x: vbStart.x - dx, y: vbStart.y - dy, w: vbStart.w, h: vbStart.h }); else svg.setAttribute('viewBox', `${vbStart.x - dx} ${vbStart.y - dy} ${vbStart.w} ${vbStart.h}`); }
      function onPointerUp(ev2){ if (ev2.pointerId !== ev.pointerId) return; try{ svg.releasePointerCapture(ev.pointerId); }catch(e){}; svg.removeEventListener('pointermove', onPointerMove); svg.removeEventListener('pointerup', onPointerUp); if (!moved){ selectedRooms.clear(); try{ const all = svg.querySelectorAll('rect[data-room-id]'); all.forEach(el=>el.classList.remove('selected')); }catch(e){} try{ updateRoomInfoPanel(); }catch(e){} try{ clearSelectionVisuals(); }catch(e){} try{ updateConnectorSelectionVisuals(svg); }catch(e){} } else { if (started) svg.classList.remove('grabbing'); } }
      svg.addEventListener('pointermove', onPointerMove);
      svg.addEventListener('pointerup', onPointerUp);
      svg.classList.add('grabbing');
    }, {capture:true});
  }
  // update sidebar room info after rendering
  try{ updateRoomInfoPanel(); }catch(e){}

  // ensure connector visuals reflect any current selection without a full re-render
  try{ updateConnectorSelectionVisuals(svg); }catch(e){}

  // Attach pan/zoom handlers only when creating a new SVG. Reusing the SVG
  // preserves listeners and avoids accumulating handlers.
  if (isNewSvg){
    activeSvgCleanup = attachPanZoom(svg);
  }
}

// Remove visual artifacts related to selection without re-rendering entire SVG.
function clearSelectionVisuals(){
  try{
    const container = document.getElementById('mapContainer');
    const svg = container && container.querySelector && container.querySelector('svg');
    if (!svg) return;
    // remove connected classes from connectors and rooms
    try{
      const lines = svg.querySelectorAll('.exit-line.connected');
      lines.forEach(l=>l.classList.remove('connected'));
    }catch(e){}
    try{ const rects = svg.querySelectorAll('rect[data-room-id].connected'); rects.forEach(r=>r.classList.remove('connected')); }catch(e){}
  }catch(e){ console.warn('clearSelectionVisuals failed', e); }
}

// Toggle connected class on connector paths based on `selectedRooms` set
function updateConnectorSelectionVisuals(svg){
  if (!svg) return;
  try{
    const paths = svg.querySelectorAll('path.exit-line');
    paths.forEach(p=>{
      const from = p.getAttribute('data-from');
      const to = p.getAttribute('data-to');
      if ((from && selectedRooms.has(String(from))) || (to && selectedRooms.has(String(to)))){
        p.classList.add('connected');
        p.setAttribute('marker-end','url(#arrow_connected)');
      } else {
        p.classList.remove('connected');
        p.setAttribute('marker-end','url(#arrow)');
      }
    });
  }catch(e){ console.warn('updateConnectorSelectionVisuals failed', e); }
}

function attachPanZoom(svg){
  if (!svg) return;
  svg.classList.add('svg-pan');
  // parse viewBox
  function getVB(){
    const vb = svg.getAttribute('viewBox') || '0 0 100 100';
    const [x,y,w,h] = vb.split(/\s+/).map(Number);
    return {x,y,w,h};
  }
  function setVB(vb){ if (svg.scheduleSetViewBox) svg.scheduleSetViewBox(vb); else svg.setAttribute('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`); }

  const initVB = getVB();
  const minW = initVB.w * 0.02;
  const maxW = initVB.w * 50;

  let isPanning = false;
  let panStart = null;
  let panStartVB = null;

  function clientToSvgPoint(evt){
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX; pt.y = evt.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return {x:pt.x,y:pt.y};
    return pt.matrixTransform(ctm.inverse());
  }

  const onWheel = (e)=>{
    e.preventDefault();
    const vb = getVB();
    const factor = e.deltaY > 0 ? 1.12 : 0.88; // >1 zoom out, <1 zoom in
    let newW = vb.w * factor;
    let newH = vb.h * factor;
    if (newW < minW) { newW = minW; newH = vb.h * (minW / vb.w); }
    if (newW > maxW) { newW = maxW; newH = vb.h * (maxW / vb.w); }
    const p = clientToSvgPoint(e);
    const nx = p.x - (p.x - vb.x) * (newW / vb.w);
    const ny = p.y - (p.y - vb.y) * (newH / vb.h);
    setVB({x: nx, y: ny, w: newW, h: newH});
  };
  svg.addEventListener('wheel', onWheel, {passive:false});

  const onMouseDown = (e)=>{
    // middle button (1) or ctrl+left start panning
    if (e.button === 1 || (e.button === 0 && e.ctrlKey)){
      isPanning = true;
      svg.classList.add('grabbing');
      panStart = clientToSvgPoint(e);
      panStartVB = getVB();
      e.preventDefault();
    }
  };
  svg.addEventListener('mousedown', onMouseDown);

  const onMouseMove = (e)=>{
    if (!isPanning) return;
    const p = clientToSvgPoint(e);
    const dx = p.x - panStart.x;
    const dy = p.y - panStart.y;
    setVB({x: panStartVB.x - dx, y: panStartVB.y - dy, w: panStartVB.w, h: panStartVB.h});
  };
  window.addEventListener('mousemove', onMouseMove);

  const onMouseUp = (e)=>{
    if (!isPanning) return;
    isPanning = false;
    svg.classList.remove('grabbing');
  };
  window.addEventListener('mouseup', onMouseUp);

  const onMouseLeave = ()=>{ if (isPanning) { isPanning = false; svg.classList.remove('grabbing'); } };
  svg.addEventListener('mouseleave', onMouseLeave);

  return ()=>{
    svg.removeEventListener('wheel', onWheel, {passive:false});
    svg.removeEventListener('mousedown', onMouseDown);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    svg.removeEventListener('mouseleave', onMouseLeave);
  };
}

function showRoomDetails(room){
  try{
    console.log('showRoomDetails', room && room.id);
    let modal = document.getElementById('roomModal');
  if (!modal){
    modal = document.createElement('div');
    modal.id = 'roomModal';
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" aria-label="Close">×</button>
        <h3 id="modalTitle"></h3>
        <div id="modalBody" class="modal-body"></div>
      </div>`;
    document.body.appendChild(modal);
    // close handlers
    modal.addEventListener('click', (e)=>{
      if (e.target === modal) modal.classList.add('hidden');
    });
    modal.querySelector('.modal-close').addEventListener('click', ()=> modal.classList.add('hidden'));
    document.addEventListener('keydown', (e)=>{ if (e.key==='Escape') modal.classList.add('hidden'); });
  }
  // populate
  const title = modal.querySelector('#modalTitle');
  const body = modal.querySelector('#modalBody');
  title.textContent = room.name ?? (`Room ${room.id}`);
  const rows = [];
  rows.push(`<p><strong>id:</strong> ${room.id}</p>`);
  if (room.vnum !== undefined) rows.push(`<p><strong>vnum:</strong> ${room.vnum}</p>`);
  if (room.area) rows.push(`<p><strong>area:</strong> ${room.area}</p>`);
  if (room.exits && Object.keys(room.exits).length){
    const exitLines = Object.entries(room.exits).map(([dir,ex])=>{
      const v = ex && (ex.vnum ?? ex) ? (ex.vnum ?? ex) : '0';
      const door = ex && typeof ex === 'object' ? ` door:${ex.door?'yes':'no'} closed:${ex.closed?'yes':'no'} locked:${ex.locked?'yes':'no'}` : '';
      return `<li><strong>${dir}</strong>: ${v}${door}</li>`;
    }).join('');
    rows.push(`<p><strong>exits:</strong></p><ul>${exitLines}</ul>`);
  }
  body.innerHTML = rows.join('');
    modal.classList.remove('hidden');
  }catch(e){
    console.error('showRoomDetails error', e);
    alert('Failed to show room details — see console for error.');
  }
}

function populateAreaList(areas){
  const list = document.getElementById('areaList');
  const select = document.getElementById('areaSelect');
  const countEl = document.getElementById('areaCount');
  if (list) list.innerHTML = '';
  if (select) select.innerHTML = '';
  if (countEl) countEl.textContent = `Areas (${areas.length})`;
  // keep a reference for dropdown-driven selection (when #areaList may be absent)
  availableAreas = areas;
  areas.forEach((area,idx)=>{
    const li = document.createElement('li');
    const roomCount = (area.rooms && Array.isArray(area.rooms)) ? area.rooms.length : 0;
    const displayName = area.name || area.id || `Area ${idx+1}`;
    li.textContent = displayName;
    li.title = `${displayName} (${roomCount} rooms)`;
    // area selection now uses the dropdown (`#areaSelect`) only to avoid
    // accidental area switches from stray clicks while dragging.
    // Keep list items non-interactive (visual only).
    if (list) list.appendChild(li);
    if (select){
      const opt = document.createElement('option'); opt.value = String(idx);
      opt.textContent = `${displayName} (${roomCount})`;
      select.appendChild(opt);
    }
    // do not auto-select inside the loop; we'll choose a default after building the list
  });
  // Default: try to select area named 'glyndane' (case-insensitive). Fallback to index 0.
  try{
    let defaultIndex = 0;
    const want = 'glyndane';
    const found = areas.findIndex(a => String(a.id).toLowerCase() === want || String(a.name).toLowerCase() === want);
    if (found >= 0) defaultIndex = found;
    if (select) select.value = String(defaultIndex);
    selectAreaIndex(defaultIndex);
  }catch(e){ if (select) { select.value = '0'; selectAreaIndex(0); } }
  // wire select change to trigger corresponding li click
  if (select){
    select.addEventListener('change', (e)=>{
      const idx = Number(e.target.value);
      selectAreaIndex(idx);
    });
  }
  // if there are areas, ensure first is visible/selected
  if (list && areas.length>0){
    const first = list.querySelector('li');
    if (first) first.scrollIntoView({block:'nearest'});
  } else if (!areas.length){
    document.getElementById('mapContainer').textContent = 'No areas found in file.';
  }
  /* populate debug log removed */
}

// Select an area by its index from the last-populated areas list
function selectAreaIndex(idx, roomToSelect){
  const list = document.getElementById('areaList');
  const select = document.getElementById('areaSelect');
  const area = (availableAreas && availableAreas.length>idx) ? availableAreas[idx] : null;
  if (!area) return;
  /* select debug log removed */
  // update list active class if present
  if (list){
    const items = list.querySelectorAll('li');
    items.forEach(n=>n.classList.remove('active'));
    if (items[idx]) items[idx].classList.add('active');
  }
  // update title and area state
  document.getElementById('areaTitle').textContent = area.name || area.id || '';
  currentAreaObj = area;
  currentAreaObj = area;
  // Load any saved positions first so min/max z reflect persisted layout
  try{ loadSavedPositions(currentAreaObj); }catch(e){}
  const minZ = currentAreaObj.minZ ?? 0;
  const maxZ = currentAreaObj.maxZ ?? 0;
  let desired = 0;
  if (desired < minZ) desired = minZ;
  if (desired > maxZ) desired = maxZ;
  // if a target room is provided, prefer its z-layer and select it
  if (roomToSelect !== undefined && roomToSelect !== null){
    const targetRoom = (currentAreaObj.rooms||[]).find(r=> String(r.id)===String(roomToSelect) || String(r.vnum)===String(roomToSelect));
    if (targetRoom){ currentLayer = targetRoom.z ?? desired; selectedRooms.clear(); selectedRooms.add(String(targetRoom.id)); }
    else currentLayer = desired;
  } else {
    currentLayer = desired;
  }
  updateLayerDisplay();
  try{ if (typeof MapColorsJS !== 'undefined' && MapColorsJS && typeof MapColorsJS.applyColors === 'function'){ MapColorsJS.applyColors(currentAreaObj); } }catch(e){}
  // compute a fitting viewBox and preserve it so renderArea will apply it once
  try{ preservedViewBox = Utils.computeFitViewBox(currentAreaObj); }catch(e){ preservedViewBox = null; }
  try{ if (select) select.value = String(idx); }catch(e){}
  renderArea(area);
}

// Update the left sidebar room info panel based on current selection
function updateRoomInfoPanel(){
  const panel = document.getElementById('roomInfo');
  if (!panel) return;
  panel.innerHTML = '';
  if (!currentAreaObj) { panel.textContent = 'No area selected.'; return; }
  if (!selectedRooms || selectedRooms.size===0){ panel.textContent = 'No room selected.'; return; }
  const sid = Array.from(selectedRooms)[0];
  const room = (currentAreaObj.rooms||[]).find(r=>String(r.id) === String(sid) || String(r.vnum) === String(sid));
  if (!room){ panel.textContent = `Selected room ${sid} not found in current area.`; return; }
  const title = document.createElement('h3'); title.textContent = room.name ?? (`Room ${room.id}`); panel.appendChild(title);
  const info = document.createElement('div');
  info.innerHTML = `<p><strong>id:</strong> ${room.id}</p>` + (room.vnum!==undefined?`<p><strong>vnum:</strong> ${room.vnum}</p>`:'') + (room.area?`<p><strong>area:</strong> ${room.area}</p>`:'');
  panel.appendChild(info);
  // exits list with names
  const exits = room.exits || {};
  const exKeys = Object.keys(exits || {});
  if (exKeys.length){
    const exTitle = document.createElement('p'); exTitle.innerHTML = '<strong>exits:</strong>'; panel.appendChild(exTitle);
    const ul = document.createElement('ul');
    // build quick lookup by id/vnum
    const idMap = new Map(); for (const r of currentAreaObj.rooms || []){ idMap.set(String(r.id), r); if (r.vnum!==undefined) idMap.set(String(r.vnum), r); }
    for (const dir of exKeys){
      const ex = exits[dir];
      const tid = ex && (ex.vnum ?? ex) ? (ex.vnum ?? ex) : null;
      const li = document.createElement('li');
      if (tid){
        const target = idMap.get(String(tid));
        if (target){
          const a = document.createElement('a'); a.href = '#'; a.textContent = `${String(tid)} — ${target.name || target.id}`; a.style.marginLeft = '8px';
          a.addEventListener('click',(ev)=>{ ev.preventDefault(); ev.stopPropagation(); selectedRooms.clear(); selectedRooms.add(String(target.id)); renderArea(currentAreaObj); try{ updateRoomInfoPanel(); }catch(e){} });
          li.innerHTML = `<strong>${dir}</strong>:`; li.appendChild(a);
        } else {
          li.innerHTML = `<strong>${dir}</strong>: ${String(tid)}`;
        }
      } else {
        li.innerHTML = `<strong>${dir}</strong>: (unknown)`;
      }
      ul.appendChild(li);
    }
    panel.appendChild(ul);
  } else {
    const p = document.createElement('p'); p.textContent = 'No exits.'; panel.appendChild(p);
  }
}

// Keyboard traversal: n/e/s/w/u/d and arrow keys to move selection along exits
function findExitTarget(room, dirKey){
  if (!room || !room.exits) return null;
  const exits = room.exits || {};
  const lookup = (k) => { if (exits[k] !== undefined) return exits[k]; return undefined; };
  const aliases = {
    'n': ['north','n'],
    's': ['south','s'],
    'e': ['east','e'],
    'w': ['west','w'],
    'u': ['up','u'],
    'd': ['down','d']
  };
  const keys = (aliases[dirKey] || [dirKey]);
  for (const k of keys){
    const ex = lookup(k) || lookup(k.toLowerCase());
    if (ex !== undefined && ex !== null) return { tid: (ex.vnum ?? ex), dir: k };
  }
  // fallback: try any exit whose name starts with the key (e.g. 'northwest' for 'n')
  for (const [k,v] of Object.entries(exits)){
    if (!k) continue;
    if (k.toLowerCase().startsWith(dirKey)) return { tid: (v && (v.vnum ?? v)), dir: k };
  }
  return null;
}

function traverseSelectionByDir(dirKey){
  try{
    if (!currentAreaObj) return;
    if (!selectedRooms || selectedRooms.size === 0) return;
    const sid = Array.from(selectedRooms)[0];
    const room = (currentAreaObj.rooms||[]).find(r=>String(r.id)===String(sid) || String(r.vnum)===String(sid));
    if (!room) return;
    const ex = findExitTarget(room, dirKey);
    if (!ex || !ex.tid) {
      // If no explicit exit but user pressed up/down, try to change layer instead
      if (dirKey === 'u' || dirKey === 'up') { if (typeof changeLayer === 'function') changeLayer(1); else { currentLayer = Math.min(currentAreaObj.maxZ||currentLayer, currentLayer+1); renderArea(currentAreaObj); } }
      if (dirKey === 'd' || dirKey === 'down') { if (typeof changeLayer === 'function') changeLayer(-1); else { currentLayer = Math.max(currentAreaObj.minZ||currentLayer, currentLayer-1); renderArea(currentAreaObj); } }
      return;
    }
    const targetTid = ex.tid;
    if (!targetTid) return;
    const found = findAreaIndexAndRoomForTarget(targetTid);
    const currentAreaIndex = availableAreas.findIndex(a=> (a && (a.id || a.name)) ? (a.id === currentAreaObj.id || a.name === currentAreaObj.name) : false);
    if (found && found.idx !== -1 && found.idx !== currentAreaIndex){
      // jump to external area/room
      selectAreaIndex(found.idx, found.roomId);
      return;
    }
    // same-area target: select it and switch layer if needed
    const targetRoom = (currentAreaObj.rooms||[]).find(r=> String(r.id)===String(targetTid) || String(r.vnum)===String(targetTid));
    if (targetRoom){
      selectedRooms.clear(); selectedRooms.add(String(targetRoom.id));
      if (typeof targetRoom.z === 'number') currentLayer = targetRoom.z;
      renderArea(currentAreaObj);
      try{ updateRoomInfoPanel(); }catch(e){}
    }
  }catch(e){ console.warn('traverseSelectionByDir failed', e); }
}

// Global key handler for navigation
document.addEventListener('keydown', function(ev){
  try{
    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) return;
    const raw = String(ev.key || '').toLowerCase();
    const arrowMap = { 'arrowup':'n', 'arrowdown':'s', 'arrowleft':'w', 'arrowright':'e' };
    const k = arrowMap[raw] || raw;
    if (!['n','e','s','w','u','d','up','down'].includes(k)) return;
    // prevent page scrolling on arrow navigation
    if (raw.startsWith('arrow') || ['n','e','s','w','u','d'].includes(k)) ev.preventDefault();
    traverseSelectionByDir(k);
  }catch(e){ }
});

function init(){
  const container = document.getElementById('mapContainer');
  if (container) container.textContent = 'Loading areas from areas.js (edit areas.js and reload to change).';
}

// single DOMContentLoaded handler to initialize UI wiring
document.addEventListener('DOMContentLoaded', ()=>{
  init();
  // Auto-load areas from an included JS file if present (areas.js should set `window.areas` or `window.mapAreas`).
  try{
    if (window.areas){ processData(window.areas); document.getElementById('loadedFile') && (document.getElementById('loadedFile').textContent = 'areas.js'); }
    else if (window.mapAreas){ processData(window.mapAreas); document.getElementById('loadedFile') && (document.getElementById('loadedFile').textContent = 'areas.js'); }
  }catch(e){ console.warn('Auto-load areas failed', e); }
  const prev = document.getElementById('layerPrev');
  const next = document.getElementById('layerNext');
  if (prev) prev.addEventListener('click', ()=> changeLayer(-1));
  if (next) next.addEventListener('click', ()=> changeLayer(1));
  // wire save/export buttons
  const saveBtn = document.getElementById('savePositions');
  const exportBtn = document.getElementById('exportArea');
  if (saveBtn) saveBtn.addEventListener('click', ()=>{ if (currentAreaObj) { try{ savePositions(currentAreaObj); alert('Positions saved locally.'); }catch(e){ alert('Save failed: '+(e&&e.message?e.message:String(e))); } } else alert('No area selected'); });
  if (exportBtn) exportBtn.addEventListener('click', ()=>{ if (currentAreaObj) { try{ exportArea(currentAreaObj); }catch(e){ alert('Export failed: '+(e&&e.message?e.message:String(e))); } } else alert('No area selected'); });
  const redrawBtn = document.getElementById('redrawFromSelected'); if (redrawBtn) redrawBtn.addEventListener('click', ()=>{ redrawFromSelectedRoom(); });
  const redrawLayerBtn = document.getElementById('redrawFromSelectedLayer'); if (redrawLayerBtn) redrawLayerBtn.addEventListener('click', ()=>{
    const r = prompt('Enter radius in hops (leave blank for full floor):');
    if (r === null) return;
    const val = (r.trim()==='') ? null : Number(r);
    redrawFromSelectedLayer(val);
  });
  const clearBtn = document.getElementById('clearSavedPositions'); if (clearBtn) clearBtn.addEventListener('click', ()=>{ if (currentAreaObj) { try{ clearSavedPositions(currentAreaObj); }catch(e){ alert('Clear failed: '+(e&&e.message?e.message:String(e))); } } else alert('No area selected'); });
  // debug overlay toggle
  const dbgDiv = document.createElement('div');
  dbgDiv.style.cssText = 'position:fixed;bottom:10px;right:10px;background:rgba(255,255,255,0.95);padding:6px;border:1px solid #ddd;border-radius:6px;z-index:9999;font-size:12px;';
  dbgDiv.innerHTML = '<label style="cursor:pointer"><input id="debugToggle" type="checkbox" style="margin-right:6px">Debug overlay</label>';
  document.body.appendChild(dbgDiv);
  const dbgInput = document.getElementById('debugToggle');
  if (dbgInput) dbgInput.addEventListener('change', (e)=>{ showDebugOverlay = e.target.checked; if (currentAreaObj) renderArea(currentAreaObj); });

  // end DOMContentLoaded
});

function updateLayerDisplay(){
  const el = document.getElementById('layerDisplay');
  if (!el) return;
  el.textContent = `Floor ${currentLayer}`;
}

function changeLayer(delta){
  if (!currentAreaObj) return;
  const min = currentAreaObj.minZ ?? 0;
  const max = currentAreaObj.maxZ ?? 0;
  let next = currentLayer + delta;
  if (next < min) next = min;
  if (next > max) next = max;
  currentLayer = next;
  updateLayerDisplay();
  // preserve current viewBox (pan/zoom) when merely changing layers
    try{
    const container = document.getElementById('mapContainer');
    const svgElem = container && container.querySelector && container.querySelector('svg');
    const curVB = svgElem && svgElem.getAttribute && svgElem.getAttribute('viewBox');
    if (curVB && !preservedViewBox) preservedViewBox = curVB;
  }catch(e){}
  // re-apply coloring (so the newly visible floor will have colors)
  try{ if (typeof MapColorsJS !== 'undefined' && MapColorsJS && typeof MapColorsJS.applyColors === 'function'){ MapColorsJS.applyColors(currentAreaObj); } }catch(e){}
  renderArea(currentAreaObj);
}

// Persistence helpers: save/load per-area room positions to localStorage
function getPositionsKey(area){
  const id = (area && (area.id || area.name)) ? (area.id || area.name) : 'area';
  return `dmaps_positions_${String(id)}`;
}

function loadSavedPositions(area){
  if (!area) return;
  try{
    const key = getPositionsKey(area);
    const raw = localStorage.getItem(key);
    if (!raw) return;
    const map = JSON.parse(raw);
    for (const r of area.rooms || []){
      const p = map[String(r.id)];
      if (p && typeof p.x === 'number' && typeof p.y === 'number'){
        r.x = p.x; r.y = p.y; if (p.z !== undefined) r.z = p.z;
      }
    }
    // Normalize loaded z-levels so bottom layer is 0
    try{
      const zs = (area.rooms||[]).map(r=>r.z||0);
      if (zs.length){
        const minZ = Math.min(...zs);
        if (minZ !== 0){
          for (const r of area.rooms || []){ if (typeof r.z === 'number') r.z = r.z - minZ; }
        }
      }
    }catch(e){}
    // Update area's z-bounds to reflect loaded positions
    try{
      const zs2 = (area.rooms||[]).map(r=>r.z||0);
      area.minZ = zs2.length?Math.min(...zs2):0;
      area.maxZ = zs2.length?Math.max(...zs2):0;
    }catch(e){}
  }catch(e){ console.warn('loadSavedPositions failed', e); }
}

function savePositions(area){
  if (!area) return;
  try{
    const key = getPositionsKey(area);
    const map = {};
    for (const r of area.rooms || []){
      if (typeof r.x === 'number' && typeof r.y === 'number') map[String(r.id)] = { x: r.x, y: r.y, z: r.z };
    }
    localStorage.setItem(key, JSON.stringify(map));
  }catch(e){ console.warn('savePositions failed', e); }
}

function clearSavedPositions(area){
  if (!area) return;
  try{
    const key = getPositionsKey(area);
    localStorage.removeItem(key);
    // clear in-memory saved coordinates
    for (const r of area.rooms || []){ delete r.x; delete r.y; delete r.z; }
    // recompute layout and layer bounds
    area.rooms = layoutAreaRooms(area.rooms);
    const zs = (area.rooms||[]).map(r=>r.z||0);
    area.minZ = zs.length?Math.min(...zs):0;
    area.maxZ = zs.length?Math.max(...zs):0;
    try{ const container = document.getElementById('mapContainer'); const svgElem = container && container.querySelector && container.querySelector('svg'); const curVB = svgElem && svgElem.getAttribute && svgElem.getAttribute('viewBox'); if (curVB && !preservedViewBox) preservedViewBox = curVB; }catch(e){}
    renderArea(area);
    alert('Saved positions cleared for this area.');
  }catch(e){ console.warn('clearSavedPositions failed', e); alert('Clear failed: '+(e&&e.message?e.message:String(e))); }
}

function exportArea(area){
  if (!area) return;
  try{
    // create a deep copy to avoid mutating runtime objects
    const out = JSON.parse(JSON.stringify(area));
    const blob = new Blob([JSON.stringify(out, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const name = (out && (out.id || out.name)) ? (out.id || out.name) : 'area';
    a.download = `${name.replace(/[^a-z0-9_-]/gi,'_')}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 2000);
  }catch(e){ console.warn('exportArea failed', e); }
}
