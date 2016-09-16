var randomNumber = 0;
var guessCount = 0;

$(document).ready(function() {

	newGame();
	
	// Display information modal box
  	$(".what").click(function() {
    	$(".overlay").fadeIn(1000);
  	});

  	// Hide information modal box
  	$("a.close").click(function() {
  		$(".overlay").fadeOut(1000);
  	});

 	$(".new").click(function() {
  		newGame();
  		emptyGuesses();
  		resetGuessCount();
  		resetFeedback();
	});

	$("#guessButton").click(function(event) {
		// Prevents page refresh
		event.preventDefault();

		var input = $("#userGuess").val();
		$("#userGuess").val("");
		$("#userGuess").focus();

		$("#guessList").append("<li>" + input + "</li>");

		increaseGuessCount();
		verifyNumber(randomNumber, input);
	});

});

function newGame() {
	randomNumber = Math.floor((Math.random() * 100) + 1);
 	console.log("randomNumber: " + randomNumber);	
}

function emptyGuesses() {
	$("#guessList").empty();
}

function increaseGuessCount() {
	guessCount++;
	$("#count").text(guessCount);
	console.log("guessCount: " + guessCount);
}

function resetGuessCount() {
	$("#count").text(guessCount = 0);
}

function verifyNumber(randomNumber, input) {
	var difference = Math.abs(randomNumber - input);
	console.log("difference: " + difference);

	if (difference === 0) {
		$("#feedback").text("You Win!!!");
	} else if (difference <= 10) {
		$("#feedback").text("Very hot!");
	} else if (difference <= 20) {
		$("#feedback").text("Hot");
	} else if (difference <= 30) {
		$("#feedback").text("Warm");
	} else if (difference <= 50) {
		$("#feedback").text("Cold");
	} else {
		$("#feedback").text("Ice cold");
	}
}

function resetFeedback() {
	$("#feedback").text("Make your Guess!");
}
