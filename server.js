// NODE
// socket.emit - SINGLE BACK
// socket.broadcast.emit - MULTI ohne BACK
// io.sockets.emit - MULTI mit BACK


//Start auf port 9000
var io = require('socket.io').listen(9000);
var $ = require('jquery').create();
//wenn eine neue verbindung mit einem neuen client entsteht
io.sockets.on('connection', function (socket) {
  
  socket.on('0',function(anonym){
  	initshowMovementPhaseAnimation();
    io.sockets.emit('0', {pCurrentPlayerNumber: currentPlayerNumber});
  });

  socket.on('1',function(anonym){
  	io.sockets.emit('1');
  });

  socket.on('3',function(anonym){
  	io.sockets.emit('3');
  });

  socket.on('4',function(anonym){
    io.sockets.emit('4');
  });

  socket.on('5',function(anonym){
    io.sockets.emit('5');
  });

  socket.on('6',function(anonym){
    io.sockets.emit('6');
  });

  socket.on('7',function(anonym){
    io.sockets.emit('7');
  });

  socket.on('8',function(anonym){
    io.sockets.emit('8');
  });

  socket.on('9',function(anonym){
    io.sockets.emit('9');
  });

  socket.on('10',function(anonym){
    io.sockets.emit('10');
  });

  socket.on('11',function(anonym){
    io.sockets.emit('11');
  });

  socket.on('12',function(anonym){
    io.sockets.emit('12');
  });

  socket.on('13',function(anonym){
    io.sockets.emit('13');
  });

  socket.on('14',function(anonym){
    io.sockets.emit('14');
  });

  socket.on('15',function(anonym){
    io.sockets.emit('15');
  });

  socket.on('16',function(anonym){
    io.sockets.emit('16');
  });

  socket.on('17',function(anonym){
    io.sockets.emit('17', anonym);
  });

  socket.on('18',function(anonym){
    io.sockets.emit('18', anonym);
  });

  socket.on('19',function(anonym){
    io.sockets.emit('19', anonym);
  });

  socket.on('20',function(anonym){
    io.sockets.emit('20', anonym);
  });

  socket.on('21',function(anonym){
    io.sockets.emit('21', anonym);
  });

  socket.on('22',function(anonym){
    io.sockets.emit('22', anonym);
  });

  socket.on('23',function(anonym){
    io.sockets.emit('23', anonym);
  });

  socket.on('24',function(anonym){
    io.sockets.emit('24', anonym);
  });

  socket.on('25',function(anonym){
    console.log('SOCKET.ON: 25');
    io.sockets.emit('25', anonym);
  });

  socket.on('26',function(anonym){
    console.log('SOCKET.ON (OUT IF): 26; gameOn: ' + gameOn);
    if(gameOn == 0){
      gameOn = 1;
      //Spiellogik aufbauen      
      initField();
      //Befehl zum Rendern an alle Clients senden
      var number = amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500 + 3500;
      console.log(number);
      io.sockets.emit('26', {a: number});
    }    
  });

  socket.on('27',function(anonym){
    io.sockets.emit('27');
  });

  socket.on('28',function(anonym){
    io.sockets.emit('28', {pCurrentPlayerNumber: currentPlayerNumber});
  });

  socket.on('29',function(anonym){
    io.sockets.emit('29');
  });

  socket.on('30',function(anonym){
    io.sockets.emit('30');
  });

  socket.on('31',function(anonym){
    io.sockets.emit('31');
  });

  socket.on('32',function(anonym){
    io.sockets.emit('32');
  });

  socket.on('33',function(anonym){
    io.sockets.emit('33', anonym);
  });

  socket.on('34',function(anonym){
    io.sockets.emit('34');
  });

  socket.on('35',function(anonym){
    setAmountFieldColumns(anonym.amountFieldColumns);
  });

  socket.on('36',function(anonym){
    setColumnLength(anonym.columnLength);
  });

  socket.on('37',function(anonym){
    setAmountMonsters(anonym.amountMonsters);
  });

  socket.on('38',function(anonym){
    initshowMovementPhaseAnimation;
  });

  socket.on('39',function(anonym){
    showMovementRange();
  });

  // SOCKET 40 - ActionEvent/MethodeEmit

  // SOCKET 41 - ActionEvent/MethodeEmit

  // SOCKET 42 - ActionEvent/MethodeEmit

  // SOCKET 43 - ActionEvent/MethodeEmit

  // SOCKET 44 - ActionEvent/MethodeEmit

  // SOCKET 45 - ActionEvent/MethodeEmit

  // SOCKET 46 - ActionEvent/MethodeEmit

  // SOCKET 47 - ActionEvent/MethodeEmit

  // SOCKET 48 - ActionEvent/MethodeEmit

  socket.on('49',function(anonym){
    showMovementRange();
  });

  socket.on('50',function(anonym){
    showMovementRange();
  });

  socket.on('51',function(anonym){
    showMovementRange();
  });

  socket.on('52',function(anonym){
    showMovementRange();
  });

  socket.on('53',function(anonym){
    showMovementRange();
  });

  socket.on('54',function(anonym){
    showMovementRange();
  });

  socket.on('55',function(anonym){
    showMovementRange();
  });

  socket.on('56',function(anonym){
    showMovementRange();
  });

  socket.on('57',function(anonym){
    showMovementRange();
  });

  socket.on('58',function(anonym){
    showMovementRange();
  });

  socket.on('59',function(anonym){
    showMovementRange();
  });

  socket.on('60',function(anonym){
    showMovementRange();
  });

  socket.on('1000',function(anonym){
    io.sockets.emit('1000');
  });

  socket.on('2000',function(anonym){
    io.sockets.emit('2000');
  });
});



// ///////////////////////////////////////////////
// //////////////UMGESETZTE FEATURES//////////////
// ///////////////////////////////////////////////

// //Autor: Julian Pfeil

// //Monster erscheinen
// //Spieler erscheint
// //Movement-Phase-Animation
// //Bewegungs-Zahlen
// //Bewegungs-Beschränkung auf Umkreis um Spieler
// //Bewegungs-Zahlen erscheinen nur, wenn das Feld kein Monster hat
// //"movePlayer()" Variable index angepasst, schlanker definiert
// //Bewegungspunkte werden reduziert und Bewegung verboten bei zu geringer Anzahl
// //Bewegungskosten bewegen sich mit
// //Beim Bewegen werden keine Monster mehr überschrieben
// //Um die Bewegung am Rand ebenfalls richtig darstellen zu können, Array mit Randkacheln entwickelt
// //if/else zur Evaluation der MovementRange war zu unübersichtlich -> geändert in switch case Anweisung kombiniert mit EINER if/else
// //Algorithmus für Bewegung funktioniert nun auch auf allen Rand-Kacheln
// //4 Spieler steuerbar mit Wechsel
// //Char-Sheet integriert
// //Bewegungs-Logik verbessert, schlanker, getestet, funktioniert mit allen Randbereichen
// //MonsterChooser hinzugefügt, wenn auf ein Monster in Spielerreichweite geklickt wird
// //Stats/Runen/GETTER+SETTER zur Spielerklasse hinzugefügt
// //Kommunikation zwischen Spielerklasse und CharSheet implementiert
// //Refresh-Fkt geschrieben
// //Kampfanimationen/-sounds ergänzt
// //Falls auf ein Monster geklickt wird, werden keine Bewegungskosten abgezogen


// /* Klassen und Funktionen für das Spielfeld */


// /* GLOBALE DATENFELDER */

<<<<<<< HEAD
//////////////////////////////
// Benötigt für Spiel-Logik //
//////////////////////////////
=======

// //////////////////////
// // Benötigte Bilder //
// //////////////////////

// //Spieler CharBilder
// var charIMGs = new Array();

// charIMGs[1] = new Image(); charIMGs[1].src = "Bilddaten/CharSheet/Spieler1.jpg";
// charIMGs[2] = new Image(); charIMGs[2].src = "Bilddaten/CharSheet/Spieler2.jpg";
// charIMGs[3] = new Image(); charIMGs[3].src = "Bilddaten/CharSheet/Spieler3.jpg";
// charIMGs[4] = new Image(); charIMGs[4].src = "Bilddaten/CharSheet/Spieler4.jpg";

// //Spieler Bilder
// var players = new Array();

// players[1] = new Image(); players[1].src = "Bilddaten/Spielfeld/player1.png";
// players[2] = new Image(); players[2].src = "Bilddaten/Spielfeld/player2.png";
// players[3] = new Image(); players[3].src = "Bilddaten/Spielfeld/player3.png";
// players[4] = new Image(); players[4].src = "Bilddaten/Spielfeld/player4.png";

// /*//Monster Bilder
// var monster = new Array();

// monster[0] = new Image(); monster[0].src = "Monster7.png";
// monster[1] = new Image(); monster[1].src = "Monster7.png";
// monster[2] = new Image(); monster[2].src = "Monster7.png";
// monster[3] = new Image(); monster[3].src = "Monster7.png";*/


// //Ebenen Bilder
// var terrains = new Array();

// terrains[0] = new Image(); terrains[0].src = "Bilddaten/Spielfeld/Weg.png";
// terrains[1] = new Image(); terrains[1].src = "Bilddaten/Spielfeld/Gras.png";
// terrains[2] = new Image(); terrains[2].src = "Bilddaten/Spielfeld/Wald.png";
// terrains[3] = new Image(); terrains[3].src = "Bilddaten/Spielfeld/Sand.png";
// terrains[4] = new Image(); terrains[4].src = "Bilddaten/Spielfeld/Sumpf.png";
// terrains[5] = new Image(); terrains[5].src = "Bilddaten/Spielfeld/Berg.png";

// //Ebenen Bilder, wenn ausgewählt
// var terrainsAktuell = new Array();

// terrainsAktuell[0] = new Image(); terrainsAktuell[0].src = "Bilddaten/Spielfeld/WegAktuell.png";
// terrainsAktuell[1] = new Image(); terrainsAktuell[1].src = "Bilddaten/Spielfeld/GrasAktuell.png";
// terrainsAktuell[2] = new Image(); terrainsAktuell[2].src = "Bilddaten/Spielfeld/WaldAktuell.png";
// terrainsAktuell[3] = new Image(); terrainsAktuell[3].src = "Bilddaten/Spielfeld/SandAktuell.png";
// terrainsAktuell[4] = new Image(); terrainsAktuell[4].src = "Bilddaten/Spielfeld/SumpfAktuell.png";
// terrainsAktuell[5] = new Image(); terrainsAktuell[5].src = "Bilddaten/Spielfeld/BergAktuell.png";

// //Bilder von Zahlen stellvertretend für die Bewegungsschwierigkeit der Ebenen
// var terrainsDifficulties = new Array();

// terrainsDifficulties[0] = new Image(); terrainsDifficulties[0].src = "Bilddaten/Spielfeld/Eins.png";
// terrainsDifficulties[1] = new Image(); terrainsDifficulties[1].src = "Bilddaten/Spielfeld/Zwei.png";
// terrainsDifficulties[2] = new Image(); terrainsDifficulties[2].src = "Bilddaten/Spielfeld/Drei.png";
// terrainsDifficulties[3] = new Image(); terrainsDifficulties[3].src = "Bilddaten/Spielfeld/Vier.png";
// terrainsDifficulties[4] = new Image(); terrainsDifficulties[4].src = "Bilddaten/Spielfeld/Fünf.png";
// terrainsDifficulties[5] = new Image(); terrainsDifficulties[5].src = "Bilddaten/Spielfeld/Sechs.png";

// /*//Monster Icon
// var MonsterSRC = new Image(); MonsterSRC.src = "Monster1.png";*/
// var TempSRC = new Image(); TempSRC.src = "Bilddaten/Spielfeld/temp.png";








// //////////////////////////////
// // Benötigt für Spiel-Logik //
// //////////////////////////////
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// //Array with all players
// var AllPlayers = new Array();

// //Array with all tiles
// var AllTiles = new Array();

// //Array with all templates
// var AllTemplates = new Array();

// //Arrays with ID of all border Tiles
// //!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
// var NorthBorderTilesIDs = new Array();
// var SouthBorderTilesIDs = new Array();
// var EastBorderEvenTilesIDs = new Array();
// var EastBorderUnevenTilesIDs = new Array();
// var WestBorderEvenTilesIDs = new Array();
// var WestBorderUnevenTilesIDs = new Array();
// var NorthWestCornerID = new Array();
// var BorderTilesIDs = new Array();

// //Array, in dem immer alle Kacheln in Reichweite des aktuellen Spielers enthalten sind.
// var tilesAroundPlayer = new Array();

// //Manuell bestimmbare Paramter des Spiels
// var amountFieldColumns = 17; // standardmäßig im Fall, dass nichts eingenstellt wird: 12
// var columnLength = 23; // standardmäßig im Fall, dass nichts eingestellt wird: 24
// var amountTiles = -1; //errechnet sich aus amountFieldColumns
// var amountMonsters = 5; // standardmäßig im Fall, dass nichts eingestellt wird: 5

// zwischenSpeicherRahmen = 0;

// currentPlayerNumber = 0;
// currentMovementPoints = 0;
// currentPlayerPosition = 0;

//////////////////////////////
// Node benötigte Variablen //
//////////////////////////////

//Abfrage, ob Spiel gestartet wurde
var gameOn = 0;



// ////////////////////
// // CLASS - Player //
// ////////////////////

// function Player(number) {

//   //GENERALS

//   this.playerPosition;
//   this.playerNumber = number;
//   this.playerName;
//   this.playerImg;
//   this.playerCharImg;
  
//   this.isPlaying = false;
//   var array = new Array(19);
//   //Die Array-Positionen stellen die Punkte dar, die beim LvlUp verteilt werden dürfen
//   array[18] = 2;
//   array[19] = 4;
//   this.playerStatsArray = array;


//   //RUNES

//   this.playerMovementPointsMax;
//   this.playerMovementPoints;

//   this.playerTrackingPointsMax;
//   this.playerTrackingPoints;

//   this.playerXStrikePointsMax;
//   this.playerXStrikePoints;

//   this.playerHealPointsMax;
//   this.playerHealPoints;

//   this.playerBoostMax;
//   this.playerBoost;


//   //STATS

//   this.playerSwordDmg;
//   this.playerSword;

//   this.playerBowDmg;
//   this.playerBow;

//   this.playerMagicDmg;
//   this.playerMagic;

//   this.playerLifeMax;
//   this.playerLife;

//   this.playerLvl = 1;

//   this.playerEXP = 0;

// }

// Player.prototype.setPlayerStatsArray = function(newPlayerStatsArray) {

<<<<<<< HEAD
  this.playerStatsArray = newPlayerStatsArray;
