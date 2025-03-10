// Déclaration de la fonction bisextile
function bisextile(année) {
    // Une année est bissextile si elle est divisible par 4
    // mais non divisible par 100, sauf si elle est divisible par 400
    if ((année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0)) {
        return true;  // L'année est bissextile
    } else {
        return false; // L'année n'est pas bissextile
    }
}

// Test de la fonction avec quelques exemples
console.log(bisextile(2020));  // true, car 2020 est bissextile
console.log(bisextile(2021));  // false, car 2021 n'est pas bissextile
console.log(bisextile(1900));  // false, car 1900 n'est pas bissextile
console.log(bisextile(2000));  // true, car 2000 est bissextile
