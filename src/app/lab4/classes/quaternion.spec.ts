import { Quaternion } from './quaternion';

describe('Quaternion', () => {
  let quaternion: Quaternion;

  beforeEach(() => {
    quaternion = new Quaternion(1, 0, 0, 0); 
  });

  it('should be created', () => {
    expect(quaternion).toBeTruthy();
  });

  it('should have unit length after construction', () => {
    expect(quaternion.len()).toBeCloseTo(1, 6); 
  });

  it('should throw error if constructed with non-unit length', () => {
    expect(() => new Quaternion(2, 0, 0, 0)).toThrowError(
      'Quaternion must have unit length, but was: 2'
    );
  });

  it('should correctly multiply with another quaternion', () => {
    const q1 = new Quaternion(0.98,  0.08,  0.17,  -0.05);
    const q2 = new Quaternion(0.7071,  0.7071,  0.0,   0.0);
    const result = q1.multiply(q2);
    expect(result.w).toBeCloseTo(0.636, 3);+
    expect(result.x).toBeCloseTo(0.75, 3);
    expect(result.y).toBeCloseTo(0.085, 3);
    expect(result.z).toBeCloseTo(-0.156, 3);
  });

});
