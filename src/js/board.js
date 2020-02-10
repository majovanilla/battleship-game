import ship from './ship';

const board = (player) => {
  const shipsArr = [];
  const missedArr = [];
  const hitsArr = [];
  const emptyCells = [...Array(100).keys()];

  function placeShips() {
    const array = [[1, [55]], [1, [80]], [1, [10]], [1, [37]], [2, [3, 4]], [2, [76, 77]], [3, [9, 19, 29]], [3, [32, 33, 34]], [4, [53, 63, 73, 83]]];
    for (let i = 0; i < array.length; i += 1) {
      shipsArr.push(ship(array[i][0], array[i][1]));
    }
  }

  function isValid(cell) {
    if (emptyCells.includes(cell)) return true;
    return false;
  }

  function popCell(cell) {
    const index = emptyCells.indexOf(cell);
    emptyCells.splice(index, 1);
  }
  const receiveAttack = (cell) => {
    if (isValid(cell)) {
      for (let i = 0; i < shipsArr.length; i += 1) {
        if (shipsArr[i].hit(cell)) {
          hitsArr.push(cell);
          popCell(cell);
          return true;
        }
      }
      missedArr.push(cell);
      popCell(cell);
      return true;
    }
    return false;
  };

  const winner = () => {
    for (let i = 0; i < shipsArr.length; i += 1) {
      if (!shipsArr[i].isSunk()) {
        return false;
      }
    }
    return true;
  };

  placeShips();
  return {
    player, shipsArr, winner, hitsArr, missedArr, receiveAttack, emptyCells
  };
};

export { board as default };