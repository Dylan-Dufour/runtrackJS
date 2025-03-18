// Déclaration de la fonction fizzbuzz
function fizzbuzz() {
    // Boucle de 1 à 151
    for (let i = 1; i <= 151; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); // Si le nombre est un multiple de 3 et 5
        } else if (i % 3 === 0) {
            console.log("Fizz"); // Si le nombre est un multiple de 3
        } else if (i % 5 === 0) {
            console.log("Buzz"); // Si le nombre est un multiple de 5
        } else {
            console.log(i); // Si ce n'est ni un multiple de 3 ni de 5
        }
    }
}

// Appel de la fonction
fizzbuzz();
