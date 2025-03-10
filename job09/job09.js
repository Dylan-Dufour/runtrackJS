// Fonction qui trie un tableau de nombres selon l'ordre spécifié (ascendant ou descendant)
function tri(numbers, order) {
    // Vérification de l'ordre et tri du tableau
    if (order === "asc") {
        // Tri dans l'ordre croissant
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        // Tri dans l'ordre décroissant
        return numbers.sort((a, b) => b - a);
    } else {
        // Si l'ordre est invalide, retourne un message d'erreur
        console.error("L'ordre doit être 'asc' ou 'desc'.");
        return null;
    }
}

// Exemple de test de la fonction avec un tableau de nombres et les différents ordres

let tableau = [34, 12, 5, 89, 2, 45, 12];
console.log("Tri ascendant : ", tri(tableau, "asc"));  // Tri croissant
console.log("Tri descendant : ", tri(tableau, "desc"));  // Tri décroissant
