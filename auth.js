// This file handles user authentication, including registration and login functionality.
// It checks the email domain and manages session storage.

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        authenticateUser(emailInput.value, passwordInput.value);
    });

    function authenticateUser(email, password) {
        fetch('../data/users.json')
            .then(response => response.json())
            .then(users => {
                const user = users.find(user => user.email === email && user.password === password);
                if (user) {
                    if (validateEmailDomain(email)) {
                        sessionStorage.setItem('user', JSON.stringify(user));
                        window.location.href = 'calendar.html';
                    } else {
                        alert('Email domain is not allowed.');
                    }
                } else {
                    alert('Invalid email or password.');
                }
            })
            .catch(error => console.error('Error fetching user data:', error));
    }

    function validateEmailDomain(email) {
        const allowedDomain = '@laplateforme.com';
        return email.endsWith(allowedDomain);
    }
});