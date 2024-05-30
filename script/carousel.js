const container = document.querySelector('#container');
const content = document.querySelector('#content');
const caption = document.querySelector('p');

let imageData = [
    ["green", "1", "image1"], ["aqua", "2", "image2"], ["red", "3", "image3"], ["blue", "4", "image4"],
];

content.style.backgroundColor = imageData[0][0];


function nextImage() {
    let index = currentFinder();
    index = (index + 1)%imageData.length
    content.style.backgroundColor = imageData[index][0];
    caption.innerText = imageData[index][1];
    content.classList.replace(imageData[(index + 3)%4][2], imageData[index][2]);
}

function prevImage() {
    let index = currentFinder();

    if (index - 1 < 0) {index += imageData.length};
    index = (index - 1) % imageData.length;

    content.style.backgroundColor = imageData[index][0];
    caption.innerText = imageData[index][1];
    content.classList.replace(imageData[(index + 5)%4][2], imageData[index][2]);
}

function currentFinder() {
    for(var i = 0; i < imageData.length; i++) {
        if(imageData[i][0] === content.style.backgroundColor) {
          return i;
        }
     }
}
