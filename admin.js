document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('user-list');
    const addUserForm = document.getElementById('addUserForm');
    const removeUserForm = document.getElementById('remove-user-form');
   

    // Load users from JSON file
    fetch('/RuntrackJs/bigjob/la-plateforme-presence/data/users.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {               
                userList.innerHTML += `<tr><td>${user.email}<td/><td>${user.role}<td/><tr/> `;                
            });
        });

    // Add user functionality
    addUserForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');
        const newUserEmail = document.getElementById('email').value;
        const newUserRole = document.getElementById('role').value;
         userList.innerHTML += `<tr><td>${newUserEmail}<td/><td>${newUserRole}<td/><tr/> `;

        // Logic to add user (this would typically involve a backend call)
        console.log(`Adding user: ${newUserEmail} with role: ${newUserRole}`);
        // Reset form
        addUserForm.reset();
    });

    // Remove user functionality
    removeUserForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const removeUserEmail = document.getElementById('remove-user-email').value;

        // Logic to remove user (this would typically involve a backend call)
        console.log(`Removing user: ${removeUserEmail}`);
        // Reset form
        removeUserForm.reset();
    });
});