const choices = ['paper', 'rock', 'scissors'];
const buttons = document.querySelectorAll('.game-btn'); /** https://www.w3schools.com/jsref/met_document_queryselector.asp*/
const playerScore = document.getElementsByClassName('.player-count');
const computerScore = document.getElementsByClassName('.computer-count');
const countDown = document.getElementsByClassName('.count-down');

let playerScore = 0;
let computerScore = 0;
let countDown = 0;


/**
 * below function works when i click on the different game buttons, player choices
 */
buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
    })
})

/**
 * below function works when console.log pickrandomchoice, computer choice
 */
function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

/**
 * Need to add functions so that when player wins 1 gets added to player score or vice versa
 * need to add function that after each time player chooses/presse a button 1 is deducted from the
 * count down
 * 
 * function which sums up the score and displays the winner/result
 * 
 * restart option when game is finished
 */