=======
//     this.playerStatsArray = newPlayerStatsArray;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerStatsArray = function() {

<<<<<<< HEAD
  return this.playerStatsArray;
=======
//     return this.playerStatsArray;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }


// Player.prototype.setPlayerName = function(newPlayerName) {

<<<<<<< HEAD
  this.playerName = newPlayerName;
=======
//     this.playerName = newPlayerName;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerName = function() {

<<<<<<< HEAD
  return this.playerName;
=======
//     return this.playerName;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerCharImg = function(newPlayerCharImg) {

<<<<<<< HEAD
  this.playerCharImg = new Image();
  this.playerCharImg.src = newplayerCharImg;
=======
//     this.playerCharImg = new Image();
//     this.playerCharImg.src = newplayerCharImg;
    
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerCharImg = function() {

<<<<<<< HEAD
  return this.playerCharImg.src;
=======
//     return this.playerCharImg.src;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerEXP = function(newPlayerEXP) {

<<<<<<< HEAD
  this.playerEXP = newPlayerEXP;
=======
//     this.playerEXP = newPlayerEXP;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerEXP = function() {

<<<<<<< HEAD
  return this.playerEXP;
=======
//     return this.playerEXP;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerLvl = function(newPlayerLvl) {

<<<<<<< HEAD
  this.playerLvl = newPlayerLvl;
=======
//     this.playerLvl = newPlayerLvl;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerLvl = function() {

<<<<<<< HEAD
  return this.playerLvl;
=======
//     return this.playerLvl;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// ////////STATS////////////

// Player.prototype.setPlayerLifeMax = function(newPlayerLifeMax) {

<<<<<<< HEAD
  this.playerLifeMax = newPlayerLifeMax;
=======
//     this.playerLifeMax = newPlayerLifeMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerLifeMax = function() {

<<<<<<< HEAD
  return this.playerLifeMax;
=======
//     return this.playerLifeMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerLife = function(newPlayerLife) {

<<<<<<< HEAD
  this.playerLife = newPlayerLife;
=======
//     this.playerLife = newPlayerLife;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerLife = function() {

<<<<<<< HEAD
  return this.playerLife;
=======
//     return this.playerLife;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerMagicDmg = function(newPlayerMagicDmg) {

<<<<<<< HEAD
  this.playerMagicDmg = newPlayerMagicDmg;
=======
//     this.playerMagicDmg = newPlayerMagicDmg;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerMagicDmg = function() {

<<<<<<< HEAD
  return this.playerMagicDmg;
=======
//     return this.playerMagicDmg;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerMagic = function(newPlayerMagic) {

<<<<<<< HEAD
  this.playerMagic = newPlayerMagic;
=======
//     this.playerMagic = newPlayerMagic;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerMagic = function() {

<<<<<<< HEAD
  return this.playerMagic;
=======
//     return this.playerMagic;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerBowDmg = function(newPlayerBowDmg) {

<<<<<<< HEAD
  this.playerBowDmg = newPlayerBowDmg;
=======
//     this.playerBowDmg = newPlayerBowDmg;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerBowDmg = function() {

<<<<<<< HEAD
  return this.playerBowDmg;
=======
//     return this.playerBowDmg;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerBow = function(newPlayerBow) {

<<<<<<< HEAD
  this.playerBow = newPlayerBow;
=======
//     this.playerBow = newPlayerBow;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerBow = function() {

<<<<<<< HEAD
  return this.playerBow;
=======
//     return this.playerBow;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerSwordDmg = function(newPlayerSwordDmg) {

<<<<<<< HEAD
  this.playerSwordDmg = newPlayerSwordDmg;
=======
//     this.playerSwordDmg = newPlayerSwordDmg;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerSwordDmg = function() {

<<<<<<< HEAD
  return this.playerSwordDmg;
=======
//     return this.playerSwordDmg;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerSword = function(newPlayerSword) {

<<<<<<< HEAD
  this.playerSword = newPlayerSword;
=======
//     this.playerSword = newPlayerSword;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerSword = function() {

<<<<<<< HEAD
  return this.playerSword;
=======
//     return this.playerSword;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }



// ////////RUNES////////////


// Player.prototype.setPlayerBoost = function(newPlayerBoost) {

<<<<<<< HEAD
  this.playerBoost = newPlayerBoost;
=======
//     this.playerBoost = newPlayerBoost;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerBoost = function() {

<<<<<<< HEAD
  return this.playerBoost;
=======
//     return this.playerBoost;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerBoostMax = function(newPlayerBoostMax) {

<<<<<<< HEAD
  this.playerBoostMax = newPlayerBoostMax;
=======
//     this.playerBoostMax = newPlayerBoostMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerBoostMax = function() {

<<<<<<< HEAD
  return this.playerBoostMax;
=======
//     return this.playerBoostMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerMovementPoints = function(newPlayerMovementPoints) {

<<<<<<< HEAD
  this.playerMovementPoints = newPlayerMovementPoints;
=======
//     this.playerMovementPoints = newPlayerMovementPoints;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerMovementPoints = function() {

<<<<<<< HEAD
  return this.playerMovementPoints;
=======
//     return this.playerMovementPoints;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerMovementPointsMax = function(newPlayerMovementPointsMax) {

<<<<<<< HEAD
  this.playerMovementPointsMax = newPlayerMovementPointsMax;
=======
//     this.playerMovementPointsMax = newPlayerMovementPointsMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerMovementPointsMax = function() {

<<<<<<< HEAD
  return this.playerMovementPointsMax;
=======
//     return this.playerMovementPointsMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerTrackingPoints = function(newPlayerTrackingPoints) {

<<<<<<< HEAD
  this.playerTrackingPoints = newPlayerTrackingPoints;
=======
//     this.playerTrackingPoints = newPlayerTrackingPoints;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerTrackingPoints = function() {

<<<<<<< HEAD
  return this.playerTrackingPoints;
=======
//     return this.playerTrackingPoints;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerTrackingPointsMax = function(newPlayerTrackingPointsMax) {

<<<<<<< HEAD
  this.playerTrackingPointsMax = newPlayerTrackingPointsMax;
=======
//     this.playerTrackingPointsMax = newPlayerTrackingPointsMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerTrackingPointsMax = function() {

<<<<<<< HEAD
  return this.playerTrackingPointsMax;
=======
//     return this.playerTrackingPointsMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerXStrikePoints = function(newPlayerXStrikePoints) {

<<<<<<< HEAD
  this.playerXStrikePoints = newPlayerXStrikePoints;
=======
//     this.playerXStrikePoints = newPlayerXStrikePoints;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerXStrikePoints = function() {

<<<<<<< HEAD
  return this.playerXStrikePoints;
=======
//     return this.playerXStrikePoints;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerXStrikePointsMax = function(newPlayerXStrikePointsMax) {

<<<<<<< HEAD
  this.playerXStrikePointsMax = newPlayerXStrikePointsMax;
=======
//     this.playerXStrikePointsMax = newPlayerXStrikePointsMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerXStrikePointsMax = function() {

<<<<<<< HEAD
  return this.playerXStrikePointsMax;
=======
//     return this.playerXStrikePointsMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerHealPoints = function(newPlayerHealPoints) {

<<<<<<< HEAD
  this.playerHealPoints = newPlayerHealPoints;
=======
//     this.playerHealPoints = newPlayerHealPoints;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerHealPoints = function() {

<<<<<<< HEAD
  return this.playerHealPoints;
=======
//     return this.playerHealPoints;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerHealPointsMax = function(newPlayerHealPointsMax) {

<<<<<<< HEAD
  this.playerHealPointsMax = newPlayerHealPointsMax;
=======
//     this.playerHealPointsMax = newPlayerHealPointsMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerHealPointsMax = function() {

<<<<<<< HEAD
  return this.playerHealPointsMax;
=======
//     return this.playerHealPointsMax;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }




// ////////NECCESSARY FOR FIELD////////////

// Player.prototype.setIsPlaying = function(isPlaying) {

<<<<<<< HEAD
  this.isPlaying = isPlaying;
=======
//     this.isPlaying = isPlaying;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getIsPlaying = function() {

<<<<<<< HEAD
  return this.isPlaying;
=======
//     return this.isPlaying;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerImg = function(newPlayerImg) {

<<<<<<< HEAD
  this.playerImg = new Image();
  this.playerImg.src = newPlayerImg;
=======
//     this.playerImg = new Image();
//     this.playerImg.src = newPlayerImg;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerImg = function() {

<<<<<<< HEAD
  return this.playerImg.src;
=======
//     return this.playerImg.src;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerPosition = function(newPlayerPosition) {

<<<<<<< HEAD
  this.playerPosition = newPlayerPosition;
=======
//     this.playerPosition = newPlayerPosition;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerPosition = function() {

<<<<<<< HEAD
  return this.playerPosition;
=======
//     return this.playerPosition;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.setPlayerNumber = function(newPlayerNumber) {

<<<<<<< HEAD
  this.playerNumber = newPlayerNumber;
=======
//     this.playerNumber = newPlayerNumber;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Player.prototype.getPlayerNumber = function() {

<<<<<<< HEAD
  return this.playerNumber;
=======
//     return this.playerNumber;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }













// ///////////////////
// // CLASS - Tiles //
// ///////////////////

// function Tile(id) {

<<<<<<< HEAD
  this.XPosition = 0;
  this.YPosition = 0;
  this.ID = id;
  this.terrainDifficulty = Math.floor(Math.random() * 6);
  // TERRAIN MUSS CLIENT BEIM RENDERN SUCHEN
  // this.terrain = terrains[this.terrainDifficulty]; CLIENT(40)
  this.terrain = null;

  this.hasMonsters = false;
  this.hasPlayer = false;
  this.isSelected = false;
=======
//   this.XPosition = 0;
//   this.YPosition = 0;
//   this.ID = id;
//   this.terrainDifficulty = Math.floor(Math.random() * 6);
//   this.terrain = terrains[this.terrainDifficulty];
  
//   this.hasMonsters = false;
//   this.hasPlayer = false;
//   this.isSelected = false;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// ////////////////////////////
// // Methods of class Tiles //
// ////////////////////////////

// Tile.prototype.setXPosition = function(newXPosition) {

<<<<<<< HEAD
  this.XPosition = newXPosition;
=======
//     this.XPosition = newXPosition;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Tile.prototype.getXPosition = function() {

//   return this.XPosition;

// }

// Tile.prototype.setYPosition = function(newYPosition) {

<<<<<<< HEAD
  this.YPosition = newYPosition;
=======
//     this.YPosition = newYPosition;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Tile.prototype.getYPosition = function() {

//   return this.YPosition;

// }

// Tile.prototype.setID = function(newID) {

<<<<<<< HEAD
  this.ID = newID;
=======
//     this.ID = newID;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Tile.prototype.getID = function() {

//   return this.ID;

// }

// Tile.prototype.setTerrainDifficulty = function(newTerrainDifficulty) {

<<<<<<< HEAD
  this.terrainDifficulty = newTerrainDifficulty;
=======
//     this.terrainDifficulty = newTerrainDifficulty;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

// Tile.prototype.getTerrainDifficulty = function() {

//   return this.terrainDifficulty;

// }

// Tile.prototype.setTerrain = function() {

//   var n = Math.floor(Math.random() * 6);
//   this.terrain = terrains[n];

// }

// Tile.prototype.getTerrain = function() {

//   return this.terrain;

// }

// Tile.prototype.setHasPlayer = function (hasPlayer) {

//   this.hasPlayer = hasPlayer;

// } 

// Tile.prototype.getHasPlayer = function () {

//   return this.hasPlayer;

// } 

// Tile.prototype.setHasMonsters = function (hasMonsters) {

//   this.hasMonsters = hasMonsters;

// } 

// Tile.prototype.getHasMonsters = function () {

//   return this.hasMonsters;

// }

///////////////////
// CLASS - Templates //
///////////////////

function Template(id) {

  this.ID = id;
  this.IMG = null;
 
}

////////////////////////////
// Methods of class Templates //
///////////////////////////

Tile.prototype.setID = function(newID) {

    this.ID = newID;

}

Tile.prototype.getID = function() {

  return this.ID;

}

<<<<<<< HEAD
Tile.prototype.setIMG = function(newIMG) {

  this.IMG = newIMG;

}

Tile.prototype.getIMG = function() {

  return this.IMG;

}

///////////////////// setFieldParas1 ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// aufgerufen von 35
function setAmountFieldColumns(param){
  amountFieldColumns = param;
}

///////////////////// END setFieldParas1 ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

///////////////////// setFieldParas2 ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// aufgerufen von 37
function setAmountMonsters(param){
  amountMonsters = param;
}

///////////////////// END setFieldParas2 ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

///////////////////// setFieldParas3 ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// aufgerufen von 36
function setColumnLength(param){
  columnLength = param;
}
=======
// ///////////////////////////////////
// // Methods for Initializing Game //
// ///////////////////////////////////

// function setFieldParas1(newReihenAnzahl) {

//   //Falls die Angabe 16 Reihen übersteigt
//   if(newReihenAnzahl > 16) {
//     document.getElementById ("warning1").innerHTML = "o_O Du spinnst doch. Ich setz das mal auf 16.";
//     document.getElementById ("warning1").style.color = "red";
//     document.getElementById ("reihenAnzahl").value = "16";
//     amountFieldColumns = 16;
//   }

//   else {

//       //Falls die Angabe nicht durch 2 teilbar ist
//       if(newReihenAnzahl % 2 == 0) {

//         document.getElementById ("warning1").innerHTML = "Ne ungerade Zahl is schöner. Ich pass das mal an.";
//         document.getElementById ("warning1").style.color = "red";
//         document.getElementById ("reihenAnzahl").value = newReihenAnzahl-1;
//         //Die ", 10" im parseInt stehen für das Zahlensystem. Könnte sonst Probleme geben, wenn JS das Oktalsystem nimmt statt das Dezimalsystem
//         amountFieldColumns = parseInt(newReihenAnzahl-1, 10); 

//       }

//       else{
//         document.getElementById ("warning1").innerHTML = newReihenAnzahl+" Reihen. Viel Spaß";
//         document.getElementById ("warning1").style.color = "green";
//         amountFieldColumns = parseInt(newReihenAnzahl, 10);
//       }
//   }
// }

// function setFieldParas2(newMonsterAnzahl) {

//   if(newMonsterAnzahl > 100) {

//     document.getElementById ("warning2").innerHTML = "Lebensmüde? 100 reichen auch...";
//     document.getElementById ("warning2").style.color = "red";
//     document.getElementById ("monsterAnzahl").value = "100";
//     amountMonsters = 100;
//   }

//   else {
    
//     document.getElementById ("warning2").innerHTML = newMonsterAnzahl+" Monster. Viel Glück";
//     document.getElementById ("warning2").style.color = "green";
//     amountMonsters = parseInt(newMonsterAnzahl,10);
//   }

// }

// function setFieldParas3(newReihenLänge) {

//   if(newReihenLänge > 24) {

//     document.getElementById ("warning3").innerHTML = "Nope...";
//     document.getElementById ("warning3").style.color = "red";
//     document.getElementById ("reihenLänge").value = "24";
//     columnLength = 24;
//   }

//   else {
    
//     document.getElementById ("warning3").innerHTML = "Reihenlänge von "+newReihenLänge;
//     document.getElementById ("warning3").style.color = "green";
//     columnLength = parseInt(newReihenLänge,10);
//   }

// }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

///////////////////// END setFieldParas3 ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// function calculateFieldParas () {

//   for(i=1; i <= amountFieldColumns; i++) {

//       //falls i gerade
//       if (i%2 == 0) {

//         amountTiles = amountTiles+(columnLength-1);

//       }

//       else {

//         amountTiles = amountTiles+columnLength;

<<<<<<< HEAD
      }
    }
  }
