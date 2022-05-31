const standard_array = [15,14,13,12,10,8];

const scorePoints = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9
}

const scoreAbreviations = {
    "str":"Strength",
    "dex":"Dexterity",
    "con":"Constitution",
    "int":"Intelligence",
    "wis":"Wisdom",
    "cha":"Charisma"
}

function scoreToModifier(s) {
    return Math.floor(0.5 * s) - 5;
} 

var languages = [
    ["Languages", "Typical Speakers", "Script"],
    ["Common", "Humans", "Common"],
    ["Dwarvish", "Dwarves", "Dwarvish"],
    ["Elvish", "Elves", "Elvish"],
    ["Giant", "Ogres, giants", "Dwarvish"],
    ["Gnomish", "Gnomes", "Dwarvish"],
    ["Goblin", "Goblinoids", "Dwarvish"],
    ["Halfling", "Halflings", "Common"],
    ["Orc", "Orcs", "Dwarvish"],
    ["Abyssal", "Demons", "Infernal"],
    ["Celestial", "Celestials", "Celestial"],
    ["Deep Speech", "Mind flayers, beholders", "---"],
    ["Draconic", "Dragons, dragonborn", "Draconic"],
    ["Infernal", "Devils", "Infernal"],
    ["Primordial", "Elementals", "Dwarvish"],
    ["Sylvan", "Fey creatures", "Elvish"],
    ["Undercommon", "Underdark traders", "Elvish"]
]

const skills = {
    "Athletics":"str",
    "Acrobatics":"dex",
    "Sleight of Hand":"dex",
    "Stealth":"dex",
    "Arcana":"int",
    "History":"int",
    "Investigation":"int",
    "Nature":"int",
    "Religion":"int",
    "Animal Handling":"wis",
    "Insight":"wis",
    "Medicine":"wis",
    "Perception":"wis",
    "Survival":"wis",
    "Deception":"cha",
    "Intimidation":"cha",
    "Performance":"cha",
    "Persuasion":"cha"
}

var weaponsHeader = ["Name", "Cost", "Damage", "Weight", "Properties"]

var simpleMeleeWeapons = [
    ["Club", "1 sp", "1d4 bludgeoning", "2 lb.", ["Light"]],
    ["Dagger", "2 gp", "1d4 piercing", "1 lb.", ["Finesse", "Light", "Thrown (range 20/60)"]],
    ["Greatclub", "2 sp", "1d8 bludgeoning", "10 lb.", ["Two-handed"]],
    ["Handaxe", "5 gp", "1d6 slashing", "2 lb.", ["Light", "Thrown (range 20/60)"]],
    ["Javelin", "5 sp", "1d6 piercing", "2 lb.", ["Thrown (range 30/120)"]],
    ["Light hammer", "2 gp", "4d4 bludgeoning", "2 lb.", ["Light", "Thrown (range 20/60)"]],
    ["Mace", "5 gp", "1d6 bludgeoning", "4 lb.", []],
    ["Quarterstaff", "2 sp", "1d6 bludgeoning", "4 lb.", ["Versatile (1d8)"]],
    ["Sickle", "1 gp", "1d4 slashing", "2 lb.", ["Light"]],
    ["Spear", "1 gp", "1d6 piercing", "3 lb.", ["Thrown (range 20/60)", "Versatile (1d8)"]]
]

var simpleRangedWeapons = [
    ["Light crossbow", "25 gp", "1d8 piercing", "5 lb.", ["Ammunition (range 80/320)", "Loading", "Two-handed"]],
    ["Dart", "5 cp", "1d4 piercing", "1/4 lb.", ["Finesse", "Thrown (range 20/60)"]],
    ["Shortbow", "25 gp", "1d6 piercing", "2 lb.", ["Ammunition (range 80/320)", "Two-handed"]],
    ["Sling", "1 sp", "1d4 blugeoning", null, ["Ammunition (range 30/120)"]]
]

var martialMeleeWeapons = [
    ["Battleaxe", "10 gp", "1d8 slashing", "4 lb.", ["Versatile (1d10)"]],
    ["Flail", "10 gp", "1d8 bludgeoning", "2 lb.", []],
    ["Glaive", "20 gp", "1d10 slashing", "6 lb.", ["Heavy", "Reach", "Two-handed"]],
    ["Greataxe", "30 gp", "1d12 slashing", "7 lb.", ["Heavy", "Two-handed"]],
    ["Greatsword", "50 gp", "2d6 slashing", "6 lb.", ["Heavy", "Two-handed"]],
    ["Halberd", "20 gp", "1d10 slashing", "6 lb.", ["Heavy", "Reach", "Two-handed"]],
    ["Lance", "10 gp", "1d12 piercing", "6 lb.", ["Reach", "Special"]],
    ["Longsword", "15 gp", "1d8 slashing", "3 lb.", ["Versatile (1d10)"]],
    ["Maul", "10 gp", "2d6 bludgeoning", "10 lb.", ["Heavy", "Two-handed"]],
    ["Morningstar", "15 gp", "1d8 piercing", "4 lb.", []],
    ["Pike", "5 gp", "1d10 piercing", "18 lb.", ["Heavy", "Reach", "Two-handed"]],
    ["Rapier", "25 gp", "1d8 piercing", "2 lb.", ["Finesse"]],
    ["Scimitar", "25 gp", "1d6 slashing", "3 lb.", ["Finesse", "Light"]],
    ["Shortsword", "10 gp", "1d6 piercing", "2 lb.", ["Finesse", "Light"]],
    ["Trident", "5 gp", "1d6 piercing", "4 lb.", ["Thrown (range 20/60)", "Versatile (1d8)"]],
    ["War pick", "5 gp", "1d8 piercing", "2 lb.", []],
    ["Warhammer", "15 gp", "1d8 bludgeoning", "2 lb.", ["Versatile (1d10)"]],
    ["Whip", "2 gp", "1d4 slashing", "3 lb.", ["Finesse", "Reach"]]
]

var martialRangedWeapons = [
    ["Blowgun", "10 gp", "1 piercing", "1 lb.", ["Ammunition (range 25/100)", "Loading"]],
    ["Hand crossbow", "75 gp", "1d6 piercing", "3 lb.", ["Ammunition (range 30/120)", "Light", "Loading"]],
    ["Heavy crossbow", "50 gp", "1d10 piercing", "18 lb.", ["Ammunition (range 100/400)", "Heavy", "Loading", "Two-handed"]],
    ["Longbow", "50 gp", "1d8 piercing", "2 lb.", ["Ammunition (range 150/600)", "Heavy", "Two-handed"]],
    ["Net", "1 gp", null, "3 lb.", ["Special", "Thrown (range 5/15)"]]
]

var simpleWeapons = simpleMeleeWeapons.concat(simpleRangedWeapons);

var martialWeapons = martialMeleeWeapons.concat(martialRangedWeapons);

var weapons = simpleWeapons.concat(martialWeapons);

var armorHeader = ["Name", "Cost", "Armor Class (AC)", "Strength", "Stealth", "Weight"]

var lightArmor = [
    ["Padded", "5 gp", "11 + Dex modifier", "---", "Disadvantage", "8 lb."],
    ["Leather", "10 gp", "11 + Dex modifier", "---", "---", "10 lb."],
    ["Studded leather", "45 gp", "12 + Dex modifier", "---", "---", "13 lb."],
]

var mediumArmor = [
    ["Hide", "10 gp", "12 + Dex modifier (max 2)", "---", "---", "12 lb."],
    ["Chain shirt", "50 gp", "13 + Dex modifier (max 2)", "---", "---", "20 lb."],
    ["Scale mail", "50 gp", "14 + Dex modifier (max 2)", "---", "Disadvantage", "45 lb."],
    ["Breastplate", "400 gp", "14 + Dex modifier (max 2)", "---", "---", "20 lb", "20 lb."],
    ["Half plate", "750 gp", "15 + Dex modifier", "---", "Disadvantage", "40 lb."]
]

