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
        winnerDeclaration = "It is a DRAW. Play Again"
    } else {
        winnerDeclaration = "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    return console.log(winnerDeclaration);
}
