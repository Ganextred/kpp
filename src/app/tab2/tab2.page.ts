import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;

  ras(a: any, b: any) {
    this.a = parseInt(a);
    this.b = parseInt(b);
    this.d = 0;

    if (isNaN(this.a) || isNaN(this.b)) {
      throw new Error('Parameter is not a number');
    }

    if (this.a > this.b) {
      return;
    }

    this.a = this.a + this.a % 2
    this.b = this.b - (this.b % 2);

    const n = Math.abs(this.b - this.a) / 2 + 1; 
    this.d = (this.a + this.b) / 2 * n;
  }
}
