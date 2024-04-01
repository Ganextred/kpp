import { PriceConverter } from "../interfaces/PriceConverter";
import { DefaultPriceConverter } from "./DefaultPriceConverter";

export abstract class Item {
  name!: string;
  price!: number;
  curency: string = "USD";
  priceConverter: PriceConverter = new DefaultPriceConverter(this.curency);

  constructor(name: string, price: number){
    this.name = name;
    this.price = price;
  };

  getPrice(currency: string): number{
    return this.priceConverter.convert(currency, this.price)
  }

  abstract getInfo(): string;
}