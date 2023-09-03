const userPass = document.getElementById('user-password');
const userconfirmPass = document.getElementById('user-confirm-password');
const signupForm = document.getElementById('signupForm');
const policyAccept = document.getElementById('policy-accept');

signupForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(userPass.value != userconfirmPass.value) alert("Un-matched Password");
    else if(!policyAccept.checked) alert("You must accept our privacy policy");
    else signupForm.submit()
});