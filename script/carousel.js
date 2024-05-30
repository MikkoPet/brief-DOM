const container = document.querySelector('#container');
const content = document.querySelector('#content');

let imageData = [
    "green", "aqua", "red", "blue",
];

content.style.backgroundColor = imageData[0];


function nextImage() {
    let index = imageData.indexOf(content.style.backgroundColor);
    content.style.backgroundColor = imageData[++index % imageData.length];
}

