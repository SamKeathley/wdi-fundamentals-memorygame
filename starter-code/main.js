console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

//if (cardOne === cardThree) {
//	alert("You found a match!");
//} else if (cardTwo === cardFour) {
//	alert("You found a match!");
//} else if (cardOne === cardTwo && cardThree === cardFour) {
//	alert("Sorry, try again.");
//} 
function createCards(){
	var board = document.getElementById('game-board');
	for (var i = 0; i < 4; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		board.appendChild(card);
	}
}
createCards();