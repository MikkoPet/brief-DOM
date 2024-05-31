let scoreDisplay = document.querySelector('h1');
let limitDisplay = document.querySelector('#scoreLimit');

let buttonPlayer1 = document.querySelector('#player1');
let buttonPlayer2 = document.querySelector('#player2');

let leadMessage = document.querySelector('#leadMessage');

let scoreLimit = 1;
let scorePlayer1 = 0;
let scorePlayer2 = 0;

let ratio1 = 50;
let ratio2 = 50;

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
    updateLead();
}
function scoreUpPlayer2 () {
    scoreDisplay.innerText = `${scorePlayer1} to ${++scorePlayer2}`;

    blockButton();
    updateLead();
}

function blockButton() {
if (scorePlayer1 === +scoreLimit || scorePlayer2 === +scoreLimit) {
    buttonPlayer1.setAttribute("disabled", "");
    buttonPlayer2.setAttribute("disabled", "");
}
}


function updateLead() {

    ratio1 = scorePlayer1 * 100 /(scorePlayer1+scorePlayer2);
    ratio2 = 100 - scorePlayer2 * 100 /(scorePlayer1+scorePlayer2);

    if (scorePlayer1 === scorePlayer2) {
        leadMessage.innerText = "It's a tie...";
        leadMessage.style.color = "black";
    } else if (scorePlayer1 > scorePlayer2) {
        leadMessage.innerText = `Player 1 ${scorePlayer1 === +scoreLimit ? "won" : " is leading"} !`;
        leadMessage.style.color = "rgb(243, 197, 185)"
    } else { 
        leadMessage.innerText = `Player 2 ${scorePlayer2 === +scoreLimit ? "won" : "is leading"} !`;
        leadMessage.style.color = "rgb(245, 190, 108)"
    }
    document.body.style.background = `linear-gradient(to right, rgb(243, 197, 185) ${ratio1 - 10}%, rgb(245, 190, 108) ${ratio2 + 10}%)`;
}


function resetPoints() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    scoreDisplay.innerText = `${scorePlayer1} to ${scorePlayer2}`;
    buttonPlayer1.removeAttribute("disabled");
    buttonPlayer2.removeAttribute("disabled");
    document.body.style.background = `white`;
}