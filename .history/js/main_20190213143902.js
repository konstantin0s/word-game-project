function say_hi() {
  var name = document.getElementById("name").value;
  var html = "<b>" + name + "</b> ";
 document.getElementById("output").innerHTML = html;
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
  var modalContent = document.getElementsByClassName("modal-content");
  modalContent.style.visibility = "hidden";
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
"toothbrush", "bounce", "brightwork", "verkrampte", "protectrix", "nudibranch", "grandchild", "newfangled", "flugelhorn", "mythologer"
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
   var corWrong = document.getElementById("corWrong");
  var randomIndex;
  var newText;
  var score = 0;
  var lives = 5;
  var seconds = 5;


  function flashLogo() {
    var interval = window.setInterval(function(){
      if(svgLogo.display !== "hidden"){
        svgLogo.style.visibility = "hidden";
    
      }else{
        svgLogo.style.visibility = "hidden";
      }
  }, 1000);  
  }

  function checkLife() {
    if (lives == 0) {
      createCustomAlert(); // game over
      document.body.style.backgroundImage = "url('img/gameover.jpg')";
      score = 0;
      addScore.textContent = "0"
      resetInput();
      lives = 5;
      freshLives.innerHTML = lives;
    }
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
 
  var flag;
  function compareGuess() {
    var searchWord = document.getElementById("inputWord").value;
    var wordName = document.getElementById("wordsDisplay");
    flag = false;          
         if (searchWord == wordName.innerHTML) {
          corWrong.innerHTML = "Correct!!!"
          wordName.style.height = "40px";
           wordName.style.backgroundColor = "yellow";
           score++;
           addScore.textContent = score;
           flag = true;
           if (score >= 10 && score <= 11) {
            var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
            audio.play();
             lives++
             freshLives.innerHTML = lives;
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
          
         if (flag == false) {
          lives--;
          freshLives.innerHTML = lives;
          corWrong.innerHTML = "Wrong!!!"
          resetInput();
         }  
         checkLife();
      }
    
      function timer() {
        setInterval(function(){
          seconds--;
          timeLeft.innerHTML = seconds;
          if (seconds == 0 && !flag) {
            lives--;
          }
           if(seconds == 0) {
            freshLives.innerHTML = lives;
            seconds = 5;
            timeLeft.innerHTML = seconds;
            checkLife();
            flag = false
           } 
      }, 1000);
      }
      

 function resetInput() {
  document.getElementById("inputWord").value = "";
  // corWrong.innerHTML = "";
  }


  function init() {
    wordGeneratorLevel1();
    lives = 5;
    freshLives.innerHTML = lives;
   }
   

 window.onload = init;


 var ALERT_TITLE = "Game Over!\n Restart?";
var ALERT_BUTTON_TEXT = "Ok";

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

    document.body.style.backgroundImage = "url('img/drop.jpg')";
}
function ful(){
alert('Game Over!!!');
}