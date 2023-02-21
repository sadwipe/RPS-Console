const COMPUTERCHOICES = ["rock", "paper", "scissors"];
const startButton = document.querySelector(".start");
const preview = document.querySelector(".preview") // front page
const container = document.querySelector(".container"); // page after clicking start
const choices = document.querySelectorAll(".choice"); // player choices (buttons)
const quote = document.querySelector(".quote");
const playerImage = document.querySelector(".player-image");
const computerImage = document.querySelector(".computer-image");
const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score");
const container2 = document.querySelector("#container2");
const results = document.querySelector(".results");

let pScore = 0;
let cScore = 0;

function fadeInSmooth(element) { // used only once, after you press the Start button.
    element.style.cssText = "opacity: 1; pointer-events: all; transition: all 0.5s ease;";
};

function fadeOut(element) { // used for each image.
    preview.style.cssText = "opacity: 0; pointer-events: none;";
};

function fadeIn(element) { // used for each image.
    element.style.cssText = "opacity: 1; pointer-events: all";
};

function checkWinner(a, b) {

    playerImage.src = `./images/${a}.png`;
    computerImage.src = `./images/${b}.png`;
    fadeIn(playerImage);
    fadeIn(computerImage);

    if(a == b) {
        quote.textContent = "It's a tie!";
    } else if(a == "rock" && b == "scissors" || a == "paper" && b == "rock" || a == "scissors" && b == "paper") {
        quote.textContent = "You Won!";
        pScore++;
    } else {
        quote.textContent = "You lost!";
        cScore++;
    }
};

function startGame() {
    startButton.addEventListener('click', () => {
        fadeOut(preview);
        fadeInSmooth(container);
    })
};

function playRound() {
    choices.forEach(choice => choice.addEventListener('click', (e) => {
        let computerChoice = COMPUTERCHOICES[Math.floor(Math.random() * 3)];
        let playerChoice = e.target.value;
        checkWinner(playerChoice, computerChoice);
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }));
};

const game = () => {
    
    startGame();
    playRound();
    endGame();
}


game();