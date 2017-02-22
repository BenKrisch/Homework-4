$(document).ready(function () {

var scoreValue = 0; 
var randoNumbo = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
var redValue = (Math.floor(Math.random() * (12-1+1)+1)); 
var blueValue = (Math.floor(Math.random() * (12-1+1)+1)); 
var yellowValue = (Math.floor(Math.random() * (12-1+1)+1));
var greenValue = (Math.floor(Math.random() * (12-1+1)+1)); 
var wins = 0; 
var losses = 0;
$("#wins").html(wins); 
$("#losses").html(losses);
$("#randomNumber").html(randoNumbo); 

//Resets the game on win or loss
function reset () { 

scoreValue = 0; 
randoNumbo = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
redValue = (Math.floor(Math.random() * (12-1+1)+1)); 
blueValue = (Math.floor(Math.random() * (12-1+1)+1)); 
yellowValue = (Math.floor(Math.random() * (12-1+1)+1));
greenValue = (Math.floor(Math.random() * (12-1+1)+1));
$("#randomNumber").html(randoNumbo);
$("#score").html(scoreValue); 


}

//Adds wins and resets game
function winner () { 

wins++; 
$("#wins").html(wins);
reset();

}; 

//Adds losses and resets game
function loser () { 

losses++;
$("#losses").html(losses);
reset ();

}; 


$("#red").on("click", function() { 

	scoreValue = redValue + scoreValue; 
	$("#score").html(scoreValue); 

	if (scoreValue == randoNumbo) { 

	winner();
} 

else if (scoreValue > randoNumbo) { 

loser();
	
} 
}); 

$("#blue").on("click", function() { 

	scoreValue = blueValue + scoreValue;
	$("#score").html(scoreValue); 

	if (scoreValue == randoNumbo) { 

	winner();
} 

else if (scoreValue > randoNumbo) { 

loser();
	
} 
}); 

$("#yellow").on("click", function() { 

	scoreValue = yellowValue + scoreValue;
	$("#score").html(scoreValue); 

	if (scoreValue == randoNumbo) { 

	winner();
} 

else if (scoreValue > randoNumbo) { 

loser();
	
} 
}); 

$("#green").on("click", function() { 

	scoreValue = greenValue + scoreValue;
	$("#score").html(scoreValue); 

	if (scoreValue == randoNumbo) { 

	winner();
} 

else if (scoreValue > randoNumbo) { 

loser();
	
} 
}); 


});