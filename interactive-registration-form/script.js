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
        username: registrationForm.elements.username.value,
        email: registrationForm.elements.email.value,
        password: registrationForm.elements.password.value,
    }

passwordInput.addEventListener('blur', (e) =>{
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    const input = e.target;
    console.log(input);
    console.log(passwordCheck.test(input));
    if (input.validity.tooShort) {
    input.setCustomValidity("Please enter at least 8 characters");
    }
    else if (input.validity.valueMissing) {
    input.setCustomValidity("Please enter a password");
    }
    else if (passwordCheck.test(input) === false) {
    input.setCustomValidity("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.");
    }
    else {
    input.setCustomValidity(''); // Clear custom error if valid
    }
    passwordSpan.textContent = input.validationMessage;
});

// emailInput.addEventListener('blur', (e) => {
//     const input = e.target
//     // console.dir(input.validity)
//     // console.log(input.validationMessage)
//     if (input.validity.typeMismatch) {
//         input.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
//     } else if (input.validity.valueMissing) {
//         input.setCustomValidity('We need your email address to contact you!');
//     }
//     else {
//         input.setCustomValidity(''); // Clear custom error if valid
//     }
//     // Display the custom message or clear it
//     emailSpan.textContent = input.validationMessage;
// })
// confirmPasswordInput.addEventListener("blur", (e) => {
//   const input = e.target;
// console.log(confirmPasswordInput);
// console.log(passwordInput.value);
// console.log(e);

//   if (input.value !== passwordInput.value) {
//     input.setCustomValidity("Passwords do not match");
//   }
//   else{
//     input.setCustomValidity(''); 
//   }
//   confirmPasswordSpan.textContent = input.validationMessage;
//   // optional span if you have one
//   // confirmPasswordSpan.textContent = input.validationMessage;
// });


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