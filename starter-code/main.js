console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

if (cardOne === cardThree) {
	alert("You found a match!");
} else if (cardTwo === cardFour) {
	alert("You found a match!");
} else if (cardOne === cardTwo && cardThree === cardFour) {
	alert("Sorry, try again.");
} 