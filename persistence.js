/**
 * persistence.js
 * localStorage persistence for per-area room positions, plus area JSON export.
 * Functions here are intentionally side-effect-minimal — they read/write
 * `localStorage` and mutate the `area` object passed in, but do not touch
 * global state directly except where noted (clearSavedPositions calls
 * `renderArea` and reads `preservedViewBox` from app.js).
 */

/**
 * Build the localStorage key for an area's saved positions.
 *
 * @param {object} area Area object with `id` or `name`
 * @returns {string} Storage key
 */
function getPositionsKey(area){
  const id = (area && (area.id || area.name)) ? (area.id || area.name) : 'area';
  return `dmaps_positions_${String(id)}`;
}

/**
 * Load saved room positions from localStorage into an area object in-place.
 * Normalises z-levels so the lowest floor is 0, then updates `area.minZ`/`area.maxZ`.
 *
 * @param {object} area Area object whose rooms will be mutated
 * @returns {boolean} `true` if saved data was found and applied, `false` otherwise
 */
function loadSavedPositions(area){
  if (!area) return;
  try{
    const key = getPositionsKey(area);
    const raw = localStorage.getItem(key);
    if (!raw) return false;
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
    return true;
  }catch(e){ console.warn('loadSavedPositions failed', e); }
  return false;
}

/**
 * Persist the current x/y/z position of every room in an area to localStorage.
 *
 * @param {object} area Area object containing `rooms`
 */
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

/**
 * Remove saved positions from localStorage for an area, reset room coordinates,
 * recompute the BFS layout, and re-render. Calls `renderArea` (app.js global).
 *
 * @param {object} area Area object to reset
 */
function clearSavedPositions(area){
  if (!area) return;
  try{
    const key = getPositionsKey(area);
    localStorage.removeItem(key);
    // clear in-memory saved coordinates
    for (const r of area.rooms || []){ delete r.x; delete r.y; delete r.z; }
    // recompute layout and layer bounds
    area.rooms = Utils.layoutAreaRooms(area.rooms);
    const zs = (area.rooms||[]).map(r=>r.z||0);
    area.minZ = zs.length?Math.min(...zs):0;
    area.maxZ = zs.length?Math.max(...zs):0;
    try{ const container = document.getElementById('mapContainer'); const svgElem = container && container.querySelector && container.querySelector('svg'); const curVB = svgElem && svgElem.getAttribute && svgElem.getAttribute('viewBox'); if (curVB && !preservedViewBox) preservedViewBox = curVB; }catch(e){}
    renderArea(area);
    alert('Saved positions cleared for this area.');
    try{ const ind = document.getElementById('savedIndicator'); if (ind) ind.style.display = 'none'; }catch(e){}
  }catch(e){ console.warn('clearSavedPositions failed', e); alert('Clear failed: '+(e&&e.message?e.message:String(e))); }
}

/**
 * Export an area's current room positions as a JSON adjustments file and
 * trigger a browser download. Only rooms with both x and y defined are included.
 *
 * @param {object} area Area object containing `rooms`
 */
function exportArea(area){
  if (!area) return;
  try{
    // Export a minimal adjustments-style area: only id/name and per-room id/vnum + x/y/z
    const out = { id: area.id || area.name || 'area', name: area.name || area.id || '', rooms: [] };
    for (const r of area.rooms || []){
      const entry = {};
      // prefer vnum when present, otherwise id
      if (r.vnum !== undefined) entry.vnum = r.vnum; else entry.id = String(r.id);
      if (typeof r.x === 'number') entry.x = r.x;
      if (typeof r.y === 'number') entry.y = r.y;
      if (typeof r.z === 'number') entry.z = r.z;
      // only include rooms that have at least x and y defined
      if (typeof entry.x === 'number' && typeof entry.y === 'number') out.rooms.push(entry);
    }
    // prepend a comment line with the area's name in the exact requested format
    const commentLine = `//"name": "${(out.name||out.id||'').replace(/"/g,'\\"')}",\n`;
    const blob = new Blob([commentLine, JSON.stringify(out, null, 2)], { type: 'application/json' });
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
