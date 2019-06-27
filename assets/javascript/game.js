




// Create a small array
var letters = ["a", "b", "c"]
// Create an empty array to hold what the user guesses

// Create a variable that will be randomly assigned one of the three letters

// Set a limit for the user guesses left and assign that to a variable. 

// Create counters for wins and losses and assign them the value of zero

// Create three functions to update guesses, update guesses left, and update guesses so far

var wins = 0;
var losses = 0;
var left = 3;
var guesses = 3;
var guessesSoFar = [];
var psychicLetter;


var newLetter = function() {
    psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
};

  // In the update guesses left function create a code to grab the HTML element and setting it equal to the guesses left.
  // (i.e. guesses left will get displayed in HTML)
  // In the update guesses function we get a random letter-to-guess and assign it based on a random generator (only looking at a, b, or c)
  // In the update guesses-so-far function we take the guesses the user has tried -- then display it as letters separated by commas.


// Call the functions that you created above

var soFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
};

var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};

var newGame = function() {
	guessedLetters = [];
    left = 3;
    newLetter();
    guessesLeft();
    soFar();
}
// Create a reset function will be called when we reset everything
// The reset Function should assign the values of the variables to their original values before the user started to play
// For example, the guesses left variable, the guessed letter empty array ...etc

function myFunction() {
    document.getElementById("wins").reset();
}
function myFunction() {
    document.getElementById("losses").reset();
}
function myFunction() {
    document.getElementById("left").reset();
}
function myFunction() {
    document.getElementById("guesses").reset();
}
// Create a document.onkeydown function that will capture the keyboard clicks.

  // This function should reduce the guesses by one

  // Set the event.key to Lowercase the letter and save it in a variable 

  // Then push the guess to the guessedLetters array

  // Then its going to run the update functions


  // We create an if-statement to check if there's a match.


    // If there is then we win and we'll update the HTML to display the win.

    // Then we'll reset the game

  // If we are out of guesses...

document.onkeyup = function(event) {
	var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();
    if (left > 0) {
        if (userGuess == psychicLetter) {
        	wins++;
        	document.getElementById("wins").innerHTML = "Wins:" + wins;
            newGame();
        }
    } else if (left == 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = "Losses:" + losses;
        newGame();
    }
};