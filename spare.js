const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const playerChoice = document.getElementById('playerChoice')
const computerChoice = document.getElementById('computerChoice')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
const roundResult = document.getElementById('roundResult')

window.addEventListener('DOMContentLoaded', function () {
    rockBtn.addEventListener('click', function choices () {
        let playerChoice = 0;
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    })
    
    paperBtn.addEventListener('click', function choices () {
        let playerChoice = 1;
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    })
    
    scissorsBtn.addEventListener('click', function choices () {
        let playerChoice = 2;
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    })

    restartBtn.disabled = true;

    restartBtn.addEventListener('click', function restartGame() {
        playerWin = 0;
        compWin = 0;
        round = 0;
        restartBtn.disabled = true;
        roundResult.textContent = "The first player to reach 5 points, wins!";
    });
})

let playerWin = 0;
let compWin = 0;
let round = 0;

function getComputerChoice () {
    let computerChoice = [0, 1, 2];
    let thisTurn = Math.floor(Math.random() * computerChoice.length);
    return thisTurn;
}

function nameChoices (choice) {
    switch(choice) {
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

function playRound (player, computer) {
    let playerChoice = nameChoices(player);
    let computerChoice = nameChoices(computer);
    if (playerWin === 5 || compWin === 5) {
        endGame();
    }
    if (player === computer) {
        round++;
        roundResult.textContent = (`Both players have played ${playerChoice}! It is a tie!`);
    }
    else if ((player === 0 && computer === 1)
    || (player === 1 && computer === 2)
    || (player === 2 && computer === 0)) {
        round++;
        compWin++;
        roundResult.textContent = (`${computerChoice} beats ${playerChoice}! Computer Wins!`);
    }
    else if ((computer === 0 && player === 1)
    || (computer === 1 && player === 2)
    || (computer === 2 && player === 0)) {
        round++;
        playerWin++;
        roundResult.textContent = (`${playerChoice} beats ${computerChoice}! You win!`);
    }
}

function endGame() {
    alert(`${round} rounds played and...`)
    if (playerWin === 5 || compWin === 5) {
        if(playerWin > compWin) {
            alert("The game has ended. You WON!!")
        }
        else {
            alert("The game has ended. You lost! :(")
        }
    }
    alert("Please click the restart button on the page to restart a new game.")
    restartBtn.disabled = false;
    return;
}