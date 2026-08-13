// Get the file upload button by id.
const logInput = document.getElementById("log");

// Movement abilities to look for in data by name.
const movement = [
    "Panther", 
    "Float",
    "Backdash",
    "DoubleJump",
    "Kicker",
    "Slide",  
    "Undine", 
    "Skula", 
    "GiantBat", 
    "HighJump",
    "TimeStop"
];

// Transitions lookup dictionary.
const transLookup = {
    "inner_corridor_door_1" : "Castle Corridor 1 (opposite first save)",
    "inner_corridor_door_2" : "Castle Corridor 2 (climb before Creaking Skull)",
    "inner_corridor_door_3" : "Castle Corridor 3 (Skula exit)",
    "inner_corridor_door_4" : "Castle Corridor 4 (Undine exit)",
    "inner_corridor_door_5" : "Castle Corridor 5 (first exit after Flying Armor gap)",
    "inner_corridor_door_6" : "Castle Corridor 6 (first flight exit)",
    "inner_corridor_door_7" : "Castle Corridor 7 (second flight exit)",
    "inner_corridor_door_8" : "Castle Corridor 8 (end of Corridor)",
    "chapel_door_1" : "Chapel 1 (top)",
    "chapel_door_2" : "Chapel 2 (bottom)",
    "study_door_1" : "Study 1 (top)",
    "study_door_2" : "Study 2 (bottom)",
    "dance_hall_door_1" : "Dance Hall 1 (lower)",
    "dance_hall_door_2" : "Dance Hall 2 (upper)",
    "inner_quarters_door_1" : "Inner Quarters 1 (left)",
    "inner_quarters_door_2" : "Inner Quarters 2 (middle)",
    "inner_quarters_door_3" : "Inner Quarters 3 (right)",
    "floating_garden_door_1" : "Floating Gardens 1 (bottom)",
    "floating_garden_door_2" : "Floating Gardens 2 (top)",
    "clock_tower_door_1" : "Clock Tower 1 (top left)",
    "clock_tower_door_2" : "Clock Tower 2 (top right)",
    "clock_tower_door_3" : "Clock Tower 3 (bottom)",
    "reservoir_door_1" : "Underground Reservoir 1 (western)",
    "reservoir_door_2" : "Underground Reservoir 2 (eastern)",
    "reservoir_door_3" : "Underground Reservoir 3 (waterfall)",
    "reservoir_door_4" : "Underground Reservoir 4 (Cemetery shaft)",
    "reservoir_door_5" : "Underground Reservoir 5 (bottom left)",
    "cemetary_door_1" : "Cemetery",
    "arena_door_1" : "Arena",
    "forbidden_door_1" : "Forbidden Area 1 (middle)",
    "forbidden_door_2" : "Forbidden Area 2 (left)",
    "top_floor_door_1" : "Top Floor 1 (bottom left)",
    "top_floor_door_2" : "Top Floor 2 (bottom right)",
    "top_floor_door_3" : "Top Floor 3 (top)"
};

