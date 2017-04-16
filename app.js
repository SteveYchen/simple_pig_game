/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


										  // + 1 gives the random number 1 to 6.

//document.querySelector('#current-' + activePlayer).textContent = dice;	//set change text on dom
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>' //set html on dom

//var x = document.querySelector('#score-0').textContent; //read value from the dom
//console.log(x);

document.querySelector('.dice').style.display = 'none'; // set dice invisible

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-1').textContent = '0'
document.getElementById('current-0').textContent = '0'


document.querySelector(".btn-roll").addEventListener('click', function(){

	//1. random number
	var dice = Math.floor(Math.random() * 6 + 1); // Math.random() * 6 gives 0 to 6

	//2. Display the result
	var diceDOM = document.querySelector(".dice");
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';


	//3. Update the round scoire IF the rolled number was NOT a 1
	if(dice > 1){
		//add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;	//set change text on dom
	}else{
		//next player

		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //tenary operator
		roundScore = 0;

		//set current score to zero
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		//change the background of the player to point to whomever player who are active
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');		

		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');

		//remove the image of the dice if it is 1
		document.querySelector('.dice').style.display = 'none';
	}


});