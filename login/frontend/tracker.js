const BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${BASE_URL}`/login, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert('Login successful');
            window.location.href = 'home.html'; // Redirect to home page
        } else {
            const errorMessage = await response.text();
            alert(`Login failed: ${errorMessage}`);
        }
    } catch (error) {
        alert('An error occurred. Please try again later.');
        console.error(error);
    }
});

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, username, password }),
        });

        if (response.ok) {
            alert('Registration successful');
            window.location.href = 'index.html'; // Redirect to login page
        } else {
            const errorMessage = await response.text();
            alert(`Registration failed: ${errorMessage}`);
        }
    } catch (error) {
        alert('An error occurred. Please try again later.');
        console.error(error);
    }
});