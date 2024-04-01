import { Item } from "./Item";

export abstract class Product extends Item {
  expiration_date!: Date;

  is_expired(): boolean{
    return Date.now >= this.expiration_date.getDate;
  }

}