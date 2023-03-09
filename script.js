function getComputerChoice () {
    let computerChoice = ["rock", "paper", "scissors"];
    let thisTurn = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return thisTurn;
}

function playRound(playerSelection, computerSelection) {
    console.log(`player: ${playerSelection} computer: ${computerSelection}`);
    if (playerSelection === "" || playerSelection === null || playerSelection === undefined) {
        return "The input cannot be empty. It can only contain rock, paper or scissors";
    }
    let result = "";
    if ((playerSelection === "rock" && computerSelection === "rock")
    || (playerSelection === "paper" && computerSelection === "paper")
    || (playerSelection === "scissors" && computerSelection === "scissors")) {
        result = "No winner, it is a tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") 
    || (playerSelection === "scissors" && computerSelection === "rock")
    || (playerSelection === "paper" && computerSelection === "scissors")) {
        result = `${computerSelection} beats ${playerSelection}! Computer wins!`;
    }
    else if ((playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection === "paper")
    || (playerSelection === "rock" && computerSelection === "scissors")) {
        result = `${playerSelection} beats ${computerSelection}! Player wins!`; 
    }
    else {
        return "The input can only contian rock, paper or scissors";
    }
    return result;
}

const playerSelection = (prompt("Enter your choice:").toLowerCase());
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));