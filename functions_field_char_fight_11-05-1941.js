///////////////////////////////////////////////
//////////////UMGESETZTE FEATURES//////////////
///////////////////////////////////////////////

//Autor: Julian Pfeil

//Monster erscheinen
//Spieler erscheint
//Movement-Phase-Animation
//Bewegungs-Zahlen
//Bewegungs-Beschränkung auf Umkreis um Spieler
//Bewegungs-Zahlen erscheinen nur, wenn das Feld kein Monster hat
//"movePlayer()" Variable index angepasst, schlanker definiert
//Bewegungspunkte werden reduziert und Bewegung verboten bei zu geringer Anzahl
//Bewegungskosten bewegen sich mit
//Beim Bewegen werden keine Monster mehr überschrieben
//Um die Bewegung am Rand ebenfalls richtig darstellen zu können, Array mit Randkacheln entwickelt
//if/else zur Evaluation der MovementRange war zu unübersichtlich -> geändert in switch case Anweisung kombiniert mit EINER if/else
//Algorithmus für Bewegung funktioniert nun auch auf allen Rand-Kacheln
//4 Spieler steuerbar mit Wechsel
//Char-Sheet integriert
//Bewegungs-Logik verbessert, schlanker, getestet, funktioniert mit allen Randbereichen
//MonsterChooser hinzugefügt, wenn auf ein Monster in Spielerreichweite geklickt wird
//Stats/Runen/GETTER+SETTER zur Spielerklasse hinzugefügt
//Kommunikation zwischen Spielerklasse und CharSheet implementiert
//Refresh-Fkt geschrieben
//Kampfanimationen/-sounds ergänzt
//Falls auf ein Monster geklickt wird, werden keine Bewegungskosten abgezogen


/* Klassen und Funktionen für das Spielfeld */


/* GLOBALE DATENFELDER */


//////////////////////
// Benötigte Bilder //
//////////////////////

//Spieler CharBilder
var charIMGs = new Array();

charIMGs[1] = new Image(); charIMGs[1].src = "Bilddaten/CharSheet/Spieler1.jpg";
charIMGs[2] = new Image(); charIMGs[2].src = "Bilddaten/CharSheet/Spieler2.jpg";
charIMGs[3] = new Image(); charIMGs[3].src = "Bilddaten/CharSheet/Spieler3.jpg";
charIMGs[4] = new Image(); charIMGs[4].src = "Bilddaten/CharSheet/Spieler4.jpg";

//Spieler Bilder
var players = new Array();

players[1] = new Image(); players[1].src = "Bilddaten/Spielfeld/player1.png";
players[2] = new Image(); players[2].src = "Bilddaten/Spielfeld/player2.png";
players[3] = new Image(); players[3].src = "Bilddaten/Spielfeld/player3.png";
players[4] = new Image(); players[4].src = "Bilddaten/Spielfeld/player4.png";

/*//Monster Bilder
var monster = new Array();

monster[0] = new Image(); monster[0].src = "Monster7.png";
monster[1] = new Image(); monster[1].src = "Monster7.png";
monster[2] = new Image(); monster[2].src = "Monster7.png";
monster[3] = new Image(); monster[3].src = "Monster7.png";*/


//Ebenen Bilder
var terrains = new Array();

terrains[0] = new Image(); terrains[0].src = "Bilddaten/Spielfeld/Weg.png";
terrains[1] = new Image(); terrains[1].src = "Bilddaten/Spielfeld/Gras.png";
terrains[2] = new Image(); terrains[2].src = "Bilddaten/Spielfeld/Wald.png";
terrains[3] = new Image(); terrains[3].src = "Bilddaten/Spielfeld/Sand.png";
terrains[4] = new Image(); terrains[4].src = "Bilddaten/Spielfeld/Sumpf.png";
terrains[5] = new Image(); terrains[5].src = "Bilddaten/Spielfeld/Berg.png";

//Ebenen Bilder, wenn ausgewählt
var terrainsAktuell = new Array();

terrainsAktuell[0] = new Image(); terrainsAktuell[0].src = "Bilddaten/Spielfeld/WegAktuell.png";
terrainsAktuell[1] = new Image(); terrainsAktuell[1].src = "Bilddaten/Spielfeld/GrasAktuell.png";
terrainsAktuell[2] = new Image(); terrainsAktuell[2].src = "Bilddaten/Spielfeld/WaldAktuell.png";
terrainsAktuell[3] = new Image(); terrainsAktuell[3].src = "Bilddaten/Spielfeld/SandAktuell.png";
terrainsAktuell[4] = new Image(); terrainsAktuell[4].src = "Bilddaten/Spielfeld/SumpfAktuell.png";
terrainsAktuell[5] = new Image(); terrainsAktuell[5].src = "Bilddaten/Spielfeld/BergAktuell.png";

//Bilder von Zahlen stellvertretend für die Bewegungsschwierigkeit der Ebenen
var terrainsDifficulties = new Array();

terrainsDifficulties[0] = new Image(); terrainsDifficulties[0].src = "Bilddaten/Spielfeld/Eins.png";
terrainsDifficulties[1] = new Image(); terrainsDifficulties[1].src = "Bilddaten/Spielfeld/Zwei.png";
terrainsDifficulties[2] = new Image(); terrainsDifficulties[2].src = "Bilddaten/Spielfeld/Drei.png";
terrainsDifficulties[3] = new Image(); terrainsDifficulties[3].src = "Bilddaten/Spielfeld/Vier.png";
terrainsDifficulties[4] = new Image(); terrainsDifficulties[4].src = "Bilddaten/Spielfeld/Fünf.png";
terrainsDifficulties[5] = new Image(); terrainsDifficulties[5].src = "Bilddaten/Spielfeld/Sechs.png";

/*//Monster Icon
var MonsterSRC = new Image(); MonsterSRC.src = "Monster1.png";*/
var TempSRC = new Image(); TempSRC.src = "Bilddaten/Spielfeld/temp.png";








//////////////////////////////
// Benötigt für Spiel-Logik //
//////////////////////////////

//Array with all players
var AllPlayers = new Array();

//Array with all tiles
var AllTiles = new Array();

//Array with all templates
var AllTemplates = new Array();

//Arrays with ID of all border Tiles
//!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
var NorthBorderTilesIDs = new Array();
var SouthBorderTilesIDs = new Array();
var EastBorderEvenTilesIDs = new Array();
var EastBorderUnevenTilesIDs = new Array();
var WestBorderEvenTilesIDs = new Array();
var WestBorderUnevenTilesIDs = new Array();
var NorthWestCornerID = new Array();
var BorderTilesIDs = new Array();

//Array, in dem immer alle Kacheln in Reichweite des aktuellen Spielers enthalten sind.
var tilesAroundPlayer = new Array();

//Manuell bestimmbare Paramter des Spiels
var amountFieldColumns = 17; // standardmäßig im Fall, dass nichts eingenstellt wird: 12
var columnLength = 23; // standardmäßig im Fall, dass nichts eingestellt wird: 24
var amountTiles = -1; //errechnet sich aus amountFieldColumns
var amountMonsters = 5; // standardmäßig im Fall, dass nichts eingestellt wird: 5

zwischenSpeicherRahmen = 0;

currentPlayerNumber = 0;
currentMovementPoints = 0;
currentPlayerPosition = 0;


////////////////////
// CLASS - Player //
////////////////////

function Player(number) {

	//GENERALS

	this.playerPosition;
	this.playerNumber = number;
	this.playerName;
	this.playerImg;
	this.playerCharImg;
	
	this.isPlaying = false;
	var array = new Array(19);
	//Die Array-Positionen stellen die Punkte dar, die beim LvlUp verteilt werden dürfen
	array[18] = 2;
	array[19] = 4;
	this.playerStatsArray = array;


	//RUNES

	this.playerMovementPointsMax;
	this.playerMovementPoints;

	this.playerTrackingPointsMax;
	this.playerTrackingPoints;

	this.playerXStrikePointsMax;
	this.playerXStrikePoints;

	this.playerHealPointsMax;
	this.playerHealPoints;

	this.playerBoostMax;
	this.playerBoost;


	//STATS

	this.playerSwordDmg;
	this.playerSword;

	this.playerBowDmg;
	this.playerBow;

	this.playerMagicDmg;
	this.playerMagic;

	this.playerLifeMax;
	this.playerLife;

	this.playerLvl = 1;

	this.playerEXP = 0;

}

Player.prototype.setPlayerStatsArray = function(newPlayerStatsArray) {

		this.playerStatsArray = newPlayerStatsArray;

}

Player.prototype.getPlayerStatsArray = function() {

		return this.playerStatsArray;

}


Player.prototype.setPlayerName = function(newPlayerName) {

		this.playerName = newPlayerName;

}

Player.prototype.getPlayerName = function() {

		return this.playerName;

}

Player.prototype.setPlayerCharImg = function(newPlayerCharImg) {

		this.playerCharImg = new Image();
		this.playerCharImg.src = newplayerCharImg;
		

}

Player.prototype.getPlayerCharImg = function() {

		return this.playerCharImg.src;

}

Player.prototype.setPlayerEXP = function(newPlayerEXP) {

		this.playerEXP = newPlayerEXP;

}

Player.prototype.getPlayerEXP = function() {

		return this.playerEXP;

}

Player.prototype.setPlayerLvl = function(newPlayerLvl) {

		this.playerLvl = newPlayerLvl;

}

Player.prototype.getPlayerLvl = function() {

		return this.playerLvl;

}

////////STATS////////////

Player.prototype.setPlayerLifeMax = function(newPlayerLifeMax) {

		this.playerLifeMax = newPlayerLifeMax;

}

Player.prototype.getPlayerLifeMax = function() {

		return this.playerLifeMax;

}

Player.prototype.setPlayerLife = function(newPlayerLife) {

		this.playerLife = newPlayerLife;

}

Player.prototype.getPlayerLife = function() {

		return this.playerLife;

}

Player.prototype.setPlayerMagicDmg = function(newPlayerMagicDmg) {

		this.playerMagicDmg = newPlayerMagicDmg;

}

Player.prototype.getPlayerMagicDmg = function() {

		return this.playerMagicDmg;

}

Player.prototype.setPlayerMagic = function(newPlayerMagic) {

		this.playerMagic = newPlayerMagic;

}

Player.prototype.getPlayerMagic = function() {

		return this.playerMagic;

}

Player.prototype.setPlayerBowDmg = function(newPlayerBowDmg) {

		this.playerBowDmg = newPlayerBowDmg;

}

Player.prototype.getPlayerBowDmg = function() {

		return this.playerBowDmg;

}

Player.prototype.setPlayerBow = function(newPlayerBow) {

		this.playerBow = newPlayerBow;

}

Player.prototype.getPlayerBow = function() {

		return this.playerBow;

}

