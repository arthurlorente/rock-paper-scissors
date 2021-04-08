

//function to determine the computer's move each round//

function computerPlay() {
    let computerRandomizer = Math.random()*3;
    let computerChoice

    if (computerRandomizer <= 1) {
        computerChoice = "rock";
    }
    else if (computerRandomizer > 1 && computerRandomizer <= 2) {
        computerChoice = "paper";
    }
    else if (computerRandomizer > 2 && computerRandomizer <= 3) {
        computerChoice = "scissors";
    }

    return computerChoice
}

//function to determine the player's move each round//

function (playerSelection) {
    let playerChoice = prompt("Rock, paper or scissors?");

    while (playerChoice.toLowerCase() != "rock" || playerChoice.toLowerCase() != "paper" || playerChoice.toLowerCase() != "scissors" {
        playerChoice = prompt("That is not rock, paper or scissors! Choose again.");
    }
    
    return playerChoice;
}

//function to play the five rounds//

function playRound(playerSelection, computerSelection) {
    let scoreComputer = 0;
    let scorePlayer = 0;
    let winMessage = "The Player chose ${playerSelection} and The Computer chose ${computerSelection}. Round number ${roundNumber} was won by You! Yaaay! Computer Score: $(scoreComputer). Player Score: ${scorePlayer}.";
    let drawMessage = "The Player chose ${playerSelection} and The Computer chose ${computerSelection}. Round number ${roundNumber} was a tie! Computer Score: ${scoreComputer}. Player Score: ${scorePlayer}.";
    let loseMessage = "The Player chose ${playerSelection} and The Computer chose ${computerSelection}. Round number ${roundNumber} was won by The Computer! Booo! Computer Score: ${scoreComputer}. Player Score: ${scorePlayer}.";
    function winRound() {
        scorePlayer++;
        console.log(winMessage);   
    }
    function drawRound() {
        console.log(drawMessage);
    }
    function loseRound() {
        scoreComputer++;
        console.log(loseMessage);
    }
    for (roundNumber = 0; roundNumber < 5; roundNumber++) {
        if (playerSelection == "rock" && computerSelection == "rock") {
            drawRound();
        }
        else if (playerSelection == "rock" && computerSelection == "paper") {
            loseRound();
        }
        else if (playerSelection == "rock" && computerSelection == "scissors") {
            winRound();
        }
        else if (playerSelection == "paper" && computerSelection == "rock") {
            winRound();
        }
        else if (playerSelection == "paper" && computerSelection == "paper") {
            drawRound();
        }
        else if (playerSelection == "paper" && computerSelection == "scissors") {
            loseRound();
        }
        else if (playerSelection == "scissors" && computerSelection == "rock") {
            loseRound();
        }
        else if (playerSelection == "scissors" && computerSelection == "paper") {
            winRound();
        }
        else if (playerSelection == "scissors" && computerSelection == "scissors") {
            drawRound();
        }
    }
    if (scorePlayer > scoreComputer) {
        console.log("Congrats! You won this round of 5.");
    }
    else if (scoreComputer > scorePlayer) {
        console.log("Oh no! You lost this round of 5. The computer wins!");
    }
    else {
        console.log("That round of 5 was a draw! Better try again.");
    }
}