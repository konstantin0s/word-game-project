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
  var words = [
    'special',
    'clever',
    'amongst',
    'implementing',
    'intelectual',
    'sensual',
    'amazing',
    'beautify',
    'project',
    'jackhammer',
 'brightwork',
 'verkrampte',
 'protectrix',
 'nudibranch',
 'grandchild',
 'newfangled',
 'flugelhorn',
 'mythologer',
 'pluperfect',
 'jellygraph',
 'quickthorn',
 'rottweiler',
 'technician',
 'cowpuncher',
 'middlebrow',
 'jackhammer',
 'triphthong',
 'wunderkind',
 'dazzlement',
 'jabberwock',
 'witchcraft',
 'pawnbroker',
 'thumbprint',
 'motorcycle'
  ];

  //random function
  function newWord() {
    var randomNum = Math.floor(Math.random() * (words.length));
    document.getElementById('wordsDisplay').innerHTML = words[randomNum];
  }
  

  setInterval(function(){

    }, 5000);
 