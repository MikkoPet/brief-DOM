let scoreDisplay = document.querySelector('h1');
let limitDisplay = document.querySelector('p');
let buttonPlayer1 = document.querySelector('#player1');
let buttonPlayer2 = document.querySelector('#player2');

let scoreLimit = 1;
let scorePlayer1 = 0;
let scorePlayer2 = 0;

function changeLimit() {
    scoreLimit = document.querySelector('input').value;
    limitDisplay.innerText = `Playing to: ${scoreLimit}`;

    if (scorePlayer1 !== 0 || scorePlayer2 !== 0) {
        resetPoints();
    }
}


function scoreUpPlayer1 () {
    scoreDisplay.innerText = `${++scorePlayer1} to ${scorePlayer2}`;
    blockButton();
}
function scoreUpPlayer2 () {
    scoreDisplay.innerText = `${scorePlayer1} to ${++scorePlayer2}`;
    blockButton();
}

function blockButton() {
if (scorePlayer1 === +scoreLimit || scorePlayer2 === +scoreLimit) {
    buttonPlayer1.setAttribute("disabled", "");
    buttonPlayer2.setAttribute("disabled", "");
}
}


function resetPoints() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    scoreDisplay.innerText = `${scorePlayer1} to ${scorePlayer2}`;
    buttonPlayer1.removeAttribute("disabled");
    buttonPlayer2.removeAttribute("disabled");
}