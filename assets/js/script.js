const options = document.querySelectorAll('.game-btn');

let playerScore = 0;
let computerScore = 0;

/**
 * below code has a click event, which means that the players choice is registered when clicked on
 */
options.forEach((option) => {
    option.addEventListener("click", function () {
        let gameArea = document.querySelector(".game-area");
            if (gameArea.classList.contains("results-shown")){ /** Before it was possible to press result buttons, this code prevents that */
                return;
            }
        const playerInput = this.value;
        
        /**
         * Below code makes the computer choose a random option between the three options
         */
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
 * Below code is for the results shown each round, has a timer that can be changed
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
 * below code updates the score and when one has reached 5 points, winner is declared and game restarts
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

/**
 * Below code is for displaying what the Rules button contains, also has timer so auto closes after 3 seconds currently
 */
const rule = document.querySelector(".rules-btn");
const ruleStyles = document.querySelector(".rule-styles");
rule.addEventListener("click", function () {
    ruleStyles.classList.add("rules-shown");
    window.setTimeout(function(){
        ruleStyles.classList.remove('rules-shown');
    }, 3000);
});
