//Expansions are listed in the order they came out, and each dungeon is listed in the order that they appear in the dungeon journal in-game

const dungeonArrays = {
    vanilla: ["blackfathomDeeps", "blackrockDepths", "deadmines", "direMaul", "gnomeregan", "lowerBlackrockSpire", "maraudon", "ragefireChasm", "razorfenDowns", "razorfenKraul", "scarletHalls", "scarletMonastery", "scholomance", "shadowfangKeep", "stratholme", "theStockade", "sunkenTemple", "uldaman", "wailingCaverns", "zulFarrak"],
    theBurningCrusade: ["auchenaiCrypts", "hellfireRamparts", "magistersTerrace", "manaTombs", "oldHillsbradFoothills", "sethekkHalls", "shadowLabyrinth", "theArcatraz", "theBlackMorass", "theBloodFurnace", "theBotanica", "theMechanar", "theShatteredHalls", "theSlavePens", "theSteamvault", "theUnderbog"],
    wrathOfTheLichKing: ["ahnkahetTheOldKingdom", "azjolnerub", "draktharonKeep", "gundrak", "hallsOfLightning", "hallsOfReflection", "hallsOfStone", "pitOfSaron", "theCullingOfStratholme", "theForgeOfSouls", "theNexus", "theOculus", "theVioletHold", "trialOfTheChampion", "utgardeKeep", "utgardePinnacle"],
    cataclysm: ["blackrockCaverns", "deadmines", "endTime", "grimBatol", "hallsOfOrigination", "hourOfTwilight", "lostCityOfTheTolvir", "shadowfangKeep", "theStonecore", "theVortexPinnacle", "throneOfTheTides", "wellOfEternity", "zulAman", "zulGurub"],
    mistsOfPandaria: ["gateOfTheSettingSun", "mogushanPalace", "scarletHalls", "scarletMonastery", "scholomance", "shadopanMonastery", "siegeOfNiuzaoTemple", "stormstoutBrewery", "templeOfTheJadeSerpent"],
    warlordsOfDraenor: ["auchindoun", "bloodmaulSlagMines", "grimrailDepot", "ironDocks", "shadowmoonBurialGrounds", "skyreach", "theEverbloom", "upperBlackrockSpire"],
    legion: ["assaultOnVioletHold", "blackRookHold", "cathedralOfEternalNight", "courtOfStars", "darkheartThicket", "eyeOfAzshara", "hallsOfValor",  "mawOfSouls", "neltharionsLair", "returnToKarazhan", "seatOfTheTriumvirate", "theArcway", "vaultOfTheWardens"],
    battleForAzeroth: ["ataldazar", "freehold", "kingsRest", "operationMechagon", "shrineOfTheStorm", "siegeOfBoralus", "templeOfSethraliss", "theMotherlode", "theUnderrot", "tolDagor", "waycrestManor"],
    shadowlands: ["deOtherSide", "hallsOfAtonement", "mistsOfTirnaScithe", "plaguefall", "sanguineDepths", "spiresOfAscension", "tazaveshTheVeiledMarket", "theNecroticWake", "theaterOfPain"],
    dragonflight: ["algetharAcademy", "brackenhideHollow", "hallsOfInfusion", "neltharus", "rubyLifePools", "theAzureVault", "theNokhudOffensive", "uldamanLegacyOfTyr"]
}

const expansionSelection = document.getElementById("selection").value;
console.log(dungeonArrays[expansionSelection]); 

dungeonArrays[expansionSelection].forEach(function(dungeonName) {
    const image = document.createElement("img");
    image.src = `assets/images/dungeons/${dungeonName}.png`;
    document.body.appendChild(image);

    //Getting the value of what the expansion the user selected
    const select = document.getElementById("selection").value;
    console.log(select)
  });