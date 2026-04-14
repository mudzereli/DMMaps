const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const AREAS_SRC = path.join(ROOT, 'areas.js');
const GAMEMAP_TEMPLATE = path.join(ROOT, 'area_adjustments', 'gamemap.js');
const ADJUSTMENTS_FILE = path.join(ROOT, 'area_adjustments', 'adjustments.js');
const OUT_FILE = path.join(ROOT, 'area_adjustments', 'areas_gamemap.js');

function readAssigned(filePath){
  const txt = fs.readFileSync(filePath, 'utf8');
  // try JSON.parse directly if possible
  // strip JS comments to help parse non-strict JSON files like adjustments.js
  const cleaned = txt.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/mg, '\n');
  try{ return JSON.parse(cleaned); }catch(e){}
  // strip leading assignment like "varName = ..." or "gameMap = ..."
  const firstBrace = txt.indexOf('{');
  const firstBracket = txt.indexOf('[');
  const start = (firstBrace === -1) ? firstBracket : (firstBracket === -1 ? firstBrace : Math.min(firstBrace, firstBracket));
  if (start === -1) throw new Error('No JSON found in ' + filePath);
  // attempt to parse the cleaned text by finding a likely end bracket
  const cleanedStartBrace = cleaned.indexOf('{');
  const cleanedStartBracket = cleaned.indexOf('[');
  const cstart = (cleanedStartBrace === -1) ? cleanedStartBracket : (cleanedStartBracket === -1 ? cleanedStartBrace : Math.min(cleanedStartBrace, cleanedStartBracket));
  if (cstart !== -1){
    const lastBrace = cleaned.lastIndexOf('}');
    const lastBracket = cleaned.lastIndexOf(']');
    const end = Math.max(lastBrace, lastBracket);
    if (end > cstart){
      const substr = cleaned.slice(cstart, end+1);
      try{ return JSON.parse(substr); }catch(e){}
    }
  }
  throw new Error('Failed to parse JSON from ' + filePath);
}

