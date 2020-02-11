import { checkTurn } from '../js/gameLogic';
import { player } from '../js/player';

const player1 = player('firstPlayer');
const player2 = player('secondPlayer');
test('return true if its player1\'s turn', () => {
  player1.turn = 1;
  expect(checkTurn(player1)).toBe(true);
});

test('return true if its player1\'s turn', () => {
  expect(checkTurn(player2)).toBe(false);
});