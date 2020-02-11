import board from '../js/board';

describe('board function', () => {
  const board1 = board();
  const board2 = board();
  board1.receiveAttack(10);

  test('it returns correct properties', () => {
    expect(board1).toMatchObject({
      shipsArr: expect.any(Array),
      hitsArr: expect.any(Array),
      missedArr: expect.any(Array),
    });
  });

  test('should create X ships on the board', () => {
    expect(board1.shipsArr).toHaveLength(9);
  });

  test('should check for valid cell', () => {
    expect(board1.receiveAttack(10)).toBe(false);
  });

  test('should check for hit', () => {
    expect(board1.receiveAttack(9)).toBe('hit');
    expect(board1.hitsArr.length).toBe(2);
  });

  test('should check for miss', () => {
    expect(board1.receiveAttack(0)).toBe('miss');
    expect(board1.missedArr.length).toBe(1);
  });

  test('should return true if there is a winner', () => {
    expect(board1.winner()).toBe(false);
  });
});