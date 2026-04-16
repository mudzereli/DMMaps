/**
 * utils.js
 * Small collection of pure helper functions originally defined in `app.js`.
 * These helpers are intentionally minimal, documented, and attached to
 * `window.Utils` for backwards compatibility with the rest of the app.
 *
 * Keep functions small and side-effect free — prefer passing `area`/`rooms`
 * data in rather than reading globals. `computeFitViewBox` does read
 * `selectedRooms` if present to ensure selected rooms remain visible.
 */
(function(global){
  const Utils = {};

  /**
   * Compute an axis-aligned bounding box for a room definition.
   * Supports several room schemas: explicit x/y/width/height, left/top/right/bottom,
   * polygon `points`, or center-based (`cx`/`cy`) with `width`/`height`.
   *
   * @param {object} room Room object
   * @returns {{minX:number,minY:number,maxX:number,maxY:number}|null} Bounding box or null when unknown
   */
  Utils.roomBBox = function(room){
    if (!room) return null;
    if (room.x !== undefined && room.y !== undefined && room.width !== undefined && room.height !== undefined){
      return {minX: room.x, minY: room.y, maxX: room.x+room.width, maxY: room.y+room.height};
    }
    if (room.left!==undefined && room.top!==undefined && room.right!==undefined && room.bottom!==undefined){
      return {minX: room.left, minY: room.top, maxX: room.right, maxY: room.bottom};
    }
    if (room.points && Array.isArray(room.points) && room.points.length){
      const xs = room.points.map(p=>p.x ?? p[0]);
      const ys = room.points.map(p=>p.y ?? p[1]);
      return {minX: Math.min(...xs), minY: Math.min(...ys), maxX: Math.max(...xs), maxY: Math.max(...ys)};
    }
    if ((room.cx!==undefined || room.centerX!==undefined) && (room.cy!==undefined || room.centerY!==undefined)){
      const cx = room.cx ?? room.centerX;
      const cy = room.cy ?? room.centerY;
      const w = room.width ?? room.w ?? 20;
      const h = room.height ?? room.h ?? 20;
      return {minX: cx - w/2, minY: cy - h/2, maxX: cx + w/2, maxY: cy + h/2};
    }
    return null;
  };

  /**
   * Fit a short label into a square by estimating a font-size and truncating
   * the text to an approximate character limit.
   *
   * @param {string} text Label text
   * @param {number} side Pixel side length of the target square
   * @returns {{text:string,fontSize:number}}
   */
  Utils.fitLabel = function(text, side){
    const t = String(text ?? '');
    const fontSize = Math.max(8, Math.min(14, Math.round(side * 0.12)));
    const approxCharWidth = fontSize * 0.6;
    const maxChars = Math.max(1, Math.floor((side - 8) / approxCharWidth));
    if (t.length <= maxChars) return {text: t, fontSize};
    return {text: t.slice(0, Math.max(0, maxChars - 1)) + '…', fontSize};
  };

  /**
   * Ensure each room has a computed `box` (minX/minY/maxX/maxY).
   * Rooms without geometry are placed in a simple grid.
   *
   * @param {Array<object>} rooms Array of room objects
   * @returns {Array<{r:object,box:Object}>} Array of objects with `r` and `box`
   */
  Utils.ensurePositions = function(rooms){
    const withBox = rooms.map(r=>({r,box:Utils.roomBBox(r)}));
    const missing = withBox.filter(x=>!x.box);
    if (missing.length===0) return withBox;
    const cols = Math.ceil(Math.sqrt(rooms.length));
    const size = 80;
    for (let i=0;i<rooms.length;i++){
      if (!withBox[i].box){
        const col = i % cols;
        const row = Math.floor(i/cols);
        const minX = col * (size+20);
        const minY = row * (size+20);
        withBox[i].box = {minX, minY, maxX: minX+size, maxY: minY+size};
      }
    }
    return withBox;
  };

  /**
   * Compute a bounding rectangle that encloses an array of boxes.
   *
   * @param {Array<{minX:number,minY:number,maxX:number,maxY:number}>} boxes
   * @returns {{minX:number,minY:number,maxX:number,maxY:number}}
   */
  Utils.areaBounds = function(boxes){
    const xs = boxes.flatMap(b=>[b.minX,b.maxX]);
    const ys = boxes.flatMap(b=>[b.minY,b.maxY]);
    return {minX: Math.min(...xs), minY: Math.min(...ys), maxX: Math.max(...xs), maxY: Math.max(...ys)};
  };

  /**
   * Compute an SVG `viewBox` string that fits an `area` with a small margin.
   * This filters out rooms with no outgoing/incoming references so the view
   * focuses on connected geometry. If `selectedRooms` exists globally we
   * ensure selected rooms are always included.
   *
   * @param {object} area Area object containing `rooms` array
   * @returns {string|null} viewBox string or null when nothing to fit
   */
  Utils.computeFitViewBox = function(area){
    if (!area || !area.rooms || area.rooms.length===0) return null;
    const idSet = new Set((area.rooms||[]).map(r=>String(r.id)));
    const referenced = new Set();
    const hasOutgoing = new Map();
    for (const r of (area.rooms||[])){
      const exits = r.exits || {};
      let anyOut = false;
      for (const ex of Object.values(exits)){
        const tid = ex && (ex.vnum ?? ex);
        if (!tid) continue;
        const tstr = String(tid);
        if (idSet.has(tstr)){
          referenced.add(tstr);
          anyOut = true;
        }
      }
      hasOutgoing.set(String(r.id), anyOut);
    }
    const roomBoxesAll = Utils.ensurePositions(area.rooms);
    const roomBoxes = roomBoxesAll.filter(({r})=>{
      const id = String(r.id);
      if (typeof selectedRooms !== 'undefined' && selectedRooms && selectedRooms.has && selectedRooms.has(id)) return true;
      const out = hasOutgoing.get(id) || false;
      const inRef = referenced.has(id);
      return out || inRef;
    });
    const boxes = roomBoxes.map(x=>x.box).filter(Boolean);
    if (!boxes.length) return null;
    const b = Utils.areaBounds(boxes);
    const margin = Math.max((b.maxX - b.minX),(b.maxY - b.minY)) * 0.06 + 20;
    const viewMinX = b.minX - margin;
    const viewMinY = b.minY - margin;
    const viewW = (b.maxX - b.minX) + margin*2;
    const viewH = (b.maxY - b.minY) + margin*2;
    return `${viewMinX} ${viewMinY} ${viewW} ${viewH}`;
  };

  /**
   * Parse an area from raw JSON — normalizes id/name/rooms fields.
   * @param {object} a Raw area object
   * @returns {object} Normalized area
   */
  Utils.normalizeArea = function(a){
    return {
      id: a.id ?? a.name ?? a.areaId ?? Math.random().toString(36).slice(2,8),
      name: a.name ?? a.id ?? 'Area',
      rooms: (a.rooms||a.roomsList||[]).map(r=>r)
    };
  };

  /**
   * Build areas from a flat rooms object keyed by vnum.
   * Calls Utils.layoutAreaRooms to compute grid positions.
   * @param {object} roomsObj Map of vnum -> room
   * @returns {Array<object>} Array of areas
   */
  Utils.areasFromRoomsObject = function(roomsObj){
    const areas = {};
    for (const [k,v] of Object.entries(roomsObj)){
      const areaName = v.area ?? 'Default';
      if (!areas[areaName]) areas[areaName] = { id: areaName, name: areaName, rooms: [] };
      const room = { id: k, vnum: Number(k), name: v.name ?? k, exits: v.exits ?? {} };
      areas[areaName].rooms.push(room);
    }
    return Object.values(areas).map(a=>{
      const rooms = Utils.layoutAreaRooms(a.rooms);
      const zs = rooms.map(r=>r.z||0);
      const minZ = zs.length?Math.min(...zs):0;
      const maxZ = zs.length?Math.max(...zs):0;
      return {...a, rooms, minZ, maxZ};
    });
  };

  /**
   * Extract a normalized areas array from raw JSON in any supported schema.
   * @param {object|Array} data Parsed JSON
   * @returns {Array<object>} Array of areas
   */
  Utils.extractAreas = function(data){
    if (!data) return [];
    if (data.rooms && typeof data.rooms === 'object' && !Array.isArray(data.rooms)){
      return Utils.areasFromRoomsObject(data.rooms);
    }
    if (Array.isArray(data)) return data.map(a=>Utils.normalizeArea(a));
    if (data.areas) return data.areas.map(a=>Utils.normalizeArea(a));
    return Object.values(data).filter(v=>v && v.rooms).map(a=>Utils.normalizeArea(a));
  };

  /**
   * Apply position adjustments from an adjustments array onto areas in-place.
   * @param {Array<object>} areas Areas to modify
   * @param {Array<object>} adjustments Adjustments array (same schema as areas)
   */
  Utils.applyAreaAdjustments = function(areas, adjustments){
    if (!Array.isArray(adjustments) || adjustments.length===0) return;
    const byKey = new Map();
    for (const adj of adjustments){
      const key = String(adj.id || adj.name || '').toLowerCase();
      if (!key) continue;
      byKey.set(key, adj);
    }
    for (const a of areas){
      const key = String(a.id || a.name || '').toLowerCase();
      const adj = byKey.get(key);
      if (!adj || !Array.isArray(adj.rooms)) continue;
      const adjMap = new Map();
      for (const r of adj.rooms){ adjMap.set(String(r.id ?? r.vnum ?? ''), r); }
      for (const r of a.rooms){
        const found = adjMap.get(String(r.id)) || adjMap.get(String(r.vnum ?? ''));
        if (!found) continue;
        if (typeof found.x === 'number') r.x = found.x;
        if (typeof found.y === 'number') r.y = found.y;
        if (typeof found.z === 'number') r.z = found.z;
        if (typeof found.width === 'number') r.width = found.width;
        if (typeof found.height === 'number') r.height = found.height;
      }
    }
  };

  /**
   * Find the area index and room id for a target identifier (id or vnum).
   * Pure: takes `areas` explicitly rather than reading a global.
   * @param {Array<object>} areas Areas array to search
   * @param {string|number} target Room id or vnum to find
   * @returns {{idx:number,roomId}|null}
   */
  Utils.findAreaIndexAndRoom = function(areas, target){
    if (target === undefined || target === null) return null;
    const tstr = String(target);
    for (let i=0;i<areas.length;i++){
      const a = areas[i];
      for (const r of a.rooms || []){
        if (String(r.id) === tstr) return { idx: i, roomId: r.id };
        if (r.vnum !== undefined && String(r.vnum) === tstr) return { idx: i, roomId: r.id };
      }
    }
    return null;
  };

  /**
   * Place rooms onto a grid using BFS following exits.
   * Computes integer grid positions and a z-level (floor) for up/down exits,
   * then maps them to pixel coordinates.
   *
   * @param {Array<object>} rooms Array of room objects with `id` and `exits`
   * @param {number|string} [startId] Optional room id to use as BFS origin
   * @returns {Array<object>} Rooms enriched with x/y/width/height/z
   */
  Utils.layoutAreaRooms = function(rooms, startId){
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
  // debug map removed
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
      // debug move recording removed
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
    const old = pos[id]; if (old) occupied.delete(`${old.x},${old.y},${z}`);
    pos[id] = {x:newX,y:newY}; occupied.set(k, id);
    // debug move recording removed
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

  // Place any rooms that were never visited/positioned by the BFS onto
  // a neat grid on floor 0 outside the existing occupied area so they
  // don't all stack at the origin. This happens before mapping into
  // pixel coords so the subsequent viewBox calculation includes them.
  try{
    const allPlaced = new Set(Object.values(pos).map(p=>`${p.x},${p.y}`));
    const placedIds = new Set(Object.values(pos).map(p=>p && typeof p.id !== 'undefined' ? String(p.id) : null));
    // compute current grid bounds
    const xs = Object.values(pos).map(p=>p.x||0);
    const ys = Object.values(pos).map(p=>p.y||0);
    const maxX = xs.length?Math.max(...xs):0;
    const minY = ys.length?Math.min(...ys):0;
    // find rooms without positions
    const unplaced = rooms.filter(r=>{ return !Object.prototype.hasOwnProperty.call(pos, Number(r.id)); });
    if (unplaced.length){
      const cols = Math.max(1, Math.ceil(Math.sqrt(unplaced.length)));
      // start a few cells to the right of current max to keep them visually separated
      const startX = maxX + 3;
      const gap = 2; // grid gap in cell units
      for (let i=0;i<unplaced.length;i++){
        const r = unplaced[i];
        const col = i % cols;
        const row = Math.floor(i/cols);
        let tx = startX + col * gap;
        let ty = minY + row * gap;
        let key = `${tx},${ty},0`;
        let tries = 0;
        while(occupied.has(key) && tries < 200){
          // advance to next cell to avoid collisions
          tx += 1; ty += (tries % 2 === 0 ? 0 : 1);
          key = `${tx},${ty},0`;
          tries++;
        }
        pos[Number(r.id)] = { x: tx, y: ty };
        level[Number(r.id)] = 0;
        occupied.set(key, Number(r.id));
      }
    }
  }catch(e){ /* non-fatal */ }

  // map positions into room objects with pixel coords and sizes
  const outRooms = rooms.map(r=>{
    const p = pos[Number(r.id)] ?? {x:0,y:0};
    const z = level[Number(r.id)] ?? 0;
    return {
      ...r,
      x: p.x * cellSize,
      y: p.y * cellSize,
      width: cellSize-20,
      height: cellSize-20,
      z: z
    };
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
  };

  // expose for the rest of the app
  global.Utils = Utils;
})(window);
