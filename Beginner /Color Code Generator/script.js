const body = document.body;
const btn = document.querySelector('button');
const values = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
let colorCode;

function pickRandomColor(){
    colorCode = '#'
    for (let i = 0; i < 6; i++) {
        colorCode += values[Math.floor(Math.random()*16)];
    }
    return colorCode;
}

function changeBodyBackground(){
    let myColor = pickRandomColor();
    body.style.backgroundColor = myColor;
    document.querySelector('span').innerText = myColor 
}

btn.addEventListener('click',changeBodyBackground);