=======
//       }
//   }
// }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// //Erzeugt das Array BorderTilesID, das für die Bewegungsberechnung benötigt wird
// function calculateBorderTileIDs() {

//   //NORTH
//   //abzüglich des ersten und letzten Elements. Diese Ecken werden gesondert betrachtet
//   for(i=1; i < columnLength-1; i++) {

//     NorthBorderTilesIDs.push(i);

//   }

//   for(i=0; i < columnLength-1; i++) {

//     NorthWestCornerID.push(i);

//   }

//   //!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
//   // Denn nur dann kann man davon ausgehen, dass die South-Reihe so viele Elemente hat wie die North-Reihe
//   //SOUTH
//   //abzüglich des ersten und letzten Elements. Diese Ecken werden gesondert betrachtet
//   var southID = amountTiles-(columnLength-2);
//   for(i=1; i < columnLength-1; i++) {

//     SouthBorderTilesIDs.push(southID);
//     southID = southID+1;

//   }

//   //!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
//   //"amountFieldColumns-2", weil die erste und letzte Reihe schon in NORTH und SOUTH Border sind
//   //EAST
//   var eastID = 2*(columnLength-1);
//   for(i=1; i <= amountFieldColumns-2; i++) {

//     //Falls i ungerade
//     if(i % 2 != 0) {

//       EastBorderUnevenTilesIDs.push(eastID);
//       eastID = eastID+columnLength;
//     }

//     else {

//       EastBorderEvenTilesIDs.push(eastID);
//       eastID = eastID+columnLength-1;
//     }

//   }

//   //!! funktioniert so nur bei einem Spielfeld mit ungerader Reihenanzahl
//   //"amountFieldColumns-2", weil die erste und letzte Reihe schon in NORTH und SOUTH Border sind
//   //WEST
//   var westID = columnLength;
//   for(i=1; i <= amountFieldColumns-2; i++) {

//     //Falls i ungerade
//     if(i % 2 != 0) {

//       WestBorderUnevenTilesIDs.push(westID);
//       westID = westID+(columnLength-1);
//     }

//     else {

//       WestBorderEvenTilesIDs.push(westID);
//       westID = westID+columnLength;
//     }

//   }

//   BorderTilesIDs = NorthBorderTilesIDs.concat(SouthBorderTilesIDs, EastBorderEvenTilesIDs, EastBorderUnevenTilesIDs, WestBorderEvenTilesIDs, WestBorderUnevenTilesIDs);
//   //Die vier Ecken, die nicht in den Arrays enthalten sind einzeln hinzufügen
//   BorderTilesIDs.push(0, amountTiles, columnLength-1, amountTiles-(columnLength-1));

// }


<<<<<<< HEAD
var numberArrayTiles = new Array()

//erzeugt ein Array mit Zahlen
function initNumberArrayTiles() {
=======
// var numberArrayTiles = new Array()
  
// //erzeugt ein Array mit Zahlen
// function initNumberArrayTiles() {
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   for(var i = 0; i<=amountTiles; i++) {

//     numberArrayTiles.push(i);
//   }
// }

// //mischt das Array per Zufall
// function shuffleTilesArray() {

//   var tmp = 0;
//   var rand = 0;

//   for(var i = 0; i <=amountTiles; i++) {

<<<<<<< HEAD
    rand = Math.floor(Math.random() * (amountTiles+1));
    tmp = numberArrayTiles[i]; 
    numberArrayTiles[i] = numberArrayTiles[rand]; 
    numberArrayTiles[rand] = tmp;
=======
//   rand = Math.floor(Math.random() * (amountTiles+1));
//   tmp = numberArrayTiles[i]; 
//   numberArrayTiles[i] = numberArrayTiles[rand]; 
//   numberArrayTiles[rand] = tmp;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   }
// }







<<<<<<< HEAD
///////////////////////////////////
// CREATE TILES AND TEMPLATES //
///////////////////////////////////

// Erzeugt alle Spielfeld-Kacheln

var tilesArray = new Array();

function createTiles() {

  for(i=0; i <=amountTiles; i++) {

    var tile = new Tile(i);
    
    random = Math.floor(Math.random() * 6);
    tile.setTerrainDifficulty(random);

    tilesArray[i] = random;

    AllTiles[i] = tile;
  }
  io.sockets.emit('40', {a: tilesArray, b: numberArrayTiles, c: columnLength, d: amountTiles});
}
=======














// ///////////////////////////////////
// // CREATE TILES AND TEMPLATES //
// ///////////////////////////////////

// // Erzeugt alle Spielfeld-Kacheln
// function createTiles() {

//   //xCounter und yCounter bezeichnen die absoluten Positionen der Elemente
//   var xCounter = 0;
//   var yCounter = 0;
//   //Das Element, zu dem die Kacheln hinzugefügt werden
//   var field = document.getElementById("field");

//   // Schleife, die schrittweise alle Kacheln erzeugt

//   var evenColumn = true;
//   var currentTileSum = columnLength-1;
//   for(i=0; i<=amountTiles; i++) {
      
//     var tile = new Tile(i);
//     tile.setXPosition(xCounter);
//     tile.setYPosition(yCounter);
//     // tileIMG ist die Variable für das jeweils in den tiles enthaltene img
//     // Muss hier deklariert werden, damit dessen style etc. beeinflusst werden kann
//     // CloneNode erlaubt es dasselbe Bild mehrmals zu laden. Sonst würden die Bilder immer überschrieben
//     tileIMG = tile.getTerrain().cloneNode(true);
//     tileIMG.id = i;
//     tileIMG.className = "tiles";
//     tileIMG.style.position="absolute";
//     // Setzt die Position der jeweiligen Kachel. "+px" ist nötig, damit der Befehl syntaktisch richtig ausgeführt wird
//     tileIMG.style.left = tile.getXPosition()+"px";
//     tileIMG.style.top = tile.getYPosition()+"px";
//     // fügt die Kachel dem Feld hinzu
//     field.appendChild(tileIMG); 
//     // Macht die Kacheln zunächst unsichtbar, damit sie später per Random-Funktion sichtbar gemacht werden können
//     tileIMG.style.visibility = "hidden";
//     //"tileIMG.onmouseover = bewegeRahmen;" ausgeladert auf die Templates, weil diese über den Kacheln liegen und mouseover somit bei den Kacheln nicht möglich ist
//     AllTiles[i] = tile;

//     if(evenColumn == true) {

//         //Falls Laufindex modulo 19 ungleich 0 --> Man befindet sich noch in der ersten Zeile
//         //Falls Laufindex modulo 19 gleich 0 --> Ende der Zeile erreicht
//         //19 ist an dieser Stelle vllt verwirrend, aber effektiv sind es 20 Kacheln, da die erste bei 0 anfängt
//         if(i == 0 || i%currentTileSum != 0) {

//           xCounter = xCounter+40;

//         }

//         //else-Teil initialisiert Zeilenwechsel
//         else {

//           //um 20 einrücken und 34 nach unten verschieben
//           xCounter = 20;
//           yCounter = yCounter+34;

//           //Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
//           evenColumn = false;
//           //Erste 19er - Reihe gefüllt, currentTileSum um die zugefügt Anzahl erhöhen
//           currentTileSum = currentTileSum+(columnLength-1);

//         }


//         }
    

//     else {

//         if(i%currentTileSum != 0) {

//           xCounter = xCounter+40;

//         }

//         //else-Teil initialisiert Zeilenwechsel
//         else {

//           //wieder ausrücken und 34 nach unten verschieben
//           xCounter = 0;
//           yCounter = yCounter+34;

//           //Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
//           evenColumn = true;
//           currentTileSum = currentTileSum+columnLength;

//         }
  
//     }
    
//   }

// }

// //Erzeugt die austauschbaren Templates über jeder Kachel
// function initTemplates() {

//   var xCounter = 0;
//   var yCounter = 0;
//   var field = document.getElementById("field");

//   var evenColumn = true;
//   var currentTileSum = columnLength-1;
//   for(i=0; i<=amountTiles; i++) {
      
//     var template = new Image(); template.src = "Bilddaten/Spielfeld/temp.png";
//     template.id = amountTiles+1+i;
//     template.className = "templates";
//     template.style.position="absolute";
//     template.style.left = xCounter+"px";
//     template.style.top = yCounter+"px";
//     field.appendChild(template); 
//     template.onclick = checkClickedTile;
//     template.onmouseover = bewegeRahmen;
//     AllTemplates[i] = template;

//     if(evenColumn == true) {

//         //Falls Laufindex modulo 19 ungleich 0 --> Man befindet sich noch in einer ungeraden Zeile
//         //Falls Laufindex modulo 19 gleich 0 --> Ende der Zeile erreicht
//         if(i == 0 || i%currentTileSum != 0) {

//           xCounter = xCounter+40;

//         }

//         //else-Teil initialisiert Zeilenwechsel
//         else {

//           //um 20 einrücken und 34 nach unten verschieben
//           xCounter = 20;
//           yCounter = yCounter+34;

//           //Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
//           evenColumn = false;
//           //Erste 19er - Reihe gefüllt, currentTileSum um die zugefügt Anzahl erhöhen
//           currentTileSum = currentTileSum+(columnLength-1);

//         }
//     }

//     else {

//         if(i%currentTileSum != 0) {

//           xCounter = xCounter+40;

//         }

//         //else-Teil initialisiert Zeilenwechsel
//         else {

//           //wieder ausrücken und 34 nach unten verschieben
//           xCounter = 0;
//           yCounter = yCounter+34;

//           //Wechsel zwischen geraden (20 Kacheln) und ungeraden (19 Kacheln) Zeilen
//           evenColumn = true;
//           currentTileSum = currentTileSum+columnLength;

//         }
  
//     }
//   }

// }

// //Funktion, die schrittweise die Kacheln sichtbar macht
// var timeShowTiles = 7
// function showTiles() {

//   for (var i = 0; i <= amountTiles; i++) {

//       timeShowTiles += 7;

//       setTimeout(function(j) {

//           return function() {

//               document.getElementById(numberArrayTiles[j]).style.visibility = "visible";
// /*              if(j%10 == 0) {moveSound();}*/

//           }

//       }(i), timeShowTiles);
//   }
//   timeShowTiles = 0;
// }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3


// function createTemplates() {

//   for(i=0; i <=amountTiles; i++) {

//     var template = new Template(i);
//     AllTemplates[amountTiles+1+i] = template;

//   }
// }


// ///////////////////////////////////
// // CREATE MONSTER AND PLAYER //
// ///////////////////////////////////


<<<<<<< HEAD
var numberArrayMonsters = new Array()

//erzeugt ein Array mit Zahlen
function initNumberArrayMonsters() {
=======
// var numberArrayMonsters = new Array()
  
// //erzeugt ein Array mit Zahlen
// function initNumberArrayMonsters() {
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   for(var i = 0; i <= amountMonsters+1; i++)  {

//     //erzeugt Zufallszahl zwischen 0 und Anzahl an Kacheln im Spiel
//     var randomNumber = Math.floor(Math.random() * (amountTiles+1))

//     //Falls die erzeute Zahl noch nicht im MonsterArray vorkommt, kann sie einfach hinzugefügt werden
//     if($.inArray(randomNumber, numberArrayMonsters) == -1) {

<<<<<<< HEAD
      numberArrayMonsters.push(randomNumber);
=======
//     numberArrayMonsters.push(randomNumber);
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     }

//     // erzeugt solange eine neue Zahl bis es eine ist, die noch nicht im Array vorkommt.
//     // Damit nicht Monster an derselben Stelle gesetzt werden.
//     else {

//       while ($.inArray(randomNumber, numberArrayMonsters) != -1) {

//         var randomNumber = Math.floor(Math.random() * (amountTiles+1))

//       }

//       numberArrayMonsters.push(randomNumber);
//     }

//   }
// }

// var timeSummonMonsters = 100;
// function summonMonsters () {    

//   for(i=1; i <= amountMonsters; i++) {

//     timeSummonMonsters += 100;

//     setTimeout(function(j) {

//       return function() {

<<<<<<< HEAD
          // Der Kachel sagen, dass sie ein Monster hat
          AllTiles[numberArrayMonsters[j]].setHasMonsters(true);
          
          var eNumb = numberArrayMonsters[j]+amountTiles+1;
          //StabSound(); CLIENT(46)
          //document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = "Bilddaten/Spielfeld/MonsterImg.png"; CLIENT(46)
          io.sockets.emit('46', {elementNumber: eNumb});
=======
//           // Der Kachel sagen, dass sie ein Monster hat
//           AllTiles[numberArrayMonsters[j]].setHasMonsters(true);
//           StabSound();

//           document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = "Bilddaten/Spielfeld/MonsterImg.png"
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//           // "1+" ist notwendig, weil die Random-Fkt. Werte zwischen 0 und Obergrenze erzeugen würde
//           // wir benötigen aber für den switch-case Werte zwischen 1 und 4. So kann man die 0 aussparen.
// /*          var randomNumber = 1+ Math.floor(Math.random() * (4));

//           switch (randomNumber) {


//             case 1:

//               document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[0].src;
//               break;

//             case 2:

//               document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[1].src;
//               break;

//             case 3:

//               document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[2].src;
//               break;

//             case 4:

//               document.getElementById(numberArrayMonsters[j]+amountTiles+1).src = monster[3].src;
//               break;

<<<<<<< HEAD
            default:
          }*/
        }

      } (i), timeSummonMonsters);
} 

timeSummonMonsters = 0;
}
=======
//             default:
//           }*/
//       }

//     } (i), timeSummonMonsters);
//   } 

//   timeSummonMonsters = 0;
// }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3


