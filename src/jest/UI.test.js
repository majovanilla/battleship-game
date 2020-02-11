
import UI from '../views/UI';
import board from '../js/board';
import { player } from '../js/player';

describe('UI controller', () => {
  test('click cell should trigger event', () => {
    // const table = document.createElement('table');
    // const row = document.createElement('tr');
    // const cell = document.createElement('dt');
    // row.append(cell);
    // table.append(row);
    // cell.setAttribute('data-value', '30');
    // const mockFunction = jest.fn();
    // table.addEventListener('click', mockFunction);
    // cell.click();

    player = player('user');
    board = board(player);
    UI.renderBoard(board);

    // return Promise.resolve().then(() => {
    //   expect(mockFunction).toHaveBeenCalledTimes(1);
    // });
  });
});