Player.prototype.setPlayerSwordDmg = function(newPlayerSwordDmg) {

		this.playerSwordDmg = newPlayerSwordDmg;

}

Player.prototype.getPlayerSwordDmg = function() {

		return this.playerSwordDmg;

}

Player.prototype.setPlayerSword = function(newPlayerSword) {

		this.playerSword = newPlayerSword;

}

Player.prototype.getPlayerSword = function() {

		return this.playerSword;

}



////////RUNES////////////


Player.prototype.setPlayerBoost = function(newPlayerBoost) {

		this.playerBoost = newPlayerBoost;

}

Player.prototype.getPlayerBoost = function() {

		return this.playerBoost;

}

Player.prototype.setPlayerBoostMax = function(newPlayerBoostMax) {

		this.playerBoostMax = newPlayerBoostMax;

}

Player.prototype.getPlayerBoostMax = function() {

		return this.playerBoostMax;

}

Player.prototype.setPlayerMovementPoints = function(newPlayerMovementPoints) {

		this.playerMovementPoints = newPlayerMovementPoints;

}

Player.prototype.getPlayerMovementPoints = function() {

		return this.playerMovementPoints;

}

Player.prototype.setPlayerMovementPointsMax = function(newPlayerMovementPointsMax) {

		this.playerMovementPointsMax = newPlayerMovementPointsMax;

}

Player.prototype.getPlayerMovementPointsMax = function() {

		return this.playerMovementPointsMax;

}

Player.prototype.setPlayerTrackingPoints = function(newPlayerTrackingPoints) {

		this.playerTrackingPoints = newPlayerTrackingPoints;

}

Player.prototype.getPlayerTrackingPoints = function() {

		return this.playerTrackingPoints;

}

Player.prototype.setPlayerTrackingPointsMax = function(newPlayerTrackingPointsMax) {

		this.playerTrackingPointsMax = newPlayerTrackingPointsMax;

}

Player.prototype.getPlayerTrackingPointsMax = function() {

		return this.playerTrackingPointsMax;

}

Player.prototype.setPlayerXStrikePoints = function(newPlayerXStrikePoints) {

		this.playerXStrikePoints = newPlayerXStrikePoints;

}

Player.prototype.getPlayerXStrikePoints = function() {

		return this.playerXStrikePoints;

}

Player.prototype.setPlayerXStrikePointsMax = function(newPlayerXStrikePointsMax) {

		this.playerXStrikePointsMax = newPlayerXStrikePointsMax;

}

Player.prototype.getPlayerXStrikePointsMax = function() {

		return this.playerXStrikePointsMax;

}

Player.prototype.setPlayerHealPoints = function(newPlayerHealPoints) {

		this.playerHealPoints = newPlayerHealPoints;

}

Player.prototype.getPlayerHealPoints = function() {

		return this.playerHealPoints;

}

Player.prototype.setPlayerHealPointsMax = function(newPlayerHealPointsMax) {

		this.playerHealPointsMax = newPlayerHealPointsMax;

}

Player.prototype.getPlayerHealPointsMax = function() {

		return this.playerHealPointsMax;

}




////////NECCESSARY FOR FIELD////////////

Player.prototype.setIsPlaying = function(isPlaying) {

		this.isPlaying = isPlaying;

}

Player.prototype.getIsPlaying = function() {

		return this.isPlaying;

}

Player.prototype.setPlayerImg = function(newPlayerImg) {

		this.playerImg = new Image();
		this.playerImg.src = newPlayerImg;

}

Player.prototype.getPlayerImg = function() {

		return this.playerImg.src;

}

Player.prototype.setPlayerPosition = function(newPlayerPosition) {

		this.playerPosition = newPlayerPosition;

}

Player.prototype.getPlayerPosition = function() {

		return this.playerPosition;

}

Player.prototype.setPlayerNumber = function(newPlayerNumber) {

		this.playerNumber = newPlayerNumber;

}

Player.prototype.getPlayerNumber = function() {

		return this.playerNumber;

}













///////////////////
// CLASS - Tiles //
///////////////////

function Tile(id) {

	this.XPosition = 0;
	this.YPosition = 0;
	this.ID = id;
	this.terrainDifficulty = Math.floor(Math.random() * 6);
	this.terrain = terrains[this.terrainDifficulty];
	
	this.hasMonsters = false;
	this.hasPlayer = false;
	this.isSelected = false;

}

////////////////////////////
// Methods of class Tiles //
////////////////////////////

Tile.prototype.setXPosition = function(newXPosition) {

		this.XPosition = newXPosition;

}

Tile.prototype.getXPosition = function() {

	return this.XPosition;

}

Tile.prototype.setYPosition = function(newYPosition) {

		this.YPosition = newYPosition;

}

Tile.prototype.getYPosition = function() {

	return this.YPosition;

}

Tile.prototype.setID = function(newID) {

		this.ID = newID;

}

Tile.prototype.getID = function() {

	return this.ID;

}

Tile.prototype.setTerrainDifficulty = function(newTerrainDifficulty) {

		this.terrainDifficulty = newTerrainDifficulty;

}

Tile.prototype.getTerrainDifficulty = function() {

	return this.terrainDifficulty;

}

Tile.prototype.setTerrain = function() {

	var n = Math.floor(Math.random() * 6);
	this.terrain = terrains[n];

}

Tile.prototype.getTerrain = function() {

	return this.terrain;

}

Tile.prototype.setHasPlayer = function (hasPlayer) {

	this.hasPlayer = hasPlayer;

}	

Tile.prototype.getHasPlayer = function () {

	return this.hasPlayer;

}	

Tile.prototype.setHasMonsters = function (hasMonsters) {

	this.hasMonsters = hasMonsters;

}	

Tile.prototype.getHasMonsters = function () {

	return this.hasMonsters;

}











///////////////////////////////////
// Methods for Initializing Game //
///////////////////////////////////

function setFieldParas1(newReihenAnzahl) {

	//Falls die Angabe 16 Reihen übersteigt
	if(newReihenAnzahl > 16) {
		document.getElementById ("warning1").innerHTML = "o_O Du spinnst doch. Ich setz das mal auf 16.";
		document.getElementById ("warning1").style.color = "red";
		document.getElementById ("reihenAnzahl").value = "16";
		amountFieldColumns = 16;
	}

	else {

			//Falls die Angabe nicht durch 2 teilbar ist
			if(newReihenAnzahl % 2 == 0) {

				document.getElementById ("warning1").innerHTML = "Ne ungerade Zahl is schöner. Ich pass das mal an.";
				document.getElementById ("warning1").style.color = "red";
				document.getElementById ("reihenAnzahl").value = newReihenAnzahl-1;
				//Die ", 10" im parseInt stehen für das Zahlensystem. Könnte sonst Probleme geben, wenn JS das Oktalsystem nimmt statt das Dezimalsystem
				amountFieldColumns = parseInt(newReihenAnzahl-1, 10);	

			}

			else{
				document.getElementById ("warning1").innerHTML = newReihenAnzahl+" Reihen. Viel Spaß";
				document.getElementById ("warning1").style.color = "green";
				amountFieldColumns = parseInt(newReihenAnzahl, 10);
			}
	}
}

function setFieldParas2(newMonsterAnzahl) {

	if(newMonsterAnzahl > 100) {

		document.getElementById ("warning2").innerHTML = "Lebensmüde? 100 reichen auch...";
		document.getElementById ("warning2").style.color = "red";
		document.getElementById ("monsterAnzahl").value = "100";
		amountMonsters = 100;
	}

	else {
		
		document.getElementById ("warning2").innerHTML = newMonsterAnzahl+" Monster. Viel Glück";
		document.getElementById ("warning2").style.color = "green";
		amountMonsters = parseInt(newMonsterAnzahl,10);
	}

}

function setFieldParas3(newReihenLänge) {

	if(newReihenLänge > 24) {

		document.getElementById ("warning3").innerHTML = "Nope...";
		document.getElementById ("warning3").style.color = "red";
		document.getElementById ("reihenLänge").value = "24";
		columnLength = 24;
	}

	else {
		
		document.getElementById ("warning3").innerHTML = "Reihenlänge von "+newReihenLänge;
		document.getElementById ("warning3").style.color = "green";
		columnLength = parseInt(newReihenLänge,10);
	}

}


function calculateFieldParas () {

	for(i=1; i <= amountFieldColumns; i++) {

			//falls i gerade
			if (i%2 == 0) {

				amountTiles = amountTiles+(columnLength-1);

			}

			else {

				amountTiles = amountTiles+columnLength;

			}
	}
}

//Erzeugt das Array BorderTilesID, das für die Bewegungsberechnung benötigt wird
function calculateBorderTileIDs() {

	//NORTH
	//abzüglich des ersten und letzten Elements. Diese Ecken werden gesondert betrachtet
	for(i=1; i < columnLength-1; i++) {

		NorthBorderTilesIDs.push(i);

	}

	for(i=0; i < columnLength-1; i++) {

		NorthWestCornerID.push(i);

	}

	//!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
	// Denn nur dann kann man davon ausgehen, dass die South-Reihe so viele Elemente hat wie die North-Reihe
	//SOUTH
	//abzüglich des ersten und letzten Elements. Diese Ecken werden gesondert betrachtet
	var southID = amountTiles-(columnLength-2);
	for(i=1; i < columnLength-1; i++) {

		SouthBorderTilesIDs.push(southID);
		southID = southID+1;

	}

	//!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
	//"amountFieldColumns-2", weil die erste und letzte Reihe schon in NORTH und SOUTH Border sind
	//EAST
	var eastID = 2*(columnLength-1);
	for(i=1; i <= amountFieldColumns-2; i++) {

		//Falls i ungerade
		if(i % 2 != 0) {

			EastBorderUnevenTilesIDs.push(eastID);
			eastID = eastID+columnLength;
		}

		else {

			EastBorderEvenTilesIDs.push(eastID);
			eastID = eastID+columnLength-1;
		}

	}

	//!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
	//"amountFieldColumns-2", weil die erste und letzte Reihe schon in NORTH und SOUTH Border sind
	//WEST
	var westID = columnLength;
	for(i=1; i <= amountFieldColumns-2; i++) {

		//Falls i ungerade
		if(i % 2 != 0) {

			WestBorderUnevenTilesIDs.push(westID);
			westID = westID+(columnLength-1);
		}

		else {

			WestBorderEvenTilesIDs.push(westID);
			westID = westID+columnLength;
		}

	}

	BorderTilesIDs = NorthBorderTilesIDs.concat(SouthBorderTilesIDs, EastBorderEvenTilesIDs, EastBorderUnevenTilesIDs, WestBorderEvenTilesIDs, WestBorderUnevenTilesIDs);
	//Die vier Ecken, die nicht in den Arrays enthalten sind einzeln hinzufügen
	BorderTilesIDs.push(0, amountTiles, columnLength-1, amountTiles-(columnLength-1));

}


