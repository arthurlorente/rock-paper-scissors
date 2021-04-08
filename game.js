//function to determine the computer's move each round//

function computerPlay() {
    let computerRandomizer = Math.random()*3;
    let computerChoice

    if (computerRandomizer <= 1) {
        computerChoice = "Rock";
    }
    else if (computerRandomizer > 1 && <= 2) {
        computerChoice = "Paper";
    }
    else if (computerRandomizer > 2 && <= 3) {
        computerChoice = "Scissors";
    }

    return computerChoice
}