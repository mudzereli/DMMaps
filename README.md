# Areas — Room Map Demo

Files:
- index.html — main demo page
- styles.css — basic styling
- app.js — loads `areas.json` (fallback `sample_areas.json`) and renders areas. Rooms are drawn as squares.

Usage:
1. Place your `areas.json` next to `index.html` (same folder). The script will fetch it. If missing, `sample_areas.json` is used.
2. Open `index.html` in a browser (you may need a static file server for `fetch` to work locally).

Notes and assumptions:
- The script reads `areas` (array) or top-level arrays. Each area should have a `rooms` array.
- Supported room geometries: `{x,y,width,height}`, `{left,top,right,bottom}`, `{points:[{x,y},...]}`, or center-based `{cx,cy,width,height}`.
- Rooms with arbitrary shapes are converted to bounding boxes, then each room is rendered as a square using the max(width,height) so rooms appear square-shaped.
- If rooms lack coordinates, a simple grid is used to place them.

Next steps I can do for you:
- Integrate the actual `areas.json` structure (if you provide a representative excerpt) and tweak mappings.
- Add pan/zoom and nicer tooltips.
- Export SVG/PNG.