var numberArrayTiles = new Array()
	
//erzeugt ein Array mit Zahlen
function initNumberArrayTiles() {

	for(var i = 0; i<=amountTiles; i++)	{

		numberArrayTiles.push(i);
	}
}

//mischt das Array per Zufall
function shuffleTilesArray() {

	var tmp = 0;
	var rand = 0;

	for(var i = 0; i <=amountTiles; i++) {

	rand = Math.floor(Math.random() * (amountTiles+1));
	tmp = numberArrayTiles[i]; 
	numberArrayTiles[i] = numberArrayTiles[rand]; 
	numberArrayTiles[rand] = tmp;

	}
}





















///////////////////////////////////
// CREATE TILES AND TEMPLATES //
///////////////////////////////////

// Erzeugt alle Spielfeld-Kacheln
function createTiles() {

	//xCounter und yCounter bezeichnen die absoluten Positionen der Elemente
	var xCounter = 0;
	var yCounter = 0;
	//Das Element, zu dem die Kacheln hinzugefügt werden
	var field = document.getElementById("field");

	// Schleife, die schrittweise alle Kacheln erzeugt

	var evenColumn = true;
	var currentTileSum = columnLength-1;
	for(i=0; i<=amountTiles; i++) {
			
		var tile = new Tile(i);
		tile.setXPosition(xCounter);
		tile.setYPosition(yCounter);
		// tileIMG ist die Variable für das jeweils in den tiles enthaltene img
		// Muss hier deklariert werden, damit dessen style etc. beeinflusst werden kann
		// CloneNode erlaubt es dasselbe Bild mehrmals zu laden. Sonst würden die Bilder immer überschrieben
		tileIMG = tile.getTerrain().cloneNode(true);
		tileIMG.id = i;
		tileIMG.className = "tiles";
		tileIMG.style.position="absolute";
		// Setzt die Position der jeweiligen Kachel. "+px" ist nötig, damit der Befehl syntaktisch richtig ausgeführt wird
		tileIMG.style.left = tile.getXPosition()+"px";
		tileIMG.style.top = tile.getYPosition()+"px";
		// fügt die Kachel dem Feld hinzu
		field.appendChild(tileIMG); 
		// Macht die Kacheln zunächst unsichtbar, damit sie später per Random-Funktion sichtbar gemacht werden können
		tileIMG.style.visibility = "hidden";
		//"tileIMG.onmouseover = bewegeRahmen;" ausgeladert auf die Templates, weil diese über den Kacheln liegen und mouseover somit bei den Kacheln nicht möglich ist
		AllTiles[i] = tile;

		if(evenColumn == true) {

				//Falls Laufindex modulo 19 ungleich 0 --> Man befindet sich noch in der ersten Zeile
				//Falls Laufindex modulo 19 gleich 0 --> Ende der Zeile erreicht
				//19 ist an dieser Stelle vllt verwirrend, aber effektiv sind es 20 Kacheln, da die erste bei 0 anfängt
				if(i == 0 || i%currentTileSum != 0) {

					xCounter = xCounter+40;

				}

				//else-Teil initialisiert Zeilenwechsel
				else {

					//um 20 einrücken und 34 nach unten verschieben
					xCounter = 20;
					yCounter = yCounter+34;

					//Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
					evenColumn = false;
					//Erste 19er - Reihe gefüllt, currentTileSum um die zugefügt Anzahl erhöhen
					currentTileSum = currentTileSum+(columnLength-1);

				}


				}
		

		else {

				if(i%currentTileSum != 0) {

					xCounter = xCounter+40;

				}

				//else-Teil initialisiert Zeilenwechsel
				else {

					//wieder ausrücken und 34 nach unten verschieben
					xCounter = 0;
					yCounter = yCounter+34;

					//Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
					evenColumn = true;
					currentTileSum = currentTileSum+columnLength;

				}
	
		}
		
	}

}

//Erzeugt die austauschbaren Templates über jeder Kachel
function initTemplates() {

	var xCounter = 0;
	var yCounter = 0;
	var field = document.getElementById("field");

	var evenColumn = true;
	var currentTileSum = columnLength-1;
	for(i=0; i<=amountTiles; i++) {
			
		var template = new Image(); template.src = "Bilddaten/Spielfeld/temp.png";
		template.id = amountTiles+1+i;
		template.className = "templates";
		template.style.position="absolute";
		template.style.left = xCounter+"px";
		template.style.top = yCounter+"px";
		field.appendChild(template); 
		template.onclick = checkClickedTile;
		template.onmouseover = bewegeRahmen;
		AllTemplates[i] = template;

		if(evenColumn == true) {

				//Falls Laufindex modulo 19 ungleich 0 --> Man befindet sich noch in einer ungeraden Zeile
				//Falls Laufindex modulo 19 gleich 0 --> Ende der Zeile erreicht
				if(i == 0 || i%currentTileSum != 0) {

					xCounter = xCounter+40;

				}

				//else-Teil initialisiert Zeilenwechsel
				else {

					//um 20 einrücken und 34 nach unten verschieben
					xCounter = 20;
					yCounter = yCounter+34;

					//Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
					evenColumn = false;
					//Erste 19er - Reihe gefüllt, currentTileSum um die zugefügt Anzahl erhöhen
					currentTileSum = currentTileSum+(columnLength-1);

				}
		}

		else {

				if(i%currentTileSum != 0) {

					xCounter = xCounter+40;

				}

				//else-Teil initialisiert Zeilenwechsel
				else {

					//wieder ausrücken und 34 nach unten verschieben
					xCounter = 0;
					yCounter = yCounter+34;

					//Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
					evenColumn = true;
					currentTileSum = currentTileSum+columnLength;

				}
	
		}
	}

}

//Funktion, die schrittweise die Kacheln sichtbar macht
var timeShowTiles = 7
function showTiles() {

	for (var i = 0; i <= amountTiles; i++) {

	    timeShowTiles += 7;

	    setTimeout(function(j) {

	        return function() {

	            document.getElementById(numberArrayTiles[j]).style.visibility = "visible";
/*	            if(j%10 == 0) {moveSound();}*/

	        }

	    }(i), timeShowTiles);
	}
	timeShowTiles = 0;
}
























///////////////////////////////////
// CREATE MONSTER AND PLAYER //
///////////////////////////////////


var numberArrayMonsters = new Array()
	
//erzeugt ein Array mit Zahlen
function initNumberArrayMonsters() {

	for(var i = 0; i <= amountMonsters+1; i++)	{

		//erzeugt Zufallszahl zwischen 0 und Anzahl an Kacheln im Spiel
		var randomNumber = Math.floor(Math.random() * (amountTiles+1))

		//Falls die erzeute Zahl noch nicht im MonsterArray vorkommt, kann sie einfach hinzugefügt werden
		if($.inArray(randomNumber, numberArrayMonsters) == -1) {

		numberArrayMonsters.push(randomNumber);

		}

		// erzeugt solange eine neue Zahl bis es eine ist, die noch nicht im Array vorkommt.
		// Damit nicht Monster an derselben Stelle gesetzt werden.
		else {

			while ($.inArray(randomNumber, numberArrayMonsters) != -1) {

				var randomNumber = Math.floor(Math.random() * (amountTiles+1))

			}

			numberArrayMonsters.push(randomNumber);
		}

	}
}

var timeSummonMonsters = 100;
function summonMonsters () {		

	for(i=1; i <= amountMonsters; i++) {

		timeSummonMonsters += 100;

		setTimeout(function(j) {

			return function() {

					// Der Kachel sagen, dass sie ein Monster hat
					AllTiles[numberArrayMonsters[j]].setHasMonsters(true);
					StabSound();

					document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = "Bilddaten/Spielfeld/MonsterImg.png"

					// "1+" ist notwendig, weil die Random-Fkt. Werte zwischen 0 und Obergrenze erzeugen würde
					// wir benötigen aber für den switch-case Werte zwischen 1 und 4. So kann man die 0 aussparen.
/*					var randomNumber = 1+ Math.floor(Math.random() * (4));

					switch (randomNumber) {


						case 1:

							document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[0].src;
							break;

						case 2:

							document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[1].src;
							break;

						case 3:

							document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[2].src;
							break;

						case 4:

							document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[3].src;
							break;

						default:
					}*/
			}

		} (i), timeSummonMonsters);
	}	

	timeSummonMonsters = 0;
}


