// declare and initiate variables to HTML document elements
let registrationForm = document.getElementById('registrationForm');
let usernameInput = document.getElementById('username');
let usernameSpan = document.getElementById('usernameError')
let emailInput = document.getElementById('email');
let emailSpan = document.getElementById('emailError');
let passwordInput = document.getElementById('password');
let passwordSpan = document.getElementById('passwordError');
let confirmPasswordInput = document.getElementById('confirmPassword');
let confirmPasswordSpan = document.getElementById('confirmPasswordError');

// error counts for successful submission logic
let usernameErrorCount = 0;
let passwordErrorCount = 0;
let confirmPasswordErrorCount = 0;
let emailErrorCount = 0;

// establish error array for forFocus function to be used in form submission function
let errors = [];

// data array for input values
const data = {
    username: registrationForm.elements.username.value,
    email: registrationForm.elements.email.value,
    password: registrationForm.elements.password.value,
};

// retrieve username from localStorage
let user = localStorage.getItem('username');

// display username from localStorage if not null
if (user == null || user == "") {
    usernameInput.value = "";
    usernameSpan.textContent = "";
} else {
    usernameInput.value = user;
    usernameSpan.textContent = ("Welcome back, " + user);
};

// verify username when inputted
usernameInput.addEventListener('blur', (e) =>{
    usernameVerify(e.target);
});

// verify username value against criteria
function usernameVerify (input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity('Please choose a username.');
        usernameErrorCount++;
    }
    else if (input.validity.tooShort) {
        input.setCustomValidity("Please enter at least 5 characters.");
        usernameErrorCount++;
    }
    else {
        input.setCustomValidity('');
// if username meets criteria, set error counter to 0
        usernameErrorCount = 0;
    }
    usernameSpan.textContent = input.validationMessage;
};

// verify email when inputted
emailInput.addEventListener('blur', (e) => {
    emailVerify(e.target);
});

// verify email meets criteria
function emailVerify (input) {
    if (input.validity.typeMismatch) {
        input.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
        emailErrorCount++;
    } else if (input.validity.valueMissing) {
        input.setCustomValidity('We need your email address to contact you!');
        emailErrorCount++;
    } else {
        input.setCustomValidity('');
// if email meets criteria, set error counter to 0
        emailErrorCount = 0;
    }
    emailSpan.textContent = input.validationMessage;
};

// verify password when inputted
passwordInput.addEventListener('blur', (e) => {
    passwordVerify(e.target);
});

// verify password meets criteria
function passwordVerify (input) {
// RegEx to check that input includes one uppercase, one lowercase, and one number
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (input.validity.tooShort) {
    input.setCustomValidity("Please enter at least 8 characters.");
    passwordErrorCount++;
    }
    else if (input.validity.valueMissing) {
    input.setCustomValidity("Please enter a password.");
    passwordErrorCount++;
    }
    else if (passwordCheck.test(input.value) === false) {
    input.setCustomValidity("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.");
    passwordErrorCount++;
    }
    else {
    input.setCustomValidity('');
// if password meets criteria, set error counter to 0
    passwordErrorCount = 0;
    }
    passwordSpan.textContent = input.validationMessage;
};

// match confirm password input to password input upon input of confirm password
confirmPasswordInput.addEventListener("blur", (e) => {
    confirmPasswordVerify(e.target);
});

// verify confirm password input matches password input
function confirmPasswordVerify (input) {
    if (input.value !== passwordInput.value) {
        input.setCustomValidity("Passwords do not match.");
        confirmPasswordErrorCount++;
    }
    else{
        input.setCustomValidity('');
//if confirm password matches, set error counter to 0
        confirmPasswordErrorCount = 0;
    }
    confirmPasswordSpan.textContent = input.validationMessage;
};

//submit button
registrationForm.addEventListener('submit', (e) => {
//prevent default validation and actions
    e.preventDefault();
// reset errors array so corrections can be made
    errors = [];
// run all field validation functions again
    usernameVerify(usernameInput);
    passwordVerify(passwordInput);
    confirmPasswordVerify(confirmPasswordInput);
// if error counters contain errors, let user know with alert
    if ((usernameErrorCount > 0) || (emailErrorCount > 0) || (passwordErrorCount > 0) || (confirmPasswordErrorCount > 0)) {
        alert("Please review errors before submitting.");
    } else {
// add validated inputs to data array
        data.username = usernameInput.value;
        data.email = emailInput.value;
        data.password = passwordInput.value;
// notify user that form was submitted
        alert("Form submitted.");
// clear inputs
        usernameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        confirmPasswordInput. value = "";
    };
// determine the field to apply focus to
    formFocus();
// apply focus to first error on form
    document.getElementById(errors[0]).focus();
// add validated username input to localStorage
    localStorage.setItem('username', data.username);
});

// add form element ids to errors array starting from top (first with error will be index 0)
function formFocus () {
    let inputFields = registrationForm.elements.length;
    for (i = 0; i < inputFields; i++) {
        if (registrationForm.elements[i].nextElementSibling) {
            if ((registrationForm.elements[i].nextElementSibling.innerText !== "") && (registrationForm.elements[i].nextElementSibling.innerText !== null)) {
                errors.push(registrationForm.elements[i].id);
            }
    }
}
};

// Select all necessary DOM elements (form, inputs, error message spans).
// Load saved username: On page load, check if a username is saved in localStorage. If so, pre-fill the username field.
// Real-time validation: Add input event listeners to each field.
// Check validity using the Constraint Validation API (inputElement.validity).
// For the “Confirm Password” field, explicitly check if it matches the “Password” field.
// Display appropriate custom error messages in the corresponding <span> elements. Clear messages if valid.
// Form submission: Add a submit event listener to the form.
// Call event.preventDefault().
// Perform a final validation check on all fields.
// If all fields are valid:
// Display a success message (e.g., an alert or update a status message on the page).
// Save the username to localStorage.
// Optionally, reset the form.
// If any field is invalid, ensure error messages are displayed and focus on the first invalid field.