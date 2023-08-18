// get user input and store it
// write a function that randomly returns rock, paper or scissors
// write a function that plays the game and returns the result
// write a function that plays the game for 5 rounds, keeps score and return results

let computerSelection 
let winnerDeclaration

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        computerSelection = "ROCK";
    } else if (randomNumber == 2) {
        computerSelection = "PAPER";
    } else {
        computerSelection = "SCISSORS"
    }
}

function playRound() {
    let playerSelection = prompt("Enter rock/paper/scissors").toUpperCase();

    if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        winnerDeclaration = "You Win! ROCK beats SCISSORS";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        winnerDeclaration = "You Win! PAPER beats ROCK";
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        winnerDeclaration = "You Win! SCISSORS beats PAPER";
    } else if (playerSelection === computerSelection) {
        winnerDeclaration = "It's Draw";
    } else if (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS") {
        winnerDeclaration = "CHOICE IS INVALID";
    } else {
        winnerDeclaration = "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    
    console.log(winnerDeclaration);
}

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
}