# DMMaps

An in-browser SVG map viewer for MUD area data. Drop in a JSON file containing area and room definitions and the app renders an interactive grid map with multi-floor support, pan/zoom, room selection, and position persistence.

## File structure

```
index.html              — main page
styles.css              — all styling
app.js                  — app wiring: data loading, area/room selection, UI controls
utils.js                — pure helpers: layout (BFS grid placer), bounding boxes, data parsing
persistence.js          — localStorage save/load/clear + area JSON export
mapColors.js            — optional terrain colour mappings (window.MapColorsJS)
areas.js                — optional inline area data (window.areas or window.mapAreas)
area_adjustments/
  adjustments.js        — optional per-room position overrides (window.areaAdjustments)
  adjustments.example.js — documented example of the adjustments format
scripts/
  generate_areas_gamemap.js — Node script to pre-generate a gamemap JSON
  generate_and_deploy.bat   — batch helper to run the above and deploy
```

## Usage

### Loading data

**Drop a JSON file onto the page** — the app accepts any of these schemas:

- `{ areas: [...] }` — array of area objects under an `areas` key
- Top-level array `[...]` of area objects
- `{ rooms: { "<vnum>": { name, area, exits } } }` — flat vnum-keyed rooms object (areas inferred from the `area` field)

Each area should have a `rooms` array. Each room should have an `id` (or `vnum`) and an `exits` object mapping direction names (`north`, `south`, `east`, `west`, `up`, `down`) to target vnums or exit objects with a `vnum` field.

**Inline data** — populate `window.areas` or `window.mapAreas` in `areas.js` and the app will load it automatically on startup.

### Supported room geometry

Rooms can carry any of:
- `{ x, y, width, height }` — explicit pixel position
- `{ left, top, right, bottom }` — bounding box
- `{ points: [{x,y}, ...] }` — polygon (converted to bounding box)
- `{ cx, cy, width, height }` — centre-based

Rooms without coordinates are placed automatically using a BFS grid layout that follows exit directions.

### Navigation

- **Click** a room to select it; **Ctrl+click** to multi-select (same floor)
- **Shift+drag** to marquee-select; **Alt+Shift+drag** to select across floors
- **Arrow keys / N E S W U D** to traverse exits from the selected room
- **Scroll** to zoom; **drag** empty space to pan; **Ctrl+drag** to pan with mouse
- **◀ / ▶** floor buttons (or U/D keys) to change floors
- **Right-click** with rooms selected to move the selection up or down a floor, or stack rooms on the same cell

### Tools menu

| Button | Action |
|---|---|
| Save Positions | Write current room x/y/z to localStorage |
| Export Area | Download a JSON adjustments file with current positions |
| Clear Saved Positions | Remove localStorage data and reset to auto-layout |
| Redraw From Selected | Re-run BFS layout from the selected room |
| Redraw Current Floor | Re-run BFS layout on the current floor only (prompts for radius) |

### Position adjustments

Create `area_adjustments/adjustments.js` (see `adjustments.example.js`) to hard-code positions for specific rooms. These override auto-layout positions but are themselves overridden by anything saved via **Save Positions**.

```js
window.areaAdjustments = [
  {
    id: 'my-area',
    rooms: [
      { vnum: 1001, x: 120, y: 240, z: 0 },
    ]
  }
];
```

## Deployment

```bat
scripts\generate_and_deploy.bat
```

Runs `scripts/generate_areas_gamemap.js` then deploys to GitHub Pages via `gh-pages`.
