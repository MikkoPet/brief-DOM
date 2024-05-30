let scoreDisplay = document.querySelector('h1').innerText;
let limitDisplay = document.querySelector('p').innerText;

function changeLimit() {
    let newLimit = document.querySelector('input').value;
    document.querySelector('p').innerText = `Playing to: ${newLimit}`;
}