var heavyArmor = [
    ["Ring mail", "30 gp", "14", "---", "Disadvantage", "40 lb."],
    ["Chain mail", "75 gp", "16", "Str 13", "Disadvantage", "55 lb."],
    ["Splint", "200 gp", "17", "Str 15", "Disadvantage", "60 lb."],
    ["Plate", "1500 gp", "18", "Str 15", "Disadvantage", "65 lb."]
]

var shield = [
    ["Shield", "10 gp", "+2", "---", "---", "6 lb."]
]

var armor = lightArmor.concat(mediumArmor).concat(heavyArmor).concat(shield);

var artisan = [
    "Alchemist's supplies",
    "Brewer's supplies",
    "Calligrapher's supplies",
    "Carpenter's tools",
    "Cobbler's tools",
    "Cook's utensils",
    "Glassblower's tools",
    "Jeweler's tools",
    "Leatherworker's tools",
    "Mason's tools",
    "Painter's supplies",
    "Potter's tools",
    "Smith's tools",
    "Tinker's tools",
    "Weaver's tools",
    "Woodcarver's tools"
]

var games = [
    "Dice set",
    "Dragonchess set",
    "Playing card set",
    "Three-Dragon Ante set"
]

var instruments = [
    "Bagpipes",
    "Drum",
    "Dulcimer",
    "Flute",
    "Lute",
    "Lyre",
    "Horn",
    "Pan flute",
    "Shawm",
    "Viol"
]

var character;

var level;

var scores = [];
var score_increases = {
    "str":0,
    "dex":0,
    "con":0,
    "int":0,
    "wis":0,
    "cha":0
};
var races;
var backgrounds;
var classes;

var selected;

Array.prototype.clone = function() {
	return this.slice(0);
};

function arrMin(arr) {
    return Math.min(...arr);
}

function arrMax(arr) {
    return Math.max(...arr);
}

function arrSum(arr) {
    return arr.reduce(function(a,b){
        return a + b;
  }, 0);
}

function removeElement(elementId) {
    var child = document.getElementById(elementId);
    child.parentNode.removeChild(child);
}

function diceRoll(d) {
    return Math.floor(Math.random() * d) + 1;
}

function dice4d6_1() {
    n = [];
    for (var i = 0; i < 4; i++){
        n.push(diceRoll(6));
    }
    return arrSum(n) - arrMin(n);
}

function getData() {
    $.getJSON("data/races.json", function(json) {
        races = json;
    });
    $.getJSON("data/backgrounds.json", function(json) {
        backgrounds = json;
    });
    $.getJSON("data/classes.json", function(json) {
        classes = json;
    });
}

// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function hideEverythingCreate() {
    for (var i = 0; i < everythingCreate.length; i++) {
        everythingCreate[i].hide();
    }
}

function hideEverythingLoad() {
    for (var i = 0; i < everythingLoad.length; i++) {
        everythingLoad[i].hide();
    }
}

function createCharacter() {
    character = {
        "languages":[],
        "weaponProf":[],
        "toolProf":[],
        "armorProf":[],
        "otherProf":[],
        "features": [],
        "ability_scores":{},
        "level":0,
        "exp":0,
        "profBonus":2,
        "skills": [],
        "savingThrows": [],
        "equipment": [],
        "other":{}
    };
    $start.hide();
    $create.show();
    $progress.show();
    updateProgress();
    createPlName();
}

function hideProgressLabel(id) {
    $("#" + id).hide();
    $("#" + id + "_label").hide();
}

function showProgressLabel(id) {
    $("#" + id).show();
    $("#" + id + "_label").show();
}

function formatModifier(mod) {
    mod = parseInt(mod);
    if (mod < 0) {
        return "-" + Math.abs(mod);
    } else {
        return "+" + mod;
    }
}

function formatTable(tableIn) {
    var tableOut = "<h4>" + tableIn[0][0] + "</h4><table><thead><tr>";
    for (var i = 0; i < tableIn[1].length; i++) {
        tableOut += "<th>" + tableIn[1][i] + "</th>";
    }
    tableOut += "</tr></thead><tbody>";
    for (var i = 2; i < tableIn.length; i++) {
        tableOut += "<tr>";
        for (var j = 0; j < tableIn[i].length; j++) {
            tableOut += "<td>" + tableIn[i][j] + "</td>";
        }
        tableOut += "</tr>"
    }
    tableOut += "</tbody></table>";
    return tableOut;
}

