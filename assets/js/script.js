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

    if (playerInput === "Rock") {
        if (computerInput === "Scissors") {
            alert(`${currentGame} = You Win!`);
        } else {
            alert(`${currentGame} = Computer Wins!`);
        }
    }

    else if (playerInput === "Paper") {
        if (computerInput === "Rock") {
            alert(`${currentGame} = You Win!`);
        } else {
            alert(`${currentGame} = Computer Wins!`);
        }
    }

    else if (playerInput === "Scissors") {
        if (computerInput === "Paper") {
            alert(`${currentGame} = You Win!`);
        } else {
            alert(`${currentGame} = Computer Wins!`)
        }
    }
}