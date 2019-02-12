// var customerName = prompt("Please enter your name", "");
// if (customerName!= null) {
//     document.getElementById("user").value = customerName;
// }


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

//   (function() {
//     setInterval(function(){
//       generate();
//     }, 5000);
//     timer();
// }());
function cancelLevel1() { 
  if (score == 10) {
    break;
  }
  return;
}
 
  var wordGeneratorLevel1 = function() {
    setInterval(function(){
      generate();
    }, 5000);
    timer();
  }

  function wordGeneratorLevel2() {
    setInterval(function(){
      generateLevel2() 
    }, 5000);
    timer();
}

// if (score == 10) {
//   wordGeneratorLevel2();
// }
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

  var randomDiv = document.getElementById("wordsDisplay");
  var addScore = document.getElementById("score");
  var freshLives = document.getElementById("lives");
  var timeLeft = document.getElementById("timeLeft");
  var randomIndex;
  var newText;
  var score = 0;
  var lives = 3;
  var seconds = 5;

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
            wordGeneratorLevel2();
            // init = null;
             clearInterval(timer);
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
    (function() {
      setInterval(function(){
        generate();
      }, 5000);
      timer();
  }());
  
   }
   

 window.onload = init;
 

 //level 2?
//  if (score > 10) {
//   wordGeneratorLevel2();
//   }