function updateProgress() {
    const stuff = [
        "name",
        "class",
        "level",
        "background",
        "alignment",
        "player_name",
        "exp",
        "profBonus",
        "ac",
        "init",
        "hp",
        "hitDice"
    ];
    
    const otherStuff = [
        "languages",
        "weaponProf",
        "toolProf",
        "armorProf",
        "otherProf"
    ];
    
    const money = [
        "cp",
        "sp",
        "ep",
        "gp",
        "pp"
    ];
    
    var scoreAbb = Object.keys(scoreAbreviations);
    
    for (var i = 0; i < stuff.length; i++) {
        try {
            if (character[stuff[i]] !== undefined && !($.isEmptyObject(character[stuff[i]]) && (typeof(character[stuff[i]]) == "object")) && character[stuff[i]].length !== 0 && character[stuff[i]] !== "") {
                document.getElementById("progress_" + stuff[i]).innerHTML = character[stuff[i]];
                showProgressLabel("progress_" + stuff[i]);
            } else {
                document.getElementById("progress_" + stuff[i]).innerHTML = "";
                hideProgressLabel("progress_" + stuff[i]);
            }
        }
        catch (err) {
            document.getElementById("progress_" + stuff[i]).innerHTML = "";
            hideProgressLabel("progress_" + stuff[i]);
        }
    }
    
    for (var i = 0; i < otherStuff.length; i++) {
        try {
            if (character[otherStuff[i]] !== undefined && !($.isEmptyObject(character[otherStuff[i]]) && (typeof(character[otherStuff[i]]) == "object")) && character[otherStuff[i]].length !== 0 && character[otherStuff[i]] !== "") {
                document.getElementById("progress_" + otherStuff[i]).innerHTML = "";
                for (var j = 0; j < character[otherStuff[i]].length; j++) {
                    document.getElementById("progress_" + otherStuff[i]).innerHTML += "<li>" + character[otherStuff[i]][j] + "</li>";
                }
                showProgressLabel("progress_" + otherStuff[i]);
            } else {
                document.getElementById("progress_" + otherStuff[i]).innerHTML = "";
                hideProgressLabel("progress_" + otherStuff[i]);
            }
        }
        catch (err) {
            document.getElementById("progress_" + otherStuff[i]).innerHTML = "";
            hideProgressLabel("progress_" + otherStuff[i]);
        }
    }
    
    if (character["race"] !== undefined && (character["subRace"] !== undefined || character["DragonAncestry"] !== undefined)) {
        if (character["DragonAncestry"] !== undefined) {
            character["subRace"] = character["DragonAncestry"];
        }
        document.getElementById("progress_race").innerHTML = character["race"] + " (" + character["subRace"] + ")";
        showProgressLabel("progress_race");
    } else if (character["race"] !== undefined) {
        document.getElementById("progress_race").innerHTML = character["race"];
        showProgressLabel("progress_race");
    } else {
        document.getElementById("progress_race").innerHTML = "";
        hideProgressLabel("progress_race");
    }
    
    if (character["speed"] !== undefined && !($.isEmptyObject("speed") && (typeof(character["speed"]) == "object")) && character["speed"].length !== 0 && character["speed"] !== "") {
        document.getElementById("progress_speed").innerHTML = character["speed"] + " ft.";
        showProgressLabel("progress_speed");
    } else {
        document.getElementById("progress_speed").innerHTML = "";
        hideProgressLabel("progress_speed");
    }
    
    if (character["features"] !== undefined && !($.isEmptyObject(character["features"]) && (typeof(character["features"]) == "object")) && character["features"].length !== 0 && character["features"] !== "") {
        document.getElementById("progress_features").innerHTML = "";
        var table;
        var chose;
        for (var i = 0; i < character["features"].length; i++) {
            if (character["features"][i]["table"] !== undefined) {
                table = formatTable(character["features"][i]["table"]);
            } else {
                table = "";
            }
            if (character[character["features"][i]["name"]] !== undefined) {
                chose = "<p>You chose: " + character[character["features"][i]["name"]] + "</p>";
            } else {
                chose = "";
            }
            document.getElementById("progress_features").innerHTML += "<li><h3>" + character["features"][i]["name"] + "</h3>" + character["features"][i]["description"] + table + chose + "</li>";
            showProgressLabel("progress_features");
        }
    } else {
        document.getElementById("progress_features").innerHTML = "";
        hideProgressLabel("progress_features");
    }
    
    for (var i = 0; i < 6; i++) {
        if (character["ability_scores"][scoreAbb[i]] !== undefined) {
            document.getElementById("progress_" + scoreAbb[i] + "_score").innerHTML = character["ability_scores"][scoreAbb[i]];
            document.getElementById("progress_" + scoreAbb[i] + "_mod").innerHTML = formatModifier(scoreToModifier(character["ability_scores"][scoreAbb[i]]));
            showProgressLabel("progress_" + scoreAbb[i] + "_score");
            $("#progress_" + scoreAbb[i] + "_mod").show();
            $(".progress_score_label").show();
            $("#progress_save_label").show();
            
            if (character["savingThrows"].includes(scoreAbreviations[scoreAbb[i]])) {
                document.getElementById("progress_" + scoreAbb[i] + "_save_prof").checked = true;
                document.getElementById("progress_" + scoreAbb[i] + "_save").innerHTML = formatModifier(scoreToModifier(character["ability_scores"][scoreAbb[i]]) + parseInt(character["profBonus"]));
            } else {
                document.getElementById("progress_" + scoreAbb[i] + "_save_prof").checked = false;
                document.getElementById("progress_" + scoreAbb[i] + "_save").innerHTML = formatModifier(scoreToModifier(character["ability_scores"][scoreAbb[i]]));
            }
        } else {
            document.getElementById("progress_" + scoreAbb[i] + "_score").innerHTML = "";
            document.getElementById("progress_" + scoreAbb[i] + "_mod").innerHTML = "";
            hideProgressLabel("progress_" + scoreAbb[i] + "_score");
            $("#progress_" + scoreAbb[i] + "_mod").hide();
            $(".progress_score_label").hide();
            $("#progress_save_label").hide();
        }
    }
    
    if (character["ability_scores"] !== undefined && !($.isEmptyObject(character["ability_scores"])) || character["skills"].length > 0) {
        $("#progress_skills_label").show();
        skillNames = Object.keys(skills);
        for (var i = 0; i < skillNames.length; i++) {
            if (character["skills"].includes(skillNames[i])) {
                document.getElementById("progress_" + skillNames[i].split(" ").join("_") + "_prof").checked = true;
                if (character["ability_scores"][skills[skillNames[i]]] == undefined) {
                    document.getElementById("progress_" + skillNames[i].split(" ").join("_")).innerHTML = "";
                } else {
                    document.getElementById("progress_" + skillNames[i].split(" ").join("_")).innerHTML = formatModifier(parseInt(scoreToModifier(character["ability_scores"][skills[skillNames[i]]])) + parseInt(character["profBonus"]));
                }
                
            } else {
                if (character["ability_scores"][skills[skillNames[i]]] == undefined) {
                    document.getElementById("progress_" + skillNames[i].split(" ").join("_") + "_prof").checked = false;
                    document.getElementById("progress_" + skillNames[i].split(" ").join("_")).innerHTML = "";
                } else {
                    document.getElementById("progress_" + skillNames[i].split(" ").join("_") + "_prof").checked = false;
                    document.getElementById("progress_" + skillNames[i].split(" ").join("_")).innerHTML = formatModifier(parseInt(scoreToModifier(character["ability_scores"][skills[skillNames[i]]])));
                }
            }
        }
    } else {
        $("#progress_skills_label").hide();
    }
    
    if (false) {
        $("#progress_attacks_label").show();
    } else {
        $("#progress_attacks_label").hide();
    }
    
    if (character["equipment"] !== undefined && character["equipment"].length !== 0) {
        document.getElementById("progress_equip").innerHTML = "";
        var name = "";
        var num = 0;
        for (var i = 0; i < character["equipment"].length; i++) {
            name = Object.keys(character["equipment"][i])[0];
            num = character["equipment"][i][name];
            if (money.includes(name)) {
                document.getElementById("progress_" + name).innerHTML = num;
            } else {
                document.getElementById("progress_equip").innerHTML += "<li>" + name + " X " + num + "</li>";
            }
        }
        showProgressLabel("progress_equip");
    } else {
        hideProgressLabel("progress_equip");
    }
}

function createPlName() {
    hideEverythingCreate();
    $pl_name.show();
}

function getPlName() {
    character["player_name"] = document.getElementById("pl_name").value;
    character["name"] = document.getElementById("name").value;
    updateProgress();
    createStats();
}

function createStats() {
    hideEverythingCreate();
    $stats.show();
}

function generate4d6_1() {
    for (var i = 0; i < 6; i++) {
        scores[i] = dice4d6_1();
    }
    generateStats();
}

function generateSA() {
    scores = standard_array.clone();
    generateStats();
}

function generateStats() {
    for (var i = 0; i < 6; i++) {
        document.getElementById("stats_form").elements["stat" + i].value = scores[i];
    }
}

