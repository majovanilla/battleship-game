import * as playerFunc from '../js/player';
import board from '../js/board';

describe('Player functionality', () => {
  const player1 = playerFunc.player('Suman');
  const player2 = playerFunc.player('Majo');
  const playerArr = [player1, player2];

  test('should have username and turn properties', () => {
    expect(player1).toMatchObject({
      username: expect.any(String),
      turn: expect.any(Number),
    });
  });

  test('should select a random player to start the game', () => {
    playerFunc.randomTurn(playerArr);
    expect(player1.turn).not.toEqual(player2.turn);
  });

  test('should switch turns', () => {
    const val1 = player1.turn;
    const val2 = player2.turn;
    playerFunc.changeTurn(player2, player1);
    expect(player1.turn).not.toEqual(val1);
    expect(player2.turn).not.toEqual(val2);
  });

  test('should return random element from an available cells', () => {
    const arr = [2, 5, 7, 8, 6];
    const result = playerFunc.computerSelection(arr);
    expect(arr.includes(result)).toBeTruthy();
  });
});