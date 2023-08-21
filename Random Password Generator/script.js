let numbers = [0,1,2,3,4,5,6,7,8,9];
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm".split("");
let puncituation = "!@#$%^&*()-_=+/?><:*".split("");

let randomList;
let randomIndex;
let passwordLength;
let chosenCriteria = [];

const alphabetBox = document.getElementById('alphabetCheckBox');
const numberBox = document.getElementById('numberCheckBox');
const symbolBox = document.getElementById('symbolCheckBox');

function generatePasswordRandomly(){
    let password = "";
    passwordLength = document.getElementById('passwordLengthInput').value;
    passwordLength = (passwordLength > 20) ? 20 : (passwordLength < 8 ? 8 : passwordLength);

    chosenCriteria = getCriteria(alphabetBox.checked,numberBox.checked,symbolBox.checked);

    for (let i = 0; i < passwordLength; i++) {
        randomList = Math.floor(Math.random() * chosenCriteria.length);
        randomIndex = Math.floor(Math.random() * chosenCriteria[randomList].length);
        password += chosenCriteria[randomList][randomIndex];
    }
    document.getElementById('passwordScreen').innerHTML = password;
}

function getCriteria(a,n,s){
    let arr = [];
    if(a) arr.push(alphabet);
    if(n) arr.push(numbers);
    if(s) arr.push(puncituation);
    return arr;
}

document.getElementById('generateBtn').onclick = generatePasswordRandomly;