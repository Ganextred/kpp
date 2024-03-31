import { Vector } from './vector';

export class Quaternion extends Vector {
  w!: number;
  x!: number;
  y!: number;
  z!: number;

  constructor(w: number, x: number, y: number, z: number) {
    super();
    this.name = 'Quaternion';
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
    this.validateLength(w, x, y, z);
  }

  private validateLength(w: number, x: number, y: number, z: number) {
    let lenght = this.len();
    if (Math.abs(lenght - 1) > 1e-2) {
      throw new Error('Quaternion must have unit length, but was: ' + lenght);
    }
  }

  override len() {
    return Math.sqrt(
      this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z
    );
  }

  show() {
    return (
      'Назва: ' +
      this.name +
      ' Значення: ' +
      this.w +
      this.x +
      'i' +
      this.y +
      'j' +
      this.z +
      'k' +
      ' Довжина: ' +
      this.len()
    );
  }

  multiply(other: Quaternion): Quaternion {
    const w =
      this.w * other.w - this.x * other.x - this.y * other.y - this.z * other.z;
    const x =
      this.w * other.x + this.x * other.w + this.y * other.z - this.z * other.y;
    const y =
      this.w * other.y - this.x * other.z + this.y * other.w + this.z * other.x;
    const z =
      this.w * other.z + this.x * other.y - this.y * other.x + this.z * other.w;
    return new Quaternion(w, x, y, z);
  }

}
