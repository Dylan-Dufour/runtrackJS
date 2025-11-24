// This file manages the calendar functionality, allowing users to select dates and submit presence requests.

document.addEventListener('DOMContentLoaded', function() {
    const calendarElement = document.getElementById('calendar');
    const requestForm = document.getElementById('request-form');
    const dateInput = document.getElementById('date-input');
    const submitButton = document.getElementById('submit-button');
    const messageElement = document.getElementById('message');

    // Initialize the calendar
    const calendar = new FullCalendar.Calendar(calendarElement, {
        initialView: 'dayGridMonth',
        dateClick: function(info) {
            dateInput.value = info.dateStr;
            requestForm.classList.remove('hidden');
        }
    });

    calendar.render();

    // Handle form submission
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedDate = dateInput.value;

        if (selectedDate) {
            // Here you would typically send the request to the server
            // For demonstration, we will just show a success message
            messageElement.textContent = `Demande de présence pour le ${selectedDate} soumise avec succès.`;
            requestForm.reset();
            requestForm.classList.add('hidden');
        } else {
            messageElement.textContent = 'Veuillez sélectionner une date.';
        }
    });
});