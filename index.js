function getComputerChoice () {
    let computerChoice = [0, 1, 2];
    let thisTurn = Math.floor(Math.random() * computerChoice.length);
    return thisTurn;
}

function nameChoice (number) {
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

function playRound (player, computer) {
    let compWin = false;
    let playerWin = false;
    if (player === computer) {
        playerWin = compWin = false //`Both the players have played ${playerHand}! It's a tie`;
    }
    else if ((player === 0 && computer === 1)
    || (player === 1 && computer === 2)
    || (player === 2 && computer === 0)) {
        compWin = true; //`${compHand} beats ${playerHand}. Computer wins!`;
    }
    else {
       playerWin = true; //`${playerHand} beats ${compHand}. Player wins!`;
    }
    return [compWin, playerWin];
}

function game () {
    let playerWinCount = 0;
    let compWinCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = Number(prompt("Rock (0), Paper (1) or Scissors (2)?:"));
        let computerChoice = getComputerChoice();
        const playerHand = nameChoice(playerChoice);
        const compHand = nameChoice(computerChoice);
        let [compWin, playerWin] = playRound(playerChoice, computerChoice);
        console.log(`Player: ${playerHand}; Computer: ${compHand}`);
        if(!playerWin && !compWin) {
            console.log(`Both the players have played ${playerHand}! This round is a tie`);
        }
        else if (compWin) {
           console.log(`${compHand} beats ${playerHand}. Computer wins this round!`);
           compWinCount++;
        }
        else {
            console.log(`${playerHand} beats ${compHand}. Player wins this round!`);
            playerWinCount++;
        }
    }
    if (playerWinCount === compWinCount) {
        console.log(`Player: ${playerWinCount}; Computer: ${compWinCount}
        The game is a tie!`);
    }
    else if (compWinCount > playerWinCount) {
        console.log(`Player: ${playerWinCount}; Computer: ${compWinCount}
        Computer wins the game!`)
    }
    else {
        console.log(`Player: ${playerWinCount}; Computer: ${compWinCount}
        Player wins the game!`)
    }
}

game();