function formatChoices(choices) {
    var add = [];
    for (var i = 0; i < choices.length; i++) {
        if (choices[i][0] == "*") {
            add = [];
            switch(choices[i]) {
                case "*lang":
                    for (var j = 1; j < languages.length; j++) {
                        add.push(languages[j][0]);
                    }
                    break;
                case "*scores":
                    add = add.concat(Object.keys(scoreAbreviations));
                    break;
                case "*skills":
                    add = add.concat(Object.keys(skills));
                    break;
                case "*games":
                    add = add.concat(games);
                    break;
                case "*instrument":
                    add = add.concat(instruments);
                    break;
                case "*artisan":
                    add = add.concat(artisan);
                    break;
                case "*simpleMeleeWeapons":
                    for (var j = 0; j < simpleMeleeWeapons.length; j++) {
                        add.push(simpleMeleeWeapons[j][0]);
                    }
                    break;
                case "*simpleRangedWeapons":
                    for (var j = 0; j < simpleRangedWeapons.length; j++) {
                        add.push(simpleRangedWeapons[j][0]);
                    }
                    break;
                case "*simpleWeapons":
                    for (var j = 0; j < simpleWeapons.length; j++) {
                        add.push(simpleWeapons[j][0]);
                    }
                    break;
                case "*martialMeleeWeapons":
                    for (var j = 0; j < martialMeleeWeapons.length; j++) {
                        add.push(martialMeleeWeapons[j][0]);
                    }
                    break;
                case "*martialRangedWeapons":
                    for (var j = 0; j < martialRangedWeapons.length; j++) {
                        add.push(martialRangedWeapons[j][0]);
                    }
                    break;
                case "*martialWeapons":
                    for (var j = 0; j < martialWeapons.length; j++) {
                        add.push(martialWeapons[j][0]);
                    }
                    break;
                case "*weapons":
                    for (var j = 0; j < weapons.length; j++) {
                        add.push(weapons[j][0]);
                    }
                    break;
                case "*lightArmor":
                    for (var j = 0; j < lightArmor.length; j++) {
                        add.push(lightArmor[j][0] + " Armor");
                    }
                    break;
                case "*mediumArmor":
                    for (var j = 0; j < mediumArmor.length; j++) {
                        add.push(mediumArmor[j][0] + " Armor");
                    }
                    break;
                case "*heavyArmor":
                    for (var j = 0; j < heavyArmor.length; j++) {
                        add.push(heavyArmor[j][0] + " Armor");
                    }
                    break;
                case "*shields":
                    for (var j = 0; j < shield.length; j++) {
                        add.push(shield[j][0]);
                    }
                    break;
                default:
                    add.push("undifined");
                    break;
            }
            choices.splice(i, 1);
            choices = choices.concat(add);
            i--;
        }
        if (typeof(choices[i]) == "object" && !(Array.isArray(choices[i]))) {
            /*if (choices[i]["get"] !== undefined) {
                add = ""
                add += choices[i]["get"].toString().replace(",", ", ");
                choices.splice(i, 1);
                choices.push(add);
            }*/
            if (choices[i]["choice"] !== undefined) {
                add = "";
                //for (var j = 0; j < choices[i]["choice"].length; j++) {
                    stuff = [];
                    stuff = stuff.concat(formatChoices(choices[i]["choice"][0]["choices"]));
                    add = "Choice of " + choices[i]["choice"][0]["number"] + " of thease: " + stuff.toString().replace(/,/g, ", "); 
                    choices.splice(i, 1);
                    choices.push(add);
                //}
                i--;
            } else if (choices[i]["get"] == undefined && choices[i]["choice"] == undefined) {
                add = [];
                var equip = Object.keys(choices[i]);
                for (var j = 0; j < equip.length; j++) {
                    if (equip[j][0] == "*") {
                        var things = formatChoices([equip[j]]);
                        for (var k = 0; k < things.length; k++) {
                            add.push(things[k] + " X " + choices[i][equip[j]]);
                        }
                    } else {
                        add.push(equip[j] + " X " + choices[i][equip[j]]);
                    }
                }
                choices.splice(i, 1);
                choices = choices.concat(add);
                i--;
            }
        } else if (Array.isArray(choices[i])) {
            stuff = formatChoices(choices[i]).toString().replace(/,/g, ", ").replace(/, ([^, ]*)$/, ', and $1');
            choices.splice(i, 1);
            choices.push(stuff);
            i--;
        }
    }
    return choices;
}

