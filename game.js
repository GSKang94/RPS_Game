let chooseRounds = document.getElementById('input_rounds');
let playerScore = document.getElementById('player_score');
let compScore = document.getElementById('comp_score');
let finalScore = document.getElementById('final_score');

let rockBtn = document.getElementById('rock_btn');
let paperBtn = document.getElementById('paper_btn');
let scissorsBtn = document.getElementById('scissors_btn');


let choice = ['rock', 'paper', 'scissors'];
let playerSelection;

rockBtn.onclick = () => {
    playerSelection = choice[0]
    game()
}
paperBtn.onclick = () => {
    playerSelection = choice[1]
    game()
}
scissorsBtn.onclick = () => {
    playerSelection = choice[2]
    game()
}

// Store Scores
let pScore = 0;
let cScore = 0;

function game() {

    // check user selected rounds
    if (chooseRounds.value > 1) {

        // Pick random choice
        function computerPlay() {
            return choice[Math.floor(Math.random() * 3)];
        }

        // Assign random choice to computer
        let computerSelection = computerPlay();

        function playRound(player, comp) {
            if (player === comp) {
                return "Same choice Try Again"
            } else if (player === choice[0] && comp === choice[1]) {
                cScore++;
                return "Paper wrap Rock"
            } else if (player === choice[0] && comp === choice[2]) {
                pScore++;
                return "Rock beats Scissors"
            } else if (player === choice[1] && comp === choice[0]) {
                pScore++;
                return "Paper wrap Rock"
            } else if (player === choice[1] && comp === choice[2]) {
                cScore++;
                return "Scissors cut Paper"
            } else if (player === choice[2] && comp === choice[0]) {
                cScore++;
                return "Rock beats Scissors"
            } else if (player === choice[2] && comp === choice[1]) {
                pScore++;
                return "Scissors cut Paper"
            }

        }
        let result = playRound(playerSelection, computerSelection)
        chooseRounds.value--;

        playerScore.textContent = pScore;
        compScore.textContent = cScore;

        // console.log(typeof (chooseRounds.value))
        console.log(computerSelection)
        console.log(result)
    } else if (chooseRounds.value == 1) {
        chooseRounds.value--;
        return finalScore.textContent = pScore > cScore ? `WINNER` : pScore === cScore ? `TIE` : `LOSER`;
    }
}

// chooseRounds.addEventListener("keydown", function (e) {
//     if (e.code === 'Enter') {
//         chooseRounds.classList.add('fadeOut');
//         scissorsBtn.classList.add('incSize');
//         rockBtn.classList.add('incSize');
//         paperBtn.classList.add('incSize')
//     }
// })



// Player enter no. of game rounds
// chooseRounds.addEventListener("keydown", function (e) {
//     if (e.code === 'Enter')
//         for (let i = 1; i <= chooseRounds.value; i++) {
//             give time to update and render
//             setTimeout(game, 100);
//             clearTimeout()
//         }
// })


        // Ask user to choose
        // let playerSelection = prompt("Rock , Paper , Scissor ?").toLowerCase();




// let winnerScore = () => {
//     player++;
//     computer ? computer -= 1 : 0;
// }

// let loserScore = () => {
//     player ? player -= 1 : 0;
//     computer++;
// }


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
