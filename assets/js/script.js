const buttons = document.querySelectorAll('.game-btn');
const choices = ["rock", "paper", "scissors"];
const scoreEl = document.getElementById('score');


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
        updateScore(1);
    } else {
        //user lost
        updateScore(-1);
    }
}

function updateScore(value) {
    score += value;
    scoreEl.innerText = score;
}
/**
 * below function works, tried in dev tools and computer choices are working
 */
function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