// Copied/adapted layoutAreaRooms from app.js (BFS grid placer)
function layoutAreaRooms(rooms, startId){
  const dirDelta = { north:[0,-1], south:[0,1], east:[1,0], west:[-1,0] };
  const cellSize = 120;
  const pos = {};
  const occupied = new Map();
  const level = {};
  const idMap = new Map();
  rooms.forEach(r=>idMap.set(Number(r.id), r));
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
  // seed positions from rooms that already have pixel x/y assigned (from adjustments)
  for (const r of rooms){
    if (typeof r.x === 'number' && typeof r.y === 'number'){
      const gx = Math.round((r.x || 0) / cellSize);
      const gy = Math.round((r.y || 0) / cellSize);
      const gz = typeof r.z === 'number' ? r.z : 0;
      pos[Number(r.id)] = { x: gx, y: gy };
      level[Number(r.id)] = gz;
      occupied.set(`${gx},${gy},${gz}`, Number(r.id));
    }
  }

  let start = Number(rooms[0].id);
  if (startId !== undefined && startId !== null){ const asNum = Number(startId); if (!Number.isNaN(asNum) && idMap.has(asNum)) start = asNum; }
  if (!Object.prototype.hasOwnProperty.call(pos, start)){
    pos[start] = {x:0,y:0}; level[start] = 0; occupied.set(`${pos[start].x},${pos[start].y},${level[start]}`, start);
  }
  const q = Object.keys(pos).length ? Object.keys(pos).map(k=>Number(k)) : [start];
  const visited = new Set(q);
  let deferred = [];
  const halfSide = (cellSize - 20) / 2;
  while(q.length){
    const cur = q.shift(); const curRoom = idMap.get(cur); if (!curRoom) continue; const curPos = pos[cur];
    const exits = curRoom.exits || {};
    const outgoingSet = new Set();
    for (const [dir, ex] of Object.entries(exits)){
      const target = Number(ex.vnum || ex); if (!target || !idMap.has(target)) continue; if (visited.has(target)) continue;
      outgoingSet.add(String(target));
      const dirStr = String(dir); const curLevel = level[cur] ?? 0; let targetLevel = curLevel;
      if (dirStr.toLowerCase() === 'up') targetLevel = curLevel + 1;
      if (dirStr.toLowerCase() === 'down') targetLevel = curLevel - 1;
      const d = dirDelta[dirStr.toLowerCase()];
      let tx = curPos.x + (d?d[0]:0); let ty = curPos.y + (d?d[1]:0);
      if (dirStr.toLowerCase() === 'up' || dirStr.toLowerCase() === 'down'){ tx = curPos.x; ty = curPos.y; }
      let key = `${tx},${ty},${targetLevel}`; let tries = 0;
      while(occupied.has(key) && occupied.get(key)!==target && tries<100){
        const triesMap = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]];
        const t = triesMap[tries % triesMap.length];
        tx = curPos.x + (d?d[0]:0) + t[0]*(Math.floor(tries/triesMap.length)+1);
        ty = curPos.y + (d?d[1]:0) + t[1]*(Math.floor(tries/triesMap.length)+1);
        key = `${tx},${ty},${targetLevel}`; tries++;
      }
      pos[target] = {x:tx,y:ty}; level[target] = targetLevel; occupied.set(key,target); visited.add(target); q.push(target);
    }
    const revs = reverseMap.get(String(cur)) || [];
    for (const info of revs){
      const target = Number(info.source); if (!target || !idMap.has(target)) continue; if (visited.has(target)) continue; if (outgoingSet.has(String(target))) continue;
      const dirLower = (info.dir || '').toLowerCase();
      const opposite = ({ north:'south', south:'north', east:'west', west:'east', up:'down', down:'up' }[dirLower]) || dirLower;
      const curLevel = level[cur] ?? 0; let targetLevel = curLevel; if (opposite === 'up') targetLevel = curLevel + 1; if (opposite === 'down') targetLevel = curLevel - 1;
      const d = dirDelta[opposite]; let tx = curPos.x + (d?d[0]:0); let ty = curPos.y + (d?d[1]:0); if (opposite === 'up' || opposite === 'down'){ tx = curPos.x; ty = curPos.y; }
      let key = `${tx},${ty},${targetLevel}`; let tries = 0;
      while(occupied.has(key) && occupied.get(key)!==target && tries<100){
        const triesMap = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]];
        const t = triesMap[tries % triesMap.length];
        tx = curPos.x + (d?d[0]:0) + t[0]*(Math.floor(tries/triesMap.length)+1);
        ty = curPos.y + (d?d[1]:0) + t[1]*(Math.floor(tries/triesMap.length)+1);
        key = `${tx},${ty},${targetLevel}`; tries++;
      }
      if (!deferred.some(x=>x.target===target)) deferred.push({ target, tx, ty, targetLevel, key });
    }
    if (q.length === 0 && deferred.length > 0){
      const newQ = [];
      for (const item of deferred){ if (!visited.has(item.target)){ pos[item.target] = { x: item.tx, y: item.ty }; level[item.target] = item.targetLevel; occupied.set(item.key, item.target); visited.add(item.target); newQ.push(item.target); } }
      deferred = [];
      for (const v of newQ) q.push(v);
    }
  }

  // place unplaced
  try{
    const xs = Object.values(pos).map(p=>p.x||0);
    const ys = Object.values(pos).map(p=>p.y||0);
    const maxX = xs.length?Math.max(...xs):0;
    const minY = ys.length?Math.min(...ys):0;
    const unplaced = rooms.filter(r=>!Object.prototype.hasOwnProperty.call(pos, Number(r.id)));
    if (unplaced.length){
      const cols = Math.max(1, Math.ceil(Math.sqrt(unplaced.length)));
      const startX = maxX + 3; const gap = 2;
      for (let i=0;i<unplaced.length;i++){
        const r = unplaced[i]; const col = i % cols; const row = Math.floor(i/cols);
        let tx = startX + col * gap; let ty = minY + row * gap; let key = `${tx},${ty},0`; let tries = 0;
        while(occupied.has(key) && tries < 200){ tx += 1; ty += (tries % 2 === 0 ? 0 : 1); key = `${tx},${ty},0`; tries++; }
        pos[Number(r.id)] = { x: tx, y: ty }; level[Number(r.id)] = 0; occupied.set(key, Number(r.id));
      }
    }
  }catch(e){}

  const outRooms = rooms.map(r=>{
    const p = pos[Number(r.id)] ?? {x:0,y:0}; const z = level[Number(r.id)] ?? 0;
    return { ...r, x: p.x * cellSize, y: p.y * cellSize, width: cellSize-20, height: cellSize-20, z };
  });
  try{ const zs = outRooms.map(r=>r.z||0); if (zs.length){ const minZ = Math.min(...zs); if (minZ !== 0) outRooms.forEach(r=>{ if (typeof r.z === 'number') r.z = r.z - minZ; }); } }catch(e){}
  return outRooms;
}