function createPlayers() {

	for(i = 1; i <= 4; i++) {

		player = new Player(i);
		player.setPlayerImg(players[i].src);
		stats = player.getPlayerStatsArray();

		//Stats initialisieren
		//Jeweils in Spielerklasse speichern und im Array eintragen, das charSheet zum Zeichnen benutzt
		switch(i) {

			case 1:

					player.setPlayerName("SENJU");

					//STATS
					player.setPlayerSword(5); 
					stats[0] = player.getPlayerSword();

					player.setPlayerSwordDmg(4);
					stats[1] = player.getPlayerSwordDmg();

					player.setPlayerBow(3); 
					stats[2] = player.getPlayerBow();

					player.setPlayerBowDmg(1);
					stats[3] = player.getPlayerBowDmg();

					player.setPlayerMagic(3); 
					stats[4] = player.getPlayerMagic();

					player.setPlayerMagicDmg(1);
					stats[5] = player.getPlayerMagicDmg();

					player.setPlayerLife(25); 
					stats[6] = player.getPlayerLife();

					player.setPlayerLifeMax(25);
					stats[7] = player.getPlayerLifeMax();


					//RUNES

					player.setPlayerHealPoints(5); 
					stats[8] = player.getPlayerHealPoints();

					player.setPlayerHealPointsMax(5);
					stats[9] = player.getPlayerHealPointsMax();

					player.setPlayerBoost(1); 
					stats[10] = player.getPlayerBoost();

					player.setPlayerBoostMax(1);
					stats[11] = player.getPlayerBoostMax();

					player.setPlayerTrackingPoints(5); 
					stats[12] = player.getPlayerTrackingPoints();

					player.setPlayerTrackingPointsMax(5);
					stats[13] = player.getPlayerTrackingPointsMax();

					player.setPlayerXStrikePoints(1); 
					stats[14] = player.getPlayerXStrikePoints();

					player.setPlayerXStrikePointsMax(1);
					stats[15] = player.getPlayerXStrikePointsMax();

					player.setPlayerMovementPoints(10); 
					stats[16] = player.getPlayerMovementPoints();

					player.setPlayerMovementPointsMax(10);
					stats[17] = player.getPlayerMovementPointsMax();

					AllPlayers[i] = player;

					break;

			case 2:

					player.setPlayerName("MISCHA");

					//STATS				
					player.setPlayerSword(3); 
					stats[0] = player.getPlayerSword();

					player.setPlayerSwordDmg(3);
					stats[1] = player.getPlayerSwordDmg();

					player.setPlayerBow(3); 
					stats[2] = player.getPlayerBow();

					player.setPlayerBowDmg(3);
					stats[3] = player.getPlayerBowDmg();

					player.setPlayerMagic(3); 
					stats[4] = player.getPlayerMagic();

					player.setPlayerMagicDmg(3);
					stats[5] = player.getPlayerMagicDmg();

					player.setPlayerLife(15); 
					stats[6] = player.getPlayerLife();

					player.setPlayerLifeMax(15);
					stats[7] = player.getPlayerLifeMax();


					//RUNES

					player.setPlayerHealPoints(5); 
					stats[8] = player.getPlayerHealPoints();

					player.setPlayerHealPointsMax(5);
					stats[9] = player.getPlayerHealPointsMax();

					player.setPlayerBoost(1); 
					stats[10] = player.getPlayerBoost();

					player.setPlayerBoostMax(1);
					stats[11] = player.getPlayerBoostMax();

					player.setPlayerTrackingPoints(5); 
					stats[12] = player.getPlayerTrackingPoints();

					player.setPlayerTrackingPointsMax(5);
					stats[13] = player.getPlayerTrackingPointsMax();

					player.setPlayerXStrikePoints(1); 
					stats[14] = player.getPlayerXStrikePoints();

					player.setPlayerXStrikePointsMax(1);
					stats[15] = player.getPlayerXStrikePointsMax();

					player.setPlayerMovementPoints(10); 
					stats[16] = player.getPlayerMovementPoints();

					player.setPlayerMovementPointsMax(10);
					stats[17] = player.getPlayerMovementPointsMax();

					AllPlayers[i] = player;

					break;

			case 3:

					player.setPlayerName("JULIAN");

					//STATS				
					player.setPlayerSword(2); 
					stats[0] = player.getPlayerSword();

					player.setPlayerSwordDmg(1);
					stats[1] = player.getPlayerSwordDmg();

					player.setPlayerBow(1); 
					stats[2] = player.getPlayerBow();

					player.setPlayerBowDmg(3);
					stats[3] = player.getPlayerBowDmg();

					player.setPlayerMagic(6); 
					stats[4] = player.getPlayerMagic();

					player.setPlayerMagicDmg(5);
					stats[5] = player.getPlayerMagicDmg();

					player.setPlayerLife(10); 
					stats[6] = player.getPlayerLife();

					player.setPlayerLifeMax(10);
					stats[7] = player.getPlayerLifeMax();


					//RUNES

					player.setPlayerHealPoints(5); 
					stats[8] = player.getPlayerHealPoints();

					player.setPlayerHealPointsMax(5);
					stats[9] = player.getPlayerHealPointsMax();

					player.setPlayerBoost(1); 
					stats[10] = player.getPlayerBoost();

					player.setPlayerBoostMax(1);
					stats[11] = player.getPlayerBoostMax();

					player.setPlayerTrackingPoints(5); 
					stats[12] = player.getPlayerTrackingPoints();

					player.setPlayerTrackingPointsMax(5);
					stats[13] = player.getPlayerTrackingPointsMax();

					player.setPlayerXStrikePoints(1); 
					stats[14] = player.getPlayerXStrikePoints();

					player.setPlayerXStrikePointsMax(1);
					stats[15] = player.getPlayerXStrikePointsMax();

					player.setPlayerMovementPoints(10); 
					stats[16] = player.getPlayerMovementPoints();

					player.setPlayerMovementPointsMax(10);
					stats[17] = player.getPlayerMovementPointsMax();

					AllPlayers[i] = player;

					break;

			case 4:

					player.setPlayerName("JACKY");

					//STATS				
					player.setPlayerSword(4); 
					stats[0] = player.getPlayerSword();

					player.setPlayerSwordDmg(1);
					stats[1] = player.getPlayerSwordDmg();

					player.setPlayerBow(6); 
					stats[2] = player.getPlayerBow();

					player.setPlayerBowDmg(5);
					stats[3] = player.getPlayerBowDmg();

					player.setPlayerMagic(2); 
					stats[4] = player.getPlayerMagic();

					player.setPlayerMagicDmg(1);
					stats[5] = player.getPlayerMagicDmg();

					player.setPlayerLife(20); 
					stats[6] = player.getPlayerLife();

					player.setPlayerLifeMax(20);
					stats[7] = player.getPlayerLifeMax();


					//RUNES

					player.setPlayerHealPoints(5); 
					stats[8] = player.getPlayerHealPoints();

					player.setPlayerHealPointsMax(5);
					stats[9] = player.getPlayerHealPointsMax();

					player.setPlayerBoost(1); 
					stats[10] = player.getPlayerBoost();

					player.setPlayerBoostMax(1);
					stats[11] = player.getPlayerBoostMax();

					player.setPlayerTrackingPoints(5); 
					stats[12] = player.getPlayerTrackingPoints();

					player.setPlayerTrackingPointsMax(5);
					stats[13] = player.getPlayerTrackingPointsMax();

					player.setPlayerXStrikePoints(1); 
					stats[14] = player.getPlayerXStrikePoints();

					player.setPlayerXStrikePointsMax(1);
					stats[15] = player.getPlayerXStrikePointsMax();

					player.setPlayerMovementPoints(10); 
					stats[16] = player.getPlayerMovementPoints();

					player.setPlayerMovementPointsMax(10);
					stats[17] = player.getPlayerMovementPointsMax();

					AllPlayers[i] = player;

					break;

		}

	}

	//Start Movement Points von Spieler 1 übernehmen
	currentMovementPoints = AllPlayers[1].getPlayerMovementPoints();
	
}




var timeSummonPlayers = 250
function summonPlayers() {

	for(i = 1; i <= 4; i++){

		timeSummonPlayers += 250;

		setTimeout(function(j) {

			return function() {

				randomPosition = Math.floor(Math.random() * (amountTiles));

				//Falls auf der zufällig bestimmten Position bereits ein Monster haust
				if(AllTiles[randomPosition].getHasMonsters() == true || AllTiles[randomPosition].getHasPlayer() == true) {

					//Wiederhole den Vorgang bis das nicht mehr der Fall ist
					while(AllTiles[randomPosition].getHasMonsters() == true || AllTiles[randomPosition].getHasPlayer() == true) {

						randomPosition = Math.floor(Math.random() * (amountTiles));
					}

				}

				//Speichere SpielerPosition in Player-Objekten
				AllPlayers[j].setPlayerPosition(randomPosition);

				//Start-Position von Spieler 1 übernehmen
				currentPlayerPosition = AllPlayers[1].getPlayerPosition();

				//Tausche Template an Stelle des Spielers mit Spielerbild aus
				AllTemplates[randomPosition].src = players[j].src;
				swordSound();

				//Sage der Kachel, dass sie einen Spieler hat
				AllTiles[randomPosition].setHasPlayer(true);
			}

		} (i), timeSummonPlayers);

	}
}

var currentPlayer;
function updateCharSheet() {

	var currentPlayer = AllPlayers[currentPlayerNumber];

	//STATS
	$("#sword").html(currentPlayer.getPlayerSword()); $("#swordMax").html(currentPlayer.getPlayerSwordDmg());
	$("#bow").html(currentPlayer.getPlayerBow()); $("#bowMax").html(currentPlayer.getPlayerBowDmg());
	$("#magic").html(currentPlayer.getPlayerMagic()); $("#magicMax").html(currentPlayer.getPlayerMagicDmg());
	$("#life").html(currentPlayer.getPlayerLife()); $("#lifeMax").html(currentPlayer.getPlayerLifeMax());

	//RUNES
	$("#heal").html(currentPlayer.getPlayerHealPoints()); $("#healMax").html(currentPlayer.getPlayerHealPointsMax());
	$("#pers").html(currentPlayer.getPlayerBoost()); $("#persMax").html(currentPlayer.getPlayerBoostMax());
	$("#track").html(currentPlayer.getPlayerTrackingPoints()); $("#trackMax").html(currentPlayer.getPlayerTrackingPointsMax());
	$("#xstrike").html(currentPlayer.getPlayerXStrikePoints()); $("#xstrikeMax").html(currentPlayer.getPlayerXStrikePointsMax());
	$("#move").html(currentPlayer.getPlayerMovementPoints()); $("#moveMax").html(currentPlayer.getPlayerMovementPointsMax());

	//LVL + EXP
	$("#levelCounter").html(currentPlayer.getPlayerLvl());
	$("#LvlUpBarFill").css("width", currentPlayer.getPlayerEXP()+"%");

}
















////////////////////////////////////////
// Methods for the course of the game //
////////////////////////////////////////

var actionsBlocked = false;
function blockAction() {

	if(actionsBlocked) {

		$("#blocker").css("visibility", "hidden");
		actionsBlocked = false;

	}

	else {

		$("#blocker").css("visibility", "visible");
		actionsBlocked = true;
	
	}

}


var timeShowMovePhaseAnim = 0;
function showMovementPhaseAnimation () {		

	changePlayer(currentPlayerNumber);
	resetMovementRange();

	for(i=0; i <= 5; i++) {

		timeShowMovePhaseAnim += 100;

		setTimeout(function(j) {

			return function() {

					var movementMarker = document.createElement("div");
					movementMarker.innerHTML = "PLAYER "+currentPlayerNumber+" - YOUR TURN!";
					//notwendig, damit alles VOR dem Spielfeld angezeigt wird.
					movementMarker.style.zIndex = "2";
					movementMarker.className = "phaseMarker";
					movementMarker.id = "phaseMarker";
					document.getElementById("field").appendChild(movementMarker);

					setTimeout(function() {

					document.getElementById("endTurnButton").style.visibility = "visible";

					}, 3000);

					setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("phaseMarker"))}, 3000);

					}
			

		} (i), timeShowMovePhaseAnim);

	}

	timeShowMovePhaseAnim = 0;
	setTimeout(function() { showMovementRange(); }, 3600);

}	

function showMonsterChooser () {		


	$(document).ready(function(){

	$("#monsterChooser").animate({top: '-20px'}, 1000);
	chainSound();

	});
}

function hideMonsterChooser () {

	$(document).ready(function(){

	$("#monsterChooser").animate({top: '-325px'}, 1000);
	chainSound();

	});
}



var timeShowGameStartAnim = 100;
function showGameStartAnimation () {		

	monsterGrowlSound();
	var gameStartMarkerBackground = document.createElement("div");
	gameStartMarkerBackground.className = "gameStartMarkerBackground"
	gameStartMarkerBackground.id = "gameStartMarkerBackground";
	document.getElementById("field").appendChild(gameStartMarkerBackground);


	for(i=0; i <= 2; i++) {

		timeShowGameStartAnim += 200;

		setTimeout(function(j) {

			return function() {

					var gameStartMarker = document.createElement("div");
					gameStartMarker.innerHTML = "GAME START";
					gameStartMarker.style.index = "2";
					gameStartMarker.className = "gameStartMarker";
					gameStartMarker.id = "gameStartMarker";
					document.getElementById("gameStartMarkerBackground").appendChild(gameStartMarker);
			}

		} (i), timeShowGameStartAnim);

	}

	timeShowGameStartAnim= 0;
	setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("gameStartMarkerBackground"))}, 5000);
}


