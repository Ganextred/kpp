import { AgeRestricted } from '../interfaces/AgeRestricted';
import { Item } from './Item';

export class Toy extends Item implements AgeRestricted {
  minimumAge!: number;

  constructor(minimumAge: number, name: string, price: number) {
    super(name, price);
    this.minimumAge = minimumAge;
  }

  override getInfo(): string {
    return (
      'Toy, minimumAge: ' +
      this.minimumAge +
      ', name: ' +
      this.name +
      ', price(USD): ' +
      this.getPrice('USD').toString()
    );
  }
}
