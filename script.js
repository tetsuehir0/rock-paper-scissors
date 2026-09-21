function getComputerChoice(max) {
    let num = Math.floor(Math.random() * max);
    let computerChoice = 0;
    if (num == 0) {
        computerChoice = "rock";
    } else if (num == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    };
    return computerChoice;
};

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    winner = 0;
    if (humanChoice == computerChoice) {
        console.log("No winner, draw!");
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            winner = "Player";
        } else if (computerChoice == "paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            winner = "Computer";
        };
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            winner = "Player";
        } else if (computerChoice == "rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            winner = "Computer";
        };
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            winner = "Player";
        } else if (computerChoice == "scissors") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            winner = "Computer";
        };
    }
    return winner;
}

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    let i = 0;
    while (i < rounds) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice(3);

        winner = playRound(humanSelection, computerSelection);

        if (winner == "Player") {
            humanScore += 1;
        } else if (winner == "Computer") {
            computerScore += 1;
        };

        i += 1;
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congrats, you won!");
    } else if (humanScore < computerScore) {
        console.log("Too bad, you lost!");
    } else {
        console.log("It's a draw!");
    };
};

console.log(playGame(5));