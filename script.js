const startButton = document.querySelector(".start");
const preview = document.querySelector(".preview")
const container = document.querySelector(".container");
const choices = document.querySelectorAll(".choice");


startButton.addEventListener('click', () => {
    container.style.cssText = "opacity: 1; pointer-events: all; transition: all 0.5s ease;";
    preview.style.cssText = "opacity: 0; pointer-events: none;";
});

function getPlayerChoice() {
    choices.forEach(element => element.addEventListener('click', (e) => {
        return e.target.value;
    }))
}