function toGridCoordinates(room){
  const CELL = 120;
  const gx = Math.round((room.x || 0) / CELL);
  // invert Y so generated grid matches template orientation
  const gy = -Math.round((room.y || 0) / CELL);
  const gz = typeof room.z === 'number' ? room.z : 0;
  return [gx, gy, gz];
}

function buildGameMap(areasSource, template, adjustments){
  // start with a shallow copy of template keys, but don't carry over areas/areaCount/roomCount
  const outTop = {};
  if (template && typeof template === 'object'){
    for (const [k,v] of Object.entries(template)){
      if (k === 'areas' || k === 'areaCount' || k === 'roomCount') continue;
      outTop[k] = v;
    }
  }
  outTop.formatVersion = outTop.formatVersion ?? 1;
  outTop.defaultAreaName = outTop.defaultAreaName ?? 'Default Area';
  outTop.areas = [];
  // ensure commonly expected top-level keys exist with sensible defaults
  outTop.labelCount = outTop.labelCount ?? 0;
  outTop.mapSymbolFontDetails = outTop.mapSymbolFontDetails ?? 'Lucida Console,12,-1,5,900,0,0,0,0,0,0,0,0,0,0,4296';
  outTop.mapSymbolFontFudgeFactor = outTop.mapSymbolFontFudgeFactor ?? 1;
  outTop.onlyMapSymbolFontToBeUsed = outTop.onlyMapSymbolFontToBeUsed ?? false;
  outTop.playerRoomColors = outTop.playerRoomColors ?? [{ color24RGB: [255,255,255] }, { color24RGB: [0,0,0] }];
  outTop.playerRoomInnerDiameterPercentage = outTop.playerRoomInnerDiameterPercentage ?? 66;
  outTop.playerRoomOuterDiameterPercentage = outTop.playerRoomOuterDiameterPercentage ?? 105;
  outTop.playerRoomStyle = outTop.playerRoomStyle ?? 3;
  outTop.playersRoomId = outTop.playersRoomId ?? { darkmists: 40 };

  function exitsToArray(exits){
    if (!exits) return [];
    if (Array.isArray(exits)) return exits.map(e=>({ ...e }));
    const out = [];
    for (const [dir, ex] of Object.entries(exits)){
      if (ex === null || ex === undefined) continue;
      let exitId = null;
      if (typeof ex === 'number' || typeof ex === 'string'){
        const n = Number(ex);
        if (!Number.isNaN(n)) exitId = n;
      } else if (typeof ex === 'object'){
        const n = Number(ex.vnum ?? ex.to ?? ex.id ?? ex.exitId ?? ex.room ?? null);
        if (!Number.isNaN(n)) exitId = n;
      }
      const eObj = { name: String(dir) };
      if (exitId !== null) eObj.exitId = exitId;
      if (ex && typeof ex === 'object'){
        if (ex.closed === true || ex.closed === 'closed') eObj.door = 'closed';
        else if (ex.door === true || ex.door === 'closed') eObj.door = ex.door === 'closed' ? 'closed' : true;
        if (ex.locked === true) eObj.locked = true;
      }
      out.push(eObj);
    }
    return out;
  }

  // build a map of template area name -> numeric id to preserve ids when available
  const templateAreaMap = new Map();
  try{
    if (template && Array.isArray(template.areas)){
      for (const ta of template.areas){
        if (!ta) continue;
        const name = String(ta.name || '');
        const nid = Number(ta.id);
        if (!Number.isNaN(nid)) templateAreaMap.set(name, nid);
      }
    }
  }catch(e){}
  let nextAreaId = 1;
  try{
    const existing = Array.from(templateAreaMap.values()).filter(n=>Number.isFinite(n) && n>=0);
    if (existing.length) nextAreaId = Math.max(...existing) + 1;
  }catch(e){}
  // build adjustments lookup by area name -> map of vnum -> adjustment
  const adjustmentsMap = new Map();
  try{
    if (adjustments && Array.isArray(adjustments)){
      for (const ada of adjustments){
        if (!ada) continue;
        const aname = String(ada.name || ada.id || '');
        const roomMap = new Map();
        if (Array.isArray(ada.rooms)){
          for (const r of ada.rooms){ if (!r) continue; const vid = Number(r.vnum ?? r.id ?? r.vnum); if (!Number.isNaN(vid)) roomMap.set(vid, r); }
        }
        adjustmentsMap.set(aname, roomMap);
      }
    }
  }catch(e){}

  for (const a of areasSource){
    const rooms = (a.rooms||[]).map(r=>({ ...r }));
    // apply adjustments per-room if present (copy x/y/z onto room objects)
    try{
      const adMap = adjustmentsMap.get(String(a.name)) || adjustmentsMap.get(String(a.id)) || null;
      
      if (adMap){
        for (const r of rooms){
          const vid = Number(r.vnum ?? r.id);
          if (!Number.isNaN(vid) && adMap.has(vid)){
            const adj = adMap.get(vid);
            if (adj && typeof adj === 'object'){
              if (typeof adj.x === 'number') r.x = adj.x;
              if (typeof adj.y === 'number') r.y = adj.y;
              if (typeof adj.z === 'number') r.z = adj.z;
            }
          }
        }
      }
    }catch(e){}
    const laid = layoutAreaRooms(rooms);
    // ensure area id is numeric: prefer provided numeric id, then template id by name, then default mapping
    let areaId = null;
    if (a.id !== undefined && a.id !== null && !Number.isNaN(Number(a.id))) areaId = Number(a.id);
    else if (templateAreaMap.has(String(a.name))) areaId = templateAreaMap.get(String(a.name));
    else if (String(a.name) === 'Default Area') areaId = templateAreaMap.get('Default Area') ?? -1;
    else { areaId = nextAreaId; nextAreaId++; }

    const areaOut = { id: areaId, name: a.name ?? a.id ?? 'Area', roomCount: (laid||[]).length, rooms: [] };
    for (const r of laid){
      const coords = toGridCoordinates(r);
      const ro = { coordinates: coords, exits: exitsToArray(r.exits || {}), id: r.id, name: r.name || '' };
      areaOut.rooms.push(ro);
    }
    // if adjustments exist for this area, override room coordinates from adjustments and normalize z
    try{
      const adMap = adjustmentsMap.get(String(a.name)) || adjustmentsMap.get(String(a.id)) || null;
      if (adMap){
        for (const ro of areaOut.rooms){
          const vid = Number(ro.id);
          if (!Number.isNaN(vid) && adMap.has(vid)){
            const adj = adMap.get(vid);
            if (adj){
              ro.coordinates = toGridCoordinates({ x: adj.x, y: adj.y, z: adj.z });
            }
          }
        }
        // normalize z within this area so minimum z becomes 0
        const zs = areaOut.rooms.map(r=>Number((r.coordinates && r.coordinates[2]) || 0));
        if (zs.length){
          const minZ = Math.min(...zs);
          if (minZ !== 0) areaOut.rooms.forEach(r=>{ if (r.coordinates && typeof r.coordinates[2] === 'number') r.coordinates[2] = r.coordinates[2] - minZ; });
        }
      }
    }catch(e){}

    outTop.areas.push(areaOut);
  }
  outTop.areaCount = outTop.areas.length;
  // calculate total rooms from generated areas
  try{ outTop.roomCount = outTop.areas.reduce((s,a)=>s + (a.roomCount||0), 0); }catch(e){ outTop.roomCount = 0; }
  return [outTop];
}

