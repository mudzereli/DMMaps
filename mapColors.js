// MapColorsJS — Automated terrain coloring for DMMaps (JS port of the Lua MapColors)
// Exposes MapColorsJS.applyColors(area) which tags rooms with `_terrain` and `_color`.

const MapColorsJS = (function(){
  const Terrain = {
    MISTY: 'MISTY', SNOWY: 'SNOWY', STONY: 'STONY', STONE_WHITE: 'STONE_WHITE',
    VALLEY: 'VALLEY', CLEAR_WATER: 'CLEAR_WATER', CALM_WATER: 'CALM_WATER',
    SWAMP_WATER: 'SWAMP_WATER', DEEP_WATER: 'DEEP_WATER', CORRUPTED: 'CORRUPTED',
    THICK_WOODS: 'THICK_WOODS', LIGHT_WOODS: 'LIGHT_WOODS', GRASSY: 'GRASSY',
    PLAINS: 'PLAINS', WOODEN: 'WOODEN', MUDDY: 'MUDDY', SANDY: 'SANDY',
    METAL: 'METAL', HOLY: 'HOLY', INTERIOR: 'INTERIOR', INTERIOR_POI: 'INTERIOR_POI',
    STONY_PATH: 'STONY_PATH', SHADOWY: 'SHADOWY', ENCAMPMENT: 'ENCAMPMENT',
    REGAL: 'REGAL', NOEXIT: 'NOEXIT', BLOODY: 'BLOODY', FIERY: 'FIERY',
    CAVE: 'CAVE', TUNNEL: 'TUNNEL'
  };

  // helper to convert rgb array to hex
  function rgbToHex(rgb){
    if (!rgb) return '#cccccc';
    const [r,g,b] = rgb;
    return '#'+[r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
  }

  // color palette used in Lua version (approximated)
  const TerrainColor = {
    [Terrain.CLEAR_WATER]: rgbToHex([0,191,255]),
    [Terrain.CALM_WATER]: rgbToHex([32,178,170]),
    [Terrain.SWAMP_WATER]: rgbToHex([46,139,87]),
    [Terrain.DEEP_WATER]: rgbToHex([25,25,112]),
    [Terrain.STONY]: rgbToHex([112,128,144]),
    [Terrain.STONY_PATH]: rgbToHex([176,196,222]),
    [Terrain.SNOWY]: rgbToHex([245,250,255]),
    [Terrain.VALLEY]: rgbToHex([119,110,110]),
    [Terrain.TUNNEL]: rgbToHex([70,70,70]),
    [Terrain.CAVE]: rgbToHex([60,65,70]),
    [Terrain.MISTY]: rgbToHex([224,255,255]),
    [Terrain.CORRUPTED]: rgbToHex([72,61,139]),
    [Terrain.THICK_WOODS]: rgbToHex([0,100,0]),
    [Terrain.LIGHT_WOODS]: rgbToHex([50,205,50]),
    [Terrain.GRASSY]: rgbToHex([124,252,0]),
    [Terrain.PLAINS]: rgbToHex([189,183,107]),
    [Terrain.WOODEN]: rgbToHex([160,82,45]),
    [Terrain.SANDY]: rgbToHex([255,250,205]),
    [Terrain.MUDDY]: rgbToHex([101,67,33]),
    [Terrain.METAL]: rgbToHex([169,169,169]),
    [Terrain.HOLY]: rgbToHex([255,255,255]),
    [Terrain.INTERIOR]: rgbToHex([230,240,230]),
    [Terrain.INTERIOR_POI]: rgbToHex([255,215,0]),
    [Terrain.SHADOWY]: rgbToHex([47,79,79]),
    [Terrain.ENCAMPMENT]: rgbToHex([85,107,47]),
    [Terrain.REGAL]: rgbToHex([147,112,219]),
    [Terrain.BLOODY]: rgbToHex([128,0,0]),
    [Terrain.FIERY]: rgbToHex([255,140,0]),
    [Terrain.NOEXIT]: rgbToHex([255,20,147]),
    [Terrain.STONE_WHITE]: rgbToHex([227,226,225])
  };

  const AreaOverrides = {
    emerald_forest: Terrain.THICK_WOODS,
    dark_mist_caves: Terrain.VALLEY,
    tarot_tower: Terrain.VALLEY,
    arkham: Terrain.VALLEY,
    rift_of_unending_darkness: Terrain.CORRUPTED,
    marsh: Terrain.SWAMP_WATER,
    silverwood: Terrain.THICK_WOODS,
    mists: Terrain.MISTY,
    new_ethshar: Terrain.STONY_PATH
  };

  // Full keyword associations (order matters — later entries override earlier)
  const WordAssociations = [
    { word: 'entrance', terrain: Terrain.STONE_WHITE },
    { word: 'mist', terrain: Terrain.MISTY },
    { word: 'cloud', terrain: Terrain.MISTY },
    { word: 'fire', terrain: Terrain.FIERY }, { word: 'flaming', terrain: Terrain.FIERY },
    { word: 'fiery', terrain: Terrain.FIERY }, { word: 'burning', terrain: Terrain.FIERY },
    { word: 'holy', terrain: Terrain.HOLY },
    { word: 'stone', terrain: Terrain.STONY },
    { word: 'corruption', terrain: Terrain.CORRUPTED }, { word: 'corrupted', terrain: Terrain.CORRUPTED },
    { word: 'evil', terrain: Terrain.CORRUPTED },
    { word: 'shadowy', terrain: Terrain.SHADOWY },
    { word: 'floor', terrain: Terrain.INTERIOR },
    { word: 'seafloor', terrain: Terrain.SANDY },

    { word: 'mountain', terrain: Terrain.STONY }, { word: 'rocky', terrain: Terrain.STONY },
    { word: 'bluff', terrain: Terrain.STONY }, { word: 'cliff', terrain: Terrain.STONY },
    { word: 'slope', terrain: Terrain.STONY }, { word: 'ledge', terrain: Terrain.STONY },
    { word: 'trench', terrain: Terrain.MUDDY }, { word: 'rift', terrain: Terrain.SHADOWY },
    { word: 'valley', terrain: Terrain.VALLEY }, { word: 'canyon', terrain: Terrain.VALLEY },
    { word: 'gorge', terrain: Terrain.VALLEY }, { word: 'crevasse', terrain: Terrain.VALLEY },
    { word: 'chasm', terrain: Terrain.VALLEY }, { word: 'pit', terrain: Terrain.VALLEY },
    { word: 'ravine', terrain: Terrain.VALLEY },
    { word: 'summit', terrain: Terrain.SNOWY }, { word: 'peak', terrain: Terrain.SNOWY },

    { word: 'sandy', terrain: Terrain.SANDY }, { word: 'beach', terrain: Terrain.SANDY },
    { word: 'sand*', terrain: Terrain.SANDY },
    { word: 'dune', terrain: Terrain.SANDY }, { word: 'desert', terrain: Terrain.SANDY },

    { word: 'sea', terrain: Terrain.DEEP_WATER }, { word: 'waves', terrain: Terrain.DEEP_WATER },
    { word: 'choppy', terrain: Terrain.DEEP_WATER }, { word: 'current', terrain: Terrain.DEEP_WATER },
    { word: 'rapids', terrain: Terrain.DEEP_WATER }, { word: 'bay', terrain: Terrain.DEEP_WATER },
    { word: 'cove', terrain: Terrain.CALM_WATER },

    { word: 'wood', terrain: Terrain.THICK_WOODS }, { word: 'wooded', terrain: Terrain.THICK_WOODS },
    { word: 'forest', terrain: Terrain.THICK_WOODS }, { word: 'woodland', terrain: Terrain.THICK_WOODS },
    { word: 'grove', terrain: Terrain.THICK_WOODS }, { word: 'vine', terrain: Terrain.THICK_WOODS },
    { word: 'tree', terrain: Terrain.THICK_WOODS }, { word: 'pine', terrain: Terrain.THICK_WOODS },
    { word: 'conifer', terrain: Terrain.THICK_WOODS },
    { word: 'thicket', terrain: Terrain.THICK_WOODS }, { word: 'copse', terrain: Terrain.THICK_WOODS },
    { word: 'ranger', terrain: Terrain.THICK_WOODS },

    { word: 'hill', terrain: Terrain.LIGHT_WOODS }, { word: 'clearing', terrain: Terrain.LIGHT_WOODS },
    { word: 'foothill', terrain: Terrain.LIGHT_WOODS },
    { word: 'vinyard', terrain: Terrain.LIGHT_WOODS }, { word: 'shrubbery', terrain: Terrain.LIGHT_WOODS },
    { word: 'glade', terrain: Terrain.LIGHT_WOODS }, { word: 'mossy', terrain: Terrain.LIGHT_WOODS },
    { word: 'moss', terrain: Terrain.LIGHT_WOODS }, { word: 'orchard', terrain: Terrain.LIGHT_WOODS },
    { word: 'fruitland', terrain: Terrain.LIGHT_WOODS }, { word: 'farm', terrain: Terrain.LIGHT_WOODS },

    { word: 'yard', terrain: Terrain.GRASSY }, { word: 'park', terrain: Terrain.GRASSY },
    { word: 'garden', terrain: Terrain.GRASSY }, { word: 'grassy', terrain: Terrain.GRASSY },
    { word: 'grass', terrain: Terrain.GRASSY }, { word: 'lawn', terrain: Terrain.GRASSY },

    { word: 'meadow', terrain: Terrain.PLAINS }, { word: 'field', terrain: Terrain.PLAINS },
    { word: 'plains', terrain: Terrain.PLAINS }, { word: 'pasture', terrain: Terrain.PLAINS },

    { word: 'lake', terrain: Terrain.CLEAR_WATER }, { word: 'stream', terrain: Terrain.CLEAR_WATER },
    { word: 'pond', terrain: Terrain.SWAMP_WATER },
    { word: 'swamp', terrain: Terrain.SWAMP_WATER }, { word: 'moors', terrain: Terrain.SWAMP_WATER },
    { word: 'bog', terrain: Terrain.SWAMP_WATER }, { word: 'marsh', terrain: Terrain.SWAMP_WATER },
    { word: 'shallow', terrain: Terrain.CALM_WATER }, { word: 'pool', terrain: Terrain.CALM_WATER },
    { word: 'water', terrain: Terrain.CALM_WATER }, { word: 'harbor', terrain: Terrain.CALM_WATER },
    { word: 'paddy', terrain: Terrain.SWAMP_WATER }, { word: 'river', terrain: Terrain.CALM_WATER },

    { word: 'wooden', terrain: Terrain.WOODEN },

    { word: 'graveyard', terrain: Terrain.SHADOWY }, { word: 'graves', terrain: Terrain.SHADOWY },
    { word: 'cemetary', terrain: Terrain.SHADOWY }, { word: 'cemetery', terrain: Terrain.SHADOWY },
    { word: 'corpse', terrain: Terrain.SHADOWY },

    { word: 'courtyard', terrain: Terrain.STONE_WHITE }, { word: 'turret', terrain: Terrain.STONY },
    { word: 'abattoir', terrain: Terrain.SHADOWY }, { word: 'castle', terrain: Terrain.STONY },
    { word: 'ruins', terrain: Terrain.CAVE }, { word: 'citadel', terrain: Terrain.STONE_WHITE },
    { word: 'palace', terrain: Terrain.STONE_WHITE }, { word: 'aisle', terrain: Terrain.STONY },
    { word: 'alcove', terrain: Terrain.STONY }, { word: 'platform', terrain: Terrain.STONY },
    { word: 'promenade', terrain: Terrain.STONE_WHITE }, { word: 'ladder', terrain: Terrain.STONY_PATH },
    { word: 'grounds', terrain: Terrain.ENCAMPMENT }, { word: 'encampment', terrain: Terrain.ENCAMPMENT },
    { word: 'camp', terrain: Terrain.ENCAMPMENT }, { word: 'settlement', terrain: Terrain.ENCAMPMENT },
    { word: 'village', terrain: Terrain.ENCAMPMENT }, { word: 'compound', terrain: Terrain.ENCAMPMENT },
    { word: 'cave', terrain: Terrain.CAVE }, { word: 'cavern', terrain: Terrain.CAVE }, { word: 'den', terrain: Terrain.CAVE },
    { word: 'crater', terrain: Terrain.CAVE }, { word: 'dungeon', terrain: Terrain.CAVE },
    { word: 'tent', terrain: Terrain.HOLY },

    { word: 'ramparts', terrain: Terrain.STONY }, { word: 'battlement', terrain: Terrain.STONY },
    { word: 'hallway', terrain: Terrain.STONY }, { word: 'walkway', terrain: Terrain.STONY },
    { word: 'tower', terrain: Terrain.STONY }, { word: 'spire', terrain: Terrain.STONY },
    { word: 'corridor', terrain: Terrain.STONY }, { word: 'basement', terrain: Terrain.STONY },
    { word: 'pews', terrain: Terrain.WOODEN }, { word: 'suspended walkway', terrain: Terrain.WOODEN },
    { word: 'gallery', terrain: Terrain.INTERIOR }, { word: 'roof', terrain: Terrain.WOODEN },
    { word: 'dark hallway', terrain: Terrain.SHADOWY },

    { word: 'gate', terrain: Terrain.METAL }, { word: 'cell', terrain: Terrain.SHADOWY },
    { word: 'cage', terrain: Terrain.METAL },
    { word: 'stall', terrain: Terrain.METAL }, { word: 'chamber', terrain: Terrain.METAL },

    { word: 'room', terrain: Terrain.INTERIOR }, { word: 'bedroom', terrain: Terrain.INTERIOR },
    { word: 'site', terrain: Terrain.INTERIOR }, { word: 'house', terrain: Terrain.INTERIOR },
    { word: 'abode', terrain: Terrain.INTERIOR }, { word: 'home', terrain: Terrain.INTERIOR },
    { word: 'quarter', terrain: Terrain.INTERIOR }, { word: 'hall', terrain: Terrain.INTERIOR },
    { word: 'foyer', terrain: Terrain.INTERIOR }, { word: 'library', terrain: Terrain.INTERIOR },
    { word: 'lounge', terrain: Terrain.INTERIOR }, { word: 'kitchen', terrain: Terrain.INTERIOR },
    { word: 'laboratory', terrain: Terrain.INTERIOR }, { word: 'ampitheatre', terrain: Terrain.INTERIOR },
    { word: 'classroom', terrain: Terrain.INTERIOR }, { word: 'residence', terrain: Terrain.INTERIOR },
    { word: 'parlor', terrain: Terrain.INTERIOR }, { word: 'parliament', terrain: Terrain.INTERIOR },

    { word: 'hut', terrain: Terrain.WOODEN }, { word: 'cabin', terrain: Terrain.WOODEN },
    { word: 'shack', terrain: Terrain.WOODEN }, { word: 'barn', terrain: Terrain.WOODEN },
    { word: 'pavilion', terrain: Terrain.HOLY }, { word: 'gazebo', terrain: Terrain.HOLY },
    { word: 'chapel', terrain: Terrain.HOLY }, { word: 'monastery', terrain: Terrain.HOLY },
    { word: 'nave', terrain: Terrain.HOLY }, { word: 'narthex', terrain: Terrain.HOLY },
    { word: 'forge', terrain: Terrain.STONY }, { word: 'lot', terrain: Terrain.STONY },
    { word: 'smithy', terrain: Terrain.STONY }, { word: 'warehouse', terrain: Terrain.STONY },
    { word: 'storage', terrain: Terrain.STONY },

    { word: 'wall', terrain: Terrain.METAL }, { word: 'portcullis', terrain: Terrain.METAL },
    { word: 'barricade', terrain: Terrain.METAL },

    { word: 'office', terrain: Terrain.INTERIOR }, { word: 'lobby', terrain: Terrain.INTERIOR },
    { word: 'study', terrain: Terrain.INTERIOR }, { word: 'closet', terrain: Terrain.INTERIOR },
    { word: 'stage', terrain: Terrain.INTERIOR },

    { word: 'guard post', terrain: Terrain.STONY }, { word: 'guardpost', terrain: Terrain.STONY },
    { word: 'arena', terrain: Terrain.STONY }, { word: 'barracks', terrain: Terrain.STONY },
    { word: 'outpost', terrain: Terrain.STONY }, { word: 'stands', terrain: Terrain.WOODEN },

    { word: 'market', terrain: Terrain.INTERIOR_POI }, { word: 'shop', terrain: Terrain.INTERIOR_POI },
    { word: 'shoppe', terrain: Terrain.INTERIOR_POI }, { word: 'store', terrain: Terrain.INTERIOR_POI },
    { word: 'goods', terrain: Terrain.INTERIOR_POI }, { word: 'butcher', terrain: Terrain.INTERIOR_POI },
    { word: 'bakery', terrain: Terrain.INTERIOR_POI }, { word: 'bakoury', terrain: Terrain.INTERIOR_POI },
    { word: 'depot', terrain: Terrain.INTERIOR_POI }, { word: 'armory', terrain: Terrain.INTERIOR_POI },
    { word: 'armoury', terrain: Terrain.INTERIOR_POI }, { word: 'tavern', terrain: Terrain.INTERIOR_POI },
    { word: 'pub', terrain: Terrain.INTERIOR_POI }, { word: 'auction', terrain: Terrain.INTERIOR_POI },
    { word: 'bank', terrain: Terrain.INTERIOR_POI }, { word: 'blacksmith', terrain: Terrain.INTERIOR_POI },
    { word: 'inn', terrain: Terrain.INTERIOR_POI }, { word: 'bar', terrain: Terrain.INTERIOR_POI },
    { word: 'inc', terrain: Terrain.INTERIOR_POI }, { word: 'incorporated', terrain: Terrain.INTERIOR_POI },
    { word: 'guild', terrain: Terrain.REGAL }, { word: 'guildhall', terrain: Terrain.REGAL },
    { word: 'dojo', terrain: Terrain.REGAL }, { word: 'guildhouse', terrain: Terrain.REGAL },

    { word: 'fountain', terrain: Terrain.CLEAR_WATER }, { word: 'temple', terrain: Terrain.HOLY },
    { word: 'shrine', terrain: Terrain.HOLY }, { word: 'altar', terrain: Terrain.HOLY },
    { word: 'sanctum', terrain: Terrain.HOLY }, { word: 'legion', terrain: Terrain.CORRUPTED },
    { word: 'square', terrain: Terrain.STONE_WHITE }, { word: 'checkpoint', terrain: Terrain.STONE_WHITE },

    { word: 'deck', terrain: Terrain.WOODEN }, { word: 'stern', terrain: Terrain.WOODEN },
    { word: 'berth', terrain: Terrain.WOODEN }, { word: 'plank', terrain: Terrain.WOODEN },
    { word: 'mast', terrain: Terrain.WOODEN }, { word: "mizzenmast", terrain: Terrain.WOODEN },

    { word: 'bridge', terrain: Terrain.WOODEN }, { word: 'dock', terrain: Terrain.WOODEN },
    { word: 'wharf', terrain: Terrain.WOODEN },
    { word: 'street', terrain: Terrain.STONY_PATH }, { word: 'avenue', terrain: Terrain.STONY_PATH },
    { word: 'road', terrain: Terrain.STONY_PATH }, { word: 'row', terrain: Terrain.STONY_PATH },
    { word: 'way', terrain: Terrain.STONY_PATH },
    { word: 'alley', terrain: Terrain.SHADOWY }, { word: 'alleyway', terrain: Terrain.SHADOWY },
    { word: 'catacomb', terrain: Terrain.CORRUPTED }, { word: 'crypt', terrain: Terrain.CORRUPTED },
    { word: 'tomb', terrain: Terrain.CORRUPTED }, { word: 'sarcophagus', terrain: Terrain.CORRUPTED },
    { word: 'antechamber', terrain: Terrain.CORRUPTED },
    { word: 'depth', terrain: Terrain.CAVE }, { word: 'stair*', terrain: Terrain.VALLEY },
    { word: 'tunnel', terrain: Terrain.TUNNEL },
    { word: 'enclave', terrain: Terrain.TUNNEL }, { word: 'labyrinth', terrain: Terrain.TUNNEL },
    { word: 'passage', terrain: Terrain.TUNNEL }, { word: 'shaft', terrain: Terrain.CAVE },
    { word: 'excavation', terrain: Terrain.CAVE }, { word: 'inlet', terrain: Terrain.CALM_WATER },
    { word: 'trail', terrain: Terrain.MUDDY }, { word: 'path', terrain: Terrain.MUDDY },
    { word: 'dirt', terrain: Terrain.MUDDY }, { word: 'muddy', terrain: Terrain.MUDDY },
    { word: 'pathway', terrain: Terrain.MUDDY },
    { word: 'stone path', terrain: Terrain.STONY_PATH }, { word: 'rocky path*', terrain: Terrain.STONY_PATH },
    { word: 'woven path*', terrain: Terrain.WOODEN }, { word: 'shimmering path*', terrain: Terrain.REGAL },
    { word: 'cobblestone', terrain: Terrain.STONY }, { word: 'forest road', terrain: Terrain.WOODEN },

    { word: "miden'nir", terrain: Terrain.THICK_WOODS },
    { word: "fisherman's lament", terrain: Terrain.WOODEN },
    { word: "citizen's", terrain: Terrain.STONY_PATH }, { word: "sultan's", terrain: Terrain.STONY_PATH },
    { word: 'red roses', terrain: Terrain.BLOODY }, { word: 'white roses', terrain: Terrain.HOLY },
    { word: "plains of sh'goloth", terrain: Terrain.CORRUPTED },
    { word: 'fair', terrain: Terrain.STONE_WHITE }, { word: 'carnival', terrain: Terrain.STONE_WHITE },
    { word: "sultan's grace", terrain: Terrain.STONE_WHITE },
    { word: 'fiery sea', terrain: Terrain.FIERY }, { word: 'of fire', terrain: Terrain.FIERY },
    { word: 'crystal', terrain: Terrain.HOLY },

    { word: "'s", terrain: Terrain.INTERIOR_POI, onlyIfUncolored: true, matchPartial: true },
    { word: '&', terrain: Terrain.INTERIOR_POI, onlyIfUncolored: true, matchPartial: true },

    { word: 'corner of * and *', terrain: Terrain.STONY_PATH },
    { word: "*'s lane", terrain: Terrain.STONY_PATH },
    { word: 'dale market', terrain: Terrain.STONE_WHITE },
    { word: 'white stone', terrain: Terrain.STONE_WHITE },
    { word: "castle's", terrain: Terrain.STONE_WHITE },
    { word: 'market square', terrain: Terrain.STONE_WHITE },
    { word: 'market area', terrain: Terrain.STONE_WHITE },
    { word: 'Archives of the Harvester', terrain: Terrain.SHADOWY },
    { word: 'Inside the Darkness', terrain: Terrain.SHADOWY },
    { word: 'Plaza of the Silver Dragon', terrain: Terrain.STONE_WHITE },
    { word: 'gemstones', terrain: Terrain.INTERIOR_POI },
    { word: 'over windreach', terrain: Terrain.MISTY },
    { word: 'river bank', terrain: Terrain.MUDDY },
    { word: 'the banks', terrain: Terrain.MUDDY },
    { word: 'bank of the', terrain: Terrain.MUDDY },
    { word: 'feet below the surface', terrain: Terrain.DEEP_WATER },
  ];

  const ConnectorWords = new Set(['row','cross','landing','intersection','bend','turn','junction','border','lane','boulevard','causeway','crossing','ramp','end','corner','point']);
  const NonWaterConnectorWords = new Set(['row','landing','border','lane','boulevard','culdesac','ramp','bank','graveyard','point']);

  function compilePattern(word){
    // convert simple wildcard '*' to '.*' and escape other regex chars
    const esc = word.replace(/[-/\\^$+?.()|[\]{}]/g,'\\$&').replace(/\\\*/g, '.*').replace(/\*/g, '.*');
    return new RegExp('\\b'+esc+'s?\\b','i');
  }

  const compiled = WordAssociations.map(ent=>({ word: ent.word, terrain: ent.terrain, onlyIfUncolored: ent.onlyIfUncolored, matchPartial: ent.matchPartial, re: compilePattern(ent.word) }));

  function isUncolored(room){ return !room._terrain; }

  // Apply a terrain and color to a room object
  function applyTerrainToRoom(room, terrain){
    if (!room) return;
    room._terrain = terrain;
    room._color = TerrainColor[terrain] || '#cccccc';
  }

  function analyzeArea(area){
    const counts = {nature:0, stony:0, underground:0, water:0};
    (area.rooms||[]).forEach(r=>{
      const t = r._terrain;
      if (!t) return;
      if ([Terrain.THICK_WOODS,Terrain.LIGHT_WOODS,Terrain.WOODEN,Terrain.GRASSY,Terrain.PLAINS,Terrain.MUDDY,Terrain.ENCAMPMENT,Terrain.SANDY].includes(t)) counts.nature++;
      else if ([Terrain.STONY,Terrain.STONY_PATH,Terrain.METAL,Terrain.STONE_WHITE].includes(t)) counts.stony++;
      else if ([Terrain.SHADOWY,Terrain.VALLEY,Terrain.CAVE,Terrain.TUNNEL,Terrain.INTERIOR].includes(t)) counts.underground++;
      else if ([Terrain.CALM_WATER,Terrain.DEEP_WATER,Terrain.SWAMP_WATER,Terrain.CLEAR_WATER].includes(t)) counts.water++;
    });
    return counts;
  }

  function applyAreaOverrides(area){
    const key = (area.id||area.name||'').toLowerCase();
    if (AreaOverrides[key]){
      (area.rooms||[]).forEach(r=> applyTerrainToRoom(r, AreaOverrides[key]) );
    }
  }

  function applyKeywordAssociations(area){
    (area.rooms||[]).forEach(room=>{
      if (!room || !room.name) return;
      const name = String(room.name).toLowerCase();
      for (const ent of compiled){
        let matches = false;
        try{ matches = ent.re.test(name); }catch(e){ matches = false; }
        if (!matches && ent.matchPartial){
          const needle = ent.word.replace(/\*/g,'').toLowerCase();
          if (needle && name.indexOf(needle) !== -1) matches = true;
        }
        if (matches){
          if (ent.onlyIfUncolored && room._terrain) continue;
          applyTerrainToRoom(room, ent.terrain);
        }
      }
    });
  }

  function connectorPass(area){
    let changes = 0;
    const rooms = area.rooms || [];
    const idMap = new Map(rooms.map(r=>[String(r.id), r]));
    for (const r of rooms){
      if (!r || !r.name) continue;
      // quick connector detection
      const words = String(r.name).toLowerCase().match(/\w+/g) || [];
      let isConnector = words.some(w=>ConnectorWords.has(w));
      if (!isConnector) continue;
      // if already a clear interior/poi/wooden, skip
      if (r._terrain === Terrain.WOODEN || r._terrain === Terrain.INTERIOR_POI) continue;
      // examine adjacent rooms' terrains
      const adjTerrains = [];
      for (const ex of Object.values(r.exits||{})){
        const tid = String(ex && (ex.vnum ?? ex));
        const nr = idMap.get(tid);
        if (nr && nr._terrain) adjTerrains.push(nr._terrain);
      }
      let chosen = null;
      const waterMatch = adjTerrains.find(t=>[Terrain.CALM_WATER,Terrain.DEEP_WATER,Terrain.SWAMP_WATER,Terrain.CLEAR_WATER].includes(t));
      if (waterMatch && !words.some(w=>NonWaterConnectorWords.has(w))) chosen = waterMatch;
      else if (adjTerrains.length){
        // prefer nature terrains for connectors if present
        const nature = adjTerrains.find(t=>[Terrain.MUDDY,Terrain.WOODEN,Terrain.ENCAMPMENT].includes(t));
        chosen = nature || adjTerrains[0];
      } else {
        const stats = analyzeArea(area);
        if (stats.underground > stats.nature && stats.underground > stats.stony) chosen = Terrain.SHADOWY;
        else if (stats.nature > stats.stony) chosen = Terrain.MUDDY;
        else chosen = Terrain.STONY_PATH;
      }
      if (chosen){ applyTerrainToRoom(r, chosen); changes++; }
    }
    return changes;
  }

  function adjacencyCorrection(area, minNeighbors=2){
    let changes = 0;
    const rooms = area.rooms || [];
    const idMap = new Map(rooms.map(r=>[String(r.id), r]));
    const uncolored = rooms.filter(r=>!r._terrain);
    for (const r of uncolored){
      const counts = {};
      for (const ex of Object.values(r.exits||{})){
        const nr = idMap.get(String(ex && (ex.vnum ?? ex)));
        if (nr && nr._terrain){ counts[nr._terrain] = (counts[nr._terrain]||0)+1; }
      }
      let best = null, bestCount = 0;
      for (const [t,c] of Object.entries(counts)){ if (c>bestCount){ best=t; bestCount=c; } }
      if (best && bestCount >= minNeighbors){ applyTerrainToRoom(r, best); changes++; }
    }
    return changes;
  }

  function colorRemaining(area){
    let changes=0; (area.rooms||[]).forEach(r=>{ if (!r._terrain){ applyTerrainToRoom(r, Terrain.NOEXIT); changes++; } }); return changes;
  }

  // Main API: applyColors(area) — mutates rooms with _terrain/_color
  function applyColors(area){
    if (!area || !area.rooms) return;
    // clear any previous tags
    area.rooms.forEach(r=>{ delete r._terrain; delete r._color; });
    applyAreaOverrides(area);
    applyKeywordAssociations(area);
    connectorPass(area);
    adjacencyCorrection(area, 3);
    adjacencyCorrection(area, 2);
    adjacencyCorrection(area, 1);
    colorRemaining(area);
    return area.rooms.map(r=>({ id: r.id, terrain: r._terrain, color: r._color }));
  }

  // expose public helpers
  return {
    Terrain, TerrainColor, applyColors, analyzeArea, connectorPass, adjacencyCorrection, colorRemaining
  };
})();

// attach to window for use in app.js
if (typeof window !== 'undefined') window.MapColorsJS = MapColorsJS;
