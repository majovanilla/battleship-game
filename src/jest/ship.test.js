import ship from '../js/ship';

const ship1 = ship(2, 'b', 3);

describe('Ship factory function', () => {

  test('should have correct properties', () => {
    expect(ship1).toMatchObject({
      length: expect.any(Number),
      x: 'b',
      y: 3,
      sinkStatus: expect.any(Boolean),
    });
  });

  test('should return the correct properties', () => {
    expect(ship1).toHaveProperty('length');
  });

  test('should return the correct properties', () => {
    expect(ship1).toHaveProperty('x');
  });

  test('should return the correct properties', () => {
    expect(ship1).not.toHaveProperty('hitArr');
  });
});

