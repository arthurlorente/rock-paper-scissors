//declaring global variables//

let scoreComputer = 0;
let scorePlayer = 0;

//function to determine the computer's move each round//

function computerPlay() {
    let computerRandomizer = Math.random()*3;
    let computerChoice;

    if (computerRandomizer <= 1) {
        computerChoice = "rock";
    }
    else if (computerRandomizer > 1 && computerRandomizer <= 2) {
        computerChoice = "paper";
    }
    else if (computerRandomizer > 2 && computerRandomizer <= 3) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

//function to determine the player's move each round//

function playerSelection() {
    let playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        playerChoice = prompt("That is not rock, paper or scissors! Choose again.").toLowerCase();
    }
    
    return playerChoice;
}

//function to play the five rounds//

function playRound(playerSelection, computerPlay, roundNumber) {
    function winRound() {
        scorePlayer++;
        console.log(`The Player chose ${playerSelection} and The Computer chose ${computerPlay}. Round number ${roundNumber+1} was won by You! Yaaay! Computer Score: ${scoreComputer}. Player Score: ${scorePlayer}.`);   
    }
    function drawRound() {
        console.log(`The Player chose ${playerSelection} and The Computer chose ${computerPlay}. Round number ${roundNumber+1} was a tie! Computer Score: ${scoreComputer}. Player Score: ${scorePlayer}.`);
    }
    function loseRound() {
        scoreComputer++;
        console.log(`The Player chose ${playerSelection} and The Computer chose ${computerPlay}. Round number ${roundNumber+1} was won by The Computer! Booo! Computer Score: ${scoreComputer}. Player Score: ${scorePlayer}.`);
    }
    if (playerSelection == computerPlay)  {
        drawRound();
    }
    else if ((playerSelection == "rock" && computerPlay == "paper") || (playerSelection == "paper" && computerPlay == "scissors") || (playerSelection == "scissors" && computerPlay == "rock")) {
        loseRound();
    }
    else {
        winRound();
    }
}

//function to run the game//

function game() {

    for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
        let playerChoice = playerSelection();
        let computerChoice = computerPlay();  
        playRound(playerChoice, computerChoice, roundNumber);
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