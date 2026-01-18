let registrationForm = document.querySelector('#registrationForm');
let usernameInput = document.querySelector('#username');
let usernameSpan = document.querySelector('#usernameError')
let emailInput = document.querySelector('#email');
let emailSpan = document.querySelector('#emailError');
let passwordInput = document.querySelector("#password");
let passwordSpan = document.querySelector('#passwordError');
let confirmPasswordInput = document.querySelector("#confirmPassword");
let confirmPasswordSpan = document.querySelector('#confirmPasswordError');
let u = 0;
let p = 0;
let c = 0;
const data = {
        username: registrationForm.elements.username.value,
        email: registrationForm.elements.email.value,
        password: registrationForm.elements.password.value,
    };

usernameInput.addEventListener('blur', (e) =>{
    usernameVerify(e.target);
});

function usernameVerify (input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity('Please choose a username.');
        u++;
    }
    else if (input.validity.tooShort) {
        input.setCustomValidity("Please enter at least 5 characters.");
        u++;
    }
    else {
        input.setCustomValidity('');
        u = 0;
    }
    usernameSpan.textContent = input.validationMessage;
};

passwordInput.addEventListener('blur', (e) => {
    passwordVerify(e.target);
});

function passwordVerify (input) {
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (input.validity.tooShort) {
    input.setCustomValidity("Please enter at least 8 characters.");
    p++;
    }
    else if (input.validity.valueMissing) {
    input.setCustomValidity("Please enter a password.");
    p++;
    }
    else if (passwordCheck.test(input.value) === false) {
    input.setCustomValidity("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.");
    p++;
    }
    else {
    input.setCustomValidity(''); // Clear custom error if valid
    p = 0;
    }
    passwordSpan.textContent = input.validationMessage;
};

// passwordInput.addEventListener('blur', (e) =>{
//     const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
//     const input = e.target;
//     console.log(input);
//     console.log(passwordCheck.test(input));
//     if (input.validity.tooShort) {
//     input.setCustomValidity("Please enter at least 8 characters.");
//     }
//     else if (input.validity.valueMissing) {
//     input.setCustomValidity("Please enter a password.");
//     }
//     else if (passwordCheck.test(input.value) === false) {
//     input.setCustomValidity("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.");
//     }
//     else {
//     input.setCustomValidity(''); // Clear custom error if valid
//     }
//     passwordSpan.textContent = input.validationMessage;
// });

function confirmPasswordVerify (input) {
  if (input.value !== passwordInput.value) {
    input.setCustomValidity("Passwords do not match.");
    c++;
  }
  else{
    input.setCustomValidity('');
    c = 0;
  }
  confirmPasswordSpan.textContent = input.validationMessage;
};
confirmPasswordInput.addEventListener("blur", (e) => {
  confirmPasswordVerify(e.target);
});

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    usernameVerify(usernameInput);
    // const emailValue = data.email;
    // const passwordValue = data.password;

if ((u > 0) || (p > 0) || (c > 0)) {
alert("Please review errors before submitting.");
} else {
alert("Form submitted.");
};
console.log("test");
//     const check = registrationForm.checkValidity();
//     console.log(check);
//    if (!check){
//   alert("please input valid details")
//    }
// else {
//     alert('Form Submitted!');
// }
//     console.log(data);
    
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