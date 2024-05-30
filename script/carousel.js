const container = document.querySelector('#container');
const content = document.querySelector('#content');

let imageData = [
    "green", "aqua", "red", "blue",
];
let imageTitle = [
    "1" , "2", "3", "4",
];

content.style.backgroundColor = imageData[0];


function nextImage() {
    let index = imageData.indexOf(content.style.backgroundColor);
    index = (index + 1)%imageData.length
    content.style.backgroundColor = imageData[index];
    content.innerText = "Image " + imageTitle[index % imageData.length];
}

function prevImage() {
    let index = imageData.indexOf(content.style.backgroundColor);

    if (index - 1 < 0) {index += imageData.length};
    index = (index - 1) % imageData.length;

    content.style.backgroundColor = imageData[index];
    content.innerText = "Image " + imageTitle[index];
}


