// Example adjustments file for DMMaps
// Drop this file (or a copy named `adjustments.js`) into `area_adjustments/`.
// The app will pick up `window.areaAdjustments` on load and apply the positions
// (these override generated positions but NOT user-saved positions in localStorage).

window.areaAdjustments = [
  {
    // Match by `id` or `name` (case-insensitive). Use the exact id/name from your exported area.
    id: 'example-area',
    name: 'Example Area',
    // Rooms array: include room `id` (or `vnum`) and any of x,y,z,width,height you want to enforce.
    rooms: [
      // Example: keep numeric ids as strings to be safe
      { id: '101', x: 120, y: 240, z: 0, width: 100, height: 100 },
      { id: '102', x: 240, y: 240, z: 0, width: 100, height: 100 }
    ]
  }
];
