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

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'

    const small = formControl.querySelector('small');
    small.innerText = message
}

function showSuccess(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// event listeners
form.addEventListener('submit',function (e){
    e.preventDefault();
    if(username.value ===''){
        showError(username,'Username is required');
    }else {
        showSuccess(username);
    }
    if(email.value ===''){
        showError(email,'Email is required');
    }else {
        showSuccess(email);
    }
    if(password.value ===''){
        showError(password,'Password is required');
    }else {
        showSuccess(password);
    }
    if(password2.value ===''){
        showError(password2,'Password 2 is required');
    }else {
        showSuccess(password2);
    }


})