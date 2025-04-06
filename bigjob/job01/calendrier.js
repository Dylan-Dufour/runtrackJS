$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: [
            {
                title: 'Demande de présence',
                start: '2025-05-10',
                end: '2025-05-10',
                description: 'Présence confirmée'
            },
            // Ajouter d'autres événements dynamiquement
        ],
        dayClick: function(date, jsEvent, view) {
            const confirmPresence = confirm('Souhaitez-vous faire une demande de présence pour cette date ?');
            if (confirmPresence) {
                // Ajout de la demande au calendrier (exemple simple)
                $('#calendar').fullCalendar('renderEvent', {
                    title: 'Demande de présence',
                    start: date,
                    end: date,
                    description: 'Présence demandée',
                });
            }
        }
    });
});
