let toUSD = {'USD':1, 'EGP':0.064, 'CNY':0.15, 'INR':0.014, 'RUB':0.014, 'CHF':1.09, 'JPY':0.0091, 'AUD':0.73, 'CAD':0.79, 'GBP':1.38, 'EUR':1.17};
let fromUSD = {'USD':1, 'EGP':15.69, 'CNY':6.45, 'INR':73.23, 'RUB':73.95, 'CHF':0.92, 'JPY':109.89, 'AUD':1.36, 'CAD':1.27, 'GBP':0.72, 'EUR':0.85};

const convertBtn = document.getElementById('convertBtn');
const inputValue = document.getElementById('inputValue');
const convertInto = document.getElementById('convertInto');
const convertFrom = document.getElementById('convertFrom');
const resultTxtArea = document.getElementById('resultTxtArea');

function showData(value){
    resultTxtArea.innerText = value;
}

function convertCureency(from,into){
    let inputField = inputValue.value;
    let value = (from == into) ? inputField : inputField * toUSD[from] * fromUSD[into];
    showData(`${inputField} ${from} = ${Number(value).toFixed(3)} ${into}`);
}

convertBtn.addEventListener('click',()=>{
    convertCureency(convertFrom.value,convertInto.value);
});
