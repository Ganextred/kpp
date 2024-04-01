import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeriesLoopFunctionCalculationService {
  constructor() {}

  calculateFunctionValue(x: number): number {
    let result = 0;
    for (let i = 1; i <= 100; i++) {
      result += Math.sin(i * x) / i;
    }
    return result;
  }
}