// function createPlayers() {

//   for(i = 1; i <= 4; i++) {

<<<<<<< HEAD
    player = new Player(i);
    // player.setPlayerImg(players[i].src);
    stats = player.getPlayerStatsArray();
=======
//     player = new Player(i);
//     player.setPlayerImg(players[i].src);
//     stats = player.getPlayerStatsArray();
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     //Stats initialisieren
//     //Jeweils in Spielerklasse speichern und im Array eintragen, das charSheet zum Zeichnen benutzt
//     switch(i) {

//       case 1:

<<<<<<< HEAD
      player.setPlayerName("SENJU");
=======
//           player.setPlayerName("SENJU");
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//           //STATS
//           player.setPlayerSword(5); 
//           stats[0] = player.getPlayerSword();

//           player.setPlayerSwordDmg(4);
//           stats[1] = player.getPlayerSwordDmg();

//           player.setPlayerBow(3); 
//           stats[2] = player.getPlayerBow();

//           player.setPlayerBowDmg(1);
//           stats[3] = player.getPlayerBowDmg();

//           player.setPlayerMagic(3); 
//           stats[4] = player.getPlayerMagic();

//           player.setPlayerMagicDmg(1);
//           stats[5] = player.getPlayerMagicDmg();

//           player.setPlayerLife(25); 
//           stats[6] = player.getPlayerLife();

//           player.setPlayerLifeMax(25);
//           stats[7] = player.getPlayerLifeMax();


//           //RUNES

//           player.setPlayerHealPoints(5); 
//           stats[8] = player.getPlayerHealPoints();

//           player.setPlayerHealPointsMax(5);
//           stats[9] = player.getPlayerHealPointsMax();

//           player.setPlayerBoost(1); 
//           stats[10] = player.getPlayerBoost();

//           player.setPlayerBoostMax(1);
//           stats[11] = player.getPlayerBoostMax();

//           player.setPlayerTrackingPoints(5); 
//           stats[12] = player.getPlayerTrackingPoints();

//           player.setPlayerTrackingPointsMax(5);
//           stats[13] = player.getPlayerTrackingPointsMax();

//           player.setPlayerXStrikePoints(1); 
//           stats[14] = player.getPlayerXStrikePoints();

//           player.setPlayerXStrikePointsMax(1);
//           stats[15] = player.getPlayerXStrikePointsMax();

//           player.setPlayerMovementPoints(10); 
//           stats[16] = player.getPlayerMovementPoints();

//           player.setPlayerMovementPointsMax(10);
//           stats[17] = player.getPlayerMovementPointsMax();

//           AllPlayers[i] = player;

//           break;

<<<<<<< HEAD
          case 2:
=======
//       case 2:
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//           player.setPlayerName("MISCHA");

//           //STATS       
//           player.setPlayerSword(3); 
//           stats[0] = player.getPlayerSword();

//           player.setPlayerSwordDmg(3);
//           stats[1] = player.getPlayerSwordDmg();

//           player.setPlayerBow(3); 
//           stats[2] = player.getPlayerBow();

//           player.setPlayerBowDmg(3);
//           stats[3] = player.getPlayerBowDmg();

//           player.setPlayerMagic(3); 
//           stats[4] = player.getPlayerMagic();

//           player.setPlayerMagicDmg(3);
//           stats[5] = player.getPlayerMagicDmg();

//           player.setPlayerLife(15); 
//           stats[6] = player.getPlayerLife();

//           player.setPlayerLifeMax(15);
//           stats[7] = player.getPlayerLifeMax();


//           //RUNES

//           player.setPlayerHealPoints(5); 
//           stats[8] = player.getPlayerHealPoints();

//           player.setPlayerHealPointsMax(5);
//           stats[9] = player.getPlayerHealPointsMax();

//           player.setPlayerBoost(1); 
//           stats[10] = player.getPlayerBoost();

//           player.setPlayerBoostMax(1);
//           stats[11] = player.getPlayerBoostMax();

//           player.setPlayerTrackingPoints(5); 
//           stats[12] = player.getPlayerTrackingPoints();

//           player.setPlayerTrackingPointsMax(5);
//           stats[13] = player.getPlayerTrackingPointsMax();

//           player.setPlayerXStrikePoints(1); 
//           stats[14] = player.getPlayerXStrikePoints();

//           player.setPlayerXStrikePointsMax(1);
//           stats[15] = player.getPlayerXStrikePointsMax();

//           player.setPlayerMovementPoints(10); 
//           stats[16] = player.getPlayerMovementPoints();

//           player.setPlayerMovementPointsMax(10);
//           stats[17] = player.getPlayerMovementPointsMax();

//           AllPlayers[i] = player;

//           break;

<<<<<<< HEAD
          case 3:
=======
//       case 3:
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//           player.setPlayerName("JULIAN");

//           //STATS       
//           player.setPlayerSword(2); 
//           stats[0] = player.getPlayerSword();

//           player.setPlayerSwordDmg(1);
//           stats[1] = player.getPlayerSwordDmg();

//           player.setPlayerBow(1); 
//           stats[2] = player.getPlayerBow();

//           player.setPlayerBowDmg(3);
//           stats[3] = player.getPlayerBowDmg();

//           player.setPlayerMagic(6); 
//           stats[4] = player.getPlayerMagic();

//           player.setPlayerMagicDmg(5);
//           stats[5] = player.getPlayerMagicDmg();

//           player.setPlayerLife(10); 
//           stats[6] = player.getPlayerLife();

//           player.setPlayerLifeMax(10);
//           stats[7] = player.getPlayerLifeMax();


//           //RUNES

//           player.setPlayerHealPoints(5); 
//           stats[8] = player.getPlayerHealPoints();

//           player.setPlayerHealPointsMax(5);
//           stats[9] = player.getPlayerHealPointsMax();

//           player.setPlayerBoost(1); 
//           stats[10] = player.getPlayerBoost();

//           player.setPlayerBoostMax(1);
//           stats[11] = player.getPlayerBoostMax();

//           player.setPlayerTrackingPoints(5); 
//           stats[12] = player.getPlayerTrackingPoints();

//           player.setPlayerTrackingPointsMax(5);
//           stats[13] = player.getPlayerTrackingPointsMax();

//           player.setPlayerXStrikePoints(1); 
//           stats[14] = player.getPlayerXStrikePoints();

//           player.setPlayerXStrikePointsMax(1);
//           stats[15] = player.getPlayerXStrikePointsMax();

//           player.setPlayerMovementPoints(10); 
//           stats[16] = player.getPlayerMovementPoints();

//           player.setPlayerMovementPointsMax(10);
//           stats[17] = player.getPlayerMovementPointsMax();

//           AllPlayers[i] = player;

//           break;

<<<<<<< HEAD
          case 4:
=======
//       case 4:
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//           player.setPlayerName("JACKY");

//           //STATS       
//           player.setPlayerSword(4); 
//           stats[0] = player.getPlayerSword();

//           player.setPlayerSwordDmg(1);
//           stats[1] = player.getPlayerSwordDmg();

//           player.setPlayerBow(6); 
//           stats[2] = player.getPlayerBow();

//           player.setPlayerBowDmg(5);
//           stats[3] = player.getPlayerBowDmg();

//           player.setPlayerMagic(2); 
//           stats[4] = player.getPlayerMagic();

//           player.setPlayerMagicDmg(1);
//           stats[5] = player.getPlayerMagicDmg();

//           player.setPlayerLife(20); 
//           stats[6] = player.getPlayerLife();

//           player.setPlayerLifeMax(20);
//           stats[7] = player.getPlayerLifeMax();


//           //RUNES

//           player.setPlayerHealPoints(5); 
//           stats[8] = player.getPlayerHealPoints();

//           player.setPlayerHealPointsMax(5);
//           stats[9] = player.getPlayerHealPointsMax();

//           player.setPlayerBoost(1); 
//           stats[10] = player.getPlayerBoost();

//           player.setPlayerBoostMax(1);
//           stats[11] = player.getPlayerBoostMax();

//           player.setPlayerTrackingPoints(5); 
//           stats[12] = player.getPlayerTrackingPoints();

//           player.setPlayerTrackingPointsMax(5);
//           stats[13] = player.getPlayerTrackingPointsMax();

//           player.setPlayerXStrikePoints(1); 
//           stats[14] = player.getPlayerXStrikePoints();

//           player.setPlayerXStrikePointsMax(1);
//           stats[15] = player.getPlayerXStrikePointsMax();

//           player.setPlayerMovementPoints(10); 
//           stats[16] = player.getPlayerMovementPoints();

//           player.setPlayerMovementPointsMax(10);
//           stats[17] = player.getPlayerMovementPointsMax();

//           AllPlayers[i] = player;

//           break;

<<<<<<< HEAD
        }

      }
=======
//     }

//   }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   //Start Movement Points von Spieler 1 übernehmen
//   currentMovementPoints = AllPlayers[1].getPlayerMovementPoints();
  
// }




// var timeSummonPlayers = 250
// function summonPlayers() {

//   for(i = 1; i <= 4; i++){

//     timeSummonPlayers += 250;

//     setTimeout(function(j) {

//       return function() {

//         randomPosition = Math.floor(Math.random() * (amountTiles));

//         //Falls auf der zufällig bestimmten Position bereits ein Monster haust
//         if(AllTiles[randomPosition].getHasMonsters() == true || AllTiles[randomPosition].getHasPlayer() == true) {

//           //Wiederhole den Vorgang bis das nicht mehr der Fall ist
//           while(AllTiles[randomPosition].getHasMonsters() == true || AllTiles[randomPosition].getHasPlayer() == true) {

//             randomPosition = Math.floor(Math.random() * (amountTiles));
//           }

//         }

//         //Speichere SpielerPosition in Player-Objekten
//         AllPlayers[j].setPlayerPosition(randomPosition);

//         //Start-Position von Spieler 1 übernehmen
//         currentPlayerPosition = AllPlayers[1].getPlayerPosition();

<<<<<<< HEAD
        //Tausche Template an Stelle des Spielers mit Spielerbild aus
        //AllTemplates[randomPosition].src = players[j].src;
        io.sockets.emit('50', {position: randomPosition, source: null, difficultyValue: null, playersValue: j});
        //swordSound(); CLIENT(49)
        io.sockets.emit('49');
=======
//         //Tausche Template an Stelle des Spielers mit Spielerbild aus
//         AllTemplates[randomPosition].src = players[j].src;
//         swordSound();
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//         //Sage der Kachel, dass sie einen Spieler hat
//         AllTiles[randomPosition].setHasPlayer(true);
//       }

//     } (i), timeSummonPlayers);

<<<<<<< HEAD
}
}
=======
//   }
// }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// var currentPlayer;
// function updateCharSheet() {

//   var currentPlayer = AllPlayers[currentPlayerNumber];

//   //STATS
//   $("#sword").html(currentPlayer.getPlayerSword()); $("#swordMax").html(currentPlayer.getPlayerSwordDmg());
//   $("#bow").html(currentPlayer.getPlayerBow()); $("#bowMax").html(currentPlayer.getPlayerBowDmg());
//   $("#magic").html(currentPlayer.getPlayerMagic()); $("#magicMax").html(currentPlayer.getPlayerMagicDmg());
//   $("#life").html(currentPlayer.getPlayerLife()); $("#lifeMax").html(currentPlayer.getPlayerLifeMax());

//   //RUNES
//   $("#heal").html(currentPlayer.getPlayerHealPoints()); $("#healMax").html(currentPlayer.getPlayerHealPointsMax());
//   $("#pers").html(currentPlayer.getPlayerBoost()); $("#persMax").html(currentPlayer.getPlayerBoostMax());
//   $("#track").html(currentPlayer.getPlayerTrackingPoints()); $("#trackMax").html(currentPlayer.getPlayerTrackingPointsMax());
//   $("#xstrike").html(currentPlayer.getPlayerXStrikePoints()); $("#xstrikeMax").html(currentPlayer.getPlayerXStrikePointsMax());
//   $("#move").html(currentPlayer.getPlayerMovementPoints()); $("#moveMax").html(currentPlayer.getPlayerMovementPointsMax());

//   //LVL + EXP
//   $("#levelCounter").html(currentPlayer.getPlayerLvl());
//   $("#LvlUpBarFill").css("width", currentPlayer.getPlayerEXP()+"%");

// }
















// ////////////////////////////////////////
// // Methods for the course of the game //
// ////////////////////////////////////////

// var actionsBlocked = false;
// function blockAction() {

//   if(actionsBlocked) {

//     $("#blocker").css("visibility", "hidden");
//     actionsBlocked = false;

//   }

//   else {

<<<<<<< HEAD
    $("#blocker").css("visibility", "visible");
    actionsBlocked = true;

  }
=======
//     $("#blocker").css("visibility", "visible");
//     actionsBlocked = true;
  
//   }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }

///////////////////// showMovementPhaseAnimation ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

<<<<<<< HEAD
// aufgerufen von 38
function initshowMovementPhaseAnimation(){
  changePlayer(currentPlayerNumber);
  resetMovementRange();
}

///////////////////// END showMovementPhaseAnimation ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////



//Anzeigeelemente und stats für neuen Player laden
function changePlayer () {

  if(currentPlayerNumber != 0) { AllPlayers[currentPlayerNumber].setIsPlaying(false);}

  if(currentPlayerNumber < 4) {

    currentPlayerNumber = currentPlayerNumber +1;

  }

  else {

    currentPlayerNumber = 1;
=======
// var timeShowMovePhaseAnim = 0;
// function showMovementPhaseAnimation () {    

//   changePlayer(currentPlayerNumber);
//   resetMovementRange();

//   for(i=0; i <= 5; i++) {

//     timeShowMovePhaseAnim += 100;

//     setTimeout(function(j) {

//       return function() {

//           var movementMarker = document.createElement("div");
//           movementMarker.innerHTML = "PLAYER "+currentPlayerNumber+" - YOUR TURN!";
//           //notwendig, damit alles VOR dem Spielfeld angezeigt wird.
//           movementMarker.style.zIndex = "2";
//           movementMarker.className = "phaseMarker";
//           movementMarker.id = "phaseMarker";
//           document.getElementById("field").appendChild(movementMarker);

//           setTimeout(function() {

//           document.getElementById("endTurnButton").style.visibility = "visible";

//           }, 3000);

//           setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("phaseMarker"))}, 3000);

//           }
      

//     } (i), timeShowMovePhaseAnim);
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   }

<<<<<<< HEAD
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
=======
//   timeShowMovePhaseAnim = 0;
//   setTimeout(function() { showMovementRange(); }, 3600);

// } 
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// function showMonsterChooser () {    


//   $(document).ready(function(){

<<<<<<< HEAD
    $("#monsterChooser").animate({top: '-20px'}, 1000);
    chainSound();
=======
//   $("#monsterChooser").animate({top: '-20px'}, 1000);
//   chainSound();
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   });
// }

