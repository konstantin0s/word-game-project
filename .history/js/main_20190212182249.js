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
  var newText;
  var score = 0;
  var lives = 3;
  var seconds = 5;


  function flashLogo() {
    var interval = window.setInterval(function(){
      if(svgLogo.display !== 'hidden'){
        svgLogo.style.visibility = 'hidden';
    
      }else{
        svgLogo.style.visibility = 'hidden';
      }
  }, 1000);  
  }

  function checkLife() {
    if (lives == 0) {
      alert("Game Over");
      score = 0;
      addScore.textContent = "0"
      resetInput();
      lives = 3;
      freshLives.innerHTML = lives;
    }
  }

function timer() {
  setInterval(function(){
    seconds--;
    timeLeft.innerHTML = seconds;
    if (seconds == 0) {
      lives--;
      freshLives.innerHTML = lives;
      seconds = 5;
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
 
  //  wordGeneratorLevel1();

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
          resetInput();
      } if (lives == 0) {
        alert("Game Over");
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