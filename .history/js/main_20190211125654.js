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

  var randomDiv = document.getElementById("shoWords");

  function generate() {
    randomIndex = Math.ceil((Math.random() * words.length - 1));
    newText = words[randomIndex];
    randomDiv.innerHTML = newText;
  }


    setInterval(function(){
      generate();
    }, 10000);


    //search for match
    function search() {
      var flag = false;
      searchWord = document.getElementById("addWord").value;
      console.log(searchWord);
      // wordName = document.getElementsByTagName("h1");
      console.log(randomDiv);
      for (var i = 0; i < randomDiv.length; i++) {
          if (searchWord === randomDiv[i].innerHTML) {
            debugger;
            randomDiv[i].style.backgroundColor = "yellow";
              flag = true;
          } else {
            randomDiv[i].style.backgroundColor = "white";
          }
      }
      // if(flag == false) {
      //     alert("Game Over");
      // }
  }

  search();