function showFightAnimation (Text) {

	var roundMarker = document.createElement("div");
	roundMarker.innerHTML = Text;
	//notwendig, damit alles VOR dem Kampfbildschirm angezeigt wird.
	roundMarker.style.zIndex = "7";
	roundMarker.className = "roundMarker";
	roundMarker.id = "roundMarker";
	document.getElementById("fight").appendChild(roundMarker);

	setTimeout(function() {document.getElementById("fight").removeChild(document.getElementById("roundMarker"))}, 3000);

}

var timeShowReincarnate = 0;
function showReincarnationAnimation () {

	monsterGrowlSound();
	var grimReaper = document.createElement("div");
	grimReaper.className = "grimReaper"
	grimReaper.id = "grimReaper";
	document.getElementById("field").appendChild(grimReaper);


	for(i=0; i <= 2; i++) {

		timeShowReincarnate += 200;

		setTimeout(function(j) {

			return function() {

					var grimReaperText = document.createElement("div");
					grimReaperText.innerHTML = "SECOND CHANCE";
					grimReaperText.className = "grimReaperText";
					grimReaperText.id = "grimReaperText";
					document.getElementById("field").appendChild(grimReaperText);
			}

		} (i), timeShowReincarnate);

	}

	timeShowReincarnate = 0;
	setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("grimReaper"))}, 5000);
	setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("grimReaperText"))}, 5000);
}

var timeShowFieldWinAnim = 0;
function showFieldWinAnimation (clickedTile) {

	choralSound();
	var frame1 = document.createElement("div");
	frame1.className = "winFrame1";
	frame1.id = "winFrame1";
	var x = clickedTile.getXPosition();
	var y = clickedTile.getYPosition();
	document.getElementById("field").appendChild(frame1);
	document.getElementById("winFrame1").style.top=y+"px";
	document.getElementById("winFrame1").style.left=x+"px";

	var frame2 = document.createElement("div");
	frame2.className = "winFrame2";
	frame2.id = "winFrame2";
	document.getElementById("field").appendChild(frame2);
	document.getElementById("winFrame2").style.top=y+"px";
	document.getElementById("winFrame2").style.left=x+"px";

	for(i=0; i <= 10; i++) {

		timeShowFieldWinAnim += 100;

		setTimeout(function(j) {

			return function() {

					if(j%2 != 0) {

						$("#winFrame1").css("visibility", "visible");
						$("#winFrame2").css("visibility", "hidden");

					}

					else {

						$("#winFrame2").css("visibility", "visible");
						$("#winFrame1").css("visibility", "hidden");

					}
			}

		} (i), timeShowFieldWinAnim);

	}

	$("#winFrame2").css("visibility", "hidden");
	$("#winFrame2").css("visibility", "hidden");

	timeShowFieldWinAnim = 0;
	setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("winFrame1"))}, 2000);
	setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("winFrame2"))}, 2000);
}


var timeShowEXPGain = 0;
function showEXPGain (currentEXP, newEXP) {

	for(i=currentEXP; i <= newEXP; i++) {

		timeShowEXPGain += 15;

		setTimeout(function(j) {

			return function() {

				$("#LvlUpBarFill").css("width", j+"%");

				//Falls LvlUp erreicht
				if(j == 100) {

					lvlUpSound();
					$("#LvlUpMarker").css("visibility", "visible");

				}


			}

		} (i), timeShowEXPGain);
	}


	timeShowEXPGain = 0;
}



























function startFight() {

	hideMonsterChooser()
	setTimeout(function() {

			metalClashSound();
			loadStats();
			writeStats();
			$("#fight").css("visibility", "visible");

			$(".leftFight").hide();
			$(".rightFight").hide();
			$(".rightFight").animate({width:'toggle'}, 2500, "easeOutBounce");
			$(".leftFight").animate({width:'toggle'}, 2500, "easeOutBounce");
			setTimeout(function() {$("#phaseFrame").css("visibility", "visible");}, 2500);

	}, 1000);
}



function startFightRoutine(index, clickedTile) {

	showMonsterChooser();

}

function reincarnatePlayer() {


	showReincarnationAnimation();

	AllPlayers[currentPlayerNumber].setPlayerLife(AllPlayers[currentPlayerNumber].getPlayerLifeMax());

	AllPlayers[currentPlayerNumber].setPlayerHealPoints(0);
	AllPlayers[currentPlayerNumber].setPlayerBoost(0);
	AllPlayers[currentPlayerNumber].setPlayerTrackingPoints(0);
	AllPlayers[currentPlayerNumber].setPlayerXStrikePoints(0);
	AllPlayers[currentPlayerNumber].setPlayerMovementPoints(0);

	//STATS
	$("#sword").html(AllPlayers[currentPlayerNumber].getPlayerSword()); $("#swordMax").html(AllPlayers[currentPlayerNumber].getPlayerSwordDmg());
	$("#bow").html(AllPlayers[currentPlayerNumber].getPlayerBow()); $("#bowMax").html(AllPlayers[currentPlayerNumber].getPlayerBowDmg());
	$("#magic").html(AllPlayers[currentPlayerNumber].getPlayerMagic()); $("#magicMax").html(AllPlayers[currentPlayerNumber].getPlayerMagicDmg());
	$("#life").html(AllPlayers[currentPlayerNumber].getPlayerLife()); $("#lifeMax").html(AllPlayers[currentPlayerNumber].getPlayerLifeMax());

	//RUNES
	$("#heal").html(AllPlayers[currentPlayerNumber].getPlayerHealPoints()); $("#healMax").html(AllPlayers[currentPlayerNumber].getPlayerHealPointsMax());
	$("#pers").html(AllPlayers[currentPlayerNumber].getPlayerBoost()); $("#persMax").html(AllPlayers[currentPlayerNumber].getPlayerBoostMax());
	$("#track").html(AllPlayers[currentPlayerNumber].getPlayerTrackingPoints()); $("#trackMax").html(AllPlayers[currentPlayerNumber].getPlayerTrackingPointsMax());
	$("#xstrike").html(AllPlayers[currentPlayerNumber].getPlayerXStrikePoints()); $("#xstrikeMax").html(AllPlayers[currentPlayerNumber].getPlayerXStrikePointsMax());
	$("#move").html(AllPlayers[currentPlayerNumber].getPlayerMovementPoints()); $("#moveMax").html(AllPlayers[currentPlayerNumber].getPlayerMovementPointsMax());

}

function EXPGain (gainedEXP) {

	var currentEXP = AllPlayers[currentPlayerNumber].getPlayerEXP();
	var newEXP = currentEXP+gainedEXP;

	//Falls Erfahrungspunkte über oder gleich 100 --> Lvl Up
	if (newEXP >= 100) {

		//überschüssige EXP zwischenspeichern
		var overrunEXP = newEXP - 100;
		//Animation mit 100 ausführen
		showEXPGain(currentEXP, 100);
		//Level des Spielers erhöhen
		AllPlayers[currentPlayerNumber].setPlayerLvl(AllPlayers[currentPlayerNumber].getPlayerLvl()+1);
		//EXP des Spielers wieder auf Wert der überschüssigen EXP setzen
		AllPlayers[currentPlayerNumber].setPlayerEXP(overrunEXP);

		setTimeout(function() {		

		//Neues Level im CharSheet sichtbarmachen
		$("#levelCounter").html(""+AllPlayers[currentPlayerNumber].getPlayerLvl());
		//Animation erneut mit überschüssigen EXP ausführen
		showEXPGain(0, overrunEXP);

		}, (100-currentEXP)*15);

	}

	//Spieler ist kein Level aufgestiegen
	else {

		showEXPGain(currentEXP, newEXP);
		//EXP des Spielers auf neuen Wert setzen
		AllPlayers[currentPlayerNumber].setPlayerEXP(newEXP);

	}

}


function LevelUp() {

	$("#LvlUpMarker").css("visibility", "hidden");
	$("#lvl").css("visibility", "visible");
	update(18);
	update(19);
	blockAction();

}



//HIER KÖNNTE MAN JEDE ZWEITE ZEILE NOCH RAUSNEHMEN JE NACHDEM, OB MAN DEN SCHADEN AUCH ERHÖHEN DARF
function updateStats(currentPlayerArray) {

	player = AllPlayers[currentPlayerNumber];

	//STATS

	player.setPlayerSword(currentPlayerArray[0]); 
/*	player.setPlayerSwordDmg(currentPlayerArray[1]);*/
	player.setPlayerBow(currentPlayerArray[2]); 
/*	player.setPlayerBowDmg(currentPlayerArray[3]);*/
	player.setPlayerMagic(currentPlayerArray[4]); 
/*	player.setPlayerMagicDmg(currentPlayerArray[5]);*/
/*	player.setPlayerLife(currentPlayerArray[6]); */
	player.setPlayerLifeMax(currentPlayerArray[7]);

	//RUNES

/*	player.setPlayerHealPoints(currentPlayerArray[8]); */
	player.setPlayerHealPointsMax(currentPlayerArray[9]);
/*	player.setPlayerBoost(currentPlayerArray[10]); */
	player.setPlayerBoostMax(currentPlayerArray[11]);
/*	player.setPlayerTrackingPoints(currentPlayerArray[12]);*/ 
	player.setPlayerTrackingPointsMax(currentPlayerArray[13]);
/*	player.setPlayerXStrikePoints(currentPlayerArray[14]); */
	player.setPlayerXStrikePointsMax(currentPlayerArray[15]);
/*	player.setPlayerMovementPoints(currentPlayerArray[16]); */
	player.setPlayerMovementPointsMax(currentPlayerArray[17]);

}











































//Anzeigeelemente und stats für neuen Player laden
function changePlayer () {

	if(currentPlayerNumber != 0) { AllPlayers[currentPlayerNumber].setIsPlaying(false);}

	if(currentPlayerNumber < 4) {

		currentPlayerNumber = currentPlayerNumber +1;

	}

	else {

		currentPlayerNumber = 1;

	}

	//In jeder neuen Runde werden Runen wieder aufgeladen
	refreshRunes();
	//Die Status-Werte des aktuellen Spielers reinladen
	loadStats();
	//Spielerbild wechseln
	document.images.charImg.src = "Bilddaten/CharSheet/Spieler"+currentPlayerNumber+".jpg";
	document.images.charImg2.src = "Bilddaten/CharSheet/Spieler"+currentPlayerNumber+".jpg";
	//Spielername wechseln
	document.getElementById('playerName').innerHTML = AllPlayers[currentPlayerNumber].getPlayerName();
	document.getElementById('playerName2').innerHTML = AllPlayers[currentPlayerNumber].getPlayerName();
	//Daten des jeweiligen Spielers reinladen
	updateCharSheet();

	currentMovementPoints = AllPlayers[currentPlayerNumber].getPlayerMovementPoints();
	currentPlayerPosition = AllPlayers[currentPlayerNumber].getPlayerPosition();

	AllPlayers[currentPlayerNumber].setIsPlaying(true);
}


