import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeriesRecursionFunctionCalculationService {
  constructor() {}

  private calculateSeries(
    x: number,
    i: number = 1,
    result: number = 0
  ): number {
    if (i > 100) return result;
    return this.calculateSeries(x, i + 1, result + Math.sin(i * x) / i);
  }

  calculateFunctionValue(x: number): number {
    return this.calculateSeries(x);
  }
}
