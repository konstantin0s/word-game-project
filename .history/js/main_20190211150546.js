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
  

  // setInterval(function(){

  //   }, 5000);
 

  var words = [
    "clever", "amongst", "implementing", "intelectual", "sensual", "amazing", "beautify", "project", "jackhammer",
   "brightwork", "verkrampte", "protectrix", "nudibranch", "grandchild", "newfangled", "flugelhorn", "mythologer",
   "pluperfect", "jellygraph", "quickthorn", "rottweiler", "technician", "cowpuncher", "middlebrow",
   "jackhammer", "triphthong", "wunderkind", "dazzlement", "jabberwock", "witchcraft","pawnbroker", "thumbprint", "motorcycle"
     ];

  var randomP = document.getElementById("shoWords");

  function generate() {
    randomIndex = Math.ceil((Math.random() * words.length - 1));
    newText = words[randomIndex];
    randomP.innerHTML = newText;
  }


    setInterval(function(){
      generate();
    }, 10000);


    var randomDiv = document.getElementById("wordsDisplay");
    var wordName = randomDiv.getElementsByTagName("p");

    //search for match
    function search() {
      var flag = false;
      searchWord = document.getElementById("addWord").value;
      console.log(searchWord);
      wordName = document.getElementsByTagName("p").textContent;
      console.log(wordName);
      
      for (var i = 0; i < wordName.length; i++) {
          if (searchWord === wordName[i].innerText) {
          
            wordName[i].style.backgroundColor = "yellow";
              flag = true;
          } else {
            wordName[i].style.backgroundColor = "";
          }
      }
      // if(flag == false) {
      //     alert("Game Over");
      // }
  }

  search();