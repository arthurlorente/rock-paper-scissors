let scoreComputer = 0
let scorePlayer = 0

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

function playRound(playerSelection, computerSelection) {
    for (roundNumber = 0; roundNumber < 5; roundNumber++) {
        if playerSelection == "rock" && computerSelection == rock {
            console.log("Round number ${roundNumber} was a tie! Computer Score: ${scoreComputer}. Player Score: $(scorePlayer")
        }
    }
}