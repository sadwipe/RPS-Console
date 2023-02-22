const everyChoice = ["rock", "paper", "scissors"];
const startButton = document.querySelector(".startButton"); // "Start" first button.
const container = document.querySelector(".container"); // the content that appears after the "Start" button is pressed.
const playerImage = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");
const choices = document.querySelectorAll(".choice"); // the buttons.
const score = document.querySelector("#section");
const conclusion = document.querySelector(".conclusion");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const finalResult = document.querySelector(".final-result");
const finalScore = document.querySelector("p");
const winner = document.querySelector(".winner");
const playAgain = document.querySelector(".playagain");

let pScore = 0; // player points.
let cScore = 0; // computer points.
let playerChoice = "";
let computerChoice = "";

function startGame() {
  // for start button.
  startButton.addEventListener("click", () => {
    startButton.classList.add("fadeOut");
    container.classList.remove("fadeOut");
    container.style.cssText = "transition: .5s ease";
  });
}

function updateScore(player, computer) {
  playerScore.textContent = player;
  computerScore.textContent = computer;
}

function checkWinner(a, b) {
  // verifies the winner and calls the function updateScore.
  if (
    (a == "rock" && b == "paper") ||
    (a == "paper" && b == "scissors") ||
    (a == "scissors" && b == "rock")
  ) {
    cScore++;
    conclusion.textContent = "Computer won!";
    conclusion.style.cssText = "color: red;";
    updateScore(pScore, cScore);
  } else if (a == b) {
    conclusion.textContent = "It's a tie!";
    conclusion.style.cssText = "color: white;";
  } else {
    pScore++;
    conclusion.textContent = "You won!";
    conclusion.style.cssText = "color: green;";
    updateScore(pScore, cScore);
  }
}

function displayImage(a, b) {
    playerImage.src = `./images/${a}.png`;
    computerImage.src = `./images/${b}.png`;
}

function determineWinner(a, b) {
    if(a == 5 || b == 5) {
        container.classList.add("fadeOut");
        container.style.cssText = "transition: 0;";
        if(a > b) {
            winner.textContent = `Player won the game!`;
        } else {
            winner.textContent = `Computer won the game!`;
        }
        finalScore.textContent = `Final Score: ${a}-${b}`;
        finalResult.classList.remove("fadeOut");
        finalResult.style.cssText = "transition: .5s ease";
        playAgain.classList.remove("fadeOut");
    }
}

const game = () => {
  startGame();

  choices.forEach(choice => choice.addEventListener('click', () => { //gets user & computer choice
    playerChoice = choice.getAttribute("value");
    computerChoice = everyChoice[Math.floor(Math.random() * 3)];
    playerImage.classList.remove("fadeOut");
    computerImage.classList.remove("fadeOut");
    displayImage(playerChoice, computerChoice);
    checkWinner(playerChoice, computerChoice); // plays the game and updates score.
    determineWinner(pScore, cScore);
    }));
};

game();
