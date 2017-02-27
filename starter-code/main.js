console.log("JS file is connected to HTML! Woo!");

// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";

//if (cardOne === cardThree) {
//	alert("You found a match!");
//} else if (cardTwo === cardFour) {
//	alert("You found a match!");
//} else if (cardOne === cardTwo && cardThree === cardFour) {
//	alert("Sorry, try again.");
//} 
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function createCards(cards){
	var board = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		var card = document.createElement('div');
		card.addEventListener('click', isTwoCards);
		card.className = 'card';
		card.setAttribute('data-card', cards[i]);
		board.appendChild(card);
	}
}

function isMatch(arr){
	if (arr[0] === arr[1]){
		alert("Good job, sport.");
	} else {
		alert("Really? No.");
	}

}

function isTwoCards(){
	var dataCard = this.getAttribute('data-card');
	cardsInPlay.push(dataCard);
	if (dataCard === 'king'){
		this.innerHTML = '<img src="King.cat.1.png" alt="King Cat" />';
	} else {
		this.innerHTML = '<img src="queen cat.jpg" alt="Queen Kitty" />';
	}
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
createCards(cards);



