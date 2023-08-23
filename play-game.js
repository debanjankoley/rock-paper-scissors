// get user input and store it
// write a function that randomly returns rock, paper or scissors
// write a function that plays the game and returns the result
// write a function that plays the game for 5 rounds, keeps score and return results

let computerSelection 
let winnerDeclaration

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        computerSelection = "rock";
    } else if (randomNumber == 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors"
    }
}

function playRound(e) {
    let playerSelection = e.target.classList[0];

    if (playerSelection == "rock" && computerSelection == "scissors") {
        winnerDeclaration = "You Win! rock beats scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winnerDeclaration = "You Win! paper beats rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winnerDeclaration = "You Win! scissors beats paper";
    } else if (playerSelection === computerSelection) {
        winnerDeclaration = "It's Draw";
    } else {
        winnerDeclaration = "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    
    console.log(winnerDeclaration);
}

const button = document.querySelectorAll("button");
button.forEach(choice => choice.addEventListener("click", getComputerChoice));
button.forEach(choice => choice.addEventListener("click", playRound));





/* 
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        playRound();
        if (winnerDeclaration.charAt(4) === "W") {
            playerScore += 1;
        } else if (winnerDeclaration.charAt(4) === "L") {
            computerScore += 1;
        }
    }
    if (playerScore < computerScore) {
        console.log("YOU LOSE. SCORE > " + playerScore.toString() + " : " + computerScore.toString())
    } else if (playerScore > computerScore) {
        console.log("YOU WIN. SCORE > " + playerScore.toString() + " : " + computerScore.toString())
    } else {
        console.log("DRAW. SCORE > " + playerScore.toString() + " : " + computerScore.toString())
    }
} */