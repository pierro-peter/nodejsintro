document.getElementById('next-button').addEventListener('click', function() {
    // Display loader
    document.querySelector('.loader').style.display = 'flex';

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const role = document.getElementById('role').value;
    const branch = document.getElementById('branch').value;

    // Basic validation
    if (name && email && username && password && confirmPassword && role && branch) {
        // Check password length
        if (password.length < 8 || password.length > 12) {
            document.querySelector('.password-strength').textContent = 'Password must be between 8 and 12 characters long.';
            document.querySelector('.password-strength').style.color = '#e74c3c'; // Red for invalid length
            document.querySelector('.loader').style.display = 'none'; // Hide loader
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            document.querySelector('.password-match').textContent = 'Passwords do not match.';
            document.querySelector('.password-match').style.color = '#e74c3c'; // Red for mismatch
            document.querySelector('.loader').style.display = 'none'; // Hide loader
            return;
        }

        // Proceed with signup
        alert('Signup successful!'); // For demonstration purposes
        if (role === 'manager') {
            window.location.href = 'manager.html';
        } else if (role === 'salesAgent') {
            window.location.href = 'salesAgent.html';
        }
    } else {
        alert('Please fill in all fields.');
        document.querySelector('.loader').style.display = 'none'; // Hide loader
    }
});

// Password Strength Checker
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthIndicator = document.getElementById('password-strength');

    // Check password strength
    if (password.length === 0) {
        strengthIndicator.textContent = '';
        return;
    }

    let strength = 'Weak';
    if (password.length >= 8 && password.length <= 12) {
        if (/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            strength = 'Strong';
            strengthIndicator.style.color = '#2ecc71'; // Green for strong passwords
        } else if (/(?=.*[a-z])(?=.*\d)/.test(password)) {
            strength = 'Medium';
            strengthIndicator.style.color = '#f1c40f'; // Yellow for medium passwords
        }
    }

    strengthIndicator.textContent = `Password strength: ${strength}`;
});
