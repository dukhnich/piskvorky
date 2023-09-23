// Add 100 buttons to the table wrapper
const table = document.querySelector('.game-process__table');
const cellsCount = 100;
if (table) {
    for (let i = 0; i < cellsCount; i++) {
        const button = document.createElement('button');
        button.classList.add('game-process__cell');
        table.appendChild(button);
    }
}