import ship from './ship';
// create board factory
// placeShips
// receiveAttack

// properties
//array of ships
// selected array
//
const board = () => {
  let shipsArr = [];
  let selectedArr = [10];

  function placeShips() {
    const array = [[1, [55]], [1, [80]], [1, [10]], [1, [37]], [2, [3, 4]], [2, [76, 77]], [3, [9, 19, 29]], [3, [32, 33, 34]], [4, [53, 63, 73, 83]]];
    for (let i = 0; i < array.length; i += 1) {
      shipsArr.push(ship(array[i][0], array[i][1]));
    }
  }

  function isValid(cell) {
    if (selectedArr.includes(cell)) return false;
    return true;
  }

  const receiveAttack = (cell) => {
    if (isValid(cell)) {
      selectedArr.push(cell);
      for (let i = 0; i < shipsArr.length; i += 1) {
        if (shipsArr[i].hit(cell)) {
          return true;
        }
      }
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
    shipsArr, winner, selectedArr, receiveAttack
  };
};

export { board as default };