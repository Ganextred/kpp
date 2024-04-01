import { LactoseCompatible } from '../interfaces/LactoseCompatible';
import { Liquid } from '../interfaces/Liquid';
import { Product } from './Product';

export class MilkProduct extends Product implements Liquid, LactoseCompatible {
  flammable: boolean = false; 
  containsLactose: boolean; 
  volume: number;

  constructor(
    volume: number,
    containsLactose: boolean, 
    name: string,
    price: number
  ) {
    super(name, price);
    this.volume = volume;
    this.containsLactose = containsLactose;
  }

  can_be_taken_on_plain() {
    return this.volume <= 0.1;
  }

  override getInfo(): string {
    return (
      'Milk Product, volume: ' +
      this.volume +
      ', contains lactose: ' +
      this.containsLactose +
      ', name: ' +
      this.name +
      ', price(USD): ' +
      this.getPrice('USD')
    );
  }
}
