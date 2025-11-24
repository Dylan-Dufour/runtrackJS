// This file contains general scripts that are used across multiple pages, such as event listeners and utility functions.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize any components or event listeners here
    console.log("La Plateforme_ presence application loaded.");

    // Example: Add a listener for a logout button if it exists
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Handle logout functionality
            console.log("User logged out.");
            // Clear session storage or perform other logout actions
        });
    }
});