// Example adjustments file for DMMaps
// Drop this file (or a copy named `adjustments.js`) into `area_adjustments/`.
// The app will pick up `window.areaAdjustments` on load and apply the positions
// (these override generated positions but NOT user-saved positions in localStorage).

window.areaAdjustments = [
    {
    "id": "Catacombs",
    "name": "Catacombs",
    "rooms": [
        {
        "id": "2001",
        "vnum": 2001,
        "name": "North entrance to the catacombs",
        "exits": {
            "south": {
            "vnum": 2002,
            "door": false,
            "closed": false,
            "locked": false
            },
            "up": {
            "vnum": 6524,
            "door": true,
            "closed": true,
            "locked": false
            }
        },
        "x": -1320,
        "y": 0,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CORRUPTED",
        "_color": "#483d8b"
        },
        {
        "id": "2002",
        "vnum": 2002,
        "name": "North/south tunnel",
        "exits": {
            "north": {
            "vnum": 2001,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2007,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1320,
        "y": 120,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2003",
        "vnum": 2003,
        "name": "Weapon training area",
        "exits": {
            "east": {
            "vnum": 2004,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2008,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1800,
        "y": 240,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "INTERIOR",
        "_color": "#e6f0e6"
        },
        {
        "id": "2004",
        "vnum": 2004,
        "name": "Prayer training area",
        "exits": {
            "east": {
            "vnum": 2005,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2003,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1680,
        "y": 240,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "STONY",
        "_color": "#708090"
        },
        {
        "id": "2005",
        "vnum": 2005,
        "name": "Junction of hallways",
        "exits": {
            "east": {
            "vnum": 2006,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2010,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2004,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1560,
        "y": 240,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "STONY",
        "_color": "#708090"
        },
        {
        "id": "2006",
        "vnum": 2006,
        "name": "Hallway",
        "exits": {
            "east": {
            "vnum": 2007,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2005,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1440,
        "y": 240,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "STONY",
        "_color": "#708090"
        },
        {
        "id": "2007",
        "vnum": 2007,
        "name": "Intersection",
        "exits": {
            "north": {
            "vnum": 2002,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2012,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2006,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1320,
        "y": 240,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2008",
        "vnum": 2008,
        "name": "Pages' sleeping quarters",
        "exits": {
            "north": {
            "vnum": 2003,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2009,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1800,
        "y": 360,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "INTERIOR",
        "_color": "#e6f0e6"
        },
        {
        "id": "2009",
        "vnum": 2009,
        "name": "Templar Knights sleeping quarters",
        "exits": {
            "south": {
            "vnum": 2013,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2008,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1680,
        "y": 360,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "INTERIOR",
        "_color": "#e6f0e6"
        },
        {
        "id": "2010",
        "vnum": 2010,
        "name": "N/S hallway",
        "exits": {
            "north": {
            "vnum": 2005,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2011,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2014,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1560,
        "y": 360,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "STONY",
        "_color": "#708090"
        },
        {
        "id": "2011",
        "vnum": 2011,
        "name": "A templar's room",
        "exits": {
            "west": {
            "vnum": 2010,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1440,
        "y": 360,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "INTERIOR",
        "_color": "#e6f0e6"
        },
        {
        "id": "2012",
        "vnum": 2012,
        "name": "Humid, damp tunnel",
        "exits": {
            "north": {
            "vnum": 2007,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2019,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1320,
        "y": 360,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2013",
        "vnum": 2013,
        "name": "Administration room",
        "exits": {
            "north": {
            "vnum": 2009,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2016,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2069,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1680,
        "y": 480,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "INTERIOR",
        "_color": "#e6f0e6"
        },
        {
        "id": "2014",
        "vnum": 2014,
        "name": "N/S hallway",
        "exits": {
            "north": {
            "vnum": 2010,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2015,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2017,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1560,
        "y": 480,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "STONY",
        "_color": "#708090"
        },
        {
        "id": "2015",
        "vnum": 2015,
        "name": "A leader's room",
        "exits": {
            "west": {
            "vnum": 2014,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1440,
        "y": 480,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "INTERIOR",
        "_color": "#e6f0e6"
        },
        {
        "id": "2016",
        "vnum": 2016,
        "name": "Mess hall",
        "exits": {
            "north": {
            "vnum": 2013,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2023,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1680,
        "y": 600,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "INTERIOR",
        "_color": "#e6f0e6"
        },
        {
        "id": "2017",
        "vnum": 2017,
        "name": "N/S hallway",
        "exits": {
            "north": {
            "vnum": 2014,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2018,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2024,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1560,
        "y": 600,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "STONY",
        "_color": "#708090"
        },
        {
        "id": "2018",
        "vnum": 2018,
        "name": "High officer's room",
        "exits": {
            "west": {
            "vnum": 2017,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1440,
        "y": 600,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "INTERIOR",
        "_color": "#e6f0e6"
        },
        {
        "id": "2019",
        "vnum": 2019,
        "name": "Mossy intersection",
        "exits": {
            "north": {
            "vnum": 2012,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2020,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2026,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1320,
        "y": 480,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2020",
        "vnum": 2020,
        "name": "The holy grove",
        "exits": {
            "east": {
            "vnum": 2021,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2019,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1200,
        "y": 480,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "THICK_WOODS",
        "_color": "#006400"
        },
        {
        "id": "2021",
        "vnum": 2021,
        "name": "The holy grove",
        "exits": {
            "north": {
            "vnum": 2068,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2022,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2027,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2020,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1080,
        "y": 480,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "THICK_WOODS",
        "_color": "#006400"
        },
        {
        "id": "2022",
        "vnum": 2022,
        "name": "The holy grove",
        "exits": {
            "south": {
            "vnum": 2028,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2021,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -960,
        "y": 480,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "THICK_WOODS",
        "_color": "#006400"
        },
        {
        "id": "2023",
        "vnum": 2023,
        "name": "Mess hall",
        "exits": {
            "north": {
            "vnum": 2016,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2024,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1680,
        "y": 720,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "INTERIOR",
        "_color": "#e6f0e6"
        },
        {
        "id": "2024",
        "vnum": 2024,
        "name": "End of a hallway",
        "exits": {
            "north": {
            "vnum": 2017,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2025,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2023,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1560,
        "y": 720,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "STONY",
        "_color": "#708090"
        },
        {
        "id": "2025",
        "vnum": 2025,
        "name": "Grand Templar's room",
        "exits": {
            "west": {
            "vnum": 2024,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1440,
        "y": 720,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "INTERIOR",
        "_color": "#e6f0e6"
        },
        {
        "id": "2026",
        "vnum": 2026,
        "name": "Very dark passage",
        "exits": {
            "north": {
            "vnum": 2019,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2030,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1320,
        "y": 600,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2027",
        "vnum": 2027,
        "name": "The holy grove",
        "exits": {
            "north": {
            "vnum": 2021,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2028,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1080,
        "y": 600,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "THICK_WOODS",
        "_color": "#006400"
        },
        {
        "id": "2028",
        "vnum": 2028,
        "name": "The holy grove",
        "exits": {
            "north": {
            "vnum": 2022,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2032,
            "door": true,
            "closed": true,
            "locked": true
            },
            "west": {
            "vnum": 2027,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -960,
        "y": 600,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "THICK_WOODS",
        "_color": "#006400"
        },
        {
        "id": "2029",
        "vnum": 2029,
        "name": "Very dark caveway",
        "exits": {
            "east": {
            "vnum": 2030,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2033,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1440,
        "y": 960,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CORRUPTED",
        "_color": "#483d8b"
        },
        {
        "id": "2030",
        "vnum": 2030,
        "name": "Deep within the catacombs",
        "exits": {
            "north": {
            "vnum": 2026,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2031,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2029,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1320,
        "y": 960,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CORRUPTED",
        "_color": "#483d8b"
        },
        {
        "id": "2031",
        "vnum": 2031,
        "name": "Very dark cavern",
        "exits": {
            "south": {
            "vnum": 2034,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2030,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1200,
        "y": 960,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CAVE",
        "_color": "#3c4146"
        },
        {
        "id": "2032",
        "vnum": 2032,
        "name": "The holy place",
        "exits": {
            "north": {
            "vnum": 2028,
            "door": true,
            "closed": true,
            "locked": true
            }
        },
        "x": -960,
        "y": 720,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "HOLY",
        "_color": "#ffffff"
        },
        {
        "id": "2033",
        "vnum": 2033,
        "name": "Misty passageway",
        "exits": {
            "north": {
            "vnum": 2029,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2042,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1560,
        "y": 960,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CORRUPTED",
        "_color": "#483d8b"
        },
        {
        "id": "2034",
        "vnum": 2034,
        "name": "Intersection of caverns",
        "exits": {
            "north": {
            "vnum": 2031,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2035,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2044,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1200,
        "y": 1080,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "ENCAMPMENT",
        "_color": "#556b2f"
        },
        {
        "id": "2035",
        "vnum": 2035,
        "name": "Entrance to the burial grounds",
        "exits": {
            "east": {
            "vnum": 2036,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2034,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1080,
        "y": 1080,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "ENCAMPMENT",
        "_color": "#556b2f"
        },
        {
        "id": "2036",
        "vnum": 2036,
        "name": "The burial grounds",
        "exits": {
            "east": {
            "vnum": 2037,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2045,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2035,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -960,
        "y": 1080,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "ENCAMPMENT",
        "_color": "#556b2f"
        },
        {
        "id": "2037",
        "vnum": 2037,
        "name": "The burial grounds",
        "exits": {
            "east": {
            "vnum": 2038,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2036,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -840,
        "y": 1080,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "ENCAMPMENT",
        "_color": "#556b2f"
        },
        {
        "id": "2038",
        "vnum": 2038,
        "name": "The burial grounds",
        "exits": {
            "east": {
            "vnum": 2039,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2037,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -720,
        "y": 1080,
        "width": 100,
        "height": 100,
        "z": 1,
        "_terrain": "ENCAMPMENT",
        "_color": "#556b2f"
        },
        {
        "id": "2039",
        "vnum": 2039,
        "name": "New graves",
        "exits": {
            "south": {
            "vnum": 2047,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2038,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -600,
        "y": 1080,
        "width": 100,
        "height": 100,
        "z": 1,
        "_terrain": "SHADOWY",
        "_color": "#2f4f4f"
        },
        {
        "id": "2040",
        "vnum": 2040,
        "name": "Misty cavern",
        "exits": {
            "east": {
            "vnum": 2041,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2048,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1800,
        "y": 1080,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CAVE",
        "_color": "#3c4146"
        },
        {
        "id": "2041",
        "vnum": 2041,
        "name": "Misty cavern",
        "exits": {
            "east": {
            "vnum": 2042,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2040,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1680,
        "y": 1080,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CAVE",
        "_color": "#3c4146"
        },
        {
        "id": "2042",
        "vnum": 2042,
        "name": "Mist cavern",
        "exits": {
            "north": {
            "vnum": 2033,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2043,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2041,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1560,
        "y": 1080,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CAVE",
        "_color": "#3c4146"
        },
        {
        "id": "2043",
        "vnum": 2043,
        "name": "Waterfall of mist",
        "exits": {
            "west": {
            "vnum": 2042,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1440,
        "y": 1080,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "MISTY",
        "_color": "#e0ffff"
        },
        {
        "id": "2044",
        "vnum": 2044,
        "name": "Huge multicolored tunnel",
        "exits": {
            "north": {
            "vnum": 2034,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2050,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1200,
        "y": 1440,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2045",
        "vnum": 2045,
        "name": "Desolate ruins",
        "exits": {
            "south": {
            "vnum": 2051,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -960,
        "y": 1200,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CAVE",
        "_color": "#3c4146"
        },
        {
        "id": "2046",
        "vnum": 2046,
        "name": "Curator's place",
        "exits": {
            "east": {
            "vnum": 2047,
            "door": false,
            "closed": false,
            "locked": false
            },
            "down": {
            "vnum": 2052,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -720,
        "y": 1320,
        "width": 100,
        "height": 100,
        "z": 1,
        "_terrain": "INTERIOR_POI",
        "_color": "#ffd700"
        },
        {
        "id": "2047",
        "vnum": 2047,
        "name": "Fresh graves",
        "exits": {
            "north": {
            "vnum": 2039,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2053,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2046,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -600,
        "y": 1320,
        "width": 100,
        "height": 100,
        "z": 1,
        "_terrain": "SHADOWY",
        "_color": "#2f4f4f"
        },
        {
        "id": "2048",
        "vnum": 2048,
        "name": "Twisty cavern",
        "exits": {
            "north": {
            "vnum": 2040,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2049,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2056,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1800,
        "y": 1560,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CAVE",
        "_color": "#3c4146"
        },
        {
        "id": "2049",
        "vnum": 2049,
        "name": "Striped tunnel",
        "exits": {
            "east": {
            "vnum": 2050,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2048,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1320,
        "y": 1560,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2050",
        "vnum": 2050,
        "name": "Prism cave",
        "exits": {
            "north": {
            "vnum": 2044,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2058,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2057,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2049,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1200,
        "y": 1560,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CAVE",
        "_color": "#3c4146"
        },
        {
        "id": "2051",
        "vnum": 2051,
        "name": "Ruined monument",
        "exits": {
            "north": {
            "vnum": 2045,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2052,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2054,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -960,
        "y": 1320,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CAVE",
        "_color": "#3c4146"
        },
        {
        "id": "2052",
        "vnum": 2052,
        "name": "Basement",
        "exits": {
            "west": {
            "vnum": 2051,
            "door": false,
            "closed": false,
            "locked": false
            },
            "up": {
            "vnum": 2046,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -720,
        "y": 1320,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "STONY",
        "_color": "#708090"
        },
        {
        "id": "2053",
        "vnum": 2053,
        "name": "Fresh graves",
        "exits": {
            "north": {
            "vnum": 2047,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2055,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -600,
        "y": 1440,
        "width": 100,
        "height": 100,
        "z": 1,
        "_debug": {
            "from": {
            "x": 890,
            "y": 1130
            },
            "to": {
            "x": 1010,
            "y": 1130
            },
            "z": 0
        },
        "_terrain": "SHADOWY",
        "_color": "#2f4f4f"
        },
        {
        "id": "2054",
        "vnum": 2054,
        "name": "Southern gate",
        "exits": {
            "north": {
            "vnum": 2051,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2066,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2059,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -960,
        "y": 1440,
        "width": 100,
        "height": 100,
        "z": 0,
        "_debug": {
            "from": {
            "x": 410,
            "y": 1250
            },
            "to": {
            "x": 530,
            "y": 1250
            },
            "z": 0
        },
        "_terrain": "METAL",
        "_color": "#a9a9a9"
        },
        {
        "id": "2055",
        "vnum": 2055,
        "name": "Scene of ghastly horror",
        "exits": {
            "north": {
            "vnum": 2053,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2062,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -600,
        "y": 1560,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "SHADOWY",
        "_color": "#2f4f4f"
        },
        {
        "id": "2056",
        "vnum": 2056,
        "name": "Twisty passage",
        "exits": {
            "north": {
            "vnum": 2048,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2057,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1800,
        "y": 1680,
        "width": 100,
        "height": 100,
        "z": 0,
        "_debug": {
            "from": {
            "x": 50,
            "y": 1250
            },
            "to": {
            "x": -70,
            "y": 1250
            },
            "z": 0
        },
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2057",
        "vnum": 2057,
        "name": "Cross of caverns",
        "exits": {
            "north": {
            "vnum": 2050,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2066,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2056,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1200,
        "y": 1680,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CAVE",
        "_color": "#3c4146"
        },
        {
        "id": "2058",
        "vnum": 2058,
        "name": "Lonely tunnel",
        "exits": {
            "east": {
            "vnum": 2059,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2050,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -1080,
        "y": 1560,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2059",
        "vnum": 2059,
        "name": "Lonely tunnel",
        "exits": {
            "north": {
            "vnum": 2054,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2060,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2058,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -960,
        "y": 1560,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2060",
        "vnum": 2060,
        "name": "Bend in the lonely tunnel",
        "exits": {
            "south": {
            "vnum": 2061,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2059,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -720,
        "y": 1560,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2061",
        "vnum": 2061,
        "name": "Lonely tunnel",
        "exits": {
            "north": {
            "vnum": 2060,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2062,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -720,
        "y": 1680,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2062",
        "vnum": 2062,
        "name": "Intersection",
        "exits": {
            "north": {
            "vnum": 2055,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2063,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2061,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -600,
        "y": 1680,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2063",
        "vnum": 2063,
        "name": "Tunnel",
        "exits": {
            "north": {
            "vnum": 2062,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2064,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -600,
        "y": 1800,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2064",
        "vnum": 2064,
        "name": "Tunnel",
        "exits": {
            "north": {
            "vnum": 2063,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2065,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -600,
        "y": 1920,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2065",
        "vnum": 2065,
        "name": "Southern entrance to the catacombs",
        "exits": {
            "north": {
            "vnum": 2064,
            "door": false,
            "closed": false,
            "locked": false
            },
            "up": {
            "vnum": 6527,
            "door": true,
            "closed": true,
            "locked": false
            }
        },
        "x": -600,
        "y": 2040,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "CORRUPTED",
        "_color": "#483d8b"
        },
        {
        "id": "2066",
        "vnum": 2066,
        "name": "Unknown passage",
        "exits": {
            "east": {
            "vnum": 2067,
            "door": false,
            "closed": false,
            "locked": false
            },
            "south": {
            "vnum": 2068,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -600,
        "y": 0,
        "width": 100,
        "height": 100,
        "z": 0,
        "_debug": {
            "from": {
            "x": 290,
            "y": 290
            },
            "to": {
            "x": 170,
            "y": 290
            },
            "z": 0
        },
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2067",
        "vnum": 2067,
        "name": "Unknown passage",
        "exits": {
            "south": {
            "vnum": 2069,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2066,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -480,
        "y": 0,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2068",
        "vnum": 2068,
        "name": "Unknown passage",
        "exits": {
            "north": {
            "vnum": 2066,
            "door": false,
            "closed": false,
            "locked": false
            },
            "east": {
            "vnum": 2069,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -600,
        "y": 120,
        "width": 100,
        "height": 100,
        "z": 0,
        "_debug": {
            "from": {
            "x": 290,
            "y": 410
            },
            "to": {
            "x": 170,
            "y": 410
            },
            "z": 0
        },
        "_terrain": "TUNNEL",
        "_color": "#464646"
        },
        {
        "id": "2069",
        "vnum": 2069,
        "name": "Unknown passage",
        "exits": {
            "north": {
            "vnum": 2067,
            "door": false,
            "closed": false,
            "locked": false
            },
            "west": {
            "vnum": 2068,
            "door": false,
            "closed": false,
            "locked": false
            }
        },
        "x": -480,
        "y": 120,
        "width": 100,
        "height": 100,
        "z": 0,
        "_terrain": "TUNNEL",
        "_color": "#464646"
        }
    ],
    "minZ": 0,
    "maxZ": 1
    }
];
