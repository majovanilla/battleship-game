import * as playerFunc from '../js/player';

describe('Player functionality', () => {
  const player1 = playerFunc.player('Suman');
  const player2 = playerFunc.player('Majo');

  test('should have username and turn properties', () => {
    expect(player1).toMatchObject({
      username: expect.any(String),
      turn: expect.any(Number),
    });
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