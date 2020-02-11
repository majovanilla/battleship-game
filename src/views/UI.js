//import board from '../js/board';
//import { changeTurn } from '../js/player';
import * as Player from '../js/player';

const UI = (() => {
  const mainElement = document.querySelector('.main-section');

  const renderBoard = (board) => {
    const table = document.createElement('table');
    const boardSize = 10;
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    table.setAttribute('id', `${board.player.username}-board`);
    for (let i = 0; i <= boardSize; i += 1) {
      const row = document.createElement('tr');
      for (let j = 0; j <= boardSize; j += 1) {
        const cell = document.createElement('td');
        if (i !== 0 && j !== 0) {
          cell.setAttribute('data-value', ((i - 1) * 10 + (j - 1)));
          cell.classList.add('cell');
          cell.setAttribute('id', ((i - 1) * 10 + (j - 1)));
        } else if (i === 0 && j > 0) {
          cell.textContent = j;
        } else if (i > 0 && j === 0) {
          cell.textContent = letters[i - 1];
        }
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    table.classList.add('board');
    mainElement.append(table);
  };

  /* const markHit = (value, type) => {
   const selectedCell = document.getAttribute()
   }; */


  return { renderBoard };
})();


function markCell(cell, gameBoard, selectedCell) {
  const attack = gameBoard.receiveAttack(cell);

  if (attack === false) {
    alert('Select an empty cell');
  } else if (attack === 'hit') {
    selectedCell.classList.add('hit-cell');
  } else if (attack === 'miss') {
    selectedCell.textContent = 'X';
    selectedCell.classList.add('missed-cell');
  }
}
const runGame = (player1, player2, gameBoard1, gameBoard2) => {

  function cellClick(e) {
    const cell = parseInt(e.target.dataset.value, 10);
    markCell(cell, gameBoard2, e.target);
    if (gameBoard2.winner()) {
      alert(`${player1.username} is winner`);
    } else {
      const computerCell = Player.computerSelection(gameBoard1.emptyCells);
      console.log(document.getElementById(`${gameBoard1.player.username}-board`).querySelector('id=' + computerCell));

      const selectedCell = document.getElementById(`${gameBoard1.player.username}-board`).getElementById(`${computerCell}`);
      markCell(computerCell, gameBoard1, selectedCell);
      if (gameBoard1.winner()) {
        alert(`${player2.username} is winner`);
      }
    }

    //changeTurn(player1, player2);
  }

  const eventHandler = () => {
    const domBoard = document.getElementById('computer-board');
    domBoard.addEventListener('click', cellClick);

  };

  eventHandler();

};

export { UI, runGame, markCell };