function getComputerChoice () {
    let computerChoice = ["rock", "paper", "scissors"];
    let thisTurn = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return thisTurn;
}