// Items lookup dictionary.
const itemLookup = {
    "100" : "$1",
    "101" : "$10",
    "102" : "$50",
    "103" : "$100",
    "104" : "$500",
    "105" : "$1,000",
    "106" : "$2,000",
    "200" : "Potion",
    "201" : "High Potion",
    "202" : "Super Potion",
    "203" : "Meat Strip",
    "204" : "Tasty Meat",
    "205" : "Mind Up",
    "206" : "High Mind Up",
    "207" : "Mana Prism",
    "208" : "Anti-Venom",
    "209" : "Uncurse Potion",
    "20A" : "Potato Pancake",
    "20B" : "Beef Curry",
    "20C" : "Ramen",
    "20D" : "Cream Soda",
    "20E" : "Cream Puff",
    "20F" : "Milk",
    "210" : "Coffee",
    "211" : "Tea",
    "212" : "Pudding",
    "213" : "Strawberry",
    "214" : "Melon",
    "215" : "Grapes",
    "216" : "Persimmon",
    "217" : "Rotten Meat",
    "218" : "Spoiled Milk",
    "219" : "Skull Key",
    "21A" : "Ancient Book 1",
    "21B" : "Ancient Book 2",
    "21C" : "Ancient Book 3",
    "21D" : "Castle Map 1",
    "21E" : "Castle Map 2",
    "21F" : "Castle Map 3",
    "300" : "Knife",
    "301" : "Baselard",
    "302" : "Combat Knife",
    "303" : "Short Sword",
    "304" : "Bastard Sword",
    "305" : "Whip Sword",
    "306" : "Gladius",
    "307" : "Gram",
    "308" : "Milican\'s Sword",
    "309" : "Hrunting",
    "30A" : "Mystletain",
    "30B" : "Rahab\'s Sword",
    "30C" : "Durandal",
    "30D" : "Laevatain",
    "30E" : "Burtgang",
    "30F" : "Kaladbolg",
    "310" : "Vjaya",
    "311" : "Balmung",
    "312" : "Broadsword",
    "313" : "Scimitar",
    "314" : "Claymore",
    "315" : "Great Sword",
    "316" : "Joyeuse",
    "317" : "Dainslef",
    "318" : "Ascalon",
    "319" : "Claimh Solais",
    "31A" : "Final Sword",
    "31B" : "Bamboo Sword",
    "31C" : "Katana",
    "31D" : "Osafune",
    "31E" : "Onikiri",
    "31F" : "Kunitsuna",
    "320" : "Yasutsuna",
    "321" : "Muramasa",
    "322" : "Hammer",
    "323" : "Warhammer",
    "324" : "Excalibur",
    "325" : "Tallhammer",
    "326" : "Battle Axe",
    "327" : "Death\'s Sickle",
    "328" : "Rapier",
    "329" : "Estoc",
    "32A" : "Cutall",
    "32B" : "Spear",
    "32C" : "Trident",
    "32D" : "Lance",
    "32E" : "Partizan",
    "32F" : "Gabolg",
    "330" : "Gungner",
    "331" : "Ronginus\' Spear",
    "332" : "Cestus",
    "333" : "Kaiser Knuckle",
    "334" : "Mach Punch",
    "335" : "Whip Knuckle",
    "336" : "Poison Fist",
    "337" : "Handgun",
    "338" : "Silver Gun",
    "339" : "Positron Rifle",
    "33A" : "Valmanway",
    "400" : "Casual Clothes",
    "401" : "Cloth Tunic",
    "402" : "Gym Clothes",
    "403" : "War Fatigues",
    "404" : "Ninja Suit",
    "405" : "Soldier Uniform",
    "406" : "Pitch Black Suit",
    "407" : "Olrox\'s Suit",
    "408" : "Dracula\'s Tunic",
    "409" : "Leather Plate",
    "40A" : "Copper Plate",
    "40B" : "Iron Plate",
    "40C" : "Steel Plate",
    "40D" : "Silver Plate",
    "40E" : "Gold Plate",
    "40F" : "Eversing",
    "410" : "Samurai Armor",
    "411" : "Silk Robe",
    "412" : "Elfin Robe",
    "413" : "Death\'s Robe",
    "414" : "Demon\'s Mail",
    "415" : "Armor of Fire",
    "416" : "Armor of Water",
    "417" : "Blocking Mail",
    "418" : "Army Jacket",
    "419" : "Cape",
    "41A" : "Crimson Cloak",
    "41B" : "Black Cloak",
    "41C" : "Pendant",
    "41D" : "Heart Pendant",
    "41E" : "Scarf",
    "41F" : "Red Scarf",
    "420" : "Ancient Belt",
    "421" : "Black Belt",
    "422" : "Skull Necklace",
    "423" : "Flame Necklace",
    "424" : "Satan\'s Ring",
    "425" : "Tear Of Blood",
    "426" : "Lucky Charm",
    "427" : "Rare Ring",
    "428" : "Soul Eater Ring",
    "429" : "Rune Ring",
    "42A" : "Sherman Ring",
    "42B" : "Gold Ring",
    "42C" : "Chaos Ring",
    "501" : "Winged Skeleton",
    "502" : "Bat",
    "503" : "Skeleton",
    "504" : "Merman",
    "505" : "Axe Armor",
    "506" : "Skull Archer",
    "507" : "Killer Fish",
    "508" : "Blue Crow",
    "509" : "Zombie Soldier",
    "50A" : "Ghost",
    "50B" : "Siren",
    "50C" : "Tiny Devil",
    "50D" : "Durga",
    "50E" : "Rock Armor",
    "50F" : "Student Witch",
    "510" : "Arachne",
    "511" : "Fleaman",
    "512" : "Evil Butcher",
    "513" : "Waiter Skeleton",
    "514" : "Altair",
    "515" : "Mudman",
    "516" : "Cockatrice",
    "517" : "Werewolf",
    "518" : "Harpy",
    "519" : "Une",
    "51A" : "Needles",
    "51B" : "Man-Eater",
    "51C" : "Ukoback",
    "51D" : "Fish Head",
    "51E" : "Disc Armor",
    "51F" : "Nightmare",
    "520" : "Slime",
    "521" : "Dryad",
    "522" : "Ripper",
    "523" : "Werejaguar",
    "524" : "Weretiger",
    "525" : "Biphron",
    "526" : "Mandragora",
    "527" : "Beam Skeleton",
    "528" : "Skull Millione",
    "529" : "Giant Skeleton",
    "52A" : "Gladiator",
    "52B" : "Demon Lord",
    "52C" : "Flame Demon",
    "52D" : "Lightning Doll",
    "52E" : "Valkyrie",
    "52F" : "Bomber Armor",
    "530" : "Red Minotaur",
    "531" : "Legion",
    "532" : "Balore",
    "533" : "Killer Doll",
    "534" : "Nemesis",
    "535" : "Killer Mantle",
    "536" : "Kyoma Demon",
    "537" : "Chronomage",
    "601" : "Flying Armor",
    "602" : "Giant Bat",
    "603" : "Black Panther",
    "604" : "Buer",
    "605" : "Witch",
    "606" : "Giant Ghost",
    "607" : "Final Guard",
    "608" : "Great Armor",
    "609" : "Catoblepas",
    "60A" : "Bone Pillar",
    "60B" : "Cagnazzo",
    "60C" : "Big Golem",
    "60D" : "Shadow Knight",
    "60E" : "Creaking Skull",
    "60F" : "Medusa Head",
    "610" : "Persephone",
    "611" : "Alura Une",
    "612" : "Devil",
    "613" : "Manticore",
    "614" : "Curly",
    "615" : "Sky Fish",
    "616" : "Imp",
    "617" : "Alastor",
    "618" : "Death",
    "701" : "Undine",
    "702" : "Skula",
    "703" : "Zombie Officer",
    "704" : "Iron Golem",
    "705" : "Dead Warrior",
    "706" : "Peeping Eye",
    "707" : "Succubus",
    "708" : "Flesh Golem",
    "709" : "Tsuchinoko",
    "70A" : "Giant Worm",
    "70B" : "Wooden Golem",
    "70C" : "Zombie",
    "70D" : "Lubicant",
    "70E" : "Headhunter",
    "70F" : "Basilisk",
    "710" : "Erinys",
    "711" : "Mimic",
    "712" : "Arc Demon",
    "713" : "Poison Worm",
    "714" : "Ectoplasm",
    "715" : "Gargoyle",
    "716" : "Skeleton Knight",
    "717" : "Minotaur",
    "718" : "Golem",
    "719" : "Triton",
    "71A" : "White Dragon",
    "71B" : "Quezlcoatl",
    "71C" : "Gorgon",
    "71D" : "Dead Crusader",
    "71E" : "Red Crow",
    "71F" : "Lilith",
    "720" : "Bael",
    "721" : "Stolas",
    "722" : "Ghost Dancer",
    "723" : "Gremlin",
    "801" : "Grave Keeper",
    "802" : "Skeleton Blaze",
    "803" : "Malphas",
    "804" : "Kicker Skeleton",
    "805" : "Hippogryph",
    "806" : "Galamoth"
}

