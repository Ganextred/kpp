import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}
  a: number = 0;

  matrix: number[][] = [];

  generateMatrix(N: any) {
    this.a = parseInt(N);
    this.matrix = [];

    if (isNaN(this.a)) {
      throw new Error('Parameter is not a number');
    }

    for (let i = 0; i < N; i++) {
      this.matrix.push([]);
      for (let j = 0; j < N; j++) {
        const randomNum = Math.floor(Math.random() * 201) - 100;
        this.matrix[i].push(randomNum);
      }
    }
  }

  isEvenNegative(num: number): boolean {
    return num < 0 && num % 2 === 0;
  }
}