function showMajorChoice(major, box, name) {
    document.getElementById(box).innerHTML += "<form id='" + name + "_form'></form>";
    for (var i = 0; i < major.length; i++) {
        document.getElementById(name + "_form").innerHTML += "<input type='radio' name='" + name + "' value='" + major[i]["name"] + "'> " + major[i]["name"] + "<br>";
    }
    document.getElementById(name + "_form").innerHTML += "<input type='radio' name='" + name + "' value='random'> Random";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function get(box, thing, add) {
    if (thing["get"] !== undefined) {
        var got = formatChoices(thing["get"].clone());
        for (var i = 0; i < got.length; i++) {
            document.getElementById(box).innerHTML += "<li>" + got[i] + "</li>";
        }
    }
    if (add) {
        for (var i = 0; i < selected.length; i++) {
            document.getElementById(box).innerHTML += "<li>" + selected[i] + "</li>";
            
        }
    }
}

function checkBox(name, value, text, i) {
    return "<input id=\"" + i + "\" type=\"checkbox\" name=\"" + name + "\" value=\"" + value + "\"> " + text + "<br>";
}

function choice(box, thing, i, end, next, par) {
    document.getElementById(box).innerHTML += "<p>Choose " + thing["choice"][i]["number"] + " of the following:</p><form id=choice></form>";
    var choices = formatChoices(thing["choice"][i]["choices"].clone());
    if (box !== "skillsChoice" && box !== "equipmentChoice") {
        for (var j = 0; j < choices.length; j++) {
            if (document.getElementById("progress_prof").innerHTML.includes(choices[j])) {
                choices.splice(j, 1);
                j--;
            }
        }
    } else {
        for (var j = 0; j < choices.length; j++) {
            if (character["skills"].includes(choices[j])) {
                choices.splice(j, 1);
                j--;
            }
        }
    }
    for (var j = 0; j < choices.length; j++) {
        document.getElementById("choice").innerHTML += checkBox(j, choices[j], choices[j], j);
    }
    document.getElementById("choice").innerHTML += checkBox(j, "Random", "Random", j);
    document.getElementById(box).innerHTML += "<p id=getChoice class='button'>Next</p>";
    $("#getChoice").on('click', () => {getChoice(box, thing, i, end, next, par)})
}

function getChoice(box, thing, i, end, next, par) {
    var chosen = 0;
    var tempSelected = [];
    var tempVal;
    var temp;
    var num;
    var choi;
    for (var j = 0; j < document.getElementById(box).innerHTML.split("<br>").length - 1; j++) {
        if ($("#" + j)[0].checked) {
            if ($("#" + j)[0].value == "Random") {
                while (chosen < parseInt(thing["choice"][i]["number"])) {
                    tempVal = diceRoll(j + 1) - 1;
                    if ($("#" + tempVal)[0].checked == false) {
                        $("#" + tempVal)[0].checked = true;
                        tempSelected.push($("#" + tempVal)[0].value);
                        chosen++;
                    }
                }
            } else {
                tempSelected.push($("#" + j)[0].value);
                chosen++;
            }
        }
    }
    if (chosen == parseInt(thing["choice"][i]["number"]) || (thing["choice"][i]["number"] > document.getElementById(box).innerHTML.split("<br>").length && chosen == document.getElementById(box).innerHTML.split("<br>").length)) {
        if (tempSelected[0].substr(0, 9) == "Choice of") {
            temp = tempSelected[0].split(": ");
            num = temp[0].split(" ")[2];
            choi = temp[1].split(", ");
            thing["choice"].splice(i + 1, 0, {"number":num,"choices":choi});
            end++;
        } else {
            selected = selected.concat(tempSelected);
        }
        document.getElementById(box).innerHTML = "";
        i++;
        multChoice(box, thing, i, end, next, par);
    } else {
        alert("You must select " + thing["choice"][i]["number"] + " things.");
    }
}

function multChoice(box, thing, choice_index, end, next, par) {
    if (choice_index == 0) {
        selected = [];
    }
    if (choice_index == end) {
        choice_index = 0;
        next(...par);
    } else {
        choice(box, thing, choice_index, end, next, par);
    }
}

function choiceAndGet(box, thing, next, par) {
    if (thing !== undefined) {
        document.getElementById(box).innerHTML += "<div id=" + box + "Get></div>";
        if (thing["get"] !== undefined) {
            get(box + "Get", thing, false);
            if (box.substr(0, 3) == "sub") {
                character[box.substring(3, box.length)] = character[box.substring(3, box.length)].concat(thing["get"]);
            } else {
                character[box] = character[box].concat(thing["get"]);
            }
            updateProgress();
        }
        document.getElementById(box).innerHTML += "<div id=" + box + "Choice></div>";
        if (thing["choice"] !== undefined) {
            multChoice(box + "Choice", thing, 0, thing["choice"].length, choiceAndGet_next, [box, thing, next, par]);
        } else {
            updateProgress();
            next(...par);
        }
    } else {
        updateProgress();
        next(...par);
    }
}

function choiceAndGet_next(box, thing, next, par) {
    var temp;
    var thing;
    removeElement(box + "Get");
    document.getElementById(box).innerHTML += "<div id=" + box + "Get></div>";
    get(box, thing, true);
    if (character[box] == undefined) {
        character[box] = [];
    }
    for (var i = 0; i < selected.length; i++) {
        try {
            if (selected[i].includes("X")) {
                temp = selected[i].split(" X ");
                thing = {};
                thing[temp[0]] = temp[1];
                selected.splice(i, 1);
                selected.push(thing);
                i--;
            }
        }
        catch(err) {
            ;
        }
    }
    character[box] = character[box].concat(selected);
    updateProgress();
    next(...par);
}

function getFeatures(first, choicesDone, box, thing, next, par) {
    var done = choicesDone;
    if (first || first == undefined) {
        document.getElementById(box).innerHTML += "<div id='" + box + "_features'></div>"
    } else {
        document.getElementById(box + "_features").innerHTML = "";
    }
    if (thing["features"] !== undefined) {
        if (box.includes("sub")) {
            document.getElementById(box + "_features").innerHTML += "<ul id='" + box + "_features_list'></ul>"
        } else {
            document.getElementById(box + "_features").innerHTML += "<h2>Features:</h2>";
        }
        for (var i = 0; i < thing["features"].length; i++) {
            if (box.includes("sub")) {
                document.getElementById(box + "_features_list").innerHTML += "<li><h4>" + thing["features"][i]["name"] + "</h4><p>" + thing["features"][i]["description"] + "</p></li>";
            } else {
                document.getElementById(box + "_features").innerHTML += "<h3>" + thing["features"][i]["name"] + "</h3><p>" + thing["features"][i]["description"] + "</p>";
            }
            if (thing["features"][i]["table"] !== undefined) {
                document.getElementById(box + "_features").innerHTML += formatTable(thing["features"][i]["table"]);
            }
            if (thing["features"][i]["features"] !== undefined) {
                document.getElementById(box + "_features").innerHTML += "<div id='" + box +"_features_sub" + "'></div>";
                getFeatures(true, 0, box + "_features_sub", thing["features"][i], next, par);
            }
            if (thing["features"][i]["choice"] !== undefined) {
                if (choicesDone == 0) {
                    document.getElementById(box + "_features").innerHTML += "<div id='" + thing["features"][i]["name"].replace(/\s/g, "") + "'></div>";
                    choiceAndGet(thing["features"][i]["name"].replace(/\s/g, ""), thing["features"][i], getFeatures, [false, done + 1, box, thing, next, par]);
                    return
                } else {
                    choicesDone--;
                }
            }
        }
        character["features"] = character["features"].concat(thing["features"]);
        updateProgress();
    }
    next(...par);
}

function getStats() {
    scores = [];
    c = true;
    for (var i = 0; i < 6; i++) {
        if (document.getElementById("stats_form").elements["stat" + i].value == "") {
            c = false
            break
        }
        scores.push(document.getElementById("stats_form").elements["stat" + i].value);
    }
    if (c) {
        updateProgress();
        showRaceOptions();
    } else {
        alert("Please enter all stats.");
    }
}

function showRaceOptions() {
    hideEverythingCreate();
    $race.show();
    showMajorChoice(races, "race", "race");
}

function getRace() {
    if (document.getElementById("race_form").elements["race"].value == "") {
        alert("Choose a race.");
    } else {
        if (document.getElementById("race_form").elements["race"].value == "random") {
            character.race = races[diceRoll(races.length - 1)]["name"];
        } else {
            character.race = document.getElementById("race_form").elements["race"].value;
        }
        for (var i = 0; i < races.length; i++) {
            if (races[i]["name"] == character.race) {
                window.race_number = i;
            }
        }
        removeElement("race");
        updateProgress();
        showRaceInfo_0();
    }
}

function showRaceInfo_0() {
    hideEverythingCreate();
    $race_info.show();
    document.getElementById("race_info").innerHTML += "<h1>" + character.race + "</h1><p>" + /*races[race_number]["description"]*/"description" + "</p><h2>Score Increases:</h2>";
    scoreAbb = Object.keys(scoreAbreviations);
    for (var i = 0; i < 6; i++) {
        if (races[race_number]["scores"][scoreAbb[i]] !== undefined) {
            document.getElementById("race_info").innerHTML += "<p>" + scoreAbreviations[scoreAbb[i]] + ": +" + races[race_number]["scores"][scoreAbb[i]] + "</p>";
            score_increases[scoreAbb[i]] += parseInt(races[race_number]["scores"][scoreAbb[i]]);
        }
    }
    document.getElementById("race_info").innerHTML += "<h2>Age:</h2><p>" + races[race_number]["age"] + "</p><h2>Alignment:</h2><p>" + races[race_number]["alignment"] + "</p><h2>Size:</h2><p>" + races[race_number]["size"] + "</p><h2>Speed:</h2><p>" + races[race_number]["speed"] + " ft.</p><h2>Languages:</h2><div id=languages></div>";
    character["size"] = races[race_number]["size"];
    character["speed"] = races[race_number]["speed"];
    choiceAndGet("languages", races[race_number]["languages"], showRaceInfo_1, []);
}

function showRaceInfo_1() {
    if (races[race_number]["armorProf"] !== undefined) {
        document.getElementById("race_info").innerHTML += "<h2>Armor Proficientcies:</h2><div id=armorProf></div>";
        choiceAndGet("armorProf", races[race_number]["armorProf"], showRaceInfo_2, []);
    }
    else {
        showRaceInfo_2();
    }
}

function showRaceInfo_2() {
    if (races[race_number]["weaponProf"] !== undefined) {
        document.getElementById("race_info").innerHTML += "<h2>Weapon Proficientcies:</h2><div id=weaponProf></div>";
        choiceAndGet("weaponProf", races[race_number]["weaponProf"], showRaceInfo_3, []);
    }
    else {
        showRaceInfo_3();
    }
}

function showRaceInfo_3() {
    if (races[race_number]["toolProf"] !== undefined) {
        document.getElementById("race_info").innerHTML += "<h2>Tool Proficientcies:</h2><div id=toolProf></div>";
        choiceAndGet("toolProf", races[race_number]["toolProf"], showRaceInfo_4, []);
    }
    else {
        showRaceInfo_4();
    }
}

function showRaceInfo_4() {
    if (races[race_number]["skillProf"] !== undefined) {
        document.getElementById("race_info").innerHTML += "<h2>Skill Proficientcies:</h2><div id=skills></div>";
        choiceAndGet("skills", races[race_number]["skillProf"], getFeatures, [true, 0, "race_info", races[race_number], showRaceInfo_5, []]);
    }
    else {
        getFeatures(true, 0, "race_info", races[race_number], showRaceInfo_5, []);
    }
}

function showRaceInfo_5() {
    if (races[race_number]["subrace"] !== undefined) {
        document.getElementById("race_info").innerHTML += "<p id=choose_sub_race>Choose a subrace.</p>";
        showSubRace();
    } else {
        showBackgroundButton();
    }
}

function showSubRace() {
    document.getElementById("race_info").innerHTML += "<div id=subRace></div>";
    showMajorChoice(races[race_number]["subrace"], "subRace", "subRace");
    document.getElementById("subRace").innerHTML += "<p id=getSubRace>Next</p>";
    $("#getSubRace").on('click', () => {getSubRace()});
}

function getSubRace() {
    if (document.getElementById("subRace_form").elements["subRace"].value == "") {
        alert("Choose a subrace.");
    } else {
        if (document.getElementById("subRace_form").elements["subRace"].value == "random") {
            character.subRace = races[race_number]["subrace"][diceRoll(races[race_number]["subrace"].length - 1)]["name"];
        } else {
            character.subRace = document.getElementById("subRace_form").elements["subRace"].value;
        }
        for (var i = 0; i < races[race_number]["subrace"].length; i++) {
            if (races[race_number]["subrace"][i]["name"] == character.subRace) {
                window.subRace_number = i;
            }
        }
        removeElement("subRace");
        removeElement("choose_sub_race");
        updateProgress();
        showSubRaceInfo_0();
    }
}

function showSubRaceInfo_0() {
    document.getElementById("race_info").innerHTML += "<div id=subRace_info></div>";
    document.getElementById("subRace_info").innerHTML += "<h1>" + character.subRace + "</h1><p>" + /*races[race_number]["subrace"][subRace_number]["description"]*/"description" + "</p>";
    if (races[race_number]["subrace"][subRace_number]["scores"] !== undefined) {
        document.getElementById("subRace_info").innerHTML += "<h2>Score Increases:</h2>";
        scoreAbb = Object.keys(scoreAbreviations);
        for (var i = 0; i < 6; i++) {
            if (races[race_number]["subrace"][subRace_number]["scores"][scoreAbb[i]] !== undefined) {
                document.getElementById("subRace_info").innerHTML += "<p>" + scoreAbreviations[scoreAbb[i]] + ": +" + races[race_number]["subrace"][subRace_number]["scores"][scoreAbb[i]] + "</p>";
                score_increases[scoreAbb[i]] += parseInt(races[race_number]["subrace"][subRace_number]["scores"][scoreAbb[i]]);
            }
        }
    }
    if (races[race_number]["subrace"][subRace_number]["languages"] !== undefined) {
        document.getElementById("subRace_info").innerHTML += "<h2>Languages:</h2><div id=sublanguages></div>";
        choiceAndGet("sublanguages", races[race_number]["subrace"][subRace_number]["languages"], showSubRaceInfo_1, []);
    } else {
        showSubRaceInfo_1();
    }
}

function showSubRaceInfo_1() {
    if (races[race_number]["subrace"][subRace_number]["armorProf"] !== undefined) {
        document.getElementById("subRace_info").innerHTML += "<h2>Armor Proficientcies:</h2><div id=subarmorProf></div>";
        choiceAndGet("subarmorProf", races[race_number]["subrace"][subRace_number]["armorProf"], showSubRaceInfo_2, []);
    }
    else {
        showSubRaceInfo_2();
    }
}

function showSubRaceInfo_2() {
    if (races[race_number]["subrace"][subRace_number]["weaponProf"] !== undefined) {
        document.getElementById("subRace_info").innerHTML += "<h2>Weapon Proficientcies:</h2><div id=subweaponProf></div>";
        choiceAndGet("subweaponProf", races[race_number]["subrace"][subRace_number]["weaponProf"], showSubRaceInfo_3, []);
    }
    else {
        showSubRaceInfo_3();
    }
}

function showSubRaceInfo_3() {
    if (races[race_number]["subrace"][subRace_number]["toolProf"] !== undefined) {
        document.getElementById("subRace_info").innerHTML += "<h2>Tool Proficientcies:</h2><div id=subtoolProf></div>";
        choiceAndGet("subtoolProf", races[race_number]["subrace"][subRace_number]["toolProf"], showSubRaceInfo_4, []);
    }
    else {
        showSubRaceInfo_4();
    }
}

function showSubRaceInfo_4() {
    if (races[race_number]["subrace"][subRace_number]["skillProf"] !== undefined) {
        document.getElementById("subRace_info").innerHTML += "<h2>Skill Proficientcies:</h2><div id=subskills></div>";
        choiceAndGet("subskills", races[race_number]["skillProf"], getFeatures, [true, 0, "subRace_info", races[race_number]["subrace"][subRace_number], showBackgroundButton, []]);
    }
    else {
        getFeatures(true, 0, "subRace_info", races[race_number]["subrace"][subRace_number], showBackgroundButton, []);
    }
}

function showBackgroundButton() {
    document.getElementById("race_info").innerHTML += "<p id='race_info_next' class='button'>Next</p>";
    $("#race_info_next").on('click', () => {showBackground()});
}

function showBackground() {
    hideEverythingCreate();
    document.getElementById("race_info").innerHTML = "";
    $background.show();
    showMajorChoice(backgrounds, "background", "background");
}

function getBackground() {
    if (document.getElementById("background_form").elements["background"].value == "") {
        alert("Choose a race.");
    } else {
        if (document.getElementById("background_form").elements["background"].value == "random") {
            character.background = backgrounds[diceRoll(backgrounds.length - 1)]["name"];
        } else {
            character.background = document.getElementById("background_form").elements["background"].value;
        }
        for (var i = 0; i < backgrounds.length; i++) {
            if (backgrounds[i]["name"] == character.background) {
                window.background_number = i;
            }
        }
        removeElement("background");
        updateProgress();
        showBackgroundInfo_0();
    }
}

function showBackgroundInfo_0() {
    hideEverythingCreate();
    $background_info.show();
    document.getElementById("background_info").innerHTML += "<h1>" + character.background + "</h1><p>" + /*backgrounds[background_number]["description"]*/"description" + "</p>";
    if (backgrounds[background_number]["skillProf"] !== undefined) {
        document.getElementById("background_info").innerHTML += "<h2>Skill Proficientcies:</h2><div id=skills></div>";
        choiceAndGet("skills", backgrounds[background_number]["skillProf"], showBackgroundInfo_1, []);
    }
    else {
        showBackgroundInfo_1();
    }
}

function showBackgroundInfo_1() {
    if (backgrounds[background_number]["languages"] !== undefined) {
        document.getElementById("background_info").innerHTML += "<h2>Languages:</h2><div id=languages></div>";
        choiceAndGet("languages", backgrounds[background_number]["languages"], showBackgroundInfo_2, []);
    }
    else {
        showBackgroundInfo_2();
    }
}

function showBackgroundInfo_2() {
    if (backgrounds[background_number]["equipment"] !== undefined) {
        document.getElementById("background_info").innerHTML += "<h2>Equipment:</h2><div id=equipment></div>";
        choiceAndGet("equipment", backgrounds[background_number]["equipment"], showBackgroundInfo_3, []);
    }
    else {
        showBackgroundInfo_3();
    }
}

function showBackgroundInfo_3() {
    if (backgrounds[background_number]["armorProf"] !== undefined) {
        document.getElementById("background_info").innerHTML += "<h2>Armor Proficientcies:</h2><div id=armorProf></div>";
        choiceAndGet("armorProf", backgrounds[background_number]["armorProf"], showBackgroundInfo_4, []);
    }
    else {
        showBackgroundInfo_4();
    }
}

function showBackgroundInfo_4() {
    if (backgrounds[background_number]["weaponProf"] !== undefined) {
        document.getElementById("background_info").innerHTML += "<h2>Weapon Proficientcies:</h2><div id=weaponProf></div>";
        choiceAndGet("weaponProf", backgrounds[background_number]["weaponProf"], showBackgroundInfo_5, []);
    }
    else {
        showBackgroundInfo_5();
    }
}

function showBackgroundInfo_5() {
    if (backgrounds[background_number]["toolProf"] !== undefined) {
        document.getElementById("background_info").innerHTML += "<h2>Tool Proficientcies:</h2><div id=toolProf></div>";
        choiceAndGet("toolProf", backgrounds[background_number]["toolProf"], getFeatures, [true, 0, "background_info", backgrounds[background_number], showClassButton, []]);
    }
    else {
        getFeatures(true, 0, "background_info", backgrounds[background_number], showClassButton, []);
    }
}

function showClassButton() {
    document.getElementById("background_info").innerHTML += "<p id='background_info_next' class='button'>Next</p>"
    $("#background_info_next").on('click', () => {showClass()});
}

function showClass() {
    hideEverythingCreate();
    document.getElementById("background_info").innerHTML = "";
    $class.show();
    showMajorChoice(classes, "class", "class");
}

function getClass() {
    if (document.getElementById("class_form").elements["class"].value == "") {
        alert("Choose a class.");
    } else {
        if (document.getElementById("class_form").elements["class"].value == "random") {
            character.class = classes[diceRoll(classes.length - 1)]["name"];
        } else {
            character.class = document.getElementById("class_form").elements["class"].value;
        }
        for (var i = 0; i < classes.length; i++) {
            if (classes[i]["name"] == character.class) {
                window.class_number = i;
            }
        }
        removeElement("class");
        updateProgress();
        showClassInfo_0();
    }
}

function showClassInfo_0() {
    level = 0;
    hideEverythingCreate();
    $class_info.show();
    document.getElementById("class_info").innerHTML += "<h1>" + character.class + "</h1><p>" + /*classes[class_number]["description"]*/"description" + "</p><h1>Ability Scores:</h1><p>Drag and drop your ability scores onto the ability you want for that score.</p><table style='border-spacing: 0px;'><tr><td style='padding: 0px;'><ul style='list-style-type: none; padding-top: 0px; padding-right: 5px; padding-bottom: 0px; padding-left: 5px; border: 2px solid; border-right: none;'><li style='padding: 1px;'>Strength:</li><li style='padding: 1px;'>Dexterity:</li><li style='padding: 1px;'>Constitution:</li><li style='padding: 1px;'>Intelligence:</li><li style='padding: 1px;'>Wisdom:</li><li style='padding: 1px;'>Charisma:</li></ul></td><td style='padding: 0px;'><ul id='ability_list' style='list-style-type: none; padding-left: 0px; border: 2px solid;'></ul></td><td style='padding: 0px;'><ul id='score_increases' style='list-style-type: none; padding-top: 0px; padding-right: 5px; padding-bottom: 0px; padding-left: 5px; border: 2px solid; border-left: none;'></ul></td></tr></table>";
    for (var i = 0; i < 6; i++) {
        document.getElementById("ability_list").innerHTML += "<li class='ui-state-default ui-sortable-handle'>" + scores[i] + "</li>";
    }
    
    scoreAbb = Object.keys(scoreAbreviations);
    for (var i = 0; i < 6; i++) {
        if (score_increases[scoreAbb[i]] == 0) {
            n = ""
        } else {
            n = "+" + score_increases[scoreAbb[i]]
        }
        document.getElementById("score_increases").innerHTML += "<li style='padding: 1px; height: 18.4px;'>" + n + "</li>";
    }
    document.getElementById("class_info").innerHTML += "<p id='ability_score_next' class='button'>Next</p>";
    $("#ability_score_next").on('click', () => {showClassInfo_1()});
    $("#ability_list").sortable();
}

function showClassInfo_1() {
    if (level == 0) {
        removeElement("ability_score_next");
        $("#ability_list").sortable("disable");
        scoreAbb = Object.keys(scoreAbreviations);
        for (var i = 0; i < 6; i++) {
            character["ability_scores"][scoreAbb[i]] = parseInt(document.getElementsByClassName("ui-state-default")[i].innerHTML) + parseInt(score_increases[scoreAbb[i]]);
        }
        document.getElementById("ability_list").innerHTML = "";
        for (var i = 0; i < 6; i++) {
            document.getElementById("ability_list").innerHTML += "<li class='ui-state-default ui-sortable-handle'>" + character["ability_scores"][scoreAbb[i]] + "</li>";
        }
        removeElement("score_increases");
        document.getElementById("class_info").innerHTML += "<h2>Hit Dice:</h2><p>" + classes[class_number][0]["hitDice"] + "</p><h2>Hit Points:</h2><p>" + (parseInt(classes[class_number][0]["hitPoints"]) + scoreToModifier(parseInt(character["ability_scores"]["con"]))) +"</p>";
        updateProgress();
    }
    if (classes[class_number][level]["savingThrows"] !== undefined) {
        document.getElementById("class_info").innerHTML += "<h2>Saving Throws:</h2>";
        for (var i = 0; i < classes[class_number][level]["savingThrows"].length; i++) {
            document.getElementById("class_info").innerHTML += "<li>" + scoreAbreviations[classes[class_number][level]["savingThrows"][i]] + "</li>";
            character["savingThrows"].push(scoreAbreviations[classes[class_number][level]["savingThrows"][i]]);
        }
    }
    updateProgress();
    if (classes[class_number][level]["skillProf"] !== undefined) {
        document.getElementById("class_info").innerHTML += "<h2>Skill Proficientcies:</h2><div id=skills></div>";
        choiceAndGet("skills", classes[class_number][level]["skillProf"], showClassInfo_2, []);
    }
    else {
        showClassInfo_2();
    }
}

function showClassInfo_2() {
    if (classes[class_number][level]["languages"] !== undefined) {
        document.getElementById("class_info").innerHTML += "<h2>Languages:</h2><div id=languages></div>";
        choiceAndGet("languages", classes[class_number][level]["languages"], showClassInfo_3, []);
    }
    else {
        showClassInfo_3();
    }
}

function showClassInfo_3() {
    if (classes[class_number][level]["armorProf"] !== undefined) {
        document.getElementById("class_info").innerHTML += "<h2>Armor Proficientcies:</h2><div id=armorProf></div>";
        choiceAndGet("armorProf", classes[class_number][level]["armorProf"], showClassInfo_4, []);
    }
    else {
        showClassInfo_4();
    }
}

function showClassInfo_4() {
    if (classes[class_number][level]["weaponProf"] !== undefined) {
        document.getElementById("class_info").innerHTML += "<h2>Weapon Proficientcies:</h2><div id=weaponProf></div>";
        choiceAndGet("weaponProf", classes[class_number][level]["weaponProf"], showClassInfo_5, []);
    }
    else {
        showBackgroundInfo_5();
    }
}

function showClassInfo_5() {
    if (classes[class_number][level]["toolProf"] !== undefined) {
        document.getElementById("class_info").innerHTML += "<h2>Tool Proficientcies:</h2><div id=toolProf></div>";
        classes[5][0]["toolProf"]["choice"][0]["choices"][0]["choice"][0]["choices"] = ["*artisan"];
        choiceAndGet("toolProf", classes[class_number][level]["toolProf"], showClassInfo_6, []);
    }
    else {
        showClassInfo_6();
    }
}

function showClassInfo_6() {
    if (classes[class_number][level]["equipment"] !== undefined) {
        document.getElementById("class_info").innerHTML += "<h2>Equipment:</h2><div id=equipment></div>";
        choiceAndGet("equipment", classes[class_number][level]["equipment"], showClassInfo_7, []);
    }
    else {
        showClassInfo_7();
    }
}

function showClassInfo_7() {
    if (level == 0) {
        level = 1;
        character["level"] = 1;
    }
    if (level > 0) {
        var tableTitles = Object.keys(classes[class_number][Object.keys(classes[class_number]).length - 3]);
        if (tableTitles.includes("Spell Slots") && character["class"] !== "Warlock") {
            document.getElementById("class_info").innerHTML += "<table id='class_table' class='class_table'><thead><tr id='class_table_head' class='class_table'><th class='class_table' rowspan='2'>Level</th></tr></thead></table>";
        } else {
            document.getElementById("class_info").innerHTML += "<table id='class_table' class='class_table'><thead><tr id='class_table_head' class='class_table'><th class='class_table'>Level</th></tr></thead></table>";
        }
        
        var stuff;
        for (var i = 0; i < tableTitles.length; i++) {
            if (tableTitles[i] == "features") {
                stuff = "Features";
            } else {
                stuff = tableTitles[i]
            }
            
            if (stuff == "Spell Slots" && character["class"] !== "Warlock") {
                document.getElementById("class_table_head").innerHTML += "<th class='class_table' colspan='9'>Spell Slots per Spell Level</th>";
            } else {
                if (tableTitles.includes("Spell Slots") && character["class"] !== "Warlock") {
                    document.getElementById("class_table_head").innerHTML += "<th class='class_table' rowspan='2'>" + stuff + "</th>";
                } else {
                    document.getElementById("class_table_head").innerHTML += "<th class='class_table'>" + stuff + "</th>";
                }
            }
        }
        if (tableTitles.includes("Spell Slots") && character["class"] !== "Warlock") {
            document.getElementById("class_table_head").parentElement.innerHTML += "<tr class='class_table'><th class='class_table'>1</th><th class='class_table'>2</th><th class='class_table'>3</th><th class='class_table'>4</th><th class='class_table'>5</th><th class='class_table'>6</th><th class='class_table'>7</th><th class='class_table'>8</th><th class='class_table'>9</th></tr>"
        }
        document.getElementById("class_table").innerHTML += "<tbody id='class_table_body'></tbody>";
        try {
            for (var i = 1; i < 21; i++) {
                for (var j = -1; j < tableTitles.length; j++) {
                    if (j == -1) {
                        document.getElementById("class_table_body").innerHTML += "<tr><td class='class_table'>" + i + "</td></tr>";
                    } else if (classes[class_number][i][tableTitles[j]] !== undefined) {
                        if(tableTitles[j] == "features") {
                            if (classes[class_number][i]["features"].length > 0) {
                                document.getElementById("class_table_body").childNodes[document.getElementById("class_table_body").childElementCount - 1].innerHTML += "<td class='class_table'><ul></ul></td>";
                                for (var k = 0; k < classes[class_number][i][tableTitles[j]].length; k++) {
                                    document.getElementById("class_table_body").childNodes[document.getElementById("class_table_body").childElementCount - 1].childNodes[document.getElementById("class_table_body").childNodes[document.getElementById("class_table_body").childElementCount - 1].childElementCount - 1].childNodes[0].innerHTML += "<li>" + classes[class_number][i][tableTitles[j]][k]["name"] + "</li>";
                                }
                            } else {
                                document.getElementById("class_table_body").childNodes[document.getElementById("class_table_body").childElementCount - 1].innerHTML += "<td class='class_table'>---</td>";
                            }
                        } else if (tableTitles[j] == "Spell Slots" && character["class"] !== "Warlock") {
                            for (var k = 1; k < 10; k++) {
                                if (classes[class_number][i]["Spell Slots"][k.toString()] !== undefined) {
                                    document.getElementById("class_table_body").childNodes[document.getElementById("class_table_body").childElementCount - 1].innerHTML += "<td class='class_table'>" + classes[class_number][i]["Spell Slots"][k.toString()] + "</td>";
                                } else {
                                    document.getElementById("class_table_body").childNodes[document.getElementById("class_table_body").childElementCount - 1].innerHTML += "<td class='class_table'>---</td>";
                                }
                            }
                            if (i == level) {
                                character["spellSlots"] = classes[class_number][i]["Spell Slots"];
                            }
                        } else {
                            document.getElementById("class_table_body").childNodes[document.getElementById("class_table_body").childElementCount - 1].innerHTML += "<td class='class_table'>" + classes[class_number][i][tableTitles[j]] + "</td>";
                            if (i == level) {
                                if (tableTitles[j] == "Proficiency Bonus") {
                                    character["profBonus"] = classes[class_number][i]["Proficiency Bonus"];
                                } else {
                                    character["other"][tableTitles[j]] = classes[class_number][i][tableTitles[j]];
                                }
                            }
                        }
                    } else {
                        document.getElementById("class_table_body").childNodes[document.getElementById("class_table_body").childElementCount - 1].innerHTML += "<td class='class_table'>---</td>";
                    }
                }
            }
        }
        catch (err) {
            ;
        }
    }
    updateProgress();
    getFeatures(true, 0, "class_info", classes[class_number][level], showClassInfo_8, []);
}

function showClassInfo_8() {
    document.getElementById("class_info").innerHTML += "<p id='class_info_next' class='button'>Next</p>"
    $("#class_info_next").on('click', () => {showSave()});
}

function showSave() {
    hideEverythingCreate();
    $save.show();
}

function save() {
    download(JSON.stringify(character), "character", "text/plain");
}

function print() {
    alert("This function has not been implemented yet. Please come back later.");
}

function loadCharacter() {
    hideEverythingLoad();
    $start.hide();
    $loadChar.show();
    $select.show();
}

function handleFiles() {
    var file = document.getElementById("selectChar").files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            try {
                character = JSON.parse(evt.target.result);
            }
            catch (err) {
                alert("error reading file");
            }
        }
        reader.onerror = function (evt) {
            alert("error reading file");
        }
    }
}