// Item location lookup dictionary.
const itemLocLookup = {
    // Corridor
    "item_00" : "Entrance, above Hammer and Mina",
    "item_01" : "Above Corridor warp on hanging platform",
    "item_02" : "Above Corridor warp on right side",
    "item_03" : "Middle-left of Corridor fountain room",
    "item_04" : "Top of Corridor fountain room",
    "item_05" : "Bottom of Corridor fountain room",
    "item_06" : "Climb before Creaking Skull",
    "item_07" : "Breakable wall down after Creaking Skull",
    "item_08" : "Room immediately after Flying Armor gap",
    "item_09" : "Left side of big room after Flying Armor gap",
    "item_0a" : "Right side of big room after Flying Armor gap",
    "item_0b" : "Ledge in water room down after Creaking Skull",
    "item_0c" : "Flight gap outside final Corridor save room",
    "item_0d" : "Outside save after Creaking Skull",
    "item_0e" : "Upper Corridor flight ledge",
    "item_0f" : "Upper Corridor next to flight ledge",
    "item_10" : "Upper Corridor top right dead-end room",
    "item_11" : "Upper Corridor bottom right dead-end room",
    "item_12" : "End of Corridor detour, left of water area",
    "item_13" : "End of Corridor detour, right of water area",
    // Chapel
    "item_14" : "Below Chapel warp",
    "item_15" : "Chapel bell tower, top leftmost item",
    "item_16" : "Chapel bell tower, bottom left item",
    "item_17" : "Chapel bell tower, middle left item",
    "item_18" : "Chapel bell tower, top left-ish item",
    "item_19" : "Chapel bell tower, top right item",
    "item_1a" : "Right of Chapel warp",
    "item_1b" : "Top of Manticore boss room",
    "item_1c" : "Chapel attic",
    "item_1d" : "Chapel breakable ceiling",
    "item_1e" : "Chapel staircases room",
    "item_1f" : "Room halfway up the right side of Manticore boss room",
    // Study
    "item_20" : "Breakable wall in top left of big room in Study",
    "item_21" : "Opposite breakable wall in big room of Study",
    "item_22" : "Left square after descending into lower Study",
    "item_23" : "Behind Study boss",
    "item_24" : "Top right check of upper Study",
    "item_25" : "Above Study push box room",
    "item_26" : "Study push box room",
    "item_27" : "Study backdash room",
    "item_28" : "Study bottom exit",
    "item_29" : "Room up and to the right of Study boss",
    "item_2a" : "Lower left check of upper Study",
    // Dance Hall
    "item_2b" : "Dance Hall breakable wall",
    "item_2c" : "Upper Dance Hall top left room",
    "item_2d" : "Central Dance Hall slide gap",
    "item_2e" : "Upper Dance Hall top middle room",
    "item_2f" : "Lower Dance Hall slide gap",
    "item_30" : "Behind Dance Hall boss",
    "item_31" : "Upper Dance Hall top right room",
    "item_32" : "Dance Hall breakable ceiling",
    // Quarters
    "item_33" : "Galamoth, left item",
    "item_34" : "Galamoth, right item",
    "item_35" : "Above left exit of Inner Quarters",
    "item_36" : "Inner Quarters breakable floor",
    "item_37" : "Inner Quarters breakable wall",
    "item_38" : "Stormy tower top left",
    "item_39" : "Stormy tower top right",
    "item_3a" : "Inner Quarters right side pit room",
    // Gardens
    "item_3b" : "Lower Floating Gardens",
    "item_3c" : "Floating Gardens big room, left side",
    "item_3d" : "Floating Gardens big room, right side",
    "item_3e" : "Rightmost upper Floating Gardens room",
    "item_3f" : "Floating Gardens upper exit room",
    "item_40" : "Upper Floating Gardens second-leftmost room",
    // Clock Tower
    "item_41" : "Bottom left of Clock Tower, slide check",
    "item_42" : "Bottom left of Clock Tower, pendulum room",
    "item_43" : "Behind Clock Tower boss",
    "item_44" : "Clock Tower, halfway up to boss",
    "item_45" : "Clock Tower breakable wall",
    // Reservoir and Cemetery
    "item_46" : "Below western Reservoir door",
    "item_47" : "Western Reservoir, ledge before required Skula",
    "item_48" : "Western Reservoir, ceiling room",
    "item_49" : "Western Reservoir, left room after descent",
    "item_4a" : "Water pool next to Reservoir's bottom left exit",
    "item_4b" : "Reservoir breakable wall",
    "item_4c" : "Reservoir slide tunnel",
    "item_4d" : "Bottom middle of big room in upper central Reservoir",
    "item_4e" : "Behind waterfall, halfway up",
    "item_4f" : "Ledge by eastern Reservoir entrance",
    "item_50" : "Diagonally opposite from Reservoir warp",
    "item_51" : "Cemetery bottom right",
    "item_52" : "Waterfall room, top left",
    "item_53" : "Bottom of Reservoir boat jump room",
    "item_54" : "Waterfall attic",
    "item_55" : "Eastern Reservoir, above the water",
    "item_56" : "Directly below eastern Reservoir entrance",
    "item_57" : "Eastern Reservoir, top right",
    "item_58" : "Eastern Reservoir breakable wall",
    "item_59" : "Top of waterfall",
    "item_5a" : "Behind waterfall",
    "item_5b" : "Cemetery top left",
    "item_5c" : "Cemetery top middle",
    "item_5d" : "Cemetery top right",
    // Arena
    "item_5e" : "Behind Arena boss",
    "item_5f" : "Arena, left corridor from broken elevator shaft",
    "item_60" : "Arena bathhouse",
    "item_61" : "Arena wrecking ball room",
    "item_62" : "Worst Room",
    "item_63" : "Dance Dance Revolution",
    "item_64" : "Arena, top of broken elevator shaft",
    // Top Floor
    "item_65" : "Behind Graham, left item",
    "item_66" : "Behind Graham, right item",
    "item_67" : "Under the throne room",
    "item_68" : "Top Floor breakable ceiling",
    "item_69" : "Top Floor breakable wall",
    "item_6a" : "Top Floor, first room on left path",
    "item_6b" : "Room opposite the stairs to Graham",
    "item_6c" : "Below Top Floor warp",
    "item_6d" : "Top Floor big outdoor room",
    // Forbidden
    "item_6e" : "Forbidden Area breakable wall",
    "item_6f" : "Bottom of Forbidden Area",
    // Chaotic
    "item_70" : "Chaotic Realm, second check",
    "item_71" : "Chaotic Realm, third check",
    "item_72" : "Chaotic Realm, first check",
    // Misc. checks that were only money pickups before
    "item_73" : "Lower Dance Hall long room",
    "item_74" : "Top of Reservoir boat jump room",
    "item_75" : "Arena Giant Skeleton room",
}

