import { Vector3D } from './vector3D';

describe('Vector3D', () => {
  let vector: Vector3D;

  beforeEach(() => {
    vector = new Vector3D();
  });

  it('should be created with random values between 0 and 100', () => {
    expect(vector.v1).toBeGreaterThanOrEqual(0);
    expect(vector.v1).toBeLessThanOrEqual(100);
    expect(vector.v2).toBeGreaterThanOrEqual(0);
    expect(vector.v2).toBeLessThanOrEqual(100);
    expect(vector.v3).toBeGreaterThanOrEqual(0);
    expect(vector.v3).toBeLessThanOrEqual(100);
  });

  it('should calculate length correctly', () => {
    const expectedLength = Math.sqrt(
      vector.v1 * vector.v1 + vector.v2 * vector.v2 + vector.v3 * vector.v3
    );
    expect(vector.len()).toBe(expectedLength);
  });

  it('should display vector information correctly', () => {
    const expectedString = `Назва: Vector2D Вектор: {${vector.v1}, ${
      vector.v2
    }, ${vector.v3}} Довжина: ${vector.len()}`;
    expect(vector.show()).toBe(expectedString);
  });
});