function main(){
  console.log('Generating areas_gamemap...');
  const areasData = readAssigned(AREAS_SRC);
  let areas = [];
  if (Array.isArray(areasData)) areas = areasData;
  else if (areasData.areas) areas = areasData.areas;
  else if (areasData.rooms && typeof areasData.rooms === 'object'){
    const map = {};
    for (const [k,v] of Object.entries(areasData.rooms)){
      const areaName = v.area ?? 'Default Area'; if (!map[areaName]) map[areaName] = { id: areaName, name: areaName, rooms: [] };
      const room = { id: Number(k), vnum: Number(k), name: v.name ?? k, exits: v.exits || {} };
      map[areaName].rooms.push(room);
    }
    areas = Object.values(map);
  } else {
    areas = Object.values(areasData).filter(v=>v && v.rooms).map(a=>({ id: a.id ?? a.name, name: a.name ?? a.id, rooms: a.rooms }));
  }

  let template = {};
  try{ template = readAssigned(GAMEMAP_TEMPLATE)[0] || {}; }catch(e){ }

  let adjustments = [];
  try{ adjustments = readAssigned(ADJUSTMENTS_FILE) || []; }catch(e){}
  
  const out = buildGameMap(areas, template, adjustments);
  // write a plain JSON object (not an assignment and not wrapped in an array)
  const root = Array.isArray(out) ? out[0] : out;
  const text = JSON.stringify(root, null, 4) + '\n';
  fs.writeFileSync(OUT_FILE, text, 'utf8');
  console.log('Wrote', OUT_FILE, 'areas:', (root.areas || []).length);
}

if (require.main === module) main();
