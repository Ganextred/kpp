import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DirectFunctionCalculationService {
  constructor() {}

  calculateFunctionValue(x: number): number {
    return (Math.PI - x) / 2;
  }
}
