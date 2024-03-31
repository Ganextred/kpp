import { Vector, getRandomInt } from './vector';

export class Vector2D extends Vector {
  v1!: number;
  v2!: number;

  constructor() {
    super();
    this.v1 = getRandomInt(0, 100);
    this.v2 = getRandomInt(0, 100);
    this.name = 'Vector2D';
  }

  override len() {
    return Math.sqrt(this.v1 * this.v1 + this.v2 * this.v2);
  }

  show() {
    return (
      'Назва: ' +
      this.name +
      ' Вектор: {' +
      this.v1 +
      ', ' +
      this.v2 +
      '}' +
      ' Довжина: ' +
      this.len()
    );
  }
}