function refreshRunes() {

	//Aktuelle Werte des Spielers holen und die erlaubten Max-Werte
	move = AllPlayers[currentPlayerNumber].getPlayerMovementPoints();
	moveMax = AllPlayers[currentPlayerNumber].getPlayerMovementPointsMax();

	track = AllPlayers[currentPlayerNumber].getPlayerTrackingPoints();
	trackMax = AllPlayers[currentPlayerNumber].getPlayerTrackingPoints();

	boost = AllPlayers[currentPlayerNumber].getPlayerBoost();
	boostMax = AllPlayers[currentPlayerNumber].getPlayerBoost();

	xstrike = AllPlayers[currentPlayerNumber].getPlayerXStrikePoints();
	xstrikeMax = AllPlayers[currentPlayerNumber].getPlayerXStrikePointsMax();

	heal = AllPlayers[currentPlayerNumber].getPlayerHealPoints();
	healMax = AllPlayers[currentPlayerNumber].getPlayerHealPoints();

	//If-Abfragen, um nicht über Maximum zu gelangen, falls nach Addition des Refreshs der Wert über Max liegt, Wert nur auf Max setzen, nicht darüber
	if(move+5 <= moveMax) { AllPlayers[currentPlayerNumber].setPlayerMovementPoints(move+5); } else {AllPlayers[currentPlayerNumber].setPlayerMovementPoints(moveMax)}
	if(track+5 <= trackMax) { AllPlayers[currentPlayerNumber].setPlayerTrackingPoints(track+5); } else {AllPlayers[currentPlayerNumber].setPlayerTrackingPoints(trackMax)}
	if(boost+1 <= boostMax) { AllPlayers[currentPlayerNumber].setPlayerBoost(boost+1); } else {AllPlayers[currentPlayerNumber].setPlayerBoost(boostMax)}
	if(xstrike+1 <= xstrikeMax) { AllPlayers[currentPlayerNumber].setPlayerXStrikePoints(xstrike+1); } else {AllPlayers[currentPlayerNumber].setPlayerXStrikePoints(xstrikeMax)}
	if(heal+1 <= healMax) { AllPlayers[currentPlayerNumber].setPlayerHealPoints(heal+1); } else {AllPlayers[currentPlayerNumber].setPlayerHealPoints(healMax)}

}

function loadStats() {

	//DEFENSE, ATTACK, BOOST, STRIKE
	dmin = 2;
	dmax = 2;
	amin = 1;
	amax = 1;

	abmin = AllPlayers[currentPlayerNumber].getPlayerBoost();
	abmax = AllPlayers[currentPlayerNumber].getPlayerBoostMax();
	esmin = AllPlayers[currentPlayerNumber].getPlayerXStrikePoints();
	esmax = AllPlayers[currentPlayerNumber].getPlayerXStrikePointsMax();


	//CHAR STATS
	me_attack_c = AllPlayers[currentPlayerNumber].getPlayerSword();
	me_dmg_c = AllPlayers[currentPlayerNumber].getPlayerSwordDmg();

	r_attack_c = AllPlayers[currentPlayerNumber].getPlayerBow();
	r_dmg_c = AllPlayers[currentPlayerNumber].getPlayerBowDmg();

	ma_attack_c = AllPlayers[currentPlayerNumber].getPlayerMagic();
	ma_dmg_c = AllPlayers[currentPlayerNumber].getPlayerMagicDmg();

	l_min_c = AllPlayers[currentPlayerNumber].getPlayerLife();
	l_max_c = AllPlayers[currentPlayerNumber].getPlayerLifeMax();

}
























/////////////////////
// START THE FIELD //
/////////////////////

// Methode startet das Spiel und initialisiert alles Notwendige

function initField() {

	calculateFieldParas();
	calculateBorderTileIDs();
	initNumberArrayTiles();
	shuffleTilesArray();
	initNumberArrayMonsters();
	createTiles();
	initTemplates();
	showTiles();
	createPlayers();
	//Nur durch diese Einschränkung fangen die Monster erst NACH der For-Schleife für die Kachelerzeugung an zu erscheinen
	//Ohne die Wait-Function fangen die Monster immer schon zeitgleich an aufzupoppen
	//Die Wartezeit errechnet sich aus der Zeit, die die Kacheln brauchen, um zu erscheinen. (5 pro Kachel)
	//Definiert in der "showTiles" - Methode
	setTimeout(function() {summonMonsters(); }, amountTiles*7 + 500);
	setTimeout(function() {summonPlayers(); }, amountTiles*7 + amountMonsters*100 + 500);
	setTimeout(function() {showGameStartAnimation(); }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500);
	setTimeout(function() {$("#characterSheet").css("visibility", "visible") }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500 + 4000);
/*	$("#characterSheet").css("visibility", "visible")*/

}

function startGame() {

	initField();
	setTimeout(function() {showMovementPhaseAnimation(); }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500 + 3500);
/*	showMovementPhaseAnimation();*/

}




























/////////////////////////////
// Methods for Interaction //
/////////////////////////////


//Funktion dient zur Überprüfung, ob mindestens eine Zahl in einem Array der SpielerPosition entspricht
function CheckIfEqualsPlayerPosition (zahl) {

	return zahl == currentPlayerPosition;

}


//Gibt in Form eines Integers die Information aus, in welchem Bereich sich der Spieler befindet
function getPlayerPosArea() {


	//Integer, der dafür steht, in welcher "Area" sich der Spieler befindet. (Nord, Süd, West, Mitte, etc....)
	//Diese Funktion ermittelt dies und gibt die Information weiter
	var playerPosArea = "center";

	//Falls currentplayerPosition im Array BorderTilesID enthalten muss die Anzeige der Bewegungskosten gesondert betrachtet werden
	if($.inArray(currentPlayerPosition, BorderTilesIDs) != -1) {

		//Schalter bestimmt, dass nur der case ausgeführt wird, in dem die SpielerPosition im jeweiligen Array enthalten ist
		switch(true) {

			//falls SpielerPosition auf NORTH Border
			//die "some()" Funktion prüft, für jede Zahl im Array, ob sie der PlayerPos entspricht. Wenn dies bei einer einzigen der Fall
			//ist, wird der Ausdruck zu true ausgewertet und dieser case wird ausgeführt.
			case NorthBorderTilesIDs.some(CheckIfEqualsPlayerPosition) :

				playerPosArea = "north";
				break;

			//falls SpielerPosition auf NORTH WEST Ecke
			case CheckIfEqualsPlayerPosition(0) :

				playerPosArea = "northWest";
				break;

			//falls SpielerPosition auf NORTH EAST Ecke
			case (CheckIfEqualsPlayerPosition(columnLength-1)) :

				playerPosArea = "northEast";
				break;

			//falls SpielerPosition auf SOUTH Border
			case SouthBorderTilesIDs.some(CheckIfEqualsPlayerPosition) :

				playerPosArea = "south";
				break;

			//falls SpielerPosition auf SOUTH WEST Ecke
			case CheckIfEqualsPlayerPosition(amountTiles) :

				playerPosArea = "southEast";
				break;

			//falls SpielerPosition auf SOUTH EAST Ecke
			case CheckIfEqualsPlayerPosition(amountTiles-(columnLength-1)) :

				playerPosArea = "southWest";
				break;

			//falls SpielerPosition auf EAST Border (uneven)
			case EastBorderUnevenTilesIDs.some(CheckIfEqualsPlayerPosition) :

				playerPosArea = "eastIndented";
				break;

			//falls SpielerPosition auf EAST Border (even)
			case EastBorderEvenTilesIDs.some(CheckIfEqualsPlayerPosition) :

				playerPosArea = "east";
				break;

			//falls SpielerPosition auf WEST Border (uneven)
			case WestBorderUnevenTilesIDs.some(CheckIfEqualsPlayerPosition) :

				playerPosArea = "westIndented";
				break;

			//falls SpielerPosition auf WEST Border (even)
			case WestBorderEvenTilesIDs.some(CheckIfEqualsPlayerPosition) :

				playerPosArea = "west";
				break;


			default: alert("Fehler getPlayerPos - currentPlayerPosition in keinem der Arrays enthalten");

		}
	}

	else {

		// do nothing
		// center --> Standardfall, Player in mitten des Felds umringt von 6 Kacheln
	}

	return playerPosArea;
}


var left = 0; var right = 0; var topright = 0; var topleft = 0; var downright = 0; var downleft = 0;

// gibt ein Array mit den Kacheln rund um den Spieler zurück. (Links beginnend im Uhrzeigersinn)
function updateTilesAroundPlayer() {

	//leere momentanes Array, damit es frisch updaten kann
	tilesAroundPlayer.length = 0;

	//Alle Positionen, die theoretisch vorkommen könnten
	left = currentPlayerPosition-1;	
	topleft = currentPlayerPosition-columnLength;	
	topright = currentPlayerPosition-(columnLength-1);
	right = currentPlayerPosition+1;
	downleft = currentPlayerPosition+(columnLength-1);
	downright = currentPlayerPosition+columnLength;

	//playerPosArea fungiert als Marker, ob der Spieler sich in Randbereichen befindet oder nicht
	//Je nachdem hat er um sich herum weniger bzw. mehr Kacheln
	//Wird in getPlayerPosArea ermittelt, die den Marker ausgibt.

	switch(getPlayerPosArea()) {

		case "center":

			tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

			break;

		case "north":

			tilesAroundPlayer.push(AllTiles[left], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

			break;

		case "northWest":

			tilesAroundPlayer.push(AllTiles[right], AllTiles[downright]);

			break;

		case "northEast":

			tilesAroundPlayer.push(AllTiles[left], AllTiles[downleft]);

			break;

		case "south":

			tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[right]);

			break;

		case "southWest":

			tilesAroundPlayer.push(AllTiles[topright], AllTiles[right]);

			break;

		case "southEast":

			tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft]);

			break;

		case "eastIndented":

			tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[downright], AllTiles[downleft]);

			break;

		case "east":

			tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[downleft]);

			break;

		case "westIndented":

			tilesAroundPlayer.push(AllTiles[topleft], AllTiles[topright], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

			break;

		case "west":

			tilesAroundPlayer.push(AllTiles[topright], AllTiles[right], AllTiles[downright]);

			break;


		default: alert("Fehler updateTilesAroundPlayer");
	}
}