// function hideMonsterChooser () {

//   $(document).ready(function(){

<<<<<<< HEAD
    $("#monsterChooser").animate({top: '-325px'}, 1000);
    chainSound();
=======
//   $("#monsterChooser").animate({top: '-325px'}, 1000);
//   chainSound();
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   });
// }

<<<<<<< HEAD
function showFightAnimation (Text) {
=======


// var timeShowGameStartAnim = 100;
// function showGameStartAnimation () {    

//   monsterGrowlSound();
//   var gameStartMarkerBackground = document.createElement("div");
//   gameStartMarkerBackground.className = "gameStartMarkerBackground"
//   gameStartMarkerBackground.id = "gameStartMarkerBackground";
//   document.getElementById("field").appendChild(gameStartMarkerBackground);


//   for(i=0; i <= 2; i++) {

//     timeShowGameStartAnim += 200;

//     setTimeout(function(j) {

//       return function() {

//           var gameStartMarker = document.createElement("div");
//           gameStartMarker.innerHTML = "GAME START";
//           gameStartMarker.style.index = "2";
//           gameStartMarker.className = "gameStartMarker";
//           gameStartMarker.id = "gameStartMarker";
//           document.getElementById("gameStartMarkerBackground").appendChild(gameStartMarker);
//       }

//     } (i), timeShowGameStartAnim);

//   }

//   timeShowGameStartAnim= 0;
//   setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("gameStartMarkerBackground"))}, 5000);
// }


// function showFightAnimation (Text) {
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   var roundMarker = document.createElement("div");
//   roundMarker.innerHTML = Text;
//   //notwendig, damit alles VOR dem Kampfbildschirm angezeigt wird.
//   roundMarker.style.zIndex = "7";
//   roundMarker.className = "roundMarker";
//   roundMarker.id = "roundMarker";
//   document.getElementById("fight").appendChild(roundMarker);

//   setTimeout(function() {document.getElementById("fight").removeChild(document.getElementById("roundMarker"))}, 3000);

// }

// var timeShowReincarnate = 0;
// function showReincarnationAnimation () {

//   monsterGrowlSound();
//   var grimReaper = document.createElement("div");
//   grimReaper.className = "grimReaper"
//   grimReaper.id = "grimReaper";
//   document.getElementById("field").appendChild(grimReaper);


//   for(i=0; i <= 2; i++) {

//     timeShowReincarnate += 200;

//     setTimeout(function(j) {

//       return function() {

<<<<<<< HEAD
        var grimReaperText = document.createElement("div");
        grimReaperText.innerHTML = "SECOND CHANCE";
        grimReaperText.className = "grimReaperText";
        grimReaperText.id = "grimReaperText";
        document.getElementById("field").appendChild(grimReaperText);
      }
=======
//           var grimReaperText = document.createElement("div");
//           grimReaperText.innerHTML = "SECOND CHANCE";
//           grimReaperText.className = "grimReaperText";
//           grimReaperText.id = "grimReaperText";
//           document.getElementById("field").appendChild(grimReaperText);
//       }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     } (i), timeShowReincarnate);

//   }

//   timeShowReincarnate = 0;
//   setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("grimReaper"))}, 5000);
//   setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("grimReaperText"))}, 5000);
// }

// var timeShowFieldWinAnim = 0;
// function showFieldWinAnimation (clickedTile) {

//   choralSound();
//   var frame1 = document.createElement("div");
//   frame1.className = "winFrame1";
//   frame1.id = "winFrame1";
//   var x = clickedTile.getXPosition();
//   var y = clickedTile.getYPosition();
//   document.getElementById("field").appendChild(frame1);
//   document.getElementById("winFrame1").style.top=y+"px";
//   document.getElementById("winFrame1").style.left=x+"px";

//   var frame2 = document.createElement("div");
//   frame2.className = "winFrame2";
//   frame2.id = "winFrame2";
//   document.getElementById("field").appendChild(frame2);
//   document.getElementById("winFrame2").style.top=y+"px";
//   document.getElementById("winFrame2").style.left=x+"px";

//   for(i=0; i <= 10; i++) {

//     timeShowFieldWinAnim += 100;

//     setTimeout(function(j) {

//       return function() {

<<<<<<< HEAD
        if(j%2 != 0) {

          $("#winFrame1").css("visibility", "visible");
          $("#winFrame2").css("visibility", "hidden");

        }

        else {

          $("#winFrame2").css("visibility", "visible");
          $("#winFrame1").css("visibility", "hidden");

        }
      }
=======
//           if(j%2 != 0) {

//             $("#winFrame1").css("visibility", "visible");
//             $("#winFrame2").css("visibility", "hidden");

//           }

//           else {

//             $("#winFrame2").css("visibility", "visible");
//             $("#winFrame1").css("visibility", "hidden");

//           }
//       }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     } (i), timeShowFieldWinAnim);

//   }

//   $("#winFrame2").css("visibility", "hidden");
//   $("#winFrame2").css("visibility", "hidden");

//   timeShowFieldWinAnim = 0;
//   setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("winFrame1"))}, 2000);
//   setTimeout(function() {document.getElementById("field").removeChild(document.getElementById("winFrame2"))}, 2000);
// }


// var timeShowEXPGain = 0;
// function showEXPGain (currentEXP, newEXP) {

//   for(i=currentEXP; i <= newEXP; i++) {

//     timeShowEXPGain += 15;

//     setTimeout(function(j) {

//       return function() {

//         $("#LvlUpBarFill").css("width", j+"%");

//         //Falls LvlUp erreicht
//         if(j == 100) {

//           lvlUpSound();
//           $("#LvlUpMarker").css("visibility", "visible");

//         }


//       }

//     } (i), timeShowEXPGain);
//   }


//   timeShowEXPGain = 0;
// }



























// function startFight() {

//   hideMonsterChooser()
//   setTimeout(function() {

<<<<<<< HEAD
    metalClashSound();
    loadStats();
    writeStats();
    $("#fight").css("visibility", "visible");

    $(".leftFight").hide();
    $(".rightFight").hide();
    $(".rightFight").animate({width:'toggle'}, 2500, "easeOutBounce");
    $(".leftFight").animate({width:'toggle'}, 2500, "easeOutBounce");
    setTimeout(function() {$("#phaseFrame").css("visibility", "visible");}, 2500);
=======
//       metalClashSound();
//       loadStats();
//       writeStats();
//       $("#fight").css("visibility", "visible");

//       $(".leftFight").hide();
//       $(".rightFight").hide();
//       $(".rightFight").animate({width:'toggle'}, 2500, "easeOutBounce");
//       $(".leftFight").animate({width:'toggle'}, 2500, "easeOutBounce");
//       setTimeout(function() {$("#phaseFrame").css("visibility", "visible");}, 2500);
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   }, 1000);
// }


<<<<<<< HEAD
function reincarnatePlayer() {
=======

// function startFightRoutine(index, clickedTile) {
//   showMonsterChooser();

// }

// function reincarnatePlayer() {
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3


//   showReincarnationAnimation();

//   AllPlayers[currentPlayerNumber].setPlayerLife(AllPlayers[currentPlayerNumber].getPlayerLifeMax());

//   AllPlayers[currentPlayerNumber].setPlayerHealPoints(0);
//   AllPlayers[currentPlayerNumber].setPlayerBoost(0);
//   AllPlayers[currentPlayerNumber].setPlayerTrackingPoints(0);
//   AllPlayers[currentPlayerNumber].setPlayerXStrikePoints(0);
//   AllPlayers[currentPlayerNumber].setPlayerMovementPoints(0);

//   //STATS
//   $("#sword").html(AllPlayers[currentPlayerNumber].getPlayerSword()); $("#swordMax").html(AllPlayers[currentPlayerNumber].getPlayerSwordDmg());
//   $("#bow").html(AllPlayers[currentPlayerNumber].getPlayerBow()); $("#bowMax").html(AllPlayers[currentPlayerNumber].getPlayerBowDmg());
//   $("#magic").html(AllPlayers[currentPlayerNumber].getPlayerMagic()); $("#magicMax").html(AllPlayers[currentPlayerNumber].getPlayerMagicDmg());
//   $("#life").html(AllPlayers[currentPlayerNumber].getPlayerLife()); $("#lifeMax").html(AllPlayers[currentPlayerNumber].getPlayerLifeMax());

//   //RUNES
//   $("#heal").html(AllPlayers[currentPlayerNumber].getPlayerHealPoints()); $("#healMax").html(AllPlayers[currentPlayerNumber].getPlayerHealPointsMax());
//   $("#pers").html(AllPlayers[currentPlayerNumber].getPlayerBoost()); $("#persMax").html(AllPlayers[currentPlayerNumber].getPlayerBoostMax());
//   $("#track").html(AllPlayers[currentPlayerNumber].getPlayerTrackingPoints()); $("#trackMax").html(AllPlayers[currentPlayerNumber].getPlayerTrackingPointsMax());
//   $("#xstrike").html(AllPlayers[currentPlayerNumber].getPlayerXStrikePoints()); $("#xstrikeMax").html(AllPlayers[currentPlayerNumber].getPlayerXStrikePointsMax());
//   $("#move").html(AllPlayers[currentPlayerNumber].getPlayerMovementPoints()); $("#moveMax").html(AllPlayers[currentPlayerNumber].getPlayerMovementPointsMax());

// }

// function EXPGain (gainedEXP) {

//   var currentEXP = AllPlayers[currentPlayerNumber].getPlayerEXP();
//   var newEXP = currentEXP+gainedEXP;

//   //Falls Erfahrungspunkte über oder gleich 100 --> Lvl Up
//   if (newEXP >= 100) {

//     //überschüssige EXP zwischenspeichern
//     var overrunEXP = newEXP - 100;
//     //Animation mit 100 ausführen
//     showEXPGain(currentEXP, 100);
//     //Level des Spielers erhöhen
//     AllPlayers[currentPlayerNumber].setPlayerLvl(AllPlayers[currentPlayerNumber].getPlayerLvl()+1);
//     //EXP des Spielers wieder auf Wert der überschüssigen EXP setzen
//     AllPlayers[currentPlayerNumber].setPlayerEXP(overrunEXP);

//     setTimeout(function() {   

//     //Neues Level im CharSheet sichtbarmachen
//     $("#levelCounter").html(""+AllPlayers[currentPlayerNumber].getPlayerLvl());
//     //Animation erneut mit überschüssigen EXP ausführen
//     showEXPGain(0, overrunEXP);

<<<<<<< HEAD
  }, (100-currentEXP)*15);
=======
//     }, (100-currentEXP)*15);
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   }

//   //Spieler ist kein Level aufgestiegen
//   else {

//     showEXPGain(currentEXP, newEXP);
//     //EXP des Spielers auf neuen Wert setzen
//     AllPlayers[currentPlayerNumber].setPlayerEXP(newEXP);

//   }

// }


// function LevelUp() {

//   $("#LvlUpMarker").css("visibility", "hidden");
//   $("#lvl").css("visibility", "visible");
//   update(18);
//   update(19);
//   blockAction();

// }



// //HIER KÖNNTE MAN JEDE ZWEITE ZEILE NOCH RAUSNEHMEN JE NACHDEM, OB MAN DEN SCHADEN AUCH ERHÖHEN DARF
// function updateStats(currentPlayerArray) {

//   player = AllPlayers[currentPlayerNumber];

//   //STATS

<<<<<<< HEAD
  player.setPlayerSword(currentPlayerArray[0]); 
  /*  player.setPlayerSwordDmg(currentPlayerArray[1]);*/
  player.setPlayerBow(currentPlayerArray[2]); 
  /*  player.setPlayerBowDmg(currentPlayerArray[3]);*/
  player.setPlayerMagic(currentPlayerArray[4]); 
  /*  player.setPlayerMagicDmg(currentPlayerArray[5]);*/
  /*  player.setPlayerLife(currentPlayerArray[6]); */
  player.setPlayerLifeMax(currentPlayerArray[7]);
=======
//   player.setPlayerSword(currentPlayerArray[0]); 
// /*  player.setPlayerSwordDmg(currentPlayerArray[1]);*/
//   player.setPlayerBow(currentPlayerArray[2]); 
// /*  player.setPlayerBowDmg(currentPlayerArray[3]);*/
//   player.setPlayerMagic(currentPlayerArray[4]); 
// /*  player.setPlayerMagicDmg(currentPlayerArray[5]);*/
// /*  player.setPlayerLife(currentPlayerArray[6]); */
//   player.setPlayerLifeMax(currentPlayerArray[7]);
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   //RUNES

<<<<<<< HEAD
  /*  player.setPlayerHealPoints(currentPlayerArray[8]); */
  player.setPlayerHealPointsMax(currentPlayerArray[9]);
  /*  player.setPlayerBoost(currentPlayerArray[10]); */
  player.setPlayerBoostMax(currentPlayerArray[11]);
  /*  player.setPlayerTrackingPoints(currentPlayerArray[12]);*/ 
  player.setPlayerTrackingPointsMax(currentPlayerArray[13]);
  /*  player.setPlayerXStrikePoints(currentPlayerArray[14]); */
  player.setPlayerXStrikePointsMax(currentPlayerArray[15]);
  /*  player.setPlayerMovementPoints(currentPlayerArray[16]); */
  player.setPlayerMovementPointsMax(currentPlayerArray[17]);
=======
// /*  player.setPlayerHealPoints(currentPlayerArray[8]); */
//   player.setPlayerHealPointsMax(currentPlayerArray[9]);
// /*  player.setPlayerBoost(currentPlayerArray[10]); */
//   player.setPlayerBoostMax(currentPlayerArray[11]);
// /*  player.setPlayerTrackingPoints(currentPlayerArray[12]);*/ 
//   player.setPlayerTrackingPointsMax(currentPlayerArray[13]);
// /*  player.setPlayerXStrikePoints(currentPlayerArray[14]); */
//   player.setPlayerXStrikePointsMax(currentPlayerArray[15]);
// /*  player.setPlayerMovementPoints(currentPlayerArray[16]); */
//   player.setPlayerMovementPointsMax(currentPlayerArray[17]);
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }






















