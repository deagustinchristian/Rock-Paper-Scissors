const buttons = document.querySelectorAll('.game-btn');

const choices = ["rock", "paper", "scissors"];

let userChoice = undefined;

/**
 * below function works, checked in dev tools, when i press on one button it shows
 */
buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
    });
});

/**
 * below function works, tried in dev tools and computer choices are working
 */
function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

