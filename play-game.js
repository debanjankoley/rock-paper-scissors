let computerSelection 
let winnerDeclaration
let playerScore = 0
let computerScore = 0

function getComputerChoice(e) {
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
    
    text.textContent = winnerDeclaration;

    if (winnerDeclaration.charAt(4) === "W") {
        playerScore += 1;
    } else if (winnerDeclaration.charAt(4) === "L"){
        computerScore += 1;
    };
    
    scoreForPlayer.textContent  = "Player Score : " + playerScore;
    scoreForComputer.textContent = "Computer Score : " + computerScore;
    
    if (playerScore === 5) {
        console.log(this)
        finalResult.textContent = "Game Over! You Win";
        controller.abort()
    } else if (computerScore === 5 ) {
        finalResult.textContent = "Game Over! Computer Wins";
        controller.abort()
    };

}

const button = document.querySelectorAll("button");
const text = document.querySelector(".text");
const scoreForPlayer = document.querySelector(".player-score");
const scoreForComputer = document.querySelector(".computer-score");
const finalResult = document.querySelector(".final-result");

const controller = new AbortController()

button.forEach(button => button.addEventListener("click", (e)=> {
    getComputerChoice(e);
    playRound(e);
}, { signal: controller.signal }))
