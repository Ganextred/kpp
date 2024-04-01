import { Component } from '@angular/core';
import { MilkProduct } from './classes/MilckProduct';
import { Toy } from './classes/Toy';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
})
export class Lab6Page {
  result: string[] = [];

  constructor() {}

  ras(){
    let toy = new Toy(3, "lightsaber", 10)
    let milckProduct = new MilkProduct(1, true, 'Milck', 3);

    this.result.push(toy.getInfo())
    this.result.push(milckProduct.getInfo());
  }
}
