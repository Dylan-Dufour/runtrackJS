// Déclaration de la fonction afficherJoursSemaines
function afficherJoursSemaines() {
    // Création d'un tableau contenant les jours de la semaine
    const joursSemaines = [
        "Lundi", 
        "Mardi", 
        "Mercredi", 
        "Jeudi", 
        "Vendredi", 
        "Samedi", 
        "Dimanche"
    ];

    // Utilisation d'une boucle for pour afficher chaque jour
    for (let i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]); // Affiche le jour de la semaine dans la console
    }
}

// Appel de la fonction
afficherJoursSemaines();
