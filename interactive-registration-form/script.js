let registrationForm = document.querySelector('#registrationForm');
let usernameInput = document.querySelector('#username');
let usernameSpan = document.querySelector('#usernameError')
let emailInput = document.querySelector('#email');
let emailSpan = document.querySelector('#emailError');
let passwordInput = document.querySelector("#password");
let passwordSpan = document.querySelector('#passwordError');
let confirmPasswordInput = document.querySelector("#confirmPassword");
let confirmPasswordSpan = document.querySelector('#confirmPasswordError');
const data = {
        username: signupForm.elements.username.value,
        email: signupForm.elements.email.value,
        password: signupForm.elements.password.value,
    }