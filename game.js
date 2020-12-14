let choice = ['rock', 'paper', 'scissors'];

// Pick random choice
function computerPlay() {
    return choice[Math.floor(Math.random() * 3)];
}

// let askUserRounds = () => prompt("How many rounds ?")

// Ask user to choose
let playerSelection = prompt("Rock , Paper , Scissor ?").toLowerCase();

// random choice for computer
let computerSelection = computerPlay();

// Store Scores
let playerScore = 0;
let computerScore = 0;

let winnerScore = () => {
    playerScore += 1;
    computerScore ? computerScore -= 1 : 0;
}

let loserScore = () => {
    playerScore ? playerScore -= 1 : 0;
    computerScore++;
}
// Main game logic
function playRound(player, comp) {
    if (player === comp) {
        return "Try Again"
    } else if (player === choice[0] && comp === choice[1]) {
        loserScore()
        return "You Lose! Paper wrap Rock"
    } else if (player === choice[0] && comp === choice[2]) {
        winnerScore()
        return "You Win! Rock beats Scissors"
    } else if (player === choice[1] && comp === choice[0]) {
        winnerScore()
        return "You Win! Paper wrap Rock"
    } else if (player === choice[1] && comp === choice[2]) {
        loserScore()
        return "You Lose! Scissors cut Paper"
    } else if (player === choice[2] && comp === choice[0]) {
        loserScore()
        return "You Lose! Rock beats Scissors"
    } else if (player === choice[2] && comp === choice[1]) {
        winnerScore()
        return "You Win! Scissors cut Paper"
    }
}

let final = playRound(playerSelection, computerSelection)

console.log(computerSelection)
console.log(final)
console.log(`Your score is ${playerScore}`)
console.log(`Computer score is ${computerScore}`)


