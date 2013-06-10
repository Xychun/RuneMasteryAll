////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// ALL FUNCTIONS ARE FOR RENDERING ONLY ///////////////////////////////////////////////////////
/////////////////////////////////////////////////////// OTHER FUNCTIONS ARE SPECIFIC TO NODE ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GLOBALE DATENFELDER

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


//TemplateIMG Array
var AllTemplatesIMG = new Array();

// // Monster Bilder
// var monster = new Array();

// monster[0] = new Image(); monster[0].src = "Monster7.png";
// monster[1] = new Image(); monster[1].src = "Monster7.png";
// monster[2] = new Image(); monster[2].src = "Monster7.png";
// monster[3] = new Image(); monster[3].src = "Monster7.png";


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

// //Monster Icon
// var MonsterSRC = new Image(); MonsterSRC.src = "Monster1.png";
var TempSRC = new Image(); TempSRC.src = "Bilddaten/Spielfeld/temp.png";


///////////////////////////////////
// Methods for Initializing Game //
///////////////////////////////////

function setFieldParas1(newReihenAnzahl) {

  //Falls die Angabe 16 Reihen übersteigt
  if(newReihenAnzahl > 16) {
    document.getElementById ("warning1").innerHTML = "o_O Du spinnst doch. Ich setz das mal auf 16.";
    document.getElementById ("warning1").style.color = "red";
    document.getElementById ("reihenAnzahl").value = "16";
    // amountFieldColumns = 16; - NODE(35)
    clixxx(35, {amountFieldColumns: 16});
  }

  else {

      //Falls die Angabe nicht durch 2 teilbar ist
      if(newReihenAnzahl % 2 == 0) {

        document.getElementById ("warning1").innerHTML = "Ne ungerade Zahl is schöner. Ich pass das mal an.";
        document.getElementById ("warning1").style.color = "red";
        document.getElementById ("reihenAnzahl").value = newReihenAnzahl-1;
        //Die ", 10" im parseInt stehen für das Zahlensystem. Könnte sonst Probleme geben, wenn JS das Oktalsystem nimmt statt das Dezimalsystem
        // amountFieldColumns = parseInt(newReihenAnzahl-1, 10); - NODE(35)
        help = parseInt(newReihenAnzahl-1, 10);
        if (help < 1){
          help = 1;
        }
        clixxx(35, {amountFieldColumns: help});

      }

      else{
        document.getElementById ("warning1").innerHTML = newReihenAnzahl+" Reihen. Viel Spaß";
        document.getElementById ("warning1").style.color = "green";
        // amountFieldColumns = parseInt(newReihenAnzahl, 10); - NODE(35)
        help2 = parseInt(newReihenAnzahl, 10);
        clixxx(35, {amountFieldColumns: help});
      }
    }
  }

  function setFieldParas3(newReihenLänge) {

    if(newReihenLänge > 24) {

      document.getElementById ("warning3").innerHTML = "Nope...";
      document.getElementById ("warning3").style.color = "red";
      document.getElementById ("reihenLänge").value = "24";
    // columnLength = 24; - NODE(36)
    clixxx(36, {columnLength: 24});
  }

  else {

    document.getElementById ("warning3").innerHTML = "Reihenlänge von "+newReihenLänge;
    document.getElementById ("warning3").style.color = "green";
    // columnLength = parseInt(newReihenLänge,10); - NODE(36)
    help = parseInt(newReihenLänge,10);
    clixxx(36, {columnLength: help});
  }

}

function setFieldParas2(newMonsterAnzahl) {
  if(newMonsterAnzahl > 100) {

    document.getElementById ("warning2").innerHTML = "Lebensmüde? 100 reichen auch...";
    document.getElementById ("warning2").style.color = "red";
    document.getElementById ("monsterAnzahl").value = "100";
    // amountMonsters = 100; - NODE(37)
    clixxx(37, {amountMonsters: 100});
  }

  else {

    document.getElementById ("warning2").innerHTML = newMonsterAnzahl+" Monster. Viel Glück";
    document.getElementById ("warning2").style.color = "green";
    // amountMonsters = parseInt(newMonsterAnzahl,10); - NODE(37)
    help = parseInt(newMonsterAnzahl,10);
    clixxx(37, {amountMonsters: help});
  }

}

function startGame(anonym) {
  setTimeout(function() {showMovementPhaseAnimation(); }, anonym.a);
}

