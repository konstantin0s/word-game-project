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

// document.getElementById('say').addEventListener('click', say_hi);

// {
//   var name = prompt ('Your name','');
//   if (name != null) {
//     document.write("<CENTER><FONT FACE=ARIAdL,VERDANA COLOR="+" SIZE=5>Welcome To Word Game, "+name+".</FONT><HR NOSHADE WIDTH=450></CENTER><P>")
//   } else {
//     document.write("<CENTER><FONT FACE=ARIAdL,VERDANA COLOR="+" SIZE=5>Welcome, Guest "+name+".</FONT><HR NOSHADE WIDTH=450></CENTER><P>")
//   }
  
//   }

  //words array


  //random function
  // function newWord() {
  //   var randomNum = Math.floor(Math.random() * words.length);
  //   document.getElementById('wordsDisplay').innerHTML = words[randomNum];
  //   console.log(randomNum);
  // }


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


  function flashLogo() {
    var interval = window.setInterval(function(){
      if(svgLogo.display == 'hidden'){
        svgLogo.style.visibility = 'visible';
      }else{
        svgLogo.style.visibility = 'hidden';
      }
  }, 1000); //the 1000 here is milliseconds and determines how often the interval should be run.
  }

var timer = function() {
  setInterval(function(){
    seconds--;
    timeLeft.innerHTML = seconds;
    if (seconds == 0) {
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

   var mySound = new buzz.sound( "../sounds/0283.ogg", {
    formats: [ "ogg", "mp3", "aac" ]
});
mySound.play().fadeIn().loop();

// mySound.play()
//      .fadeIn()
//      .loop()
//      .bind("timeupdate", function() {
//         var timer = buzz.toTimer(this.getTime());
//         document.getElementById("timer").innerHTML = timer;
//      });

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
 

 //level 2?
//  if (score > 10) {
//   wordGeneratorLevel2();
//   }