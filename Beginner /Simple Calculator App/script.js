const previousBtn = document.getElementById('previousBtn');
const equalBtn = document.getElementById('equalBtn');
const deleteBtn = document.getElementById('deleteBtn');
const resetBtn = document.getElementById('resetBtn');
const myBtns = document.querySelectorAll('.btnsWillShow');
const txtArea = document.getElementById('txtArea');
let experssion = '';
let previousExperssion = '';


myBtns.forEach(myBtn => {
    myBtn.addEventListener('click',()=>{
        if (experssion.length <= 100) {
            experssion += myBtn.value;
            showData(experssion);
        }else{
            alert('You Cannot add more didgits...Click = NOW..!');
        }
    });
});

equalBtn.addEventListener('click',()=>{
    if (experssion.length != 0) {
        try {
            showData(`${experssion} = ${eval(experssion)}`
            );
        } catch (err) {
            showData('Invalid Input');
        }
    }
    previousExperssion = experssion;
    experssion = '';
});

resetBtn.addEventListener('click',()=>{
    previousExperssion = experssion;
    experssion = '';
    showData(experssion);
});

deleteBtn.addEventListener('click',()=>{
    experssion = experssion.substring(0,experssion.length-1);
    showData(experssion);
})

previousBtn.addEventListener('click',()=>{
    showData(previousExperssion);
    experssion = previousExperssion;
});

function showData(experssion) {
    txtArea.innerText = experssion;
}