function readCharacter() {
    hideEverythingLoad();
    hideEverythingCreate();
    $create.show();
    $save.show();
    $progress.show();
    updateProgress();
}

getData();

$(document).ready(() => {
    
    window.$start = $('.start');
    window.$create = $('.create');
    window.$progress = $('.progress');
    window.$pl_name = $('.pl_name');
    window.$stats = $('.stats');
    window.$race = $('.race');
    window.$background = $('.background');
    window.$class = $(".class");
    window.$race_info = $('#race_info');
    window.$background_info = $('#background_info');
    window.$class_info = $("#class_info");
    window.$save = $("#save");
    window.$new = $('#new');
    window.$load = $('#load');
    window.$pl_name_next = $('#pl_name_next');
    window.$stats_next = $('#stats_next');
    window.$race_next = $('#race_next');
    window.$background_next = $("#background_next");
    window.$class_next = $("#class_next");
    window.$points = $('#points');
    window.$generate_4d6_1 = $('#generate_4d6_1');
    window.$generate_sa = $('#generate_sa');
    window.$saveChar = $('#saveChar');
    window.$printChar = $('#printChar');
    
    window.$loadChar = $('.loadChar');
    window.$select = $("#select");
    window.$select_next = $("#select_next");
    
    window.everythingCreate = [$pl_name, $stats, $race, $race_info, $background, $background_info, $class, $class_info, $save];
    window.everythingLoad = [$select];
    
    hideEverythingCreate();
    hideEverythingLoad();
    
    $start.show();
    $create.hide();
    $progress.hide();
    $loadChar.hide();
    
    $new.on('click', () => {createCharacter()});
    $load.on('click', () => {loadCharacter()});
    $pl_name_next.on('click', () => {getPlName()});
    $stats_next.on('click', () => {getStats()});
    $race_next.on('click', () => {getRace()});
    $background_next.on('click', () => {getBackground()});
    $class_next.on('click', () => {getClass()});
    $generate_4d6_1.on('click', () => {generate4d6_1()});
    $generate_sa.on('click', () => {generateSA()});
    $saveChar.on('click', () => {save()});
    $printChar.on('click', () => {print()});
    
    $select_next.on('click', () => {readCharacter()});
    
    scoreAbb = Object.keys(scoreAbreviations);
    for (var i = 0; i < 6; i++) {
        document.getElementById("progress_" + scoreAbb[i] + "_save_prof").disabled = true;
    }
    
    skillNames = Object.keys(skills);
    for (var i = 0; i < skillNames.length; i++) {
        document.getElementById("progress_" + skillNames[i].split(" ").join("_") + "_prof").disabled = true;
    }
})
