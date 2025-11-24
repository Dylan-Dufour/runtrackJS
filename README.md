# La Plateforme Presence

## Description
La Plateforme Presence est une application web permettant aux membres de La Plateforme_ de gérer leur présence dans les locaux. Les utilisateurs peuvent s'inscrire, se connecter, et faire des demandes d'autorisation de présence. Les modérateurs et administrateurs peuvent gérer ces demandes et les droits des utilisateurs.

## Fonctionnalités
- **Inscription et Connexion** : Les utilisateurs peuvent créer un compte avec leur adresse email vérifiée.
- **Calendrier** : Interface pour demander une autorisation de présence.
- **Gestion des demandes** : Les modérateurs peuvent accepter ou refuser les demandes de présence.
- **Gestion des rôles** : Les administrateurs peuvent ajouter ou supprimer des modérateurs et administrateurs.

## Structure du Projet
```
la-plateforme-presence
├── assets
│   ├── fonts
│   └── images
├── js
│   ├── auth.js
│   ├── calendar.js
│   ├── moderation.js
│   ├── admin.js
│   └── main.js
├── styles
│   ├── auth.css
│   ├── calendar.css
│   ├── moderation.css
│   ├── admin.css
│   └── main.css
├── data
│   └── users.json
├── index.html
├── login.html
├── calendar.html
├── moderation.html
├── admin.html
└── README.md
```

## Installation
1. Clone le dépôt : `git clone <url-du-dépôt>`
2. Ouvrez le fichier `index.html` dans votre navigateur pour accéder à l'application.

## Technologies Utilisées
- HTML
- CSS (avec Materialize ou Bootstrap)
- JavaScript
- JSON pour la gestion des données

## Auteurs
- La Plateforme_ Team

## License
Ce projet est sous licence MIT.