function showMovementPhaseAnimation(param) {    
  var timeShowMovePhaseAnim = 0;
  // changePlayer(currentPlayerNumber); - NODE(38)
  // resetMovementRange(); - NODE(38)
  clixxx(38);  

  for(i=0; i <= 5; i++) {

    timeShowMovePhaseAnim += 100;

    setTimeout(function(j) {

      return function() {

        var movementMarker = document.createElement("div");
        movementMarker.innerHTML = "PLAYER "+param.pCurrentPlayerNumber+" - YOUR TURN!";
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
  // setTimeout(function() { showMovementRange(); }, 3600); - NODE(39)
  setTimeout(function() { clixxx(39); }, 3600);

} 

function startFightRoutine(index, clickedTile) {
  showMonsterChooser();
}

function movePlayer(param) {

  moveSound();
  
  document.getElementById("movementPoints").innerHTML = param.pCurrentMovementPoints; //TESTZWECKE
  //Die Bewegungspunkte-Anzeige aktualisieren
  $("#move").html(""+pCurrentMovementPoints); 

  //neuen MovementRange nach Bewegung anzeigen
  showMovementRange();
}



//Funktion, die schrittweise die Kacheln sichtbar macht
//SOLL KACHELN "NUR" HINZUFÜGEN

function addTiles(param) {
  //xCounter und yCounter bezeichnen die absoluten Positionen der Elemente
  var xCounter = 0;
  var yCounter = 0;
  //Das Element, zu dem die Kacheln hinzugefügt werden
  var field = document.getElementById("field");

  // Schleife, die schrittweise alle Kacheln erzeugt

  var evenColumn = true;
  var currentTileSum = param.c-1;

  for(i=0; i <=param.d; i++) {

    //Fügt das Geländebild hinzu, dass im Array an entsprechender Stelle steht
    tileIMG = terrains[param.a[i]].cloneNode(true);
    tileIMG.id = i;
    tileIMG.className = "tiles";
    tileIMG.style.position="absolute";
    // Setzt die Position der jeweiligen Kachel. "+px" ist nötig, damit der Befehl syntaktisch richtig ausgeführt wird
    tileIMG.style.left = xCounter+"px";
    tileIMG.style.top = yCounter+"px";
    // fügt die Kachel dem Feld hinzu
    field.appendChild(tileIMG); 
    // Macht die Kacheln zunächst unsichtbar, damit sie später per Random-Funktion sichtbar gemacht werden können
    tileIMG.style.visibility = "hidden";

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
          currentTileSum = currentTileSum+(param.c-1);

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
          currentTileSum = currentTileSum+param.c;

        }

      }

    }
  }

//Funktion, die schrittweise die Kacheln sichtbar macht
var timeShowTiles = 7
function showTiles(param) {
  for (var i = 0; i <= param.d; i++) {

    timeShowTiles += 7;

    setTimeout(function(j) {

      return function() {

        document.getElementById(param.b[j]).style.visibility = "visible";
        /*              if(j%10 == 0) {moveSound();}*/

      }

    }(i), timeShowTiles);
  }
  timeShowTiles = 0;
}

function addTemplates(param) {
  var xCounter = 0;
  var yCounter = 0;
  var field = document.getElementById("field");

  var evenColumn = true;
  var currentTileSum = param.a-1;

  for(i=0; i<=param.b; i++) {

    templateIMG = new Image(); templateIMG.src = "Bilddaten/Spielfeld/temp.png";
    templateIMG.id = param.b+1+i;
    templateIMG.className = "templateIMGs";
    templateIMG.style.position="absolute";
    templateIMG.style.left = xCounter+"px";
    templateIMG.style.top = yCounter+"px";
    field.appendChild(templateIMG); 

    //TO-DO NODE 
    /*
    templateIMG.onclick = checkClickedTile;
    templateIMG.onmouseover = bewegeRahmen;*/

    AllTemplatesIMG[i] = templateIMG;


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
          currentTileSum = currentTileSum+(param.a-1);

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
          currentTileSum = currentTileSum+param.a;

        }

      }
    }

  }

function changeTemplate(param){

  //io.sockets.emit('50', {position: tile.getID(), source: "Bilddaten/Spielfeld/temp.png", difficultyValue: null, playersValue: null});
  if(param.difficultyValue == null && param.playersValue == null){
    AllTemplatesIMG[param.position] = param.source;
  }
  else if (param.source == null && param.playersValue == null){
    AllTemplatesIMG[param.position] = terrainsDifficulties[param.difficultyValue].src;
  } 
  else if(param.source == null && param.difficultyValue == null){
    AllTemplatesIMG[param.position] = players[param.playersValue].src;
  }
  else{
    alert('Problem: DefaultCase - changeTemplate()');
  }
}

function showGameStartAnimation () {    
  var timeShowGameStartAnim = 100;

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

function clickSound() {

  var audio = document.createElement("audio");
  audio.src = "Sounds/ButtonClick1.mp3";

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


/*function monsterGrowlSound() {

    var audio = document.createElement("audio");
    audio.src = "Sounds/MonsterGrowl.mp3";

    audio.CurrentTime=0;
    audio.play(); 

  }*/



////// NOCH ÜBERPRÜFEN - NODE




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
    clixxx(2000);
  });
})