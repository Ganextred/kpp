export abstract class Vector {
  name: string = '';
  constructor() {}
  abstract len(): number;
  abstract show(): string;
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
