let humanScore = 0;
let compScore = 0;

const h_choice = document.querySelector("#h-choice");
const c_choice = document.querySelector("#c-choice");
const h_score = document.querySelector("#h-score");
const c_score = document.querySelector("#c-score");
const message = document.querySelector("#message");
const final_result = document.querySelector("#final-result");
const buttons = document.querySelectorAll(".btn-choice")

function getComputerChoice() {
    choices = ["rock", "scissors", "paper"];
    return choices[Math.floor(Math.random() * 3)]
};

function playRound(humanChoice) {
    if (humanScore === 5 || compScore === 5) return;

    let msg = "";
    let compChoice = getComputerChoice();

    h_choice.textContent = humanChoice;
    c_choice.textContent = compChoice;

    if (humanChoice ===  compChoice) {
        msg = "It's a tie!";
    };

    switch (humanChoice) {
        case "rock":
            if (compChoice === "paper"){
                msg = "You lose! Paper beats rock.";
                compScore++;
            } else if (compChoice === "scissors") {
                msg = "You win! Rock beats scissors.";
                humanScore++;
            };
            break;
        
        case "scissors":
            if (compChoice === "paper"){
                msg = "You win! Scissors beats paper.";
                humanScore++;
            } else if (compChoice === "rock") {
                msg = "You lose! Rock beats scissors.";
                compScore++;
            };
            break;

        case "paper":
            if (compChoice === "scissors"){
                msg = "You lose! Scissors beats paper.";
                compScore++;
            } else if (compChoice === "rock") {
                msg = "You win! Paper beats rock.";
                humanScore++;
            };
            break;
    }

    h_score.textContent = humanScore;
    c_score.textContent = compScore;
    message.textContent = msg;

    if (humanScore === 5) {
        final_result.textContent = "Congrats! You beat the computer."
        return;
    } else if (compScore === 5) {
        final_result.textContent = "Too bad! You were beat by the computer."
        return;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => playRound(button.id))
});
