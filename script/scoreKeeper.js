let scoreDisplay = document.querySelector('h1');
let limitDisplay = document.querySelector('p');

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
    if (scorePlayer1 !== scoreLimit || scorePlayer2 !== scoreLimit) {
    scoreDisplay.innerText = `${++scorePlayer1} to ${scorePlayer2}`;
    }
}
function scoreUpPlayer2 () {
    if (scorePlayer1 !== scoreLimit || scorePlayer2 !== scoreLimit) {
    scoreDisplay.innerText = `${scorePlayer1} to ${++scorePlayer2}`;
    }
}


function resetPoints() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    scoreDisplay.innerText = `${scorePlayer1} to ${scorePlayer2}`;
}