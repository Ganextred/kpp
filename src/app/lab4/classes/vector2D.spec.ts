import { Vector2D } from './vector2D';

describe('Vector2D', () => {
  let vector: Vector2D;

  beforeEach(() => {
    vector = new Vector2D();
  });

  it('should be created with random values between 0 and 100', () => {
    expect(vector.v1).toBeGreaterThanOrEqual(0);
    expect(vector.v1).toBeLessThanOrEqual(100);
    expect(vector.v2).toBeGreaterThanOrEqual(0);
    expect(vector.v2).toBeLessThanOrEqual(100);
  });

  it('should calculate length correctly', () => {
    const expectedLength = Math.sqrt(
      vector.v1 * vector.v1 + vector.v2 * vector.v2
    );
    expect(vector.len()).toBe(expectedLength);
  });

  it('should display vector information correctly', () => {
    const expectedString = `Назва: Vector2D Вектор: {${vector.v1}, ${
      vector.v2
    }} Довжина: ${vector.len()}`;
    expect(vector.show()).toBe(expectedString);
  });
});
