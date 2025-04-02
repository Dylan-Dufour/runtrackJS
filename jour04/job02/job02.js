function jsonValueKey(jsonString, key) {
    try {
        // Convertir la chaîne JSON en objet JavaScript
        const jsonObject = JSON.parse(jsonString);

        // Vérifier si la clé existe dans l'objet
        if (jsonObject.hasOwnProperty(key)) {
            return jsonObject[key]; // Retourner la valeur liée à la clé
        } else {
            return `La clé "${key}" n'existe pas dans l'objet JSON.`;
        }
    } catch (error) {
        // Si le JSON est mal formé, retourner un message d'erreur
        return 'Erreur : La chaîne n\'est pas un JSON valide.';
    }
}
const jsonString = '{"name": "John", "age": 30, "city": "Marseille"}';
const key = "city";

const value = jsonValueKey(jsonString, key);
console.log(value); // Cela affichera "Marseille"
