let chooseRounds = document.getElementById('rounds');
let player_score = document.getElementById('player_score');
let comp_score = document.getElementById('comp_score');
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
let player = 0;
let computer = 0;

let winnerScore = () => {
    player += 1;
    // computer ? computer -= 1 : 0;
}

let loserScore = () => {
    // player ? player -= 1 : 0;
    computer++;
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
            return "Same choice Try Again"
        } else if (player === choice[0] && comp === choice[1]) {
            loserScore()
            return "Paper wrap Rock"
        } else if (player === choice[0] && comp === choice[2]) {
            winnerScore()
            return "Rock beats Scissors"
        } else if (player === choice[1] && comp === choice[0]) {
            winnerScore()
            return "Paper wrap Rock"
        } else if (player === choice[1] && comp === choice[2]) {
            loserScore()
            return "Scissors cut Paper"
        } else if (player === choice[2] && comp === choice[0]) {
            loserScore()
            return "Rock beats Scissors"
        } else if (player === choice[2] && comp === choice[1]) {
            winnerScore()
            return "Scissors cut Paper"
        }

    }
    let final = playRound(playerSelection, computerSelection)
    console.log(computerSelection)
    player_score.textContent = player;
    comp_score.textContent = computer;
    finalScore.textContent = player > computer ? `WINNER` : player === computer ? `TIE` : `LOSER`;
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
    // console.log(`Your score is ${player}`)
    // console.log(`Computer score is ${computer}`)
