import '../public/styles/form-valiadator.css'

document.querySelector("#formValidator").innerHTML = `
    <div class="container">
        <form id="form" class="form">
            <h2>Register With Us</h2>
            <div class="form-control">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Enter username"/>
                <small>Error message</small>
            </div>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Enter email"/>
                <small>Error message</small>
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter password"/>
                <small>Error message</small>
            </div>
            <div class="form-control">
                <label for="password2">Confirm Password</label>
                <input type="password" id="password2" placeholder="Enter password again"/>
                <small>Error message</small>
            </div>
            <button>Submit</button>
        </form>
    </div>

`

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

/**
 * Show Error Message
 * @param input
 * @param message
 */
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'

    const small = formControl.querySelector('small');
    small.innerText = message
}

/**
 * Show Success Message
 * @param input
 * @param message
 */
function showSuccess(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

/**
 * get string value and return it to upper case
 * @param value
 * @returns {string}
 */
const getFieldName = (value)=>{
    return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * check required
 * @param inputArr
 */
const checkRequired = (inputArr)=>{
    inputArr.forEach((input)=>{
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input.id)} is required`)
        }else {
            showSuccess(input);
        }
    })
}
/**
 * check length
 * @param input
 * @param min
 * @param max
 */
const checkLength = (input,min,max)=>{
    if(input.value.length<min){
        showError(input,`${getFieldName(input.id)} must be at least ${min} characters`)
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input.id)} must be less than ${max} characters`)
    }else{
        showSuccess(input)
    }
}
/**
 * check email
 * @param input
 */
const checkEmail = (input)=>{
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else {
        showError(input,`Email is not valid`)
    }
}

/**
 * check password match
 * @param input1
 * @param input2
 */
const checkPasswordMatch =(input1,input2)=>{
    if(input1.value !== input2.value){
        showError(input2,'Password do not match')
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15)
    checkLength(password,6,25)
    checkEmail(email)
    checkPasswordMatch(password,password2)

})

/**
 * Event Listener old way
 */
// form.addEventListener('submit',function (e){
//     e.preventDefault();
//     if(username.value ===''){
//         showError(username,'Username is required');
//     }else {
//         showSuccess(username);
//     }
//     if(email.value ===''){
//         showError(email,'Email is required');
//     }else {
//         showSuccess(email);
//     }
//     if(password.value ===''){
//         showError(password,'Password is required');
//     }else {
//         showSuccess(password);
//     }
//     if(password2.value ===''){
//         showError(password2,'Password 2 is required');
//     }else {
//         showSuccess(password2);
//     }
//
//
// })