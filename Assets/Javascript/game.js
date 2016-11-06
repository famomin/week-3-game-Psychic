var winCount = 0;			      //counting wins
var lossCount = 0;				//counting losses
var guessCounter = 10;			//guessesLeft
var letterToGuess;            //computer's letter
var lettersGuessed = [];		//Guesses so far
var letters = ["a", "b", "c", "d", "e", "f", "f", "g",
					"h", "i", "j", "k", "l", "m", "n", "o",
					"p", "q", "r", "s", "t", "u", "v", "w",
					"x", "y", "z" ]; 



//random computerGuess only when game is refreshed
var letterIndex = Math.floor(Math.random()*letters.length);
letterToGuess = letters[letterIndex];
console.log(letterToGuess);

//fucntion to reset guess counter and the 
function initializegame() {
   guessCounter = 10;
   lettersGuessed = [];
   letterIndex = Math.floor(Math.random()*letters.length);
   letterToGuess = letters[letterIndex];
   console.log(letterToGuess);
}

document.onkeyup = function(event){
   	
   //Getting user input when they let the key go.
   var letterPressed = String.fromCharCode(event.keyCode).toLowerCase();
   letterPressed=letterPressed.toLowerCase();

   // decreasing the number of guesses left.
   guessCounter--;

   //push the user guesses to the empty User guess array.
   lettersGuessed.push(letterPressed);

   //checking if user Won or loss
   if(letterPressed === letterToGuess) {
      winCount++;
      initializegame();

   } 
   else if (guessCounter===0) {
   	lossCount++;
      initializegame();
   }

   document.querySelector("#userWins").innerHTML = winCount;
   document.querySelector("#userLosses").innerHTML = lossCount;
   document.querySelector("#userGuess").innerHTML = guessCounter;
   document.querySelector("#guessesSoFar").innerHTML = lettersGuessed.join(", ");

}