function say_hi() {
  var name = document.getElementById('name').value;
  var html = '<b>' + name + '</b> ';
 document.getElementById('output').innerHTML = html;
}

function clearPlayer() {
  document.getElementById("name").value = "";
  var input = document.getElementById("name");
  input.style.visibility = "hidden";
  var playerN = document.getElementById("playerN");
  playerN.style.visibility = "hidden";
  var clearPlayer = document.getElementById("clearPlayer");
  clearPlayer.style.visibility = "hidden";
  var exampleModalCenter = document.getElementById("exampleModalCenter");
  exampleModalCenter.style.visibility = "none";
}

  (function() {
    setInterval(function(){
      clearPlayer();
    }, 10000);
}());


function cancelLevel1() { 
  if (score == 10) {
  }
  return;
}
 
  var wordGeneratorLevel1 = function() {
    setInterval(function(){
      generate();
    }, 5000);
    timer();
    cancelLevel1();
  }

  function wordGeneratorLevel2() {
    setInterval(function(){
      generateLevel2() 
    }, 5000);
    timer();
}

  var wordsLevel1 = [
    "clever", "amongst", "implementing", "intelectual", "sensual", "amazing", "beautify", "project", "tall",
"curl", "rate", "busy", "unusual", "extend", "exclusive", "ray", "shy", "wasteful", "unbecoming", "fallacious",
"toothbrush", "bounce"
     ];

     var wordsLevel2 = [
      "jackhammer",
     "brightwork", "verkrampte", "protectrix", "nudibranch", "grandchild", "newfangled", "flugelhorn", "mythologer",
     "pluperfect", "jellygraph", "quickthorn", "rottweiler", "technician", "cowpuncher", "middlebrow",
     "jackhammer", "triphthong", "wunderkind", "dazzlement", "jabberwock", "witchcraft","pawnbroker", "thumbprint", "motorcycle"
       ];

       const levels = [3, 5, 7];

  var randomDiv = document.getElementById("wordsDisplay");
  var addScore = document.getElementById("score");
  var freshLives = document.getElementById("lives");
  var timeLeft = document.getElementById("timeLeft");
  var svgLogo = document.getElementById("Layer_1");
   var messagePlayer = document.getElementById("messageP");
  var randomIndex;
  var mySound = document.getElementById("myTune");
  var myMusic;
  var newText;
  var score = 0;
  var lives = 3;
  var seconds = 5;
  var isPlaying = false;


  function flashLogo() {
    var interval = window.setInterval(function(){
      if(svgLogo.display == 'hidden'){
        svgLogo.style.visibility = 'visible';
      }else{
        svgLogo.style.visibility = 'hidden';
      }
  }, 1000); 
  }

var timer = function() {
  setInterval(function(){
    seconds--;
    timeLeft.innerHTML = seconds;
    if (!isPlaying && seconds == 0) {
      seconds = 0;
      timeLeft.innerHTML = seconds;
      createCustomAlert();
    } else {
    isPlaying = true;
    seconds--;
    timeLeft.innerHTML = seconds;
    }
}, 1000);
}

  function generate() {
   randomIndex = Math.ceil((Math.random() * wordsLevel1.length - 1));
   newText = wordsLevel1[randomIndex];
   randomDiv.innerHTML = newText;

  }

  function generateLevel2() {
    randomIndex = Math.ceil((Math.random() * wordsLevel2.length - 1));
    newText = wordsLevel2[randomIndex];
    randomDiv.innerHTML = newText;
   }

   var song;

   function setup() {
     song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
     createCanvas(720, 200);
     background(255,0,0);
   }


function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}

  function compareGuess() {
    var flag = false;
    var searchWord = document.getElementById("inputWord").value;
    var wordName = document.getElementById("wordsDisplay");
          
         if (searchWord == wordName.innerHTML) {
          wordName.style.height = "40px";
           wordName.style.backgroundColor = "yellow";
           score++;
           addScore.textContent = score;
           if (score == 10) {
            sound.play();
            flashLogo();
            messagePlayer.innerHTML = "I'm Outta Here :)";
           }
           clearInterval(timer);
           setInterval(function(){
            wordName.style.backgroundColor = "";
          }, 1500);
          resetInput();
             flag = true;
         } else {
           wordName.style.backgroundColor = "";
         }
          
         if(flag == false) {
          lives--;
          freshLives.innerHTML = lives;
          resetInput();
      } if (lives == 0) {
        alert();
        score = 0;
        addScore.textContent = "0"
        resetInput();
        lives = 3;
        freshLives.innerHTML = lives;
      }
     }
  

 function resetInput() {
  document.getElementById("inputWord").value = "";
  }


  function init() {
    wordGeneratorLevel1();
  
   }
   

 window.onload = init;
 
 function checkStatus() {

 }


 //game Over pop UP
 var ALERT_TITLE = "Game Over!";
var ALERT_BUTTON_TEXT = "Restart";

if(document.getElementById) {
	window.alert = function(txt) {
		createCustomAlert(txt);
	}
}

function createCustomAlert(txt) {
	d = document;

	if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode(ALERT_TITLE));

	msg = alertObj.appendChild(d.createElement("p"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert();return false; }

	alertObj.style.display = "block";
	
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful(){
alert('Alert this pages');
}