function resetMovementRange() {

	var tile;
	var templateOverTile;

	//Vorherige Darstellung bereinigen
	for(i=0; i < tilesAroundPlayer.length; i++) {

		//Kachel aus Array holen
		tile = tilesAroundPlayer[i];
		//Das auszutauschende Template über der Kachel holen
		templateOverTile = AllTemplates[tile.getID()];
		
		//Falls die Kachel weder einen Spieler noch ein Monster hat...
		if(tile.getHasPlayer() == false && tile.getHasMonsters() == false) {

		//... Die Zahl wieder durch ein Template ersetzen
		templateOverTile.src = "Bilddaten/Spielfeld/temp.png";

		}

	}

	delete(tile, templateOverTile);

}


//Funktion, die anhand des tilesAroundPlayer-Arrays die Kacheln mit Bewegungskosten überzeichnet
// !!!!! NOCH ABFRAGEN ERGÄNZEN, DAMIT KEINE SPIELER ODER MONSTER ÜBERZEICHNET WERDEN
function showMovementRange() {

	var tile;
	var terrainDifficulty;
	var templateOverTile;

	resetMovementRange();

	//Array updaten --> ESSENTIELL, Weiche dafür, dass in der oberen Schleife die alte Ansicht gelöscht wird und in der
	//unteren Schleife die neue Ansicht gezeichnet wird.
	updateTilesAroundPlayer();

	//Neue Darstellung zeichnen
	for(i=0; i < tilesAroundPlayer.length; i++) {

		//Kachel aus Array holen
		tile = tilesAroundPlayer[i];
		//Schwierigkeit der Kachel holen
		terrainDifficulty = tile.getTerrainDifficulty();
		//Das auszutauschende Template über der Kachel holen
		templateOverTile = AllTemplates[tile.getID()];
		
		//Falls die Kachel weder einen Spieler noch ein Monster hat...
		if(tile.getHasPlayer() == false && tile.getHasMonsters() == false) {

		//... Das Template durch eine Zahl ersetzen
		templateOverTile.src = terrainsDifficulties[terrainDifficulty].src;

		}

	}

	delete(tile, templateOverTile, terrainDifficulty);


}

var idClickedTile;
var clickedTile;

function checkClickedTile() {

	//Die ID der Kachel, auf die geklickt wurde
	idClickedTile = this.id - amountTiles-1;
	//Die Kachel, auf die geklickt wurde
	clickedTile = AllTiles[idClickedTile];
	//aktualisiere das tilesAroundPlayer-Array
	updateTilesAroundPlayer();

	//Falls die Kachel, auf die geklickt wurde eine Kachel in Reichweite des Spielers ist und dort kein anderer Spieler steht...
	//Bewegung potentiell möglich
	if(($.inArray(clickedTile, tilesAroundPlayer) != -1) && (clickedTile.getHasPlayer() == false)) {

				//Wenn das Feld, auf das man gehen möchte teurer ist, als die verbliebenen Bewegungspunkte und ohne Monster...
				//...Bewegung untersagen
				if(currentMovementPoints < (clickedTile.getTerrainDifficulty()+1) && clickedTile.getHasMonsters() == false) {

					alert("Not enough movementPoints left");

				}

				//... andernfalls Bewegung potentiell möglich
				else {

							//Falls die Kachel, auf die geklickt wurde ein Monster hat -> Kampf
							if(clickedTile.getHasMonsters() == true) {

									startFightRoutine(idClickedTile, clickedTile);
									//Kämpfen

							}

							//andernfalls kann es nur eine leere Kachel sein -> Spieler bewegen
							else {

									//MovePlayer nimmt als Argument die geklickte Kachel, sowie den idClickedTile (womit auf das Template geschlossen werden kann)
									movePlayer(idClickedTile, clickedTile);
									

							}

							

				}
	}

	//... andernfalls Bewegung nicht erlauben
	else {

				clickSound();
		


	}

}

function movePlayer(lastPlayerPosition, clickedTile) {

	moveSound();
	//Das Template, auf das geklickt wurde
	var clickedTemplate = AllTemplates[lastPlayerPosition];
	//Der Kachel sagen, dass sie jetzt einen Spieler hat
	clickedTile.setHasPlayer(true);
	//Spielerbild zuweisen
	clickedTemplate.src = players[currentPlayerNumber].src;
	//Der alten Kachel sagen, dass sie keinen Spieler mehr hat
	AllTiles[currentPlayerPosition].setHasPlayer(false);
	//Das Spieler-Symbol der alten Kachel durch Template ersetzen
	AllTemplates[currentPlayerPosition].src = "Bilddaten/Spielfeld/temp.png";
	
	// Position merken, auf die der Spieler gesprungen ist, damit diese bei der nächsten Bewegung wieder auf Template
	// gesetzt werden kann.
	currentPlayerPosition = lastPlayerPosition;

	//Bewegungspunkte abziehen, falls es sich nicht um ein Monster handelt
	if(clickedTile.getHasMonsters() == false) { currentMovementPoints = currentMovementPoints - (AllTiles[currentPlayerPosition].getTerrainDifficulty()+1); } //"+1" weil die Zählung bei 0 beginnt
	//Dem aktuellen Spieler die Bewegungspunkte abziehen
	AllPlayers[currentPlayerNumber].setPlayerMovementPoints(currentMovementPoints);
	//Dem aktuellen Spieler die neue Position zuweisen, auf die geklickt wurde
	AllPlayers[currentPlayerNumber].setPlayerPosition(currentPlayerPosition);
	
	document.getElementById("movementPoints").innerHTML = currentMovementPoints; //TESTZWECKE
	//Die Bewegungspunkte-Anzeige aktualisieren
	$("#move").html(""+AllPlayers[currentPlayerNumber].getPlayerMovementPoints()); 

	//neuen MovementRange nach Bewegung anzeigen
	showMovementRange();
				
				
}


function bewegeRahmen() {

	var index2 = this.id-amountTiles-1;
	
	if(document.getElementById(zwischenSpeicherRahmen).src = terrainsAktuell[AllTiles[zwischenSpeicherRahmen].getTerrainDifficulty()].src)
	{
		document.getElementById(zwischenSpeicherRahmen).src = AllTiles[zwischenSpeicherRahmen].getTerrain().src;
	}
	
	//letzten Rahmen wieder zurücksetzen
	document.getElementById(index2).src = terrainsAktuell[AllTiles[index2].getTerrainDifficulty()].src;
	//Id ist die index2 Nummer der gesamten Bilder im Dokument
	zwischenSpeicherRahmen= index2; 
	//speichern des aktuellen Rahmens für Änderung bei Neuaufruf


}

//Betrag, um den geheilt wird
var healPower;
function healPlayer() {

	//aktueller Spieler
	currentPlayer = AllPlayers[currentPlayerNumber];
	//Leben des aktuellen Spielers
	currentLife = currentPlayer.getPlayerLife();
	//Maximales Leben des aktueller Spielers
	currentLifeMax = currentPlayer.getPlayerLifeMax();
	//HealingPoints des Spielers
	currentHealPoints = currentPlayer.getPlayerHealPoints();

	//Heilbetrag
	healPower = 2 + Math.floor(Math.random()*3);
	
	//Falls Spieler noch über Healpoints verfügt
	if(currentHealPoints > 0 && currentLife != currentLifeMax) {

		//Falls maximales Leben größer als Lebenspunkte nach Heilung
		if(currentLifeMax > (currentLife+healPower)) {

			//Leben des Spielers erhöhen
			currentPlayer.setPlayerLife(currentLife+healPower);

		}

		//Heilung heilt den Spieler voll, aber nicht über maximales Leben
		else {

			//Leben auf Maximum setzen
			currentPlayer.setPlayerLife(currentLifeMax);
			

		}

		//HealingPoints abziehen
		currentPlayer.setPlayerHealPoints(currentHealPoints-1);
	}

	else { alert("no heal points left or already healed!")}

	//Änderung sichtbar machen
	updateCharSheet();

}






























/////////////////////
// CHARSHEET FUNCTIONS //
/////////////////////


function lvl(){
    document.getElementById('lvl').style.display = 'block';
}

//html-Text
function update(attribute) {

	stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();

	//Falls attribute einen geraden Wert hat (= linke Zahl)
	//Somit levelt nur der Angriff hoch, nicht der Schaden
/*	if(attribute % 2 == 0 || attribute == 0) {*/

		h = attribute;
		hh = "." + attribute;
		$(hh).html(stats[attribute]);

		if (h != 19 && h != 18 && h > 7) {

			hhh = "." + h + "0";
			$(hhh).html(stats[attribute]);
		}
}

function statsGet(hate){
	
	stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();
	return stats[hate];
}

function statsSet(hate, hater){
  	
  	stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();
  	return stats[hate] = hater;
}

/*function statsIncrement(hate){

 stats[hate] = stats[hate]+1;

}*/


function statsIncrement(hate) {

//Array des aktuellen Players holen
stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();

	if(stats[18] > 0 || stats[19] > 0) {

		//Falls bei primary skills geklickt wurde
		if (hate < 8) {

				if (stats[18] > 0) {

			   		//Falls es sich um eine gerade Zahl handelt (= linker Wert)
				    if (hate % 2 == 0 || hate == 7) {

					    //Einen Punkt abziehen
					    stats[18] = stats[18] - 1;
					    //neuen Wert darstellen
					    update(18);

					 }

					//Wert auch im Array erhöhen
				 	i = stats[hate]+1;
				 	stats[hate] = i;

				 	if(stats[18] == 0 && stats[19] == 0) {updateStats(stats); $("#lvl").css("visibility", "hidden"); blockAction();}

				}
		}

		//Es wurde bei secondary skills geklickt und hierfür noch Punkte übrig sind
		else if (stats[19] > 0) {

			//Falls es sich um eine gerade Zahl handelt (=linker Wert)
		   	if (hate % 2 != 0) {

			   	//Einen Punkt abziehen
			    stats[19] = stats[19] - 1;
			    //neuen Wert darstellen
			    update(19);

		 	}

		 	//Wert auch im Array erhöhen
		 	i = stats[hate]+1;
		 	stats[hate] = i;

		 	if(stats[18] == 0 && stats[19] == 0) {updateStats(stats); $("#lvl").css("visibility", "hidden"); blockAction();}

		}
	}	
} 



























/////////////////////
// FIGHT FUNCTIONS //
/////////////////////

//Für den PhaseFrame
var x;

//Variablen für den Kampf

var check_ab = 0;
var count3 = 0;

//DEFENSE, ATTACK, BOOST, STRIKE
var dmin; 
var dmax; 
var amin; 
var amax; 

var abmin;
var abmax;
var esmin;
var esmax;


