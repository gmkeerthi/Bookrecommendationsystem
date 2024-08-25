document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;

    // Reset errors
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('phoneError').style.display = 'none';
    document.getElementById('ageError').style.display = 'none';

    let valid = true;

    // Validate username
    if (username.length < 3 || username.length > 15) {
        document.getElementById('usernameError').textContent = 'Username must be between 3 and 15 characters.';
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // Validate phone number
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    }

    // Validate age
    if (age < 18 || age > 100) {
        document.getElementById('ageError').textContent = 'Age must be between 18 and 100.';
        document.getElementById('ageError').style.display = 'block';
        valid = false;
    }

    // If all fields are valid, submit the form
    if (valid) {
        alert('Form submitted successfully!');
    }
});