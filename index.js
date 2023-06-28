const roundResult = document.getElementById('roundResult');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const restartBtn = document.getElementById('restartBtn');

if (rockBtn) {
    rockBtn.addEventListener("click", () => {
        let playerChoice = 0;
        let computerChoice = getComputerChoice();
        playGame(playerChoice,computerChoice);
    })
}

if (paperBtn) {
    paperBtn.addEventListener("click", () => {
        let playerChoice = 1;
        let computerChoice = getComputerChoice();
        playGame(playerChoice,computerChoice);
    })
}

if (scissorsBtn) {
    scissorsBtn.addEventListener("click", () => {
        let playerChoice = 2;
        let computerChoice = getComputerChoice();
        playGame(playerChoice,computerChoice);
    })
}

function getComputerChoice () {
    let computerChoice = [0, 1, 2];
    let thisTurn = Math.floor(Math.random() * computerChoice.length);
    return thisTurn;
}

function chooseName (number) {
    switch(number) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Invalid input";
    }
}

function playGame (player, computer) {
    let compWin = false;
    let playerWin = false;
    let compScore = 0;
    let playerScore = 0;
    let playerChoice = chooseName(player);
    let computerChoice = chooseName(computer);
    if (player === computer) {
        playerWin = compWin = false //`Both the players have played ${playerHand}! It's a tie`;
        console.log(`Both the players have played ${playerChoice}! It's a tie`);
    }
    else if ((player === 0 && computer === 1)
    || (player === 1 && computer === 2)
    || (player === 2 && computer === 0)) {
        compWin = true; //`${compHand} beats ${playerHand}. Computer wins!`;
        console.log(`${computerChoice} beats ${playerChoice}. Computer wins!`);
        compScore++;
    }
    else {
       playerWin = true; //`${playerHand} beats ${compHand}. Player wins!`;
       console.log(`${playerChoice} beats ${computerChoice}. Player wins!`);
       playerScore++;
    }

    console.log(`Player: ${playerChoice}; Computer: ${computerChoice}`);
    if(!playerWin && !compWin) {
        console.log(`Both the players have played ${playerChoice}! This round is a tie`);
    }
    else if (compWin) {
       console.log(`${computerChoice} beats ${playerChoice}. Computer wins this round!`);
    }
    else {
        console.log(`${playerChoice} beats ${computerChoice}. Player wins this round!`);
    }
}

function endGame(playerScore, computerScore) {
    if (playerScore === 5 | computerScore === 5) {
        window.alert("This game has ended. Please click on the restart button to start a new game.")
    }
    return;
}