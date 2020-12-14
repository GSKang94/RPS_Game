let chooseRounds = document.getElementById('rounds');
let finalScore = document.getElementById('final-score');


// Player enter no. of game rounds
chooseRounds.addEventListener("keydown", function (e) {
    if (e.code === 'Enter')
        for (let i = 1; i <= chooseRounds.value; i++) {
            // give time to update and render
            setTimeout(game, 100);
            clearTimeout()
        }
})

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


function game() {

    let choice = ['rock', 'paper', 'scissors'];

    // Pick random choice
    function computerPlay() {
        return choice[Math.floor(Math.random() * 3)];
    }

    // Assign random choice to computer
    let computerSelection = computerPlay();

    // Ask user to choose
    let playerSelection = prompt("Rock , Paper , Scissor ?").toLowerCase();

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


    finalScore.textContent = `Your score is ${playerScore}
     Computer score is ${computerScore}
     ${final}`;

}


// askUserRounds()






// let askUserRounds = () => {
//     let rounds = parseInt(prompt("How many rounds ?"));
//     for (let i = 1; i <= rounds; i++) {
//         game()
//     }
// }



// console.log(chooseRounds)

// let btn = document.getElementById('btn');

// btn.addEventListener("click", function () {
// console.log(chooseRounds.value.KeyboardEvent.code)
// for (let i = 1; i <= chooseRounds.value; i++) {
//     game()
// }
// })




    // finalScore.textContent = final;

    // console interface
    // console.log(computerSelection)
    // console.log(final)
    // console.log(`Your score is ${playerScore}`)
    // console.log(`Computer score is ${computerScore}`)
