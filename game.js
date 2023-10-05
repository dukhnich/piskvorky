const players = ['circle', 'cross']
let currentPlayer = null;
const game = [];

// Change active player
const nextTurn = () => {
    // I use the way with array, because in this way we can add additional playes - ['circle', 'cross', 'ampersand'] - with the same logic 
    const playerIndex = players.indexOf(currentPlayer);
    if (playerIndex < players.length - 1) {
        currentPlayer = players[playerIndex + 1];
    } else {
        currentPlayer = players[0];
    }
    const playerSymbol = document.querySelector('#player_symbol');
    if (playerSymbol) {
        playerSymbol.src = `images/${currentPlayer}--white.svg`;
        playerSymbol.alt = `${currentPlayer} symbol`;
    }
}

// Calculate is currentPlayer win
// @params - current turn's coordinates
// @returns Boolean - is currentPlayer win
const checkEnd = (i, j) => {
    //there will be some logic here
    return false;
}

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
            // Add playes's turn functionality
            button.addEventListener('click', () => {
                button.classList.add(`game-process__cell--${currentPlayer}`);
                button.disabled = true;
                game[i][j] = currentPlayer;
                const isEnd = checkEnd(i, j);
                if (isEnd) {
                    //display congrats message
                    return;
                }
                nextTurn();
            });
        }
    }
}

nextTurn();
