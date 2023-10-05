const players = ['circle', 'cross']
let player = null;
const game = [];

// Check win and change active player
const nextTurn = (i, j) => {
    const playerIndex = players.indexOf(player);
    if (playerIndex < players.length - 1) {
        player = players[playerIndex + 1];
    } else {
        player = players[0];
    }
    const playerSymbol = document.querySelector('#player_symbol');
    if (playerSymbol) {
        playerSymbol.src = `images/${player}--white.svg`;
        playerSymbol.alt = `${player} symbol`;
    }
}
nextTurn();

// Add 100 buttons to the table wrapper
const table = document.querySelector('.game-process__table');
if (table) {
    for (let i = 0; i < 10; i++) {
        game[i] = [];
        for (let j = 0; j < 10; j++) {
            game[i][j] = '';
            const button = document.createElement('button');
            button.classList.add('game-process__cell');
            table.appendChild(button);
            // Playes's turn
            button.addEventListener('click', () => {
                button.classList.add(`game-process__cell--${player}`);
                button.disabled = true;
                game[i][j] = player;
                nextTurn(i, j);
            });
        }
    }
}