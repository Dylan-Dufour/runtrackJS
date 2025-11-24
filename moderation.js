document.addEventListener('DOMContentLoaded', function() {
    fetch('/RuntrackJs/bigjob/la-plateforme-presence/data/users.json')
        .then(response => response.json())
        .then(data => {
            const requestsContainer = document.getElementById('requests-container');
            data.requests.forEach(request => {
                const requestElement = document.createElement('div');
                requestElement.classList.add('request');
                requestElement.innerHTML = `
                    <p>User: ${request.username}</p>
                    <p>Date: ${request.date}</p>
                    <p>Status: ${request.status}</p>
                    <button class="accept-btn" data-id="${request.id}">Accept</button>
                    <button class="reject-btn" data-id="${request.id}">Reject</button>
                `;
                requestsContainer.appendChild(requestElement);
            });

            document.querySelectorAll('.accept-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const requestId = this.getAttribute('data-id');
                    updateRequestStatus(requestId, 'accepted');
                });
            });

            document.querySelectorAll('.reject-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const requestId = this.getAttribute('data-id');
                    updateRequestStatus(requestId, 'rejected');
                });
            });
        });
});

function updateRequestStatus(requestId, status) {
    fetch('../data/users.json')
        .then(response => response.json())
        .then(data => {
            const request = data.requests.find(req => req.id === requestId);
            if (request) {
                request.status = status;
                saveUpdatedRequests(data.requests);
            }
        });
}

function saveUpdatedRequests(updatedRequests) {
    // This function would typically send a POST request to the server to save the updated requests.
    console.log('Updated requests:', updatedRequests);
}