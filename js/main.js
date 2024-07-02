// Selecting DOM elements

// Remove this

const button = document.getElementById('submit-button');

const fullNameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Regular expression for validating email
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


// Function to handle form submission
function validateForm(event) {

  
  
  event.preventDefault(); // Prevent default form submission
  
  // Initialize data object and errors array
  let data = {};
  let errors = [];

  // Validate Full Name
  if (fullNameInput.value.trim() === '') {
    errors.push("Full Name is required.");
  } else {
    data.fullname = fullNameInput.value.trim();
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    errors.push("Email is required.");
  } else if (!emailRegex.test(emailInput.value.trim())) {
    errors.push("Invalid Email Address.");
  } else {
    data.email = emailInput.value.trim();
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    errors.push("Message is required.");
  } else {
    data.message = messageInput.value.trim();
  }

  // Display errors or log data
  if (errors.length > 0) {
    console.log(errors);

  } else {
    console.log("Form data:", data);
    clearForm();
  }
}


// Function to clear form inputs
function clearForm() {
  fullNameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
}

button.addEventListener('click', validateForm);

