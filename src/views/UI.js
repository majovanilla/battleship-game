import * as Player from '../js/player';
import board from '../js/board';
import shipsArr from '../js/board';

const UI = (() => {
  const mainElement = document.querySelector('.main-section');

  const renderBoard = (board, render = false) => {
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

  return { mainElement, renderBoard };
})();


function markCell(cell, gameBoard, selectedCell) {
  const attack = gameBoard.receiveAttack(cell);

  if (attack === false) {
    alert('Select an empty cell');
    return false;
  }
  if (attack === 'hit') {
    selectedCell.classList.add('hit-cell');
    return true;
  }
  if (attack === 'miss') {
    selectedCell.textContent = 'X';
    selectedCell.classList.add('missed-cell');
    return true;
  }
}

// function renderShips(board) {
//   const arr = board.shipsArr;
//   arr.forEach(element => {

//   });
// }

const runGame = (player1, player2, gameBoard1, gameBoard2) => {
  let gameOver = false;

  function findCell(computerCell) {
    const allCells = document.getElementById(`${gameBoard1.player.username}-board`).querySelectorAll('.cell');
    for (let i = 0; i < allCells.length; i += 1) {
      if (allCells[i].dataset.value === computerCell.toString()) {
        return allCells[i];
      }
    }
  }

  function resetGame() {
    gameBoard1.reset();
    gameBoard2.reset();
    UI.mainElement.innerHTML = '';
    UI.renderBoard(gameBoard1);
    UI.renderBoard(gameBoard2);
  }

  function cellClick(e) {
    const cell = parseInt(e.target.dataset.value, 10);
    if (markCell(cell, gameBoard2, e.target)) {
      if (gameBoard2.winner()) {
        alert(`${player1.username} is winner`);
        gameOver = true;
      }
      setTimeout(() => {
        const computerCell = Player.computerSelection(gameBoard1.emptyCells);
        const selectedCell = findCell(computerCell);
        markCell(computerCell, gameBoard1, selectedCell);
        if (gameBoard1.winner()) {
          alert(`${player2.username} is winner`);
          gameOver = true;
        }
      }, 500);
    }
    return gameOver;
  }

  const eventHandler = () => {
    const domBoard = document.getElementById('computer-board');
    domBoard.addEventListener('click', cellClick);
  };

  eventHandler();

  return { resetGame };
};

export { UI, runGame, markCell };