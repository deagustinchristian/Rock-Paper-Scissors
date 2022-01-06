const options = document.querySelectorAll('.game-btn')
let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
    option.addEventListener("click", function () {
        const playerInput = this.value;
        
        const computerOptions = ["Rock", "Paper", "Scissors"];
        const computerInput = computerOptions[Math.floor(Math.random() * 3)];

        compareInputs(playerInput, computerInput);
        
        updateScore();
        if(checkWinner()){
            playerScore = computerScore = 0;
            updateScore();
        }
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
            playerScore++;
        } else {
            alert(`${currentGame} = Computer Wins!`);
            computerScore++;
        }
    }
    /**
     * if player chooses Paper
     */
    else if (playerInput === "Paper") {
        if (computerInput === "Rock") {
            alert(`${currentGame} = You Win!`);
            playerScore++;
        } else {
            alert(`${currentGame} = Computer Wins!`);
            computerScore++;
        }
    }
    /**
     * if player chooses Scissors
     */
    else if (playerInput === "Scissors") {
        if (computerInput === "Paper") {
            alert(`${currentGame} = You Win!`);
            playerScore++;
        } else {
            alert(`${currentGame} = Computer Wins!`)
            computerScore++;
        }
    }
}

/**
 * Now i want to add the score so either computer or player and set a limit 
 * to maybe first to 5 wins
 */

function updateScore() {
    document.getElementById("player-count").textContent = playerScore;
    document.getElementById("computer-count").textContent = computerScore;
}

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const winner =
            playerScore === 5
                ? "Congratulations! You Won!"
                : "Computer wins! Better luck next time!";
        alert(winner);
        return true;
    }   
    return false;
}

/**
 * all of the above code works
 * player/computer score increments by 1
 * add so that each round shows who choose what and who wins
 * restart button?
 */