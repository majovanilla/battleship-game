import board from '../js/board';

describe('board function', () => {
  const board1 = board();
  const board2 = board();
  test('it returns correct properties', () => {
    expect(board1).toMatchObject({
      shipsArr: expect.any(Array),
      selectedArr: expect.any(Array),
    });
  });

  test('should create X ships on the board', () => {
    expect(board1.shipsArr).toHaveLength(9);
  });

  /*  test('should check for valid cell', () => {
     expect(board1.receiveAttack(5)).toBe(true);
   });
  */

  test('should check for miss', () => {
    expect(board1.receiveAttack(10)).toBe(false);
  });

  test('should check for hit', () => {
    expect(board1.receiveAttack(80)).toBe(true);
  });


  test('should return true if there is a winner', () => {
    expect(board1.winner()).toBe(false);
  });
});