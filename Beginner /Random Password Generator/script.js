let numbers = [0,1,2,3,4,5,6,7,8,9];
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm".split("");
let puncituation = "!@#$%^&*()-_=+/?><:*".split("");

let randomList;
let randomIndex;
let passwordLength;

function generatePasswordRandomly(){
    let password = "";

    passwordLength = document.getElementById('passwordLengthInput').value;
    passwordLength = (passwordLength > 20) ? 20 : (passwordLength < 8 ? 8 : passwordLength);
    for (let i = 0; i < passwordLength; i++) {
        randomList = Math.floor(Math.random() * 3);
        switch (randomList) {
            case 0:
                randomIndex = Math.floor(Math.random() * alphabet.length);
                password += alphabet[randomIndex];
                break;
            case 1:
                randomIndex = Math.floor(Math.random() * numbers.length);
                password += numbers[randomIndex];
                break;
            default:
                randomIndex = Math.floor(Math.random() * puncituation.length);
                password += puncituation[randomIndex];
                break;
        }
    }
    document.getElementById('passwordScreen').innerHTML = password;
}


document.getElementById('generateBtn').onclick = generatePasswordRandomly;