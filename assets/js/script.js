const options = document.querySelectorAll('.game-btn')
let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
    option.addEventListener("click", function () {
        const playerInput = this.value;
        
        const computerOptions = ["Rock", "Paper", "Scissors"];
        const computerInput = computerOptions[Math.floor(Math.random() * 3)];

        compareInputs(playerInput, computerInput);
        
    });
});