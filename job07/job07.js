// Fonction qui détermine si la date est un jour férié, un week-end ou un jour travaillé
function jourTravaille(date) {
    // Liste des jours fériés de l'année 2024 (en France par exemple)
    const joursFeries2024 = [
        new Date('2024-01-01'), // Jour de l'An
        new Date('2024-04-01'), // Lundi de Pâques
        new Date('2024-05-01'), // Fête du Travail
        new Date('2024-07-14'), // Fête Nationale
        new Date('2024-11-01'), // Toussaint
        new Date('2024-11-11'), // Armistice
        new Date('2024-12-25')  // Noël
    ];

    // Fonction pour vérifier si deux dates sont égales (en tenant compte des heures)
    function isSameDate(date1, date2) {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    }

    // Vérification si la date est un jour férié
    for (let férié of joursFeries2024) {
        if (isSameDate(date, férié)) {
            console.log(`Le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} est un jour férié.`);
            return;
        }
    }

    // Vérification si la date est un samedi ou dimanche
    const jourSemaine = date.getDay(); // 0 = dimanche, 6 = samedi
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} est un week-end.`);
        return;
    }

    // Sinon, c'est un jour travaillé
    console.log(`Oui, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} est un jour travaillé.`);
}

// Exemple d'appel de la fonction avec une date
const testDate1 = new Date('2024-05-01'); // Jour férié : Fête du Travail
jourTravaille(testDate1);

const testDate2 = new Date('2024-07-14'); // Jour férié : Fête Nationale
jourTravaille(testDate2);

const testDate3 = new Date('2024-08-15'); // Jour travaillé
jourTravaille(testDate3);

const testDate4 = new Date('2024-04-01'); // Lundi de Pâques (jour férié)
jourTravaille(testDate4);

const testDate5 = new Date('2024-07-20'); // Samedi (week-end)
jourTravaille(testDate5);
