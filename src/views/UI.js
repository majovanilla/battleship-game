import * as board from '../js/board';

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

  function cellClick(e) {
    const cell = e.target.dataset.value;
    console.log(cell);
    const attack = board.receiveAttack(cell);
    console.log(attack);
    if (attack === false) {
      alert('Select an empty cell');
    } else if (attack === 'hit') {
      console.log(e.target);
      e.targe.classList.add('hit-cell');
    } else if (attack === 'miss') {
      console.log(e.target);
      e.target.textContent = 'X';
      e.target.classList.add('missed-cell');
    }
  }

  const eventHandler = () => {
    const domBoard = document.getElementById('computer-board');
    domBoard.addEventListener('click', cellClick);
  };

  return { renderBoard, eventHandler };
})();


export default UI;