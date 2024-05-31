const container = document.querySelector('#container');
const content = document.querySelector('#content');
const caption = document.querySelector('p');

let imageData = [
    ["Hazy Moon", "image1"], ["Rain", "image2"], ["Midnight", "image3"], ["Cloudy", "image4"],
];



function nextImage() {
    let index = currentFinder();
    index = (index + 1)%imageData.length

    caption.innerText = imageData[index][1];
    content.classList.replace(imageData[(index + 3)%4][0], imageData[index][0]);
}

function prevImage() {
    let index = currentFinder();
    if (index - 1 < 0) {index += imageData.length};
    index = (index - 1) % imageData.length;

    caption.innerText = imageData[index][1];
    content.classList.replace(imageData[(index + 5)%4][0], imageData[index][0]);
}

function currentFinder() {
    for(let i = 0; i < imageData.length; i++) {
        if(imageData[i][1] === content.className) {
          return i;
        }
     }
}
