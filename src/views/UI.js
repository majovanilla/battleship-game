const UI = (() => {
  const mainElement = document.querySelector('.main-section');
  const table = document.createElement('table');

  const renderBoard = (board) => {
    const boardSize = 10;
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    table.setAttribute('id', `${board.player.username}`);
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
    mainElement.append(table);
  };

  /* const markHit = (value, type) => {
   const selectedCell = document.getAttribute()
   }; */

  //const eventHandler =
  return { renderBoard, markHit }
})();


export default UI;