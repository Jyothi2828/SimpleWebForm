// Add event listener to the form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    // Call the function to validate the form
    validateForm();
});

// Function to validate the form
function validateForm() {
    // Get values from form fields and trim leading/trailing whitespace
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    // Clear previous error and success messages
    errorMessage.innerHTML = '';
    successMessage.innerHTML = '';

    // Check if any field is empty
    if (name === '' || address === '' || dob === '' || email === '') {
        errorMessage.innerHTML = 'All fields are required.';
        return;
    }

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if email is in valid format
    if (!emailRegex.test(email)) {
        errorMessage.innerHTML = 'Please enter a valid email address.';
        return;
    }

    // Regular expression to validate date of birth format (MM/DD/YYYY)
    const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    // Check if date of birth is in valid format
    if (!dobRegex.test(dob)) {
        errorMessage.innerHTML = 'Please enter a valid date of birth (MM/DD/YYYY).';
        return;
    }

    // Split date of birth into parts and convert to integers
    const parts = dob.split('/');
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Check if month, day, and year are valid
    if (isNaN(month) || isNaN(day) || isNaN(year) ||
        month < 1 || month > 12 || day < 1 || day > 31 || year < 1900 || year > new Date().getFullYear()) {
        errorMessage.innerHTML = 'Please enter a valid date of birth (MM/DD/YYYY).';
        return;
    }

    // Display success message if form passes validation
    successMessage.innerHTML = 'Submitted Successfully';
}