//CHAR STATS
var me_attack_c;
var me_dmg_c;

var r_attack_c;
var r_dmg_c; 

var ma_attack_c; 
var ma_dmg_c;

var l_min_c; 
var l_max_c;

//MONSTER STATS
var me_attack_m=8;
var me_dmg_m=1;

var r_attack_m=11;
var r_dmg_m=3;

var ma_attack_m=10;
var ma_dmg_m=2;

var l_min_m=10;
var l_max_m=10;

var exp = 50;


function writeStats()
{	

	//Werte eintragen
	$("#me_attack_c").html( me_attack_c);
	$("#me_dmg_c").html( me_dmg_c);
		
	$("#r_attack_c").html( r_attack_c);
	$("#r_dmg_c").html( r_dmg_c);
		
	$("#ma_attack_c").html( ma_attack_c);
	$("#ma_dmg_c").html( ma_dmg_c);
		
	$("#l_min_c").html( l_min_c);
	$("#l_max_c").html( l_max_c);
		
	$("#me_attack_m").html( me_attack_m);
	$("#me_dmg_m").html( me_dmg_m);
		
	$("#r_attack_m").html( r_attack_m);
	$("#r_dmg_m").html( r_dmg_m);
		
	$("#ma_attack_m").html( ma_attack_m);
	$("#ma_dmg_m").html( ma_dmg_m);
		
	$("#l_min_m").html( l_min_m);
	$("#l_max_m").html( l_max_m);
		
	$("#dmin").html( dmin);
	$("#dmax").html( dmax);
	$("#amin").html( amin);
	$("#amax").html( amax);
	$("#abmin").html( abmin);
	$("#abmax").html( abmax);
	$("#esmin").html( esmin);
	$("#esmax").html( esmax);

	$("#phaseFrame").css("left", 480+"px");
	x = 480;

}



function check(status)
{
	if(count3==0)
	{
		attackboost="me_attack_c";
		
		attack_c=me_attack_c;
		dmg_c=me_dmg_c;
		
		attack_m=me_attack_m;
		dmg_m=me_dmg_m;
	}
	else if(count3==1)
	{	
		attackboost="r_attack_c";
		
		attack_c=r_attack_c;
		dmg_c=r_dmg_c;
		
		attack_m=r_attack_m;
		dmg_m=r_dmg_m;
	}
	else if(count3==2)
	{	
		attackboost="ma_attack_c";
		
		attack_c=ma_attack_c;
		dmg_c=ma_dmg_c;
		
		attack_m=ma_attack_m;
		dmg_m=ma_dmg_m;
	}
	
	if(status=="defence")
	{
		blockSound();
		if(dmin>0)
		{
			dmin=dmin-1;
			document.getElementById("dmin").innerHTML = dmin;
			fight(status);
		}	
	}
	if(status=="attack")
	{
		swordDrawSound();
		if(amin>0)
		{
			amin=amin-1;
			document.getElementById("amin").innerHTML = amin;
			fight(status);
		}
	}
	if(status=="attackBoost")
	{
		if(abmin>0)
		{
			abmin=abmin-1;
			AllPlayers[currentPlayerNumber].setPlayerBoost(abmin);
			document.getElementById("abmin").innerHTML = abmin;
			if(count3==0)
			{
				if(check_ab==0)
				{
					zw = me_attack_c;
				}
				attackboost="me_attack_c";
				me_attack_c=me_attack_c+1;
				attack_c=me_attack_c;
			}
			else if(count3==1)
			{
				if(check_ab==0)
				{
					zw = r_attack_c;
				}
				attackboost="r_attack_c";
				r_attack_c=r_attack_c+1;
				attack_c=r_attack_c;
			}
			else if(count3==2)
			{
				if(check_ab==0)
				{
					zw = ma_attack_c;
				}
				attackboost="ma_attack_c";
				ma_attack_c=ma_attack_c+1;
				attack_c=ma_attack_c;
			}
			check_ab=1;
			document.getElementById(attackboost).innerHTML = attack_c;
			
		}
	}
	if(status=="extraStrike")
	{
		if(esmin!=0)
		{
			esmin=esmin-1;
			AllPlayers[currentPlayerNumber].setPlayerBoost(esmin);
			document.getElementById("esmin").innerHTML = esmin;
			amin=amin+1;
			document.getElementById("amin").innerHTML = amin;
		}
	}
	
	
	if(count3==3)
	{
		showFightAnimation("NEXT ROUND");
		count3=0;
		dmin=dmax;
		amin=amax;
		document.getElementById("dmin").innerHTML = dmin;
		document.getElementById("amin").innerHTML = amin;
	}

}
function fight(status)
{
	wuerfel= Math.floor(Math.random() * 12 + 1);

	//Falls der AttackWurf nicht ausreicht, um das Monster zu treffen
	if(wuerfel+attack_c<attack_m)
	{
		l_min_c=l_min_c - dmg_m;
		AllPlayers[currentPlayerNumber].setPlayerLife(l_min_c);
		document.getElementById("l_min_c").innerHTML = l_min_c;
		setTimeout(function(){$(".c").toggleClass("ca");},1000);
		$(".c").toggleClass("ca");

		//auditives Feedback
		gotHitSound();
		
	}

	//Falls doch und man gerade angreift und nicht verteidigt...
	else if(status=="attack")
	{

		l_min_m=l_min_m - dmg_c;
		/*$("#l_min_m").text = l_min_m;*/
		document.getElementById("l_min_m").innerHTML = l_min_m;
		setTimeout(function(){$(".m").toggleClass("ma");},1000);
		$(".m").toggleClass("ma");

		//auditives+visuelles Feedback
		batGotHitSound();
		showFightAnimation("HIT");
	}
	
	if(check_ab==1)
	{
		document.getElementById(attackboost).innerHTML = zw;
		check_ab=0;
	}

	count3=count3+1;
	
	//Bewege PhaseFrame

	x = x + 60;
	if(x == 660) { x = 480 };
	$("#phaseFrame").css("left", x+"px");
/*	document.getElementById("rahmen").style.left = x + "%";*/

	if(l_min_c<=0)
	{
		
		dieSound();
		showFightAnimation("!! LOST !!");
		updateCharSheet();

		l_min_m=l_max_m;
		count3 = 0;

		$(".rightFight").animate({width:'toggle'}, 2500, "easeOutExpo");
		$(".leftFight").animate({width:'toggle'}, 2500, "easeOutExpo");
		setTimeout(function(){$("#fight").css("visibility", "hidden"); $("#phaseFrame").css("visibility", "hidden");}, 2500);

		//Falls der Spieler verliert, Status zurücksetzen
		reincarnatePlayer();

	}

	else if(l_min_m<=0)
	{

		showFightAnimation("!! WIN !!");
		updateCharSheet();
		setTimeout(function(){showFightAnimation("GAINED "+exp+" EXP")}, 1000);

		l_min_m=l_max_m;
		count3 = 0;

		$(".rightFight").animate({width:'toggle'}, 2500, "easeOutExpo");
		$(".leftFight").animate({width:'toggle'}, 2500, "easeOutExpo");
		setTimeout(function(){$("#fight").css("visibility", "hidden"); $("#phaseFrame").css("visibility", "hidden");}, 2500);

		//Falls der Spieler gewonnen hat, wird Spielfigur bewegt
		//Die Variablen sind global definiert und ändern sich mit Aufruf der Funktion checkClickedTile
		//(Also bei jedem Klick für eine Bewegung)
		movePlayer(idClickedTile, clickedTile);
		//Animation zeigen bei Sieg
		showFieldWinAnimation(clickedTile);
		//Dem Spieler die erhaltenen EXP gutschreiben
		setTimeout(function(){EXPGain(exp);}, 2500);
		//Der Kachel sagen, dass sie nun kein Monster mehr hat
		clickedTile.setHasMonsters(false);

	}
}
function pressed(name){
var id = "#img_" + name;
var src = "Bilddaten/Kampf/"+name + "_pressed.png";	
$(id).attr("src", src);

}
function released(name){
var id = "#img_" + name;
var src = "Bilddaten/Kampf/"+name + ".png";
$(id).attr("src", src);
}




































////////////
// SOUNDS //
////////////


function moveSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/Crack.mp3";

    audio.CurrentTime=0;
    audio.play(); 

}

function wooshSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/whooosh.mp3";

    audio.CurrentTime=0;
    audio.play(); 

}

function StabSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/SwordStab.mp3";

    audio.CurrentTime=0;
    audio.play(); 

}

function swooshSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/Swoosh.mp3";

    audio.CurrentTime=0;
    audio.play(); 

}

/*function monsterGrowlSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/MonsterGrowl.mp3";

    audio.CurrentTime=0;
    audio.play(); 

}*/

function clickSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/ButtonClick1.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}

function swordSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/SwordStrike.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}

function chainSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/ChainSound.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}

function gotHitSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/PlayerGotHit.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}

function dieSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/PlayerDies.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}

function winSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/EpicWin.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}

function swordDrawSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/SwordDrawShort.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}

function blockSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/Block2.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}

function batGotHitSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/BatIsHit.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}

function metalClashSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/MetalClash6.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}

function choralSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/Choral1.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}

function lvlUpSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/LvlUp3.mp3";

    audio.CurrentTime=0;
    audio.play(); 
}


function monsterGrowlSound() {

    var audio = preloadSound("Sounds/MonsterGrowl.mp3");
    audio.CurrentTime=0;
    audio.play(); 

}


function preloadSound(src) {
    var sound = document.createElement("audio");
    sound.autoPlay = false;
    sound.src = src;
    document.body.appendChild(sound);
    return sound;
}



	














$(document).ready(function(){

	var allButtonsMonsterDifficulty = $(".buttons_Monster_Difficulty");

		allButtonsMonsterDifficulty.mouseenter(function() {

			switch(this.id) {

				case "easyButton":

					$(this).css({"backgroundPosition": "-240px 0px"});
					break;

				case "moderateButton":

					$(this).css({"backgroundPosition": "-240px -50px"});
					break;

				case "strongButton":

					$(this).css({"backgroundPosition": "-240px -100px"});
					break;

				case "insaneButton":

					$(this).css({"backgroundPosition": "-240px -150px"});
					break;

				default: alert("blubb");

			}

		});

		allButtonsMonsterDifficulty.mouseleave(function() {

			switch(this.id) {

				case "easyButton":

					$(this).css({"backgroundPosition": "0px 0px"});
					break;

				case "moderateButton":

					$(this).css({"backgroundPosition": "0px -50px"});
					break;

				case "strongButton":

					$(this).css({"backgroundPosition": "0px -100px"});
					break;

				case "insaneButton":

					$(this).css({"backgroundPosition": "0px -150px"});
					break;

				default: alert("blubb");

			}
			
		});

		allButtonsMonsterDifficulty.click(function() {
			
			startFight();
			
		});
})