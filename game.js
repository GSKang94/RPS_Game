let result = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return result[Math.floor(Math.random() * 3)];
}

// let askUserRounds = () => prompt("How many rounds ?")
let playerSelection = prompt("Rock , Paper , Scissor ?").toLowerCase();
let computerSelection = computerPlay();

function playRound(player, comp) {
    if (player === comp) {
        return "Try Again"
    } else if (player === result[0] && comp === result[1]) {
        return "You Lose! Paper beats Rock"
    } else if (player === result[0] && comp === result[2]) {
        return "You Win! Rock beats Scissors"
    } else if (player === result[1] && comp === result[0]) {
        return "You Win! Paper beats Rock"
    } else if (player === result[1] && comp === result[2]) {
        return "You Lose! Scissors cut Paper"
    } else if (player === result[2] && comp === result[0]) {
        return "You Lose! Scissors beats Rock"
    } else if (player === result[2] && comp === result[1]) {
        return "You Win! Scissors cut Paper"
    }
}

let final = playRound(playerSelection, computerSelection)

console.log(computerSelection)
console.log(final)


