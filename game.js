let input_rounds = document.getElementById('input_rounds');
let playerScore = document.getElementById('player_score');
let compScore = document.getElementById('comp_score');
let comments = document.getElementById('comments');
let finalScore = document.getElementById('final_score');

let rockBtn = document.getElementById('rock_btn');
let paperBtn = document.getElementById('paper_btn');
let scissorsBtn = document.getElementById('scissors_btn');

let reload = document.getElementById('reload');

// reload window for new game
reload.onclick = () => {
    reload.classList.add('rotate');
    setTimeout(() => location.reload(), 1000);
}

// add animation classes
let animate = () => {
    input_rounds.classList.add('fadeOut');
    scissorsBtn.classList.add('handAnime');
    rockBtn.classList.add('handAnime');
    paperBtn.classList.add('handAnime')
}

// Animation if player press enter
input_rounds.addEventListener("keydown", function (e) {
    if (e.key === 'Enter' && input_rounds.value) {
        // hide android keyboard
        this.blur()
        animate()
        setTimeout(() => {
            comments.innerText = `Your turn`
        }, 1000);
        comments.innerText = `Ready`
    }
})

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


function game() {
    // Store Scores
    let pScore = 0;
    let cScore = 0;

    // check user selected rounds
    if (input_rounds.value) {

        // Assign random choice to computer
        let computerSelection = () => {
            return choice[Math.floor(Math.random() * 3)];
        }

        // core logic
        function playRound(player, comp) {

            if (player === comp) {
                let stringToVar = eval(playerSelection + "Btn");
                updateUi(stringToVar)
                return `You both chose ${playerSelection}`

            } else if (player === choice[0] && comp === choice[1]) {
                updateUi(paperBtn)
                cScore++;
                return "Paper wrap Rock"

            } else if (player === choice[0] && comp === choice[2]) {
                updateUi(scissorsBtn)
                pScore++;
                return "Rock beats Scissors"

            } else if (player === choice[1] && comp === choice[0]) {
                updateUi(rockBtn)
                pScore++;
                return "Paper wrap Rock"

            } else if (player === choice[1] && comp === choice[2]) {
                updateUi(scissorsBtn)
                cScore++;
                return "Scissors cut Paper"

            } else if (player === choice[2] && comp === choice[0]) {
                updateUi(rockBtn)
                cScore++;
                return "Rock beats Scissors"

            } else if (player === choice[2] && comp === choice[1]) {
                updateUi(paperBtn)
                pScore++;
                return "Scissors cut Paper"
            }

        }
        // call this function
        let result = playRound(playerSelection, computerSelection())

        // reduce value after every round
        input_rounds.value--;

        // Update value
        setTimeout(() => {
            finalScore.textContent = result
            playerScore.textContent = pScore;
            compScore.textContent = cScore;
        }, 2000);

        //Display final result 
        if (input_rounds.value == 0) {
            finalScore.textContent = result
            setTimeout(() => {
                comments.innerText = null;
                finalScore.textContent = pScore > cScore ? `You Won!` : pScore === cScore ? `TIE` : `You Lose`
                reload.classList.add('vibrate');
                document.getElementById("hands").classList.add("disable-click");
            }, 2000)
        }
    }
}

let updateUi = (arg) => {
    // console.log(typeof arg);
    arg.classList.add('compHand')
    comments.innerText = `Comp turn`
    document.getElementById("hands").classList.add("disable-click");
    setTimeout(() => {
        document.getElementById("hands").classList.remove("disable-click");
        comments.innerText = `Your turn`
        arg.classList.remove('compHand')
    }, 2000);
}
