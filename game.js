import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

// Create players' array;
const players = [{name: 'circle', symbol: 'o'}, {name: 'cross', symbol: 'x'}]
// Format players' array to easy find form;
const playerIndexes = players.map(p => p.name)
// Init player variable;
let currentPlayer = null;

// Create array with 100 empty symbols;
const game = Array(100).fill('_');

// Change active player
const nextTurn = () => {
    // I use the way with array, because in this way we can add additional playes - ['circle', 'cross', 'ampersand'] - with the same logic 
    const playerIndex = currentPlayer ? playerIndexes.indexOf(currentPlayer.name) : -1;
    if (playerIndex < players.length - 1) {
        currentPlayer = players[playerIndex + 1];
    } else {
        currentPlayer = players[0];
    }
    const playerSymbol = document.querySelector('#player_symbol');
    if (playerSymbol) {
        playerSymbol.src = `images/${currentPlayer.name}--white.svg`;
        playerSymbol.alt = `${currentPlayer.name} symbol`;
    }
}

const renderResult = (result) => {
    // Create a final text according to conditionals
    let text = '';
    switch (result) {
        case 'o': text = 'Vyhralo kolečko';
            break;
        case 'x': text = 'Vyhral křížek';
            break;
        default: text = 'Hra skončila nerozhodně';
    }
    alert(text);
    // Start a new game
    location.reload();
};

// Add 100 buttons to the table wrapper
const table = document.querySelector('.game-process__table');
if (table) {
    for (let i = 0; i < game.length; i++) {
        const button = document.createElement('button');
        button.classList.add('game-process__cell');
        table.appendChild(button);
        // Add playes's turn functionality
        button.addEventListener('click', () => {
            button.classList.add(`game-process__cell--${currentPlayer.name}`);
            button.disabled = true;
            game[i] = currentPlayer.symbol;
            const result = findWinner(game);
            if (result) {
                setTimeout(() => renderResult(result), 100);
                return;
            }
            nextTurn();
        });
    }
}

const restart = document.querySelector('#restart');
if (restart) {
    restart.addEventListener('click', (e) => {
        if (!confirm('Opravdu chceš zacít znovu?')) {
            e.preventDefault();
        }
    })
}

nextTurn();