// Detect file uploads and start operations.
logInput.addEventListener('change', async (event) => {
    console.log("Updating...");

    // If at least one file received...
    if(event.target.files.length > 0) {
        // Grab it and send a log that it was received...
        const logFile = event.target.files[0];
        console.log(`File ${logFile.name} received.`);

        // Extract file contents and report length...
        const contents = await logFile.text();
        const logLines = contents.split(/\r?\n/);
        console.log(`File contains ${logLines.length} lines.`);
        
        // And send lines to be processed.
        processInput(logLines);
    }
});

// Function that processes console log input data.
function processInput(logLines) {

    // Define data storage structures.
    let seed = "";
    let transitions = [];
    let bookLocations = {
        "Book1" : [],
        "Book2" : [],
        "Book3" : []
    };
    let movementLocations = {
        "Panther" : [],
        "Backdash" : [],
        "Float" : [],
        "DoubleJump" : [],
        "Slide" : [],
        "Undine" : [],
        "Kicker" : [],
        "Skula" : [],
        "GiantBat" : [],
        "TimeStop" : [],
        "HighJump" : []
    };
    let itemsByArea = {
        "Castle Corridor" : [],
        "Chapel" : [],
        "Study" : [],
        "Dance Hall" : [],
        "Inner Quarters" : [],
        "Floating Gardens" : [],
        "Clock Tower" : [],
        "Underground Reservoir" : [],
        "Forbidden Area" : [],
        "Arena" : [],
        "Cemetery" : [],
        "Top Floor" : [],
        "Chaotic Realm" : []
    };

    // Index for iteration (I prefer this method in this case).
    let lineIndex = 0;   

    // Iterate to find start of data (seed readout line).
    while (!logLines[lineIndex].includes("Seed:")) { lineIndex++; }
    console.log(`Found start of data on line ${lineIndex + 1}`);
    seed = logLines[lineIndex].replace(/aosrando-opt-bundle\.js:\d+(?::\d+)?/g, "").trim().split(" ")[1];
    lineIndex++;

    // Continue to end of file, or until irrelevant data found.
    while (lineIndex < logLines.length && !logLines[lineIndex].includes("Seed:")) { 
        // Get cleaned line.
        let line = logLines[lineIndex].replace(/aosrando-opt-bundle\.js:\d+(?::\d+)?/g, "").trim();

        // Detect area transition lines.
        if (line.includes("<=>")) {
            let transData = line.match(/(.+) <=> (.+)/);
            transitions.push(`${transLookup[transData[1]]} <=> ${transLookup[transData[2]]}`)
        }

        // Detect book placement lines.
        if (line.includes("Placed Book")) {
            let bookData = line.match(/Placed (.+) at (.+)/);
            bookLocations[bookData[1]].push(bookData[2]);
        }

        // Detect movement progression placement lines.
        if (movement.some(mv => line.includes("Placed " + mv))) {
            let moveData = line.match(/Placed (.+) at (.+)/);
            movementLocations[moveData[1]].push(moveData[2]);
        }

        // Detect placed item/canister lines.
        if (line.includes("placed item")) {
            // Extract item and location numbers.
            let itemData = line.match(/placed item: (.+) at (.+)/);
            itemsByArea[sortByArea(itemData[2])].push(`${itemLookup[itemData[1].toUpperCase()]} - ${itemLocLookup[itemData[2]]}`);
        }

        lineIndex++; 
    }

    // Output reason for termination (for debug).
    let terminationStmt = lineIndex < logLines.length ? "Reached EOF." : "Reached end of relevant data.";
    console.log(terminationStmt);

    // Then put all the data together...
    console.log("Formatting output...");
    let outputData = formatOutput(seed, transitions, bookLocations, movementLocations, itemsByArea);

    //console.log(transitions);
    //console.log(bookLocations);
    //console.log(movementLocations);
    //console.log(itemsByArea);

    // Send data to file and have it download.
    downloadFile(outputData, "aosrand_spoiler_" + seed);
}

