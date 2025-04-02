const grid = document.getElementById('grid');
const messageElement = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

// Taille de la grille (3x3)
const gridSize = 3;
let tiles = [];
let emptyIndex = 8; // L'index de la case vide (au départ la dernière case)

// L'image utilisée pour les carreaux (remplacez par l'image de votre choix)
const imageUrl = 'logo.png'; // Assurez-vous que l'image est disponible dans le même dossier

// Initialiser le jeu
function initGame() {
    tiles = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
        if (i !== emptyIndex) {
            tiles.push(i);
        }
    }
    tiles.push(emptyIndex); // Ajouter la case vide à la fin
    shuffleTiles();
    renderTiles();
    messageElement.textContent = '';
    restartButton.style.display = 'none';
}

// Mélanger les carreaux
function shuffleTiles() {
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]]; // Échanger les positions
    }
}

// Afficher les carreaux sur la grille
function renderTiles() {
    grid.innerHTML = ''; // Vider la grille
    tiles.forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        if (tile === emptyIndex) {
            tileElement.classList.add('empty');
        } else {
            const x = (tile % gridSize) * 100;
            const y = Math.floor(tile / gridSize) * 100;
            tileElement.style.backgroundImage = `url(${imageUrl})`;
            tileElement.style.backgroundPosition = `-${x}px -${y}px`; // Découper l'image
            tileElement.setAttribute('data-index', index);
            tileElement.addEventListener('click', handleTileClick);
        }
        grid.appendChild(tileElement);
    });
}

// Gérer le clic sur un carreau
function handleTileClick(event) {
    const tileIndex = parseInt(event.target.getAttribute('data-index'));
    const emptyRow = Math.floor(emptyIndex / gridSize);
    const emptyCol = emptyIndex % gridSize;
    const tileRow = Math.floor(tileIndex / gridSize);
    const tileCol = tileIndex % gridSize;

    // Vérifier si le carreau est adjacent à la case vide
    const isAdjacent =
        (Math.abs(emptyRow - tileRow) === 1 && emptyCol === tileCol) ||
        (Math.abs(emptyCol - tileCol) === 1 && emptyRow === tileRow);

    if (isAdjacent) {
        // Échanger les carreaux
        tiles[emptyIndex] = tiles[tileIndex];
        tiles[tileIndex] = emptyIndex;
        emptyIndex = tileIndex;
        renderTiles();
        checkWin();
    }
}

// Vérifier si le jeu est gagné
function checkWin() {
    const isCorrectOrder = tiles.every((tile, index) => tile === index);
    if (isCorrectOrder) {
        messageElement.textContent = "Vous avez gagné !";
        messageElement.classList.add('win');
        messageElement.classList.remove('lose');
        restartButton.style.display = 'inline-block';
    }
}

// Recommencer le jeu
restartButton.addEventListener('click', () => {
    initGame();
});

// Initialiser le jeu au chargement
initGame();
