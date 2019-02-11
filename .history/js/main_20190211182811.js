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

 
  function init() {
    wordGenerator();
  
    if (wordGenerator) {
       timer();
    } 
 
 }
 
 window.onload = init;

function wordGenerator() {
  setInterval(function(){
    generate();
  }, 5000);
}

  var words = [
    "clever", "amongst", "implementing", "intelectual", "sensual", "amazing", "beautify", "project", "jackhammer",
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
  var seconds = 4;

function timer() {
  setInterval(function(){
    seconds--;
    timeLeft.innerHTML = seconds;
  //  console.log(seconds);
}, 1000);
}

  function generate() {
   randomIndex = Math.ceil((Math.random() * words.length - 1));
   newText = words[randomIndex];
   randomDiv.innerHTML = newText;
  }

// console.log(newText)
  function compareGuess() {
    var flag = false;
    var searchWord = document.getElementById("inputWord").value;
    // console.log(searchWord);
    var wordName = document.getElementById("wordsDisplay");
    // console.log(wordName);
     
    //  for (var i = 0; i < wordName.length; i++) {
      //  console.log(wordName);
         if (searchWord == wordName.innerHTML) {
          wordName.style.height = "40px";
           wordName.style.backgroundColor = "yellow";
           score++;
          //  console.log(score);
           addScore.textContent = score;
          //  console.log(addScore);

           setInterval(function(){
            wordName.style.backgroundColor = "";
          }, 1500);
          resetInput();
             flag = true;
         } else {
           wordName.style.backgroundColor = "";
         }
          
         if(flag == false) {
          // alert("Game Over");
          lives--;
          freshLives.innerHTML = lives;
          console.log(lives)
          // score--;
          // addScore.textContent = score;
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
