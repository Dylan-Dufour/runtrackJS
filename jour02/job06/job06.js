// Séquence du Code Konami (touche par touche)
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

// Fonction qui détecte la saisie des touches
document.addEventListener('keydown', (event) => {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.body.classList.add('konami-active'); // Ajout du style
            konamiIndex = 0; // Réinitialise pour le cas où on veut le refaire
        }
    } else {
        konamiIndex = 0; // Si la séquence est interrompue, recommence
    }
});
