const button = document.querySelector(".play"); // button that starts the game.
button.addEventListener('click', game);

const CHOICES = ["rock", "paper", "scissors"]; // every possible choice.
let playerPoints = 0, computerPoints = 0, ties = 0;

function getComputerChoice() { // gets a random choice from array.
    return CHOICES[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() { // returns player choice.
    let playerChoice = prompt("Choose between rock, paper or scissors!");
    while (playerChoice == null || playerChoice == "") {
        playerChoice = prompt("Choose between rock, paper or scissors!");
    }
    playerChoice = playerChoice.toLowerCase();
    if (verifyInput(playerChoice)) {
        return playerChoice;
    }
}

function verifyInput(input) { // verifies the input, if wrong it invokes getPlayerChoice.
    if (input == "rock" || input == "paper" || input   == "scissors") {
        return true;
    } else {
        alert("You misspelled a word, try again!");
        getPlayerChoice();
    }
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