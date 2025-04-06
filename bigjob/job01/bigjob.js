document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer l'email et le mot de passe
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('email-error');

    // Vérification du domaine de l'email
    const emailPattern = /^[a-zA-Z0-9._-]+@laplateforme.com$/; // Exemple de domaine
    if (!emailPattern.test(email)) {
        emailError.textContent = "L'email doit être du domaine @laplateforme.com.";
        return;
    }

    // Si l'email est valide, continuez avec l'inscription (ici, juste un log)
    console.log('Inscription réussie avec email:', email);
    alert("Inscription réussie !");
});
