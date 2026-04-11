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

  // expose for the rest of the app
  global.Utils = Utils;
})(window);
