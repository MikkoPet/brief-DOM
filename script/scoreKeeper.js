let scoreDisplay = document.querySelector('h1');
let limitDisplay = document.querySelector('p');

function changeLimit() {
    let newLimit = document.querySelector('input').value;
    limitDisplay.innerText = `Playing to: ${newLimit}`;
}

let scorePlayer1 = 0;
let scorePlayer2 = 0;

function scoreUpPlayer1 () {
    scoreDisplay.innerText = `${++scorePlayer1} to ${scorePlayer2}`;
}
function scoreUpPlayer2 () {
    scoreDisplay.innerText = `${scorePlayer1} to ${++scorePlayer2}`;
}