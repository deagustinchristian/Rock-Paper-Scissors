const buttons = document.querySelectorAll('.game-btn');
const choices = ["rock", "paper", "scissors"];
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

let score = 0;
let userChoice = undefined;

/**
 * below function works, checked in dev tools, when i press on one button it logs
 */
buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        checkWinner();
    });
});

function checkWinner() {
    const computerChoice = pickRandomChoice();

    if (userChoice === computerChoice) {
        // draw
    } else if (
        (userChoice === 'paper' && computerChoice === 'rock')
        ||
        (userChoice === 'rock' && computerChoice === 'scissors') 
        ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        //user wins
        updatePlayerScore(1);
    } else {
        //user lost
        updateComputerScore(1);
    }
}

function updateScore(value) {
    playerScore += value;
    playerScore.innerText = score;
}
/**
 * below function works, tried in dev tools and computer choices are working
 */
function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

