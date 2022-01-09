const options = document.querySelectorAll('.game-btn');


let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
    option.addEventListener("click", function () {
        let gameArea = document.querySelector(".game-area");
            if (gameArea.classList.contains("results-shown")){ /** Before it was possible to press result button, this code prevents that */
                return;
            }
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
	let gameResult = "";
	console.log('xx')

    /**
     * This checks if its a tie
     */
    if (playerInput === computerInput) {
		gameResult = "TIE!";
		flashResults(gameResult, playerInput, computerInput);
		return;
    }
    /**
     * if player chooses Rock
     */
    if (playerInput === "Rock") {
        if (computerInput === "Scissors") {
			gameResult = "You Win!";
            playerScore++;
        } else {
			gameResult = "Computer Wins!";
            computerScore++;
        }
    }
    /**
     * if player chooses Paper
     */
    else if (playerInput === "Paper") {
        if (computerInput === "Rock") {
			gameResult = "You Win!";
            playerScore++;
        } else {
			gameResult = "Computer Wins!";
            computerScore++;
        }
    }
    /**
     * if player chooses Scissors
     */
    else if (playerInput === "Scissors") {
        if (computerInput === "Paper") {
			gameResult = "You Win!";
            playerScore++;
        } else {
			gameResult = "Computer Wins!";
            computerScore++;
        }
    }
	
	flashResults(gameResult, playerInput, computerInput);
}

/**
 * 
 */
function flashResults(gameResult, playerInput, computerInput) {
	console.log(gameResult, playerInput,computerInput);
	let resultText = document.querySelector(".result-text");
	let gameArea = document.querySelector(".game-area");
	let player = document.querySelector('.game-btn[value="'+playerInput+'"]');
	let computer = document.querySelector('.game-btn[value="'+computerInput+'"]');
	
	gameArea.classList.add('results-shown');
	player.classList.add('player');
	computer.classList.add('computer');
	
	resultText.innerHTML = gameResult;
	
	window.setTimeout(function(){
		gameArea.classList.remove('results-shown');
		player.classList.remove('player');
		computer.classList.remove('computer');
	}, 2000);
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
                ? "Congratulations! You Won the match!"
                : "Computer wins the match!";
                
                let resultText = document.querySelector(".result-text");
                let gameArea = document.querySelector(".game-area");
                
                gameArea.classList.add('results-shown');
                resultText.innerHTML = winner;
        return true;
    }   
    return false;
}

const rule = document.querySelector(".rules-btn");
const ruleStyles = document.querySelector(".rule-styles");
rule.addEventListener("click", function () {
    ruleStyles.classList.add("rules-shown");
    window.setTimeout(function(){
        ruleStyles.classList.remove('rules-shown');
    }, 3000);
});