// Function for sorting item locations by area.
function sortByArea(itemLoc) {
    // Extract number from location identifier and convert from hex to decimal.
    let checkID = parseInt(itemLoc.slice(-2), 16);

    // Sort based on known check ranges.
    if (checkID < 20) { return "Castle Corridor"; }
    else if (checkID < 32) { return "Chapel"; }
    else if (checkID < 43) { return "Study"; }
    else if (checkID < 51 || checkID === 115) { return "Dance Hall"; }
    else if (checkID < 59) { return "Inner Quarters"; }
    else if (checkID < 65) { return "Floating Gardens"; }
    else if (checkID < 70) { return "Clock Tower"; }
    else if ((checkID < 91 && checkID !== 81) || checkID === 116) { return "Underground Reservoir"; }
    else if (checkID < 94) { return "Cemetery"; }
    else if (checkID < 101 || checkID === 117) { return "Arena"; }
    else if (checkID < 110) { return "Top Floor"; }
    else if (checkID < 112) { return "Forbidden Area"; }
    else { return "Chaotic Realm"; }
}

// Function for assembling output in string form.
function formatOutput(seed, transitions, bookLocations, movementLocations, itemsByArea) {
    // Header.
    let outputStr = "Spoiler log for AoSR2 seed " + seed + "\nRandomizer by Fuse, log translation program by TheOneCalledJ";
    
    // Format area transitions.
    outputStr += "\n------------------------------------------------------------\nArea Transitions\n------------------------------------------------------------\n"
    transitions.sort();
    for (const transition of transitions) {outputStr += (transition + "\n");}
    
    // Format movement progression locations.
    outputStr += "\n------------------------------------------------------------\nMovement Locations\n------------------------------------------------------------\n"
    outputStr += "Black Panther: ";
    for (const loc of movementLocations["Panther"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nGrave Keeper: ";
    for (const loc of movementLocations["Backdash"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nFlying Armor: ";
    for (const loc of movementLocations["Float"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nMalphas: ";
    for (const loc of movementLocations["DoubleJump"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nSkeleton Blaze: ";
    for (const loc of movementLocations["Slide"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nUndine: ";
    for (const loc of movementLocations["Undine"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nKicker Skeleton: ";
    for (const loc of movementLocations["Kicker"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nSkula: ";
    for (const loc of movementLocations["Skula"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nGiant Bat: ";
    for (const loc of movementLocations["GiantBat"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nGalamoth: ";
    for (const loc of movementLocations["TimeStop"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nHippogryph: ";
    for (const loc of movementLocations["HighJump"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    
    // Format ancient book locations.
    outputStr += "\n\n------------------------------------------------------------\nBook Locations\n------------------------------------------------------------\n"
    outputStr += "Red Book(s): ";
    for (const loc of bookLocations["Book1"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nBlue Book(s): ";
    for (const loc of bookLocations["Book2"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);
    outputStr += "\nYellow Book(s): ";
    for (const loc of bookLocations["Book3"]) { outputStr += ("\"" + loc + "\", "); }
    outputStr = outputStr.slice(0, -2);

    // Format items, organized by area.
    outputStr += "\n\n------------------------------------------------------------\nItems, By Area\n------------------------------------------------------------"
    for (const area of Object.keys(itemsByArea)) {
        outputStr += ("\n" + area + ":");
        itemsByArea[area].sort();
        for (const item of itemsByArea[area]) { outputStr += ("\n" + item); }
        outputStr += "\n";
    }

    return outputStr;
}

// Function for outputting data to a .txt file that is downloaded to the user's computer.
function downloadFile(content, fileName) {
    // Create container for file data
    const blob = new Blob([content], { type: "text/plain" });

    // Generate temporary local URL pointing to data container...
    const url = URL.createObjectURL(blob);

    // Create a hidden anchor...
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.style.display = "none";

    // Inject, click, and clean up DOM...
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // And release memory.
    URL.revokeObjectURL(url);

    // Log success.
    console.log("Downloading finalized file.");
}