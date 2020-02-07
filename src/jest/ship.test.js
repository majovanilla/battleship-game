import ship from '../js/ship';

const ship1 = ship(2, [3, 4, 5]);
const ship2 = ship(2, []);

describe('Ship factory function', () => {

  test('should have correct properties', () => {
    expect(ship1).toMatchObject({
      length: expect.any(Number),
      isSunk: expect.any(Function),
    });
  });

  test('should return the correct properties', () => {
    expect(ship1).toHaveProperty('length');
  });
  test('should not return the hidden properties', () => {
    expect(ship1).not.toHaveProperty('position');
  });
});

describe('hit function', () => {
  test('should remove element if it is in the position array', () => {
    expect(ship1.hit(3)).toBe(true);
  });

  test('should return false if not in the array', () => {
    expect(ship1.hit(38)).toBe(false);
  });

  test('should return false if there is element in the position array', () => {
    expect(ship1.isSunk()).toBe(false);
  });
  test('should return true if position array is empty', () => {
    expect(ship2.isSunk()).toBe(true);
  });
});