<<<<<<< HEAD
function refreshRunes() {
=======





















// //Anzeigeelemente und stats für neuen Player laden
// function changePlayer () {

//   if(currentPlayerNumber != 0) { AllPlayers[currentPlayerNumber].setIsPlaying(false);}

//   if(currentPlayerNumber < 4) {

//     currentPlayerNumber = currentPlayerNumber +1;

//   }

//   else {

//     currentPlayerNumber = 1;

//   }

//   //In jeder neuen Runde werden Runen wieder aufgeladen
//   refreshRunes();
//   //Die Status-Werte des aktuellen Spielers reinladen
//   loadStats();
//   //Spielerbild wechseln
//   document.images.charImg.src = "Bilddaten/CharSheet/Spieler"+currentPlayerNumber+".jpg";
//   document.images.charImg2.src = "Bilddaten/CharSheet/Spieler"+currentPlayerNumber+".jpg";
//   //Spielername wechseln
//   document.getElementById('playerName').innerHTML = AllPlayers[currentPlayerNumber].getPlayerName();
//   document.getElementById('playerName2').innerHTML = AllPlayers[currentPlayerNumber].getPlayerName();
//   //Daten des jeweiligen Spielers reinladen
//   updateCharSheet();

//   currentMovementPoints = AllPlayers[currentPlayerNumber].getPlayerMovementPoints();
//   currentPlayerPosition = AllPlayers[currentPlayerNumber].getPlayerPosition();

//   AllPlayers[currentPlayerNumber].setIsPlaying(true);
// }


// function refreshRunes() {
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   //Aktuelle Werte des Spielers holen und die erlaubten Max-Werte
//   move = AllPlayers[currentPlayerNumber].getPlayerMovementPoints();
//   moveMax = AllPlayers[currentPlayerNumber].getPlayerMovementPointsMax();

//   track = AllPlayers[currentPlayerNumber].getPlayerTrackingPoints();
//   trackMax = AllPlayers[currentPlayerNumber].getPlayerTrackingPoints();

//   boost = AllPlayers[currentPlayerNumber].getPlayerBoost();
//   boostMax = AllPlayers[currentPlayerNumber].getPlayerBoost();

//   xstrike = AllPlayers[currentPlayerNumber].getPlayerXStrikePoints();
//   xstrikeMax = AllPlayers[currentPlayerNumber].getPlayerXStrikePointsMax();

//   heal = AllPlayers[currentPlayerNumber].getPlayerHealPoints();
//   healMax = AllPlayers[currentPlayerNumber].getPlayerHealPoints();

//   //If-Abfragen, um nicht über Maximum zu gelangen, falls nach Addition des Refreshs der Wert über Max liegt, Wert nur auf Max setzen, nicht darüber
//   if(move+5 <= moveMax) { AllPlayers[currentPlayerNumber].setPlayerMovementPoints(move+5); } else {AllPlayers[currentPlayerNumber].setPlayerMovementPoints(moveMax)}
//   if(track+5 <= trackMax) { AllPlayers[currentPlayerNumber].setPlayerTrackingPoints(track+5); } else {AllPlayers[currentPlayerNumber].setPlayerTrackingPoints(trackMax)}
//   if(boost+1 <= boostMax) { AllPlayers[currentPlayerNumber].setPlayerBoost(boost+1); } else {AllPlayers[currentPlayerNumber].setPlayerBoost(boostMax)}
//   if(xstrike+1 <= xstrikeMax) { AllPlayers[currentPlayerNumber].setPlayerXStrikePoints(xstrike+1); } else {AllPlayers[currentPlayerNumber].setPlayerXStrikePoints(xstrikeMax)}
//   if(heal+1 <= healMax) { AllPlayers[currentPlayerNumber].setPlayerHealPoints(heal+1); } else {AllPlayers[currentPlayerNumber].setPlayerHealPoints(healMax)}

// }

// function loadStats() {

//   //DEFENSE, ATTACK, BOOST, STRIKE
//   dmin = 2;
//   dmax = 2;
//   amin = 1;
//   amax = 1;

//   abmin = AllPlayers[currentPlayerNumber].getPlayerBoost();
//   abmax = AllPlayers[currentPlayerNumber].getPlayerBoostMax();
//   esmin = AllPlayers[currentPlayerNumber].getPlayerXStrikePoints();
//   esmax = AllPlayers[currentPlayerNumber].getPlayerXStrikePointsMax();


//   //CHAR STATS
//   me_attack_c = AllPlayers[currentPlayerNumber].getPlayerSword();
//   me_dmg_c = AllPlayers[currentPlayerNumber].getPlayerSwordDmg();

//   r_attack_c = AllPlayers[currentPlayerNumber].getPlayerBow();
//   r_dmg_c = AllPlayers[currentPlayerNumber].getPlayerBowDmg();

//   ma_attack_c = AllPlayers[currentPlayerNumber].getPlayerMagic();
//   ma_dmg_c = AllPlayers[currentPlayerNumber].getPlayerMagicDmg();

//   l_min_c = AllPlayers[currentPlayerNumber].getPlayerLife();
//   l_max_c = AllPlayers[currentPlayerNumber].getPlayerLifeMax();

// }



<<<<<<< HEAD
/////////////////////
// START THE FIELD //
/////////////////////
=======





















// /////////////////////
// // START THE FIELD //
// /////////////////////
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// // Methode startet das Spiel und initialisiert alles Notwendige

// function initField() {

<<<<<<< HEAD
  calculateFieldParas(); //NODE
  calculateBorderTileIDs(); //NODE
  initNumberArrayTiles(); //NODE
  shuffleTilesArray(); //NODE
  initNumberArrayMonsters(); //NODE
  createTiles(); //NODE + MethodeEmit(40)
  //addTemplates(); //CLIENT(41)
  io.sockets.emit('41', {a: columnLength, b: amountTiles});

  createPlayers();
  //Nur durch diese Einschränkung fangen die Monster erst NACH der For-Schleife für die Kachelerzeugung an zu erscheinen
  //Ohne die Wait-Function fangen die Monster immer schon zeitgleich an aufzupoppen
  //Die Wartezeit errechnet sich aus der Zeit, die die Kacheln brauchen, um zu erscheinen. (5 pro Kachel)
  //Definiert in der "showTiles" - Methode
  setTimeout(function() {summonMonsters(); }, amountTiles*7 + 500);
  setTimeout(function() {summonPlayers(); }, amountTiles*7 + amountMonsters*100 + 500);
  //setTimeout(function() {showGameStartAnimation();}, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500); CLIENT(47)
  setTimeout(function() {io.sockets.emit('47'); }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500);
  //setTimeout(function() {$("#characterSheet").css("visibility", "visible") }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500 + 4000); CLIENT(48)
  setTimeout(function() {io.sockets.emit('48'); }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500 + 4000);
    // $("#characterSheet").css("visibility", "visible")
=======
//   calculateFieldParas();
//   calculateBorderTileIDs();
//   initNumberArrayTiles();
//   shuffleTilesArray();
//   initNumberArrayMonsters();
//   createTiles();
//   initTemplates();
//   showTiles();
//   createPlayers();
//   //Nur durch diese Einschränkung fangen die Monster erst NACH der For-Schleife für die Kachelerzeugung an zu erscheinen
//   //Ohne die Wait-Function fangen die Monster immer schon zeitgleich an aufzupoppen
//   //Die Wartezeit errechnet sich aus der Zeit, die die Kacheln brauchen, um zu erscheinen. (5 pro Kachel)
//   //Definiert in der "showTiles" - Methode
//   setTimeout(function() {summonMonsters(); }, amountTiles*7 + 500);
//   setTimeout(function() {summonPlayers(); }, amountTiles*7 + amountMonsters*100 + 500);
//   setTimeout(function() {showGameStartAnimation(); }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500);
//   setTimeout(function() {$("#characterSheet").css("visibility", "visible") }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500 + 4000);
// /*  $("#characterSheet").css("visibility", "visible")*/

// }

// function startGame() {

//   initField();
//   setTimeout(function() {showMovementPhaseAnimation(); }, amountTiles*7 + 500 + amountMonsters*100 + 250 + 4*250 + 500 + 3500);
// /*  showMovementPhaseAnimation();*/

// }





















>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

  }






// /////////////////////////////
// // Methods for Interaction //
// /////////////////////////////


// //Funktion dient zur Überprüfung, ob mindestens eine Zahl in einem Array der SpielerPosition entspricht
// function CheckIfEqualsPlayerPosition (zahl) {

//   return zahl == currentPlayerPosition;

// }


// //Gibt in Form eines Integers die Information aus, in welchem Bereich sich der Spieler befindet
// function getPlayerPosArea() {


//   //Integer, der dafür steht, in welcher "Area" sich der Spieler befindet. (Nord, Süd, West, Mitte, etc....)
//   //Diese Funktion ermittelt dies und gibt die Information weiter
//   var playerPosArea = "center";

//   //Falls currentplayerPosition im Array BorderTilesID enthalten muss die Anzeige der Bewegungskosten gesondert betrachtet werden
//   if($.inArray(currentPlayerPosition, BorderTilesIDs) != -1) {

//     //Schalter bestimmt, dass nur der case ausgeführt wird, in dem die SpielerPosition im jeweiligen Array enthalten ist
//     switch(true) {

//       //falls SpielerPosition auf NORTH Border
//       //die "some()" Funktion prüft, für jede Zahl im Array, ob sie der PlayerPos entspricht. Wenn dies bei einer einzigen der Fall
//       //ist, wird der Ausdruck zu true ausgewertet und dieser case wird ausgeführt.
//       case NorthBorderTilesIDs.some(CheckIfEqualsPlayerPosition) :

<<<<<<< HEAD
      playerPosArea = "north";
      break;
=======
//         playerPosArea = "north";
//         break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//       //falls SpielerPosition auf NORTH WEST Ecke
//       case CheckIfEqualsPlayerPosition(0) :

<<<<<<< HEAD
      playerPosArea = "northWest";
      break;
=======
//         playerPosArea = "northWest";
//         break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//       //falls SpielerPosition auf NORTH EAST Ecke
//       case (CheckIfEqualsPlayerPosition(columnLength-1)) :

<<<<<<< HEAD
      playerPosArea = "northEast";
      break;
=======
//         playerPosArea = "northEast";
//         break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//       //falls SpielerPosition auf SOUTH Border
//       case SouthBorderTilesIDs.some(CheckIfEqualsPlayerPosition) :

<<<<<<< HEAD
      playerPosArea = "south";
      break;
=======
//         playerPosArea = "south";
//         break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//       //falls SpielerPosition auf SOUTH WEST Ecke
//       case CheckIfEqualsPlayerPosition(amountTiles) :

<<<<<<< HEAD
      playerPosArea = "southEast";
      break;
=======
//         playerPosArea = "southEast";
//         break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//       //falls SpielerPosition auf SOUTH EAST Ecke
//       case CheckIfEqualsPlayerPosition(amountTiles-(columnLength-1)) :

<<<<<<< HEAD
      playerPosArea = "southWest";
      break;
=======
//         playerPosArea = "southWest";
//         break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//       //falls SpielerPosition auf EAST Border (uneven)
//       case EastBorderUnevenTilesIDs.some(CheckIfEqualsPlayerPosition) :

<<<<<<< HEAD
      playerPosArea = "eastIndented";
      break;
=======
//         playerPosArea = "eastIndented";
//         break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//       //falls SpielerPosition auf EAST Border (even)
//       case EastBorderEvenTilesIDs.some(CheckIfEqualsPlayerPosition) :

<<<<<<< HEAD
      playerPosArea = "east";
      break;
=======
//         playerPosArea = "east";
//         break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//       //falls SpielerPosition auf WEST Border (uneven)
//       case WestBorderUnevenTilesIDs.some(CheckIfEqualsPlayerPosition) :

<<<<<<< HEAD
      playerPosArea = "westIndented";
      break;
=======
//         playerPosArea = "westIndented";
//         break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//       //falls SpielerPosition auf WEST Border (even)
//       case WestBorderEvenTilesIDs.some(CheckIfEqualsPlayerPosition) :

<<<<<<< HEAD
      playerPosArea = "west";
      break;
=======
//         playerPosArea = "west";
//         break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3


//       default: alert("Fehler getPlayerPos - currentPlayerPosition in keinem der Arrays enthalten");

//     }
//   }

//   else {

//     // do nothing
//     // center --> Standardfall, Player in mitten des Felds umringt von 6 Kacheln
//   }

//   return playerPosArea;
// }


// var left = 0; var right = 0; var topright = 0; var topleft = 0; var downright = 0; var downleft = 0;

// // gibt ein Array mit den Kacheln rund um den Spieler zurück. (Links beginnend im Uhrzeigersinn)
// function updateTilesAroundPlayer() {

//   //leere momentanes Array, damit es frisch updaten kann
//   tilesAroundPlayer.length = 0;

//   //Alle Positionen, die theoretisch vorkommen könnten
//   left = currentPlayerPosition-1; 
//   topleft = currentPlayerPosition-columnLength; 
//   topright = currentPlayerPosition-(columnLength-1);
//   right = currentPlayerPosition+1;
//   downleft = currentPlayerPosition+(columnLength-1);
//   downright = currentPlayerPosition+columnLength;

//   //playerPosArea fungiert als Marker, ob der Spieler sich in Randbereichen befindet oder nicht
//   //Je nachdem hat er um sich herum weniger bzw. mehr Kacheln
//   //Wird in getPlayerPosArea ermittelt, die den Marker ausgibt.

//   switch(getPlayerPosArea()) {

//     case "center":

<<<<<<< HEAD
    tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

    break;
=======
//       tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

//       break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     case "north":

<<<<<<< HEAD
    tilesAroundPlayer.push(AllTiles[left], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

    break;
=======
//       tilesAroundPlayer.push(AllTiles[left], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

//       break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     case "northWest":

<<<<<<< HEAD
    tilesAroundPlayer.push(AllTiles[right], AllTiles[downright]);

    break;
=======
//       tilesAroundPlayer.push(AllTiles[right], AllTiles[downright]);

//       break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     case "northEast":

<<<<<<< HEAD
    tilesAroundPlayer.push(AllTiles[left], AllTiles[downleft]);

    break;
=======
//       tilesAroundPlayer.push(AllTiles[left], AllTiles[downleft]);

//       break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     case "south":

<<<<<<< HEAD
    tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[right]);

    break;
=======
//       tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[right]);

//       break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     case "southWest":

<<<<<<< HEAD
    tilesAroundPlayer.push(AllTiles[topright], AllTiles[right]);

    break;
=======
//       tilesAroundPlayer.push(AllTiles[topright], AllTiles[right]);

//       break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     case "southEast":

<<<<<<< HEAD
    tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft]);

    break;
=======
//       tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft]);

//       break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     case "eastIndented":

<<<<<<< HEAD
    tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[downright], AllTiles[downleft]);

    break;
=======
//       tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[topright], AllTiles[downright], AllTiles[downleft]);

//       break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     case "east":

<<<<<<< HEAD
    tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[downleft]);

    break;
=======
//       tilesAroundPlayer.push(AllTiles[left], AllTiles[topleft], AllTiles[downleft]);

//       break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     case "westIndented":

<<<<<<< HEAD
    tilesAroundPlayer.push(AllTiles[topleft], AllTiles[topright], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

    break;
=======
//       tilesAroundPlayer.push(AllTiles[topleft], AllTiles[topright], AllTiles[right], AllTiles[downright], AllTiles[downleft]);

//       break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     case "west":

<<<<<<< HEAD
    tilesAroundPlayer.push(AllTiles[topright], AllTiles[right], AllTiles[downright]);

    break;
=======
//       tilesAroundPlayer.push(AllTiles[topright], AllTiles[right], AllTiles[downright]);

//       break;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3


//     default: alert("Fehler updateTilesAroundPlayer");
//   }
// }

// function resetMovementRange() {

//   var tile;
//   var templateOverTile;

//   //Vorherige Darstellung bereinigen
//   for(i=0; i < tilesAroundPlayer.length; i++) {

<<<<<<< HEAD
    //Kachel aus Array holen
    tile = tilesAroundPlayer[i];
    //Das auszutauschende Template über der Kachel holen
    //templateOverTile = AllTemplates[tile.getID()]; - CLIENT(50)
=======
//     //Kachel aus Array holen
//     tile = tilesAroundPlayer[i];
//     //Das auszutauschende Template über der Kachel holen
//     templateOverTile = AllTemplates[tile.getID()];
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3
    
//     //Falls die Kachel weder einen Spieler noch ein Monster hat...
//     if(tile.getHasPlayer() == false && tile.getHasMonsters() == false) {

<<<<<<< HEAD
    //... Die Zahl wieder durch ein Template ersetzen
    //templateOverTile.src = "Bilddaten/Spielfeld/temp.png"; - CLIENT(50)
    io.sockets.emit('50', {position: tile.getID(), source: "Bilddaten/Spielfeld/temp.png", difficultyValue: null, playersValue: null});
  }

}

delete(tile);
=======
//     //... Die Zahl wieder durch ein Template ersetzen
//     templateOverTile.src = "Bilddaten/Spielfeld/temp.png";

//     }

//   }

//   delete(tile, templateOverTile);
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }


// //Funktion, die anhand des tilesAroundPlayer-Arrays die Kacheln mit Bewegungskosten überzeichnet
// // !!!!! NOCH ABFRAGEN ERGÄNZEN, DAMIT KEINE SPIELER ODER MONSTER ÜBERZEICHNET WERDEN
// function showMovementRange() {

//   var tile;
//   var terrainDifficulty;
//   var templateOverTile;

//   resetMovementRange();

//   //Array updaten --> ESSENTIELL, Weiche dafür, dass in der oberen Schleife die alte Ansicht gelöscht wird und in der
//   //unteren Schleife die neue Ansicht gezeichnet wird.
//   updateTilesAroundPlayer();

//   //Neue Darstellung zeichnen
//   for(i=0; i < tilesAroundPlayer.length; i++) {

<<<<<<< HEAD
    //Kachel aus Array holen
    tile = tilesAroundPlayer[i];
    //Schwierigkeit der Kachel holen
    terrainDifficulty = tile.getTerrainDifficulty();
    //Das auszutauschende Template über der Kachel holen
    //templateOverTile = AllTemplates[tile.getID()];
=======
//     //Kachel aus Array holen
//     tile = tilesAroundPlayer[i];
//     //Schwierigkeit der Kachel holen
//     terrainDifficulty = tile.getTerrainDifficulty();
//     //Das auszutauschende Template über der Kachel holen
//     templateOverTile = AllTemplates[tile.getID()];
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3
    
//     //Falls die Kachel weder einen Spieler noch ein Monster hat...
//     if(tile.getHasPlayer() == false && tile.getHasMonsters() == false) {

<<<<<<< HEAD
    //TO DO - CLIENT?
    //... Das Template durch eine Zahl ersetzen
    // templateOverTile.src = terrainsDifficulties[terrainDifficulty].src;
    io.sockets.emit('50', {position: tile.getID(), source: null, difficultyValue: terrainDifficulty, playersValue: null});
  }

}
=======
//     //... Das Template durch eine Zahl ersetzen
//     templateOverTile.src = terrainsDifficulties[terrainDifficulty].src;

//     }

//   }

//   delete(tile, templateOverTile, terrainDifficulty);
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

delete(tile, templateOverTile, terrainDifficulty);

// }

<<<<<<< HEAD


var idClickedTile;
var clickedTile;
=======
// var idClickedTile;
// var clickedTile;
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// function checkClickedTile() {

//   //Die ID der Kachel, auf die geklickt wurde
//   idClickedTile = this.id - amountTiles-1;
//   //Die Kachel, auf die geklickt wurde
//   clickedTile = AllTiles[idClickedTile];
//   //aktualisiere das tilesAroundPlayer-Array
//   updateTilesAroundPlayer();

//   //Falls die Kachel, auf die geklickt wurde eine Kachel in Reichweite des Spielers ist und dort kein anderer Spieler steht...
//   //Bewegung potentiell möglich
//   if(($.inArray(clickedTile, tilesAroundPlayer) != -1) && (clickedTile.getHasPlayer() == false)) {

//         //Wenn das Feld, auf das man gehen möchte teurer ist, als die verbliebenen Bewegungspunkte und ohne Monster...
//         //...Bewegung untersagen
//         if(currentMovementPoints < (clickedTile.getTerrainDifficulty()+1) && clickedTile.getHasMonsters() == false) {

<<<<<<< HEAD
          //alert("Not enough movementPoints left"); - CLIENT(42)
          io.sockets.emit('42', "Not enough movementPoints left");
        }
=======
//           alert("Not enough movementPoints left");

//         }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//         //... andernfalls Bewegung potentiell möglich
//         else {

//               //Falls die Kachel, auf die geklickt wurde ein Monster hat -> Kampf
//               if(clickedTile.getHasMonsters() == true) {

<<<<<<< HEAD
                //Kämpfen
                //startFightRoutine(idClickedTile, clickedTile); CLIENT(1000)
                io.sockets.emit('1000');
              }
=======
//                   startFightRoutine(idClickedTile, clickedTile);
//                   //Kämpfen
//                   clixxx(1000);

//               }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//               //andernfalls kann es nur eine leere Kachel sein -> Spieler bewegen
//               else {

<<<<<<< HEAD
                  //MovePlayer nimmt als Argument die geklickte Kachel, sowie den idClickedTile (womit auf das Template geschlossen werden kann)
                  // movePlayer(idClickedTile, clickedTile); - CLIENT(43)
                  initMovePlayer(idClickedTile, clickedTile);
                  io.sockets.emit('43', {pCurrentMovementPoints: currentMovementPoints});
                }

=======
//                   //MovePlayer nimmt als Argument die geklickte Kachel, sowie den idClickedTile (womit auf das Template geschlossen werden kann)
//                   movePlayer(idClickedTile, clickedTile);
                  

//               }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3


<<<<<<< HEAD
              }
            }
=======
//         }
//   }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   //... andernfalls Bewegung nicht erlauben
//   else {

<<<<<<< HEAD
    //clickSound(); - CLIENT(44)
    io.sockets.emit('44');
=======
//         clickSound();
    

>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   }

// }

<<<<<<< HEAD
///////////////////// movePlayer ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// aufgerufen von XX
function initMovePlayer(paramIdClickedTile, paramClickedTile){
  //Das Template, auf das geklickt wurde
  //var clickedTemplate = AllTemplates[lastPlayerPosition]; - CLIENT(50)
  //Der Kachel sagen, dass sie jetzt einen Spieler hat
  paramClickedTile.setHasPlayer(true);
  //Spielerbild zuweisen
  //clickedTemplate.src = players[currentPlayerNumber].src; - CLIENT(50)
  io.sockets.emit('50', {position: lastPlayerPosition, source: null, difficultyValue: null, playersValue: currentPlayerNumber});
  
  //Der alten Kachel sagen, dass sie keinen Spieler mehr hat
  AllTiles[currentPlayerPosition].setHasPlayer(false);
  //Das Spieler-Symbol der alten Kachel durch Template ersetzen
  // AllTemplates[currentPlayerPosition].src = "Bilddaten/Spielfeld/temp.png"; - CLIENT(50)
  io.sockets.emit('50', {position: currentplayerPosition, source: "Bilddaten/Spielfeld/temp.png", difficultyValue: null, playersValue: null});

  // Position merken, auf die der Spieler gesprungen ist, damit diese bei der nächsten Bewegung wieder auf Template
  // gesetzt werden kann.
  currentPlayerPosition = lastPlayerPosition;

  //Bewegungspunkte abziehen, falls es sich nicht um ein Monster handelt
  if(clickedTile.getHasMonsters() == false) { currentMovementPoints = currentMovementPoints - (AllTiles[currentPlayerPosition].getTerrainDifficulty()+1); } //"+1" weil die Zählung bei 0 beginnt
  //Dem aktuellen Spieler die Bewegungspunkte abziehen
  AllPlayers[currentPlayerNumber].setPlayerMovementPoints(currentMovementPoints);
  //Dem aktuellen Spieler die neue Position zuweisen, auf die geklickt wurde
  AllPlayers[currentPlayerNumber].setPlayerPosition(currentPlayerPosition);
  
}
=======
// function movePlayer(lastPlayerPosition, clickedTile) {

//   moveSound();
//   //Das Template, auf das geklickt wurde
//   var clickedTemplate = AllTemplates[lastPlayerPosition];
//   //Der Kachel sagen, dass sie jetzt einen Spieler hat
//   clickedTile.setHasPlayer(true);
//   //Spielerbild zuweisen
//   clickedTemplate.src = players[currentPlayerNumber].src;
//   //Der alten Kachel sagen, dass sie keinen Spieler mehr hat
//   AllTiles[currentPlayerPosition].setHasPlayer(false);
//   //Das Spieler-Symbol der alten Kachel durch Template ersetzen
//   AllTemplates[currentPlayerPosition].src = "Bilddaten/Spielfeld/temp.png";
  
//   // Position merken, auf die der Spieler gesprungen ist, damit diese bei der nächsten Bewegung wieder auf Template
//   // gesetzt werden kann.
//   currentPlayerPosition = lastPlayerPosition;

//   //Bewegungspunkte abziehen, falls es sich nicht um ein Monster handelt
//   if(clickedTile.getHasMonsters() == false) { currentMovementPoints = currentMovementPoints - (AllTiles[currentPlayerPosition].getTerrainDifficulty()+1); } //"+1" weil die Zählung bei 0 beginnt
//   //Dem aktuellen Spieler die Bewegungspunkte abziehen
//   AllPlayers[currentPlayerNumber].setPlayerMovementPoints(currentMovementPoints);
//   //Dem aktuellen Spieler die neue Position zuweisen, auf die geklickt wurde
//   AllPlayers[currentPlayerNumber].setPlayerPosition(currentPlayerPosition);
  
//   document.getElementById("movementPoints").innerHTML = currentMovementPoints; //TESTZWECKE
//   //Die Bewegungspunkte-Anzeige aktualisieren
//   $("#move").html(""+AllPlayers[currentPlayerNumber].getPlayerMovementPoints()); 

//   //neuen MovementRange nach Bewegung anzeigen
//   showMovementRange();
        
        
// }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

///////////////////// END movePlayer ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


// function bewegeRahmen() {

//   var index2 = this.id-amountTiles-1;
  
//   if(document.getElementById(zwischenSpeicherRahmen).src = terrainsAktuell[AllTiles[zwischenSpeicherRahmen].getTerrainDifficulty()].src)
//   {
//     document.getElementById(zwischenSpeicherRahmen).src = AllTiles[zwischenSpeicherRahmen].getTerrain().src;
//   }
  
//   //letzten Rahmen wieder zurücksetzen
//   document.getElementById(index2).src = terrainsAktuell[AllTiles[index2].getTerrainDifficulty()].src;
//   //Id ist die index2 Nummer der gesamten Bilder im Dokument
//   zwischenSpeicherRahmen= index2; 
//   //speichern des aktuellen Rahmens für Änderung bei Neuaufruf


// }

// //Betrag, um den geheilt wird
// var healPower;
// function healPlayer() {

//   //aktueller Spieler
//   currentPlayer = AllPlayers[currentPlayerNumber];
//   //Leben des aktuellen Spielers
//   currentLife = currentPlayer.getPlayerLife();
//   //Maximales Leben des aktueller Spielers
//   currentLifeMax = currentPlayer.getPlayerLifeMax();
//   //HealingPoints des Spielers
//   currentHealPoints = currentPlayer.getPlayerHealPoints();

//   //Heilbetrag
//   healPower = 2 + Math.floor(Math.random()*3);
  
//   //Falls Spieler noch über Healpoints verfügt
//   if(currentHealPoints > 0 && currentLife != currentLifeMax) {

//     //Falls maximales Leben größer als Lebenspunkte nach Heilung
//     if(currentLifeMax > (currentLife+healPower)) {

//       //Leben des Spielers erhöhen
//       currentPlayer.setPlayerLife(currentLife+healPower);

//     }

//     //Heilung heilt den Spieler voll, aber nicht über maximales Leben
//     else {

//       //Leben auf Maximum setzen
//       currentPlayer.setPlayerLife(currentLifeMax);
      

//     }

//     //HealingPoints abziehen
//     currentPlayer.setPlayerHealPoints(currentHealPoints-1);
//   }

//   else { alert("no heal points left or already healed!")}

<<<<<<< HEAD
  //Änderung sichtbar machen
updateCharSheet();
=======
//   //Änderung sichtbar machen
//   updateCharSheet();
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// }






























// /////////////////////
// // CHARSHEET FUNCTIONS //
// /////////////////////


<<<<<<< HEAD
function lvl(){
  document.getElementById('lvl').style.display = 'block';
}
=======
// function lvl(){
//     document.getElementById('lvl').style.display = 'block';
// }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// //html-Text
// function update(attribute) {

//   stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();

<<<<<<< HEAD
  //Falls attribute einen geraden Wert hat (= linke Zahl)
  //Somit levelt nur der Angriff hoch, nicht der Schaden
  /*  if(attribute % 2 == 0 || attribute == 0) {*/
=======
//   //Falls attribute einen geraden Wert hat (= linke Zahl)
//   //Somit levelt nur der Angriff hoch, nicht der Schaden
// /*  if(attribute % 2 == 0 || attribute == 0) {*/
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     h = attribute;
//     hh = "." + attribute;
//     $(hh).html(stats[attribute]);

//     if (h != 19 && h != 18 && h > 7) {

<<<<<<< HEAD
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
=======
//       hhh = "." + h + "0";
//       $(hhh).html(stats[attribute]);
//     }
// }

// function statsGet(hate){
  
//   stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();
//   return stats[hate];
// }

// function statsSet(hate, hater){
    
//     stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();
//     return stats[hate] = hater;
// }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

// /*function statsIncrement(hate){

//  stats[hate] = stats[hate]+1;

// }*/


// function statsIncrement(hate) {

// //Array des aktuellen Players holen
// stats = AllPlayers[currentPlayerNumber].getPlayerStatsArray();

<<<<<<< HEAD
if(stats[18] > 0 || stats[19] > 0) {
=======
//   if(stats[18] > 0 || stats[19] > 0) {
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     //Falls bei primary skills geklickt wurde
//     if (hate < 8) {

<<<<<<< HEAD
      if (stats[18] > 0) {
=======
//         if (stats[18] > 0) {
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//             //Falls es sich um eine gerade Zahl handelt (= linker Wert)
//             if (hate % 2 == 0 || hate == 7) {

//               //Einen Punkt abziehen
//               stats[18] = stats[18] - 1;
//               //neuen Wert darstellen
//               update(18);

<<<<<<< HEAD
            }
=======
//            }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//           //Wert auch im Array erhöhen
//           i = stats[hate]+1;
//           stats[hate] = i;

//           if(stats[18] == 0 && stats[19] == 0) {updateStats(stats); $("#lvl").css("visibility", "hidden"); blockAction();}

<<<<<<< HEAD
        }
      }
=======
//         }
//     }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     //Es wurde bei secondary skills geklickt und hierfür noch Punkte übrig sind
//     else if (stats[19] > 0) {

<<<<<<< HEAD
      //Falls es sich um eine gerade Zahl handelt (=linker Wert)
      if (hate % 2 != 0) {
=======
//       //Falls es sich um eine gerade Zahl handelt (=linker Wert)
//         if (hate % 2 != 0) {
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//           //Einen Punkt abziehen
//           stats[19] = stats[19] - 1;
//           //neuen Wert darstellen
//           update(19);

<<<<<<< HEAD
        }
=======
//       }
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//       //Wert auch im Array erhöhen
//       i = stats[hate]+1;
//       stats[hate] = i;

//       if(stats[18] == 0 && stats[19] == 0) {updateStats(stats); $("#lvl").css("visibility", "hidden"); blockAction();}

//     }
//   } 
// } 



























// /////////////////////
// // FIGHT FUNCTIONS //
// /////////////////////

// //Für den PhaseFrame
// var x;

// //Variablen für den Kampf

// var check_ab = 0;
// var count3 = 0;

// //DEFENSE, ATTACK, BOOST, STRIKE
// var dmin; 
// var dmax; 
// var amin; 
// var amax; 

// var abmin;
// var abmax;
// var esmin;
// var esmax;


// //CHAR STATS
// var me_attack_c;
// var me_dmg_c;

// var r_attack_c;
// var r_dmg_c; 

// var ma_attack_c; 
// var ma_dmg_c;

// var l_min_c; 
// var l_max_c;

// //MONSTER STATS
// var me_attack_m=8;
// var me_dmg_m=1;

// var r_attack_m=11;
// var r_dmg_m=3;

// var ma_attack_m=10;
// var ma_dmg_m=2;

// var l_min_m=10;
// var l_max_m=10;

// var exp = 50;


// function writeStats()
// { 

<<<<<<< HEAD
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
=======
//   //Werte eintragen
//   $("#me_attack_c").html( me_attack_c);
//   $("#me_dmg_c").html( me_dmg_c);
    
//   $("#r_attack_c").html( r_attack_c);
//   $("#r_dmg_c").html( r_dmg_c);
    
//   $("#ma_attack_c").html( ma_attack_c);
//   $("#ma_dmg_c").html( ma_dmg_c);
    
//   $("#l_min_c").html( l_min_c);
//   $("#l_max_c").html( l_max_c);
    
//   $("#me_attack_m").html( me_attack_m);
//   $("#me_dmg_m").html( me_dmg_m);
    
//   $("#r_attack_m").html( r_attack_m);
//   $("#r_dmg_m").html( r_dmg_m);
    
//   $("#ma_attack_m").html( ma_attack_m);
//   $("#ma_dmg_m").html( ma_dmg_m);
    
//   $("#l_min_m").html( l_min_m);
//   $("#l_max_m").html( l_max_m);
    
//   $("#dmin").html( dmin);
//   $("#dmax").html( dmax);
//   $("#amin").html( amin);
//   $("#amax").html( amax);
//   $("#abmin").html( abmin);
//   $("#abmax").html( abmax);
//   $("#esmin").html( esmin);
//   $("#esmax").html( esmax);
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//   $("#phaseFrame").css("left", 480+"px");
//   x = 480;

// }



// function check(status)
// {
//   if(count3==0)
//   {
//     attackboost="me_attack_c";
    
//     attack_c=me_attack_c;
//     dmg_c=me_dmg_c;
    
//     attack_m=me_attack_m;
//     dmg_m=me_dmg_m;
//   }
//   else if(count3==1)
//   { 
//     attackboost="r_attack_c";
    
//     attack_c=r_attack_c;
//     dmg_c=r_dmg_c;
    
//     attack_m=r_attack_m;
//     dmg_m=r_dmg_m;
//   }
//   else if(count3==2)
//   { 
//     attackboost="ma_attack_c";
    
//     attack_c=ma_attack_c;
//     dmg_c=ma_dmg_c;
    
//     attack_m=ma_attack_m;
//     dmg_m=ma_dmg_m;
//   }
  
//   if(status=="defence")
//   {
//     blockSound();
//     if(dmin>0)
//     {
//       dmin=dmin-1;
//       document.getElementById("dmin").innerHTML = dmin;
//       fight(status);
//     } 
//   }
//   if(status=="attack")
//   {
//     swordDrawSound();
//     if(amin>0)
//     {
//       amin=amin-1;
//       document.getElementById("amin").innerHTML = amin;
//       fight(status);
//     }
//   }
//   if(status=="attackBoost")
//   {
//     if(abmin>0)
//     {
//       abmin=abmin-1;
//       AllPlayers[currentPlayerNumber].setPlayerBoost(abmin);
//       document.getElementById("abmin").innerHTML = abmin;
//       if(count3==0)
//       {
//         if(check_ab==0)
//         {
//           zw = me_attack_c;
//         }
//         attackboost="me_attack_c";
//         me_attack_c=me_attack_c+1;
//         attack_c=me_attack_c;
//       }
//       else if(count3==1)
//       {
//         if(check_ab==0)
//         {
//           zw = r_attack_c;
//         }
//         attackboost="r_attack_c";
//         r_attack_c=r_attack_c+1;
//         attack_c=r_attack_c;
//       }
//       else if(count3==2)
//       {
//         if(check_ab==0)
//         {
//           zw = ma_attack_c;
//         }
//         attackboost="ma_attack_c";
//         ma_attack_c=ma_attack_c+1;
//         attack_c=ma_attack_c;
//       }
//       check_ab=1;
//       document.getElementById(attackboost).innerHTML = attack_c;
      
//     }
//   }
//   if(status=="extraStrike")
//   {
//     if(esmin!=0)
//     {
//       esmin=esmin-1;
//       AllPlayers[currentPlayerNumber].setPlayerBoost(esmin);
//       document.getElementById("esmin").innerHTML = esmin;
//       amin=amin+1;
//       document.getElementById("amin").innerHTML = amin;
//     }
//   }
  
  
//   if(count3==3)
//   {
//     showFightAnimation("NEXT ROUND");
//     count3=0;
//     dmin=dmax;
//     amin=amax;
//     document.getElementById("dmin").innerHTML = dmin;
//     document.getElementById("amin").innerHTML = amin;
//   }

// }
// function fight(status)
// {
//   wuerfel= Math.floor(Math.random() * 12 + 1);

//   //Falls der AttackWurf nicht ausreicht, um das Monster zu treffen
//   if(wuerfel+attack_c<attack_m)
//   {
//     l_min_c=l_min_c - dmg_m;
//     AllPlayers[currentPlayerNumber].setPlayerLife(l_min_c);
//     document.getElementById("l_min_c").innerHTML = l_min_c;
//     setTimeout(function(){$(".c").toggleClass("ca");},1000);
//     $(".c").toggleClass("ca");

//     //auditives Feedback
//     gotHitSound();
    
//   }

//   //Falls doch und man gerade angreift und nicht verteidigt...
//   else if(status=="attack")
//   {

//     l_min_m=l_min_m - dmg_c;
//     /*$("#l_min_m").text = l_min_m;*/
//     document.getElementById("l_min_m").innerHTML = l_min_m;
//     setTimeout(function(){$(".m").toggleClass("ma");},1000);
//     $(".m").toggleClass("ma");

//     //auditives+visuelles Feedback
//     batGotHitSound();
//     showFightAnimation("HIT");
//   }
  
//   if(check_ab==1)
//   {
//     document.getElementById(attackboost).innerHTML = zw;
//     check_ab=0;
//   }

//   count3=count3+1;
  
//   //Bewege PhaseFrame

<<<<<<< HEAD
  x = x + 60;
  if(x == 660) { x = 480 };
  $("#phaseFrame").css("left", x+"px");
  /*  document.getElementById("rahmen").style.left = x + "%";*/

  if(l_min_c<=0)
  {

    dieSound();
    showFightAnimation("!! LOST !!");
    updateCharSheet();
=======
//   x = x + 60;
//   if(x == 660) { x = 480 };
//   $("#phaseFrame").css("left", x+"px");
// /*  document.getElementById("rahmen").style.left = x + "%";*/

//   if(l_min_c<=0)
//   {
    
//     dieSound();
//     showFightAnimation("!! LOST !!");
//     updateCharSheet();
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3

//     l_min_m=l_max_m;
//     count3 = 0;

//     $(".rightFight").animate({width:'toggle'}, 2500, "easeOutExpo");
//     $(".leftFight").animate({width:'toggle'}, 2500, "easeOutExpo");
//     setTimeout(function(){$("#fight").css("visibility", "hidden"); $("#phaseFrame").css("visibility", "hidden");}, 2500);

//     //Falls der Spieler verliert, Status zurücksetzen
//     reincarnatePlayer();

//   }

//   else if(l_min_m<=0)
//   {

//     showFightAnimation("!! WIN !!");
//     updateCharSheet();
//     setTimeout(function(){showFightAnimation("GAINED "+exp+" EXP")}, 1000);

//     l_min_m=l_max_m;
//     count3 = 0;

//     $(".rightFight").animate({width:'toggle'}, 2500, "easeOutExpo");
//     $(".leftFight").animate({width:'toggle'}, 2500, "easeOutExpo");
//     setTimeout(function(){$("#fight").css("visibility", "hidden"); $("#phaseFrame").css("visibility", "hidden");}, 2500);

//     //Falls der Spieler gewonnen hat, wird Spielfigur bewegt
//     //Die Variablen sind global definiert und ändern sich mit Aufruf der Funktion checkClickedTile
//     //(Also bei jedem Klick für eine Bewegung)
//     movePlayer(idClickedTile, clickedTile);
//     //Animation zeigen bei Sieg
//     showFieldWinAnimation(clickedTile);
//     //Dem Spieler die erhaltenen EXP gutschreiben
//     setTimeout(function(){EXPGain(exp);}, 2500);
//     //Der Kachel sagen, dass sie nun kein Monster mehr hat
//     clickedTile.setHasMonsters(false);

<<<<<<< HEAD
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
=======
//   }
// }
// function pressed(name){
// var id = "#img_" + name;
// var src = "Bilddaten/Kampf/"+name + "_pressed.png"; 
// $(id).attr("src", src);

// }
// function released(name){
// var id = "#img_" + name;
// var src = "Bilddaten/Kampf/"+name + ".png";
// $(id).attr("src", src);
// }




































// ////////////
// // SOUNDS //
// ////////////


// function moveSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/Crack.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 

// }

// function wooshSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/whooosh.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 

// }

// function StabSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/SwordStab.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 

// }

// function swooshSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/Swoosh.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 

// }

// /*function monsterGrowlSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/MonsterGrowl.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 

// }*/

// function clickSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/ButtonClick1.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }

// function swordSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/SwordStrike.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }

// function chainSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/ChainSound.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }

// function gotHitSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/PlayerGotHit.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }

// function dieSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/PlayerDies.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }

// function winSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/EpicWin.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }

// function swordDrawSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/SwordDrawShort.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }

// function blockSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/Block2.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }

// function batGotHitSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/BatIsHit.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }

// function metalClashSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/MetalClash6.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }

// function choralSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/Choral1.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }

// function lvlUpSound() {

//     var audio = document.createElement("audio");
//     audio.src = "Sounds/LvlUp3.mp3";

//     audio.CurrentTime=0;
//     audio.play(); 
// }


// function monsterGrowlSound() {

//     var audio = preloadSound("Sounds/MonsterGrowl.mp3");
//     audio.CurrentTime=0;
//     audio.play(); 

// }


// function preloadSound(src) {
//     var sound = document.createElement("audio");
//     sound.autoPlay = false;
//     sound.src = src;
//     document.body.appendChild(sound);
//     return sound;
// }



  














// $(document).ready(function(){

//   var allButtonsMonsterDifficulty = $(".buttons_Monster_Difficulty");

//     allButtonsMonsterDifficulty.mouseenter(function() {

//       switch(this.id) {

//         case "easyButton":

//           $(this).css({"backgroundPosition": "-240px 0px"});
//           break;

//         case "moderateButton":

//           $(this).css({"backgroundPosition": "-240px -50px"});
//           break;

//         case "strongButton":

//           $(this).css({"backgroundPosition": "-240px -100px"});
//           break;

//         case "insaneButton":

//           $(this).css({"backgroundPosition": "-240px -150px"});
//           break;

//         default: alert("blubb");

//       }

//     });

//     allButtonsMonsterDifficulty.mouseleave(function() {

//       switch(this.id) {

//         case "easyButton":

//           $(this).css({"backgroundPosition": "0px 0px"});
//           break;

//         case "moderateButton":

//           $(this).css({"backgroundPosition": "0px -50px"});
//           break;

//         case "strongButton":

//           $(this).css({"backgroundPosition": "0px -100px"});
//           break;

//         case "insaneButton":

//           $(this).css({"backgroundPosition": "0px -150px"});
//           break;

//         default: alert("blubb");

//       }
      
//     });

//     allButtonsMonsterDifficulty.click(function() {
//       startFight();
//       clixxx(2000);
//     });
// })
>>>>>>> 8aff4cca73adc5bbd28ec46f1593055b019f3de3
