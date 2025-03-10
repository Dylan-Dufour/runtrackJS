// Fonction qui vérifie si un nombre est premier
function estPremier(nombre) {
    if (nombre <= 1) {
        return false; // Les nombres inférieurs ou égaux à 1 ne sont pas premiers
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; // Si un diviseur est trouvé, le nombre n'est pas premier
        }
    }
    return true; // Le nombre est premier
}

// Fonction qui calcule la somme des deux nombres premiers
function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b; // Si les deux nombres sont premiers, retourne leur somme
    } else {
        return false; // Si l'un des deux n'est pas premier, retourne false
    }
}

// Exemple d'utilisation de la fonction
console.log(sommeNombresPremiers(5, 7));  // 12, car 5 et 7 sont premiers
console.log(sommeNombresPremiers(4, 7));  // false, car 4 n'est pas premier
console.log(sommeNombresPremiers(13, 19)); // 32, car 13 et 19 sont premiers
console.log(sommeNombresPremiers(6, 8));  // false, car ni 6 ni 8 ne sont premiers
