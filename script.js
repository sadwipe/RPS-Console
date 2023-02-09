const button = document.querySelector(".play");
const CHOICES = ["rock", "paper", "scissors"];
const defaultMessage = "Choose between rock, paper and scissors!";
const wrongMessage = "You misspelled a word, try again!";
let playerPoints = 0, computerPoints = 0, ties = 0;

function getComputerChoice() {
    return (CHOICES[Math.floor(Math.random() * 3)]);
}

function getPlayerChoice() {
    let playerChoice = prompt(defaultMessage);
    if(playerChoice == null || playerChoice == "") {
        let playerChoice = prompt(defaultMessage);
    }
    playerChoice = playerChoice.toLowerCase();
    let check = validateInput(playerChoice);
    if(check) {
        return playerChoice;
    } else {
        while(!check) {
            alert(wrongMessage);
            playerChoice = prompt(defaultMessage);
            check = validateInput(playerChoice);
        }
        return playerChoice;
    }
}

function validateInput(input) {
    return CHOICES.includes(input);
}

function playRound(player, computer) { // plays a round
    console.log(`You choosed: ${player}`);
    console.log(`Computer choosed: ${computer}`);
    if (player == "rock" && computer == "scissors" || 
    player == "paper" && computer == "rock" || 
    player == "scissors" && computer == "paper") {
        console.log("You won!");
        console.log("----------------------")
        playerPoints++;
    } else if (player == computer) {
        console.log("It's a tie!");
        console.log("----------------------")
        ties++;
    } else {
        console.log("Computer won!");
        console.log("----------------------")
        computerPoints++;
    }
}

function game() { // plays the game 5 times and displays the score.
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
    console.log('********** SCORE **********')
    console.log(`Player: ${playerPoints}`);
    console.log(`Computer: ${computerPoints}`);
    console.log(`Ties: ${ties}`);
    playerPoints = 0;
    computerPoints = 0;
    ties = 0;
}

button.addEventListener('click', game);