// get user input and store it
// write a function that randomly returns rock, paper or scissors
// write a function that plays the game and returns the result
// write a function that plays the game for 5 rounds, keeps score and return results

let userInput = prompt("Enter rock/paper/scissors");
let playerSelection = userInput.toUpperCase();
let computerChoice

function computerSelection() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        computerChoice = "ROCK";
    } else if (randomNumber == 2) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSOR"
    }
    return console.log(computerChoice);

}