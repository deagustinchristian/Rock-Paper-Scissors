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

function compareInputs(playerInput, computerInput) {
    const currentGame = `${playerInput} vs ${computerInput}`;

    /**
     * This checks if its a tie
     */
    if (playerInput === computerInput) {
        alert(`${currentGame} is a Tie`);
        return;
    }
    /**
     * if player chooses Rock
     */
    if (playerInput === "Rock") {
        if (computerInput === "Scissors") {
            alert(`${currentGame} = You Win!`);
        } else {
            alert(`${currentGame} = Computer Wins!`);
        }
    }
    /**
     * if player chooses Paper
     */
    else if (playerInput === "Paper") {
        if (computerInput === "Rock") {
            alert(`${currentGame} = You Win!`);
        } else {
            alert(`${currentGame} = Computer Wins!`);
        }
    }
    /**
     * if player chooses Scissors
     */
    else if (playerInput === "Scissors") {
        if (computerInput === "Paper") {
            alert(`${currentGame} = You Win!`);
        } else {
            alert(`${currentGame} = Computer Wins!`)
        }
    }
}

/**
 * Now i want to add the score so either computer or player and set a limit 
 * to maybe first to 5 wins
 */