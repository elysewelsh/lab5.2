let registrationForm = document.querySelector('#registrationForm');
let usernameInput = document.querySelector('#username');
let usernameSpan = document.querySelector('#usernameError')
let emailInput = document.querySelector('#email');
let emailSpan = document.querySelector('#emailError');
let passwordInput = document.querySelector("#password");
let passwordSpan = document.querySelector('#passwordError');
let confirmPasswordInput = document.querySelector("#confirmPassword");
let confirmPasswordSpan = document.querySelector('#confirmPasswordError');
let usernameErrorCount = 0;
let passwordErrorCount = 0;
let confirmPasswordErrorCount = 0;
let emailErrorCount = 0;
const data = {
        username: registrationForm.elements.username.value,
        email: registrationForm.elements.email.value,
        password: registrationForm.elements.password.value,
    };
let user = localStorage.getItem('username');

if (user == null) {
    usernameInput.value = ""
} else {
    usernameInput.value = user;
    usernameSpan.textContent = ("Welcome back, " + user);
};

usernameInput.addEventListener('blur', (e) =>{
    usernameVerify(e.target);
});

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
        usernameErrorCount = 0;
    }
    usernameSpan.textContent = input.validationMessage;
};

emailInput.addEventListener('blur', (e) => {
    emailVerify(e.target);
});

function emailVerify (input) {
        if (input.validity.typeMismatch) {
        input.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
        emailErrorCount++;
    } else if (input.validity.valueMissing) {
        input.setCustomValidity('We need your email address to contact you!');
        emailErrorCount++;
    } else {
        input.setCustomValidity('');
        emailErrorCount = 0;
    }
    emailSpan.textContent = input.validationMessage;
};

passwordInput.addEventListener('blur', (e) => {
    passwordVerify(e.target);
});

function passwordVerify (input) {
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
    input.setCustomValidity(''); // Clear custom error if valid
    passwordErrorCount = 0;
    }
    passwordSpan.textContent = input.validationMessage;
};

confirmPasswordInput.addEventListener("blur", (e) => {
  confirmPasswordVerify(e.target);
});

function confirmPasswordVerify (input) {
  if (input.value !== passwordInput.value) {
    input.setCustomValidity("Passwords do not match.");
    confirmPasswordErrorCount++;
  }
  else{
    input.setCustomValidity('');
    confirmPasswordErrorCount = 0;
  }
  confirmPasswordSpan.textContent = input.validationMessage;
};

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    usernameVerify(usernameInput);
    passwordVerify(passwordInput);
    confirmPasswordVerify(confirmPasswordInput);
    if ((usernameErrorCount > 0) || (emailErrorCount > 0) || (passwordErrorCount > 0) || (confirmPasswordErrorCount > 0)) {
        alert("Please review errors before submitting.");
    } else {
        data.username = usernameInput.value;
        data.email = emailInput.value;
        data.password = passwordInput.value;
        alert("Form submitted.");
        usernameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        confirmPasswordInput. value = "";
    };
    console.log(data.username);
    localStorage.setItem('username', data.username);
});

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