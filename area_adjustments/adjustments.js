window.areaAdjustments = [
//Catacombs
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
},
//Arkham
{
"id": "Arkham",
"name": "Arkham",
"rooms": [
    {
    "id": "701",
    "vnum": 701,
    "name": "The End of the Wharf",
    "exits": {
        "east": {
        "vnum": 751,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 702,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 0,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "WOODEN",
    "_color": "#a0522d"
    },
    {
    "id": "702",
    "vnum": 702,
    "name": "The Wharf",
    "exits": {
        "north": {
        "vnum": 701,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 752,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 703,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 0,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "WOODEN",
    "_color": "#a0522d"
    },
    {
    "id": "703",
    "vnum": 703,
    "name": "The Wharf",
    "exits": {
        "north": {
        "vnum": 702,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 706,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 704,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 726,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 0,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "WOODEN",
    "_color": "#a0522d"
    },
    {
    "id": "704",
    "vnum": 704,
    "name": "The Wharf",
    "exits": {
        "north": {
        "vnum": 703,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 705,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 720,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 0,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "WOODEN",
    "_color": "#a0522d"
    },
    {
    "id": "705",
    "vnum": 705,
    "name": "The End of the Wharf",
    "exits": {
        "north": {
        "vnum": 704,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 754,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 750,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 0,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "WOODEN",
    "_color": "#a0522d"
    },
    {
    "id": "706",
    "vnum": 706,
    "name": "Main Street",
    "exits": {
        "east": {
        "vnum": 707,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 753,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 703,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 120,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "707",
    "vnum": 707,
    "name": "Main Street",
    "exits": {
        "north": {
        "vnum": 721,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 708,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 718,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 706,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 240,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "708",
    "vnum": 708,
    "name": "Main Street",
    "exits": {
        "north": {
        "vnum": 760,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 709,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 835,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 707,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 360,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "709",
    "vnum": 709,
    "name": "Main Street",
    "exits": {
        "north": {
        "vnum": 762,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 710,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 764,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 708,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "710",
    "vnum": 710,
    "name": "Main Street",
    "exits": {
        "north": {
        "vnum": 9442,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 711,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 783,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 709,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 600,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "711",
    "vnum": 711,
    "name": "Town Square",
    "exits": {
        "north": {
        "vnum": 729,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 712,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 728,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 710,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONE_WHITE",
    "_color": "#e3e2e1"
    },
    {
    "id": "712",
    "vnum": 712,
    "name": "Main Street",
    "exits": {
        "east": {
        "vnum": 713,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 711,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 840,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "713",
    "vnum": 713,
    "name": "Main Street",
    "exits": {
        "north": {
        "vnum": 769,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 714,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 800,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 712,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 960,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "714",
    "vnum": 714,
    "name": "Main Street",
    "exits": {
        "north": {
        "vnum": 770,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 715,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 713,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1080,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "715",
    "vnum": 715,
    "name": "Inside the East Gate of Arkham",
    "exits": {
        "north": {
        "vnum": 746,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 29400,
        "door": true,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 744,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 714,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1200,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "METAL",
    "_color": "#a9a9a9"
    },
    {
    "id": "716",
    "vnum": 716,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 757,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 737,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 730,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 740,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 827,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -360,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "717",
    "vnum": 717,
    "name": "Library",
    "exits": {
        "west": {
        "vnum": 773,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 874,
        "door": true,
        "closed": true,
        "locked": false
        }
    },
    "x": 1080,
    "y": -360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR",
    "_color": "#e6f0e6"
    },
    {
    "id": "718",
    "vnum": 718,
    "name": "Alley",
    "exits": {
        "north": {
        "vnum": 707,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 719,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 240,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "SHADOWY",
    "_color": "#2f4f4f"
    },
    {
    "id": "719",
    "vnum": 719,
    "name": "Dead End",
    "exits": {
        "north": {
        "vnum": 718,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 240,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "SHADOWY",
    "_color": "#2f4f4f"
    },
    {
    "id": "720",
    "vnum": 720,
    "name": "Harbor",
    "exits": {
        "north": {
        "vnum": 726,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 704,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 750,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 734,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -120,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "CALM_WATER",
    "_color": "#20b2aa"
    },
    {
    "id": "721",
    "vnum": 721,
    "name": "Eldritch Lane",
    "exits": {
        "north": {
        "vnum": 722,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 707,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 240,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "722",
    "vnum": 722,
    "name": "Eldritch Lane",
    "exits": {
        "north": {
        "vnum": 723,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 758,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 721,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 755,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 240,
    "y": -120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "723",
    "vnum": 723,
    "name": "Eldritch Lane",
    "exits": {
        "east": {
        "vnum": 724,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 722,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 756,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 240,
    "y": -240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "724",
    "vnum": 724,
    "name": "Eldritch Lane",
    "exits": {
        "east": {
        "vnum": 725,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 723,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 360,
    "y": -240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "725",
    "vnum": 725,
    "name": "Eldritch Lane",
    "exits": {
        "north": {
        "vnum": 832,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 731,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 724,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": -240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "726",
    "vnum": 726,
    "name": "Harbor",
    "exits": {
        "east": {
        "vnum": 703,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 720,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 737,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -120,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "CALM_WATER",
    "_color": "#20b2aa"
    },
    {
    "id": "727",
    "vnum": 727,
    "name": "Inside the South Gate of Arkham",
    "exits": {
        "north": {
        "vnum": 728,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 741,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 22171,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "METAL",
    "_color": "#a9a9a9"
    },
    {
    "id": "728",
    "vnum": 728,
    "name": "Dragon Road",
    "exits": {
        "north": {
        "vnum": 711,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 727,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "729",
    "vnum": 729,
    "name": "Dragon Road",
    "exits": {
        "north": {
        "vnum": 731,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 768,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 711,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 763,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "730",
    "vnum": 730,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 716,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 734,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 736,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 739,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 828,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -360,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "731",
    "vnum": 731,
    "name": "Dragon Road",
    "exits": {
        "north": {
        "vnum": 732,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 749,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 729,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 725,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "732",
    "vnum": 732,
    "name": "Dragon Road",
    "exits": {
        "north": {
        "vnum": 733,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 731,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "733",
    "vnum": 733,
    "name": "Dragon Road",
    "exits": {
        "north": {
        "vnum": 836,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 7300,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 732,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 745,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "734",
    "vnum": 734,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 737,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 720,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 735,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 730,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 852,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -240,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "735",
    "vnum": 735,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 734,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 750,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 22156,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 736,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 857,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -240,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "736",
    "vnum": 736,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 730,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 735,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 788,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 738,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 829,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -360,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "737",
    "vnum": 737,
    "name": "Arkham Bay",
    "exits": {
        "east": {
        "vnum": 726,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 734,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 716,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 831,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -240,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "738",
    "vnum": 738,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 739,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 736,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 789,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 791,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 824,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "739",
    "vnum": 739,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 740,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 730,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 738,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 792,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 823,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "740",
    "vnum": 740,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 765,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 716,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 739,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 793,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 822,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "741",
    "vnum": 741,
    "name": "Corrine Way",
    "exits": {
        "east": {
        "vnum": 742,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 727,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 840,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "742",
    "vnum": 742,
    "name": "Corrine Way",
    "exits": {
        "east": {
        "vnum": 743,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 741,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 960,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "743",
    "vnum": 743,
    "name": "Ipswich Row",
    "exits": {
        "north": {
        "vnum": 744,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 742,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1080,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "744",
    "vnum": 744,
    "name": "Ipswich Row",
    "exits": {
        "north": {
        "vnum": 715,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 743,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1200,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_debug": {
        "from": {
        "x": 1130,
        "y": 410
        },
        "to": {
        "x": 1250,
        "y": 410
        },
        "z": 0
    },
    "_terrain": "METAL",
    "_color": "#a9a9a9"
    },
    {
    "id": "745",
    "vnum": 745,
    "name": "Castle Grounds",
    "exits": {
        "east": {
        "vnum": 733,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 19300,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 600,
    "y": -480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "ENCAMPMENT",
    "_color": "#556b2f"
    },
    {
    "id": "746",
    "vnum": 746,
    "name": "Ipswich Row",
    "exits": {
        "north": {
        "vnum": 747,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 715,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1200,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "747",
    "vnum": 747,
    "name": "Ipswich Row",
    "exits": {
        "south": {
        "vnum": 746,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 748,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1200,
    "y": -240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_debug": {
        "from": {
        "x": 1130,
        "y": -70
        },
        "to": {
        "x": 1250,
        "y": -70
        },
        "z": 0
    },
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "748",
    "vnum": 748,
    "name": "Arcanus Avenue",
    "exits": {
        "north": {
        "vnum": 773,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 747,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 771,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 749,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 960,
    "y": -240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "749",
    "vnum": 749,
    "name": "Arcanus Avenue",
    "exits": {
        "north": {
        "vnum": 772,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 748,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 731,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 7350,
        "door": true,
        "closed": true,
        "locked": false
        }
    },
    "x": 840,
    "y": -240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "750",
    "vnum": 750,
    "name": "Harbor",
    "exits": {
        "north": {
        "vnum": 720,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 705,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 735,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -120,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "CALM_WATER",
    "_color": "#20b2aa"
    },
    {
    "id": "751",
    "vnum": 751,
    "name": "Warehouse",
    "exits": {
        "west": {
        "vnum": 701,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 120,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY",
    "_color": "#708090"
    },
    {
    "id": "752",
    "vnum": 752,
    "name": "Warehouse",
    "exits": {
        "west": {
        "vnum": 702,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 120,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY",
    "_color": "#708090"
    },
    {
    "id": "753",
    "vnum": 753,
    "name": "A Destroyed Map Shop",
    "exits": {
        "north": {
        "vnum": 706,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 787,
        "door": true,
        "closed": true,
        "locked": false
        }
    },
    "x": 120,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR_POI",
    "_color": "#ffd700"
    },
    {
    "id": "754",
    "vnum": 754,
    "name": "Wharfside Bar",
    "exits": {
        "west": {
        "vnum": 705,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 74130,
        "door": true,
        "closed": true,
        "locked": false
        }
    },
    "x": 120,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR_POI",
    "_color": "#ffd700"
    },
    {
    "id": "755",
    "vnum": 755,
    "name": "First Bank of Arkham",
    "exits": {
        "east": {
        "vnum": 722,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 120,
    "y": -120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR_POI",
    "_color": "#ffd700"
    },
    {
    "id": "756",
    "vnum": 756,
    "name": "A Renovated Mansion",
    "exits": {
        "east": {
        "vnum": 723,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 782,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 0,
    "y": -240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "757",
    "vnum": 757,
    "name": "Arkham Bay",
    "exits": {
        "south": {
        "vnum": 716,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 765,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 826,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -360,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "758",
    "vnum": 758,
    "name": "Patch's Tavern",
    "exits": {
        "east": {
        "vnum": 759,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 722,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 360,
    "y": -120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR_POI",
    "_color": "#ffd700"
    },
    {
    "id": "759",
    "vnum": 759,
    "name": "Black Market",
    "exits": {
        "west": {
        "vnum": 758,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 777,
        "door": true,
        "closed": true,
        "locked": false
        }
    },
    "x": 480,
    "y": -120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR_POI",
    "_color": "#ffd700"
    },
    {
    "id": "760",
    "vnum": 760,
    "name": "Mercenary's Guild",
    "exits": {
        "south": {
        "vnum": 708,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 360,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "REGAL",
    "_color": "#9370db"
    },
    {
    "id": "761",
    "vnum": 761,
    "name": "Mercenary's Quarters",
    "exits": {},
    "x": 0,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR",
    "_color": "#e6f0e6"
    },
    {
    "id": "762",
    "vnum": 762,
    "name": "The Fighter's Guild",
    "exits": {
        "south": {
        "vnum": 709,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "REGAL",
    "_color": "#9370db"
    },
    {
    "id": "763",
    "vnum": 763,
    "name": "Stables",
    "exits": {
        "east": {
        "vnum": 729,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 600,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "764",
    "vnum": 764,
    "name": "The Arkham Dojo",
    "exits": {
        "north": {
        "vnum": 709,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "REGAL",
    "_color": "#9370db"
    },
    {
    "id": "765",
    "vnum": 765,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 767,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 757,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 740,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 794,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 821,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "766",
    "vnum": 766,
    "name": "Commander's Room",
    "exits": {
        "south": {
        "vnum": 770,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1080,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR",
    "_color": "#e6f0e6"
    },
    {
    "id": "767",
    "vnum": 767,
    "name": "Arkham Bay",
    "exits": {
        "east": {
        "vnum": 5100,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 765,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 795,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 820,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "768",
    "vnum": 768,
    "name": "City Hall",
    "exits": {
        "west": {
        "vnum": 729,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 840,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR",
    "_color": "#e6f0e6"
    },
    {
    "id": "769",
    "vnum": 769,
    "name": "Candi's Confections",
    "exits": {
        "south": {
        "vnum": 713,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 960,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "770",
    "vnum": 770,
    "name": "Bullhorn Inn",
    "exits": {
        "north": {
        "vnum": 766,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 714,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1080,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR_POI",
    "_color": "#ffd700"
    },
    {
    "id": "771",
    "vnum": 771,
    "name": "Magic Moon",
    "exits": {
        "north": {
        "vnum": 748,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 960,
    "y": -120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "772",
    "vnum": 772,
    "name": "Alchemist",
    "exits": {
        "south": {
        "vnum": 749,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 840,
    "y": -360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "773",
    "vnum": 773,
    "name": "Miskatonic University",
    "exits": {
        "north": {
        "vnum": 774,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 717,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 748,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 960,
    "y": -360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "774",
    "vnum": 774,
    "name": "The Library",
    "exits": {
        "east": {
        "vnum": 776,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 773,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 775,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 960,
    "y": -480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR",
    "_color": "#e6f0e6"
    },
    {
    "id": "775",
    "vnum": 775,
    "name": "A Faded Guildhall of the Elements",
    "exits": {
        "east": {
        "vnum": 774,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 840,
    "y": -480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "REGAL",
    "_color": "#9370db"
    },
    {
    "id": "776",
    "vnum": 776,
    "name": "An Aged Channeler's Guild",
    "exits": {
        "west": {
        "vnum": 774,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1080,
    "y": -480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "REGAL",
    "_color": "#9370db"
    },
    {
    "id": "777",
    "vnum": 777,
    "name": "An Iron Ladder",
    "exits": {
        "up": {
        "vnum": 759,
        "door": true,
        "closed": true,
        "locked": false
        },
        "down": {
        "vnum": 778,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "778",
    "vnum": 778,
    "name": "A Dead End of the Shaft",
    "exits": {
        "east": {
        "vnum": 781,
        "door": true,
        "closed": true,
        "locked": false
        },
        "up": {
        "vnum": 777,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 0,
    "_terrain": "REGAL",
    "_color": "#9370db"
    },
    {
    "id": "779",
    "vnum": 779,
    "name": "A candle-lit library",
    "exits": {
        "east": {
        "vnum": 782,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -120,
    "y": -240,
    "width": 100,
    "height": 100,
    "z": 3,
    "_terrain": "INTERIOR",
    "_color": "#e6f0e6"
    },
    {
    "id": "780",
    "vnum": 780,
    "name": "A hidden forest path",
    "exits": {
        "east": {
        "vnum": 799,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 854,
        "door": true,
        "closed": false,
        "locked": false
        }
    },
    "x": 1200,
    "y": -1200,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "MUDDY",
    "_color": "#654321"
    },
    {
    "id": "781",
    "vnum": 781,
    "name": "A Shadowy Guild",
    "exits": {
        "west": {
        "vnum": 778,
        "door": true,
        "closed": true,
        "locked": false
        }
    },
    "x": 600,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 0,
    "_terrain": "REGAL",
    "_color": "#9370db"
    },
    {
    "id": "782",
    "vnum": 782,
    "name": "Laboratory",
    "exits": {
        "west": {
        "vnum": 779,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 756,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 0,
    "y": -240,
    "width": 100,
    "height": 100,
    "z": 3,
    "_terrain": "INTERIOR",
    "_color": "#e6f0e6"
    },
    {
    "id": "783",
    "vnum": 783,
    "name": "Cathedral of the Elder Gods",
    "exits": {
        "north": {
        "vnum": 710,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 784,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 785,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 600,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "784",
    "vnum": 784,
    "name": "Chapel of the Elder Gods",
    "exits": {
        "north": {
        "vnum": 783,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 600,
    "y": 600,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "HOLY",
    "_color": "#ffffff"
    },
    {
    "id": "785",
    "vnum": 785,
    "name": "The Guild of the Eldarian Clerics",
    "exits": {
        "east": {
        "vnum": 783,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "REGAL",
    "_color": "#9370db"
    },
    {
    "id": "786",
    "vnum": 786,
    "name": "The Room of the Pentagram",
    "exits": {
        "down": {
        "vnum": 800,
        "door": true,
        "closed": true,
        "locked": false
        }
    },
    "x": 960,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 3,
    "_terrain": "INTERIOR",
    "_color": "#e6f0e6"
    },
    {
    "id": "787",
    "vnum": 787,
    "name": "The Nightwalker's Haven",
    "exits": {
        "down": {
        "vnum": 753,
        "door": true,
        "closed": true,
        "locked": false
        }
    },
    "x": 120,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 3,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "788",
    "vnum": 788,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 736,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 789,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 830,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -360,
    "y": 600,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "789",
    "vnum": 789,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 738,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 788,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 790,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 825,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 600,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "790",
    "vnum": 790,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 791,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 789,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 796,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 819,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 600,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "791",
    "vnum": 791,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 792,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 738,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 790,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 797,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 818,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "792",
    "vnum": 792,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 793,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 739,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 791,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 798,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 817,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "793",
    "vnum": 793,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 794,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 740,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 792,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 801,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 816,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "794",
    "vnum": 794,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 795,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 765,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 793,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 802,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 815,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "795",
    "vnum": 795,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 805,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 767,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 794,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 803,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 814,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "796",
    "vnum": 796,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 797,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 790,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 3489,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 812,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 600,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "797",
    "vnum": 797,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 798,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 791,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 796,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 3490,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 811,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "798",
    "vnum": 798,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 801,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 792,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 797,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 3491,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 810,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "799",
    "vnum": 799,
    "name": "A shadowy grove",
    "exits": {
        "south": {
        "vnum": 855,
        "door": true,
        "closed": true,
        "locked": false
        }
    },
    "x": 1320,
    "y": -1200,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "THICK_WOODS",
    "_color": "#006400"
    },
    {
    "id": "800",
    "vnum": 800,
    "name": "A Shattered Potter's Store",
    "exits": {
        "north": {
        "vnum": 713,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 786,
        "door": true,
        "closed": true,
        "locked": false
        }
    },
    "x": 960,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR_POI",
    "_color": "#ffd700"
    },
    {
    "id": "801",
    "vnum": 801,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 802,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 793,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 798,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 3492,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 809,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "802",
    "vnum": 802,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 803,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 794,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 801,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 3493,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 808,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "803",
    "vnum": 803,
    "name": "Arkham Bay",
    "exits": {
        "north": {
        "vnum": 804,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 795,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 802,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 3494,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 807,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "804",
    "vnum": 804,
    "name": "Arkham Bay",
    "exits": {
        "east": {
        "vnum": 805,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 803,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 3495,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 806,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": -120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "805",
    "vnum": 805,
    "name": "Arkham Bay",
    "exits": {
        "south": {
        "vnum": 795,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 804,
        "door": false,
        "closed": false,
        "locked": false
        },
        "down": {
        "vnum": 813,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": -120,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "806",
    "vnum": 806,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "east": {
        "vnum": 813,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 807,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 20788,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 804,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": -120,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "807",
    "vnum": 807,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 806,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 814,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 808,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 20789,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 803,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "808",
    "vnum": 808,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 807,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 815,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 809,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 20790,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 802,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "809",
    "vnum": 809,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 808,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 816,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 810,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 20791,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 801,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "810",
    "vnum": 810,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 809,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 817,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 811,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 20792,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 798,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "811",
    "vnum": 811,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 810,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 818,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 812,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 20793,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 797,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "812",
    "vnum": 812,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 811,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 819,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 20794,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 796,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -720,
    "y": 600,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "813",
    "vnum": 813,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "south": {
        "vnum": 814,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 806,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 805,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": -120,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "814",
    "vnum": 814,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 813,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 820,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 815,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 807,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 795,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "815",
    "vnum": 815,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 814,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 821,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 816,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 808,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 794,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "816",
    "vnum": 816,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 815,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 822,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 817,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 809,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 793,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "817",
    "vnum": 817,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 816,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 823,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 818,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 810,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 792,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "818",
    "vnum": 818,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 817,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 824,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 819,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 811,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 791,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "819",
    "vnum": 819,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 818,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 825,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 812,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 790,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -600,
    "y": 600,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "820",
    "vnum": 820,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "south": {
        "vnum": 821,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 814,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 767,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 0,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "821",
    "vnum": 821,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 820,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 826,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 822,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 815,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 765,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "822",
    "vnum": 822,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 821,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 827,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 823,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 816,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 740,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "823",
    "vnum": 823,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 822,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 828,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 824,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 817,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 739,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "824",
    "vnum": 824,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 823,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 829,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 825,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 818,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 738,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "825",
    "vnum": 825,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 824,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 830,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 819,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 789,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -480,
    "y": 600,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "826",
    "vnum": 826,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "south": {
        "vnum": 827,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 821,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 757,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -360,
    "y": 120,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "827",
    "vnum": 827,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 826,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 831,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 828,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 822,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 716,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -360,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "828",
    "vnum": 828,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 827,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 852,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 829,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 823,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 730,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -360,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "829",
    "vnum": 829,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 828,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 857,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 830,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 824,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 736,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -360,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "830",
    "vnum": 830,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 829,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 825,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 788,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -360,
    "y": 600,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "831",
    "vnum": 831,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "south": {
        "vnum": 852,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 827,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 737,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -240,
    "y": 240,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "832",
    "vnum": 832,
    "name": "Arkham Asylum",
    "exits": {
        "north": {
        "vnum": 834,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 833,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 725,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": -360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "833",
    "vnum": 833,
    "name": "Cell",
    "exits": {
        "west": {
        "vnum": 832,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 600,
    "y": -360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "SHADOWY",
    "_color": "#2f4f4f"
    },
    {
    "id": "834",
    "vnum": 834,
    "name": "Cell",
    "exits": {
        "south": {
        "vnum": 832,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": -480,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "SHADOWY",
    "_color": "#2f4f4f"
    },
    {
    "id": "835",
    "vnum": 835,
    "name": "Blacksmith",
    "exits": {
        "north": {
        "vnum": 708,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 360,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR_POI",
    "_color": "#ffd700"
    },
    {
    "id": "836",
    "vnum": 836,
    "name": "Forest Road",
    "exits": {
        "north": {
        "vnum": 837,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 733,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -600,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "WOODEN",
    "_color": "#a0522d"
    },
    {
    "id": "837",
    "vnum": 837,
    "name": "Forest Road",
    "exits": {
        "north": {
        "vnum": 847,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 836,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 838,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -720,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "WOODEN",
    "_color": "#a0522d"
    },
    {
    "id": "838",
    "vnum": 838,
    "name": "A Corn Field",
    "exits": {
        "east": {
        "vnum": 837,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 840,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 600,
    "y": -720,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "PLAINS",
    "_color": "#bdb76b"
    },
    {
    "id": "839",
    "vnum": 839,
    "name": "A Corn Field",
    "exits": {
        "north": {
        "vnum": 842,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 840,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 360,
    "y": -720,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "PLAINS",
    "_color": "#bdb76b"
    },
    {
    "id": "840",
    "vnum": 840,
    "name": "A Corn Field",
    "exits": {
        "north": {
        "vnum": 843,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 838,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 839,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": -720,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "PLAINS",
    "_color": "#bdb76b"
    },
    {
    "id": "841",
    "vnum": 841,
    "name": "A Corn Field",
    "exits": {
        "south": {
        "vnum": 843,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 844,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": -960,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "PLAINS",
    "_color": "#bdb76b"
    },
    {
    "id": "842",
    "vnum": 842,
    "name": "A Corn Field",
    "exits": {
        "north": {
        "vnum": 844,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 843,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 839,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 360,
    "y": -840,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "PLAINS",
    "_color": "#bdb76b"
    },
    {
    "id": "843",
    "vnum": 843,
    "name": "A Corn Field",
    "exits": {
        "north": {
        "vnum": 841,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 840,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 842,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 480,
    "y": -840,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "PLAINS",
    "_color": "#bdb76b"
    },
    {
    "id": "844",
    "vnum": 844,
    "name": "A Corn Field",
    "exits": {
        "north": {
        "vnum": 845,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 841,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 842,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 360,
    "y": -960,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "PLAINS",
    "_color": "#bdb76b"
    },
    {
    "id": "845",
    "vnum": 845,
    "name": "Front Yard",
    "exits": {
        "north": {
        "vnum": 846,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 844,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 360,
    "y": -1080,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "GRASSY",
    "_color": "#7cfc00"
    },
    {
    "id": "846",
    "vnum": 846,
    "name": "An Ancient Druid's Haven",
    "exits": {
        "north": {
        "vnum": 3600,
        "door": true,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 845,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 360,
    "y": -1200,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "847",
    "vnum": 847,
    "name": "Forest Road",
    "exits": {
        "north": {
        "vnum": 848,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 837,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -840,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "WOODEN",
    "_color": "#a0522d"
    },
    {
    "id": "848",
    "vnum": 848,
    "name": "Forest Road",
    "exits": {
        "north": {
        "vnum": 849,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 0,
        "door": true,
        "closed": true,
        "locked": false
        },
        "south": {
        "vnum": 847,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -960,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "WOODEN",
    "_color": "#a0522d"
    },
    {
    "id": "849",
    "vnum": 849,
    "name": "Forest Road",
    "exits": {
        "north": {
        "vnum": 858,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 850,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 848,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -1080,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "WOODEN",
    "_color": "#a0522d"
    },
    {
    "id": "850",
    "vnum": 850,
    "name": "A Trail",
    "exits": {
        "east": {
        "vnum": 851,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 849,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 840,
    "y": -1080,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "MUDDY",
    "_color": "#654321"
    },
    {
    "id": "851",
    "vnum": 851,
    "name": "A Trail",
    "exits": {
        "east": {
        "vnum": 853,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 850,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 960,
    "y": -1080,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "MUDDY",
    "_color": "#654321"
    },
    {
    "id": "852",
    "vnum": 852,
    "name": "Beneath the Arkham bay",
    "exits": {
        "north": {
        "vnum": 831,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 857,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 828,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 734,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -240,
    "y": 360,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "853",
    "vnum": 853,
    "name": "A Trail",
    "exits": {
        "north": {
        "vnum": 871,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 854,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 851,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1080,
    "y": -1080,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "MUDDY",
    "_color": "#654321"
    },
    {
    "id": "854",
    "vnum": 854,
    "name": "A Trail",
    "exits": {
        "east": {
        "vnum": 855,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 853,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1200,
    "y": -1080,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "MUDDY",
    "_color": "#654321"
    },
    {
    "id": "855",
    "vnum": 855,
    "name": "A Trail",
    "exits": {
        "north": {
        "vnum": 799,
        "door": true,
        "closed": true,
        "locked": false
        },
        "south": {
        "vnum": 856,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 854,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1320,
    "y": -1080,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "MUDDY",
    "_color": "#654321"
    },
    {
    "id": "856",
    "vnum": 856,
    "name": "A Clearing",
    "exits": {
        "north": {
        "vnum": 855,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 72799,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 15300,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1320,
    "y": -960,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "LIGHT_WOODS",
    "_color": "#32cd32"
    },
    {
    "id": "857",
    "vnum": 857,
    "name": "Beneath the Arkham Bay",
    "exits": {
        "north": {
        "vnum": 852,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 829,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 735,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": -240,
    "y": 480,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "DEEP_WATER",
    "_color": "#191970"
    },
    {
    "id": "858",
    "vnum": 858,
    "name": "Forest Road",
    "exits": {
        "north": {
        "vnum": 859,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 849,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -1200,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "WOODEN",
    "_color": "#a0522d"
    },
    {
    "id": "859",
    "vnum": 859,
    "name": "A Ruined Village",
    "exits": {
        "north": {
        "vnum": 860,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 858,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -1320,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "ENCAMPMENT",
    "_color": "#556b2f"
    },
    {
    "id": "860",
    "vnum": 860,
    "name": "Main Street",
    "exits": {
        "north": {
        "vnum": 863,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 862,
        "door": true,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 859,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 861,
        "door": true,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -1440,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "861",
    "vnum": 861,
    "name": "Baker's",
    "exits": {
        "east": {
        "vnum": 860,
        "door": true,
        "closed": false,
        "locked": false
        }
    },
    "x": 600,
    "y": -1440,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "862",
    "vnum": 862,
    "name": "A House",
    "exits": {
        "west": {
        "vnum": 860,
        "door": true,
        "closed": false,
        "locked": false
        }
    },
    "x": 840,
    "y": -1440,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR",
    "_color": "#e6f0e6"
    },
    {
    "id": "863",
    "vnum": 863,
    "name": "Main Street",
    "exits": {
        "north": {
        "vnum": 866,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 865,
        "door": true,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 860,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 864,
        "door": true,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -1560,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "864",
    "vnum": 864,
    "name": "A Small House",
    "exits": {
        "east": {
        "vnum": 863,
        "door": true,
        "closed": false,
        "locked": false
        }
    },
    "x": 600,
    "y": -1560,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR",
    "_color": "#e6f0e6"
    },
    {
    "id": "865",
    "vnum": 865,
    "name": "Abandoned General Store",
    "exits": {
        "west": {
        "vnum": 863,
        "door": true,
        "closed": false,
        "locked": false
        }
    },
    "x": 840,
    "y": -1560,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "INTERIOR_POI",
    "_color": "#ffd700"
    },
    {
    "id": "866",
    "vnum": 866,
    "name": "The Outskirts of the Village",
    "exits": {
        "north": {
        "vnum": 867,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 863,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -1680,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "ENCAMPMENT",
    "_color": "#556b2f"
    },
    {
    "id": "867",
    "vnum": 867,
    "name": "A Long Road",
    "exits": {
        "north": {
        "vnum": 868,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 866,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -1800,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "868",
    "vnum": 868,
    "name": "The Crossroads",
    "exits": {
        "north": {
        "vnum": 869,
        "door": false,
        "closed": false,
        "locked": false
        },
        "east": {
        "vnum": 870,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 867,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 873,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -1920,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "VALLEY",
    "_color": "#776e6e"
    },
    {
    "id": "869",
    "vnum": 869,
    "name": "A Road",
    "exits": {
        "north": {
        "vnum": 18000,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 868,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 720,
    "y": -2040,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "870",
    "vnum": 870,
    "name": "A Road",
    "exits": {
        "east": {
        "vnum": 16900,
        "door": false,
        "closed": false,
        "locked": false
        },
        "west": {
        "vnum": 868,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 840,
    "y": -1920,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "871",
    "vnum": 871,
    "name": "The Tower",
    "exits": {
        "south": {
        "vnum": 853,
        "door": true,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 872,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1080,
    "y": -1200,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY",
    "_color": "#708090"
    },
    {
    "id": "872",
    "vnum": 872,
    "name": "Within the Wizard's Chamber",
    "exits": {
        "down": {
        "vnum": 871,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1080,
    "y": -1200,
    "width": 100,
    "height": 100,
    "z": 3,
    "_terrain": "METAL",
    "_color": "#a9a9a9"
    },
    {
    "id": "873",
    "vnum": 873,
    "name": "The Dark Road",
    "exits": {
        "east": {
        "vnum": 868,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 600,
    "y": -1920,
    "width": 100,
    "height": 100,
    "z": 2,
    "_terrain": "STONY_PATH",
    "_color": "#b0c4de"
    },
    {
    "id": "874",
    "vnum": 874,
    "name": "Beneath the Arkham Library",
    "exits": {
        "south": {
        "vnum": 875,
        "door": false,
        "closed": false,
        "locked": false
        },
        "up": {
        "vnum": 717,
        "door": true,
        "closed": false,
        "locked": false
        }
    },
    "x": 1080,
    "y": -360,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "INTERIOR",
    "_color": "#e6f0e6"
    },
    {
    "id": "875",
    "vnum": 875,
    "name": "In a Small Graveyard",
    "exits": {
        "north": {
        "vnum": 874,
        "door": false,
        "closed": false,
        "locked": false
        },
        "south": {
        "vnum": 73100,
        "door": false,
        "closed": false,
        "locked": false
        }
    },
    "x": 1080,
    "y": -240,
    "width": 100,
    "height": 100,
    "z": 1,
    "_terrain": "SHADOWY",
    "_color": "#2f4f4f"
    }
],
"minZ": 0,
"maxZ": 3
},
//Tarot
{
  "id": "Tarot Tower",
  "name": "Tarot Tower",
  "rooms": [
    {
      "id": "8501",
      "vnum": 8501,
      "name": "The World",
      "exits": {
        "north": {
          "vnum": 8502,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8583,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 360,
      "y": 240,
      "width": 100,
      "height": 100,
      "z": 11,
      "_terrain": "NOEXIT",
      "_color": "#ff1493"
    },
    {
      "id": "8502",
      "vnum": 8502,
      "name": "Last Judgment",
      "exits": {
        "east": {
          "vnum": 8503,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8501,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 360,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 11,
      "_terrain": "NOEXIT",
      "_color": "#ff1493"
    },
    {
      "id": "8503",
      "vnum": 8503,
      "name": "The Sun",
      "exits": {
        "south": {
          "vnum": 8504,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8502,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 480,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 11,
      "_terrain": "NOEXIT",
      "_color": "#ff1493"
    },
    {
      "id": "8504",
      "vnum": 8504,
      "name": "The Moon",
      "exits": {
        "north": {
          "vnum": 8503,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8505,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 480,
      "y": 240,
      "width": 100,
      "height": 100,
      "z": 11,
      "_terrain": "NOEXIT",
      "_color": "#ff1493"
    },
    {
      "id": "8505",
      "vnum": 8505,
      "name": "The Star",
      "exits": {
        "north": {
          "vnum": 8504,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8506,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 480,
      "y": 360,
      "width": 100,
      "height": 100,
      "z": 11,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8506",
      "vnum": 8506,
      "name": "The Tower",
      "exits": {
        "east": {
          "vnum": 8505,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8507,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 360,
      "y": 360,
      "width": 100,
      "height": 100,
      "z": 11,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8507",
      "vnum": 8507,
      "name": "The Devil",
      "exits": {
        "north": {
          "vnum": 8508,
          "door": false,
          "closed": false,
          "locked": false
        },
        "east": {
          "vnum": 8506,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 360,
      "width": 100,
      "height": 100,
      "z": 11,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8508",
      "vnum": 8508,
      "name": "Temperance",
      "exits": {
        "north": {
          "vnum": 8509,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8507,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 240,
      "width": 100,
      "height": 100,
      "z": 11,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8509",
      "vnum": 8509,
      "name": "Death",
      "exits": {
        "south": {
          "vnum": 8508,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8510,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 11,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8510",
      "vnum": 8510,
      "name": "The Hanged Man",
      "exits": {
        "east": {
          "vnum": 8511,
          "door": false,
          "closed": false,
          "locked": false
        },
        "up": {
          "vnum": 8509,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8583,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 10,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8511",
      "vnum": 8511,
      "name": "Justice",
      "exits": {
        "east": {
          "vnum": 8512,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8510,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 360,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 10,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8512",
      "vnum": 8512,
      "name": "Wheel of Fortune",
      "exits": {
        "east": {
          "vnum": 8513,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8511,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 480,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 10,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8513",
      "vnum": 8513,
      "name": "The Hermit",
      "exits": {
        "west": {
          "vnum": 8512,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8514,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 10,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8514",
      "vnum": 8514,
      "name": "Strength",
      "exits": {
        "south": {
          "vnum": 8515,
          "door": false,
          "closed": false,
          "locked": false
        },
        "up": {
          "vnum": 8513,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 9,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8515",
      "vnum": 8515,
      "name": "The Chariot",
      "exits": {
        "north": {
          "vnum": 8514,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8516,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": 240,
      "width": 100,
      "height": 100,
      "z": 9,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8516",
      "vnum": 8516,
      "name": "The Lovers",
      "exits": {
        "north": {
          "vnum": 8515,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8517,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": 360,
      "width": 100,
      "height": 100,
      "z": 9,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8517",
      "vnum": 8517,
      "name": "The Hierophant",
      "exits": {
        "north": {
          "vnum": 8516,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8518,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": 480,
      "width": 100,
      "height": 100,
      "z": 9,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8518",
      "vnum": 8518,
      "name": "The Emperor",
      "exits": {
        "east": {
          "vnum": 8517,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8519,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 480,
      "y": 480,
      "width": 100,
      "height": 100,
      "z": 9,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8519",
      "vnum": 8519,
      "name": "The Empress",
      "exits": {
        "east": {
          "vnum": 8518,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8520,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 360,
      "y": 480,
      "width": 100,
      "height": 100,
      "z": 9,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8520",
      "vnum": 8520,
      "name": "The High Priestess",
      "exits": {
        "east": {
          "vnum": 8519,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8521,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 480,
      "width": 100,
      "height": 100,
      "z": 9,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8521",
      "vnum": 8521,
      "name": "The Magician",
      "exits": {
        "north": {
          "vnum": 8522,
          "door": false,
          "closed": false,
          "locked": false
        },
        "up": {
          "vnum": 8520,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 480,
      "width": 100,
      "height": 100,
      "z": 8,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8522",
      "vnum": 8522,
      "name": "The Fool",
      "exits": {
        "north": {
          "vnum": 8523,
          "door": false,
          "closed": false,
          "locked": false
        },
        "up": {
          "vnum": 8521,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8582,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 480,
      "width": 100,
      "height": 100,
      "z": 7,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8523",
      "vnum": 8523,
      "name": "King of Staves",
      "exits": {
        "north": {
          "vnum": 8524,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8522,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8583,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 360,
      "width": 100,
      "height": 100,
      "z": 7,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8524",
      "vnum": 8524,
      "name": "King of Cups",
      "exits": {
        "north": {
          "vnum": 8525,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8523,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 240,
      "width": 100,
      "height": 100,
      "z": 7,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8525",
      "vnum": 8525,
      "name": "King of Swords",
      "exits": {
        "north": {
          "vnum": 8526,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8524,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 7,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8526",
      "vnum": 8526,
      "name": "King of Coins",
      "exits": {
        "south": {
          "vnum": 8525,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8527,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 0,
      "width": 100,
      "height": 100,
      "z": 7,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8527",
      "vnum": 8527,
      "name": "Queen of Staves",
      "exits": {
        "east": {
          "vnum": 8528,
          "door": false,
          "closed": false,
          "locked": false
        },
        "up": {
          "vnum": 8526,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 0,
      "width": 100,
      "height": 100,
      "z": 6,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8528",
      "vnum": 8528,
      "name": "Queen of Cups",
      "exits": {
        "east": {
          "vnum": 8529,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8527,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 360,
      "y": 0,
      "width": 100,
      "height": 100,
      "z": 6,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8529",
      "vnum": 8529,
      "name": "Queen of Swords",
      "exits": {
        "east": {
          "vnum": 8530,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8528,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8583,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 480,
      "y": 0,
      "width": 100,
      "height": 100,
      "z": 6,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8530",
      "vnum": 8530,
      "name": "Queen of Coins",
      "exits": {
        "east": {
          "vnum": 8531,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8529,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": 0,
      "width": 100,
      "height": 100,
      "z": 6,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8531",
      "vnum": 8531,
      "name": "Knight of Staves",
      "exits": {
        "south": {
          "vnum": 8532,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8530,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 720,
      "y": 0,
      "width": 100,
      "height": 100,
      "z": 6,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8532",
      "vnum": 8532,
      "name": "Knight of Cups",
      "exits": {
        "north": {
          "vnum": 8531,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8533,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 720,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 6,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8533",
      "vnum": 8533,
      "name": "Knight of Swords",
      "exits": {
        "north": {
          "vnum": 8532,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8534,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 720,
      "y": 240,
      "width": 100,
      "height": 100,
      "z": 6,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8534",
      "vnum": 8534,
      "name": "Knight of Coins",
      "exits": {
        "north": {
          "vnum": 8533,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8535,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 720,
      "y": 360,
      "width": 100,
      "height": 100,
      "z": 6,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8535",
      "vnum": 8535,
      "name": "Princess of Staves",
      "exits": {
        "north": {
          "vnum": 8534,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8536,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 720,
      "y": 480,
      "width": 100,
      "height": 100,
      "z": 6,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8536",
      "vnum": 8536,
      "name": "Princess of Cups",
      "exits": {
        "north": {
          "vnum": 8535,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8537,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 720,
      "y": 600,
      "width": 100,
      "height": 100,
      "z": 6,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8537",
      "vnum": 8537,
      "name": "Princess of Swords",
      "exits": {
        "west": {
          "vnum": 8538,
          "door": false,
          "closed": false,
          "locked": false
        },
        "up": {
          "vnum": 8536,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 720,
      "y": 600,
      "width": 100,
      "height": 100,
      "z": 5,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8538",
      "vnum": 8538,
      "name": "Princess of Coins",
      "exits": {
        "east": {
          "vnum": 8537,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8539,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": 600,
      "width": 100,
      "height": 100,
      "z": 5,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8539",
      "vnum": 8539,
      "name": "Ten of Staves",
      "exits": {
        "east": {
          "vnum": 8538,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8540,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 480,
      "y": 600,
      "width": 100,
      "height": 100,
      "z": 5,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8540",
      "vnum": 8540,
      "name": "Ten of Cups",
      "exits": {
        "east": {
          "vnum": 8539,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8541,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 360,
      "y": 600,
      "width": 100,
      "height": 100,
      "z": 5,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8541",
      "vnum": 8541,
      "name": "Ten of Swords",
      "exits": {
        "east": {
          "vnum": 8540,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8542,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8583,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 600,
      "width": 100,
      "height": 100,
      "z": 5,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8542",
      "vnum": 8542,
      "name": "Ten of Coins",
      "exits": {
        "east": {
          "vnum": 8541,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8543,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 120,
      "y": 600,
      "width": 100,
      "height": 100,
      "z": 5,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8543",
      "vnum": 8543,
      "name": "Nine of Staves",
      "exits": {
        "east": {
          "vnum": 8542,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8544,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 600,
      "width": 100,
      "height": 100,
      "z": 5,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8544",
      "vnum": 8544,
      "name": "Nine of Cups",
      "exits": {
        "north": {
          "vnum": 8545,
          "door": false,
          "closed": false,
          "locked": false
        },
        "up": {
          "vnum": 8543,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 600,
      "width": 100,
      "height": 100,
      "z": 4,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8545",
      "vnum": 8545,
      "name": "Nine of Swords",
      "exits": {
        "north": {
          "vnum": 8546,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8544,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 480,
      "width": 100,
      "height": 100,
      "z": 4,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8546",
      "vnum": 8546,
      "name": "Nine of Coins",
      "exits": {
        "north": {
          "vnum": 8547,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8545,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 360,
      "width": 100,
      "height": 100,
      "z": 4,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8547",
      "vnum": 8547,
      "name": "Eight of Staves",
      "exits": {
        "north": {
          "vnum": 8548,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8546,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 240,
      "width": 100,
      "height": 100,
      "z": 4,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8548",
      "vnum": 8548,
      "name": "Eight of Cups",
      "exits": {
        "north": {
          "vnum": 8549,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8547,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 4,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8549",
      "vnum": 8549,
      "name": "Eight of Swords",
      "exits": {
        "north": {
          "vnum": 8550,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8548,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 0,
      "width": 100,
      "height": 100,
      "z": 4,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8550",
      "vnum": 8550,
      "name": "Eight of Coins",
      "exits": {
        "east": {
          "vnum": 8551,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8549,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 4,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8551",
      "vnum": 8551,
      "name": "Seven of Staves",
      "exits": {
        "east": {
          "vnum": 8552,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8550,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 120,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 4,
      "_debug": {
        "from": {
          "x": 170,
          "y": 50
        },
        "to": {
          "x": 170,
          "y": 170
        },
        "z": -1
      },
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8552",
      "vnum": 8552,
      "name": "Seven of Cups",
      "exits": {
        "east": {
          "vnum": 8553,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8551,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 4,
      "_debug": {
        "from": {
          "x": 290,
          "y": 50
        },
        "to": {
          "x": 290,
          "y": 170
        },
        "z": -1
      },
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8553",
      "vnum": 8553,
      "name": "Seven of Swords",
      "exits": {
        "east": {
          "vnum": 8554,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8552,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 360,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 4,
      "_debug": {
        "from": {
          "x": 410,
          "y": 50
        },
        "to": {
          "x": 410,
          "y": 170
        },
        "z": -1
      },
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8554",
      "vnum": 8554,
      "name": "Seven of Coins",
      "exits": {
        "east": {
          "vnum": 8555,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8553,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 480,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 4,
      "_debug": {
        "from": {
          "x": 530,
          "y": 50
        },
        "to": {
          "x": 530,
          "y": 170
        },
        "z": -1
      },
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8555",
      "vnum": 8555,
      "name": "Six of Staves",
      "exits": {
        "east": {
          "vnum": 8556,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8554,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8583,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 4,
      "_debug": {
        "from": {
          "x": 650,
          "y": 50
        },
        "to": {
          "x": 650,
          "y": 170
        },
        "z": -1
      },
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8556",
      "vnum": 8556,
      "name": "Six of Cups",
      "exits": {
        "east": {
          "vnum": 8557,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8555,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 720,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 4,
      "_debug": {
        "from": {
          "x": 770,
          "y": 50
        },
        "to": {
          "x": 770,
          "y": 170
        },
        "z": -1
      },
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8557",
      "vnum": 8557,
      "name": "Six of Swords",
      "exits": {
        "west": {
          "vnum": 8556,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8558,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 840,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 4,
      "_debug": {
        "from": {
          "x": 890,
          "y": 50
        },
        "to": {
          "x": 890,
          "y": 170
        },
        "z": -1
      },
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8558",
      "vnum": 8558,
      "name": "Six of Coins",
      "exits": {
        "south": {
          "vnum": 8559,
          "door": false,
          "closed": false,
          "locked": false
        },
        "up": {
          "vnum": 8557,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 840,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 3,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8559",
      "vnum": 8559,
      "name": "Five of Staves",
      "exits": {
        "north": {
          "vnum": 8558,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8560,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 840,
      "y": 0,
      "width": 100,
      "height": 100,
      "z": 3,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8560",
      "vnum": 8560,
      "name": "Five of Cups",
      "exits": {
        "north": {
          "vnum": 8559,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8561,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 840,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 3,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8561",
      "vnum": 8561,
      "name": "Five of Swords",
      "exits": {
        "north": {
          "vnum": 8560,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8562,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 840,
      "y": 240,
      "width": 100,
      "height": 100,
      "z": 3,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8562",
      "vnum": 8562,
      "name": "Five of Coins",
      "exits": {
        "north": {
          "vnum": 8561,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8563,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 840,
      "y": 360,
      "width": 100,
      "height": 100,
      "z": 3,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8563",
      "vnum": 8563,
      "name": "Four of Staves",
      "exits": {
        "north": {
          "vnum": 8562,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8564,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 840,
      "y": 480,
      "width": 100,
      "height": 100,
      "z": 3,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8564",
      "vnum": 8564,
      "name": "Four of Cups",
      "exits": {
        "north": {
          "vnum": 8563,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8565,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 840,
      "y": 600,
      "width": 100,
      "height": 100,
      "z": 3,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8565",
      "vnum": 8565,
      "name": "Four of Swords",
      "exits": {
        "north": {
          "vnum": 8564,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8566,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 840,
      "y": 720,
      "width": 100,
      "height": 100,
      "z": 3,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8566",
      "vnum": 8566,
      "name": "Four of Coins",
      "exits": {
        "west": {
          "vnum": 8567,
          "door": false,
          "closed": false,
          "locked": false
        },
        "up": {
          "vnum": 8565,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 840,
      "y": 720,
      "width": 100,
      "height": 100,
      "z": 2,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8567",
      "vnum": 8567,
      "name": "Three of Staves",
      "exits": {
        "east": {
          "vnum": 8566,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8568,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 720,
      "y": 720,
      "width": 100,
      "height": 100,
      "z": 2,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8568",
      "vnum": 8568,
      "name": "Three of Cups",
      "exits": {
        "east": {
          "vnum": 8567,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8569,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": 720,
      "width": 100,
      "height": 100,
      "z": 2,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8569",
      "vnum": 8569,
      "name": "Three of Swords",
      "exits": {
        "east": {
          "vnum": 8568,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8570,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 480,
      "y": 720,
      "width": 100,
      "height": 100,
      "z": 2,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8570",
      "vnum": 8570,
      "name": "Three of Coins",
      "exits": {
        "east": {
          "vnum": 8569,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8571,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 360,
      "y": 720,
      "width": 100,
      "height": 100,
      "z": 2,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8571",
      "vnum": 8571,
      "name": "Two of Staves",
      "exits": {
        "east": {
          "vnum": 8570,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8572,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 720,
      "width": 100,
      "height": 100,
      "z": 2,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8572",
      "vnum": 8572,
      "name": "Two of Cups",
      "exits": {
        "east": {
          "vnum": 8571,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8573,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 120,
      "y": 720,
      "width": 100,
      "height": 100,
      "z": 2,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8573",
      "vnum": 8573,
      "name": "Two of Swords",
      "exits": {
        "east": {
          "vnum": 8572,
          "door": false,
          "closed": false,
          "locked": false
        },
        "down": {
          "vnum": 8574,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 720,
      "width": 100,
      "height": 100,
      "z": 2,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8574",
      "vnum": 8574,
      "name": "Two of Coins",
      "exits": {
        "north": {
          "vnum": 8575,
          "door": false,
          "closed": false,
          "locked": false
        },
        "up": {
          "vnum": 8573,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 720,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8575",
      "vnum": 8575,
      "name": "Ace of Staves",
      "exits": {
        "north": {
          "vnum": 8576,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8574,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 600,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8576",
      "vnum": 8576,
      "name": "Ace of Cups",
      "exits": {
        "north": {
          "vnum": 8577,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8575,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 480,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8577",
      "vnum": 8577,
      "name": "Ace of Swords",
      "exits": {
        "north": {
          "vnum": 8578,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8576,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 360,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8578",
      "vnum": 8578,
      "name": "Ace of Coins",
      "exits": {
        "north": {
          "vnum": 8579,
          "door": false,
          "closed": false,
          "locked": false
        },
        "south": {
          "vnum": 8577,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 0,
      "y": 240,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8579",
      "vnum": 8579,
      "name": "Entrance to the Tower",
      "exits": {
        "south": {
          "vnum": 8578,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8580,
          "door": true,
          "closed": true,
          "locked": false
        }
      },
      "x": 0,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8580",
      "vnum": 8580,
      "name": "Approaching the Tower",
      "exits": {
        "east": {
          "vnum": 8579,
          "door": true,
          "closed": true,
          "locked": false
        },
        "west": {
          "vnum": 8581,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": -120,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8581",
      "vnum": 8581,
      "name": "Approaching the Tower",
      "exits": {
        "east": {
          "vnum": 8580,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8593,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": -240,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8582",
      "vnum": 8582,
      "name": "The Craggy Rocks Below",
      "exits": {
        "down": {
          "vnum": 8583,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 240,
      "y": 480,
      "width": 100,
      "height": 100,
      "z": 6,
      "_terrain": "NOEXIT",
      "_color": "#ff1493"
    },
    {
      "id": "8583",
      "vnum": 8583,
      "name": "A slide down",
      "exits": {
        "down": {
          "vnum": 8584,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 3,
      "_terrain": "NOEXIT",
      "_color": "#ff1493"
    },
    {
      "id": "8584",
      "vnum": 8584,
      "name": "A slide down",
      "exits": {
        "down": {
          "vnum": 8585,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 2,
      "_terrain": "NOEXIT",
      "_color": "#ff1493"
    },
    {
      "id": "8585",
      "vnum": 8585,
      "name": "A slide down",
      "exits": {
        "down": {
          "vnum": 8586,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "NOEXIT",
      "_color": "#ff1493"
    },
    {
      "id": "8586",
      "vnum": 8586,
      "name": "A sudden halt",
      "exits": {
        "south": {
          "vnum": 8579,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": 600,
      "y": -120,
      "width": 100,
      "height": 100,
      "z": 0,
      "_terrain": "STONY",
      "_color": "#708090"
    },
    {
      "id": "8587",
      "vnum": 8587,
      "name": "Shallow waters of the Southern Sea",
      "exits": {
        "east": {
          "vnum": 8588,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 6899,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": -1080,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "CALM_WATER",
      "_color": "#20b2aa"
    },
    {
      "id": "8588",
      "vnum": 8588,
      "name": "On the beach",
      "exits": {
        "east": {
          "vnum": 8589,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8587,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": -960,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "SANDY",
      "_color": "#fffacd"
    },
    {
      "id": "8589",
      "vnum": 8589,
      "name": "On the sandy beach",
      "exits": {
        "east": {
          "vnum": 8590,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8588,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": -840,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "SANDY",
      "_color": "#fffacd"
    },
    {
      "id": "8590",
      "vnum": 8590,
      "name": "On the sandy beach",
      "exits": {
        "east": {
          "vnum": 8591,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8589,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": -720,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "SANDY",
      "_color": "#fffacd"
    },
    {
      "id": "8591",
      "vnum": 8591,
      "name": "On the sandy beach",
      "exits": {
        "east": {
          "vnum": 8592,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8590,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": -600,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "SANDY",
      "_color": "#fffacd"
    },
    {
      "id": "8592",
      "vnum": 8592,
      "name": "A path in a low grassy field",
      "exits": {
        "north": {
          "vnum": 28180,
          "door": false,
          "closed": false,
          "locked": false
        },
        "east": {
          "vnum": 8593,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8591,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": -480,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "MUDDY",
      "_color": "#654321"
    },
    {
      "id": "8593",
      "vnum": 8593,
      "name": "On a path",
      "exits": {
        "east": {
          "vnum": 8581,
          "door": false,
          "closed": false,
          "locked": false
        },
        "west": {
          "vnum": 8592,
          "door": false,
          "closed": false,
          "locked": false
        }
      },
      "x": -360,
      "y": 120,
      "width": 100,
      "height": 100,
      "z": 1,
      "_terrain": "MUDDY",
      "_color": "#654321"
    }
  ],
  "minZ": 0,
  "maxZ": 11
}
];
