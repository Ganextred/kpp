import { TestBed } from '@angular/core/testing';

import { SeriesRecursionFunctionCalculationService } from './series-recursion-function-calculation.service';

describe('SeriesRecursionFunctionCalculationService', () => {
  let service: SeriesRecursionFunctionCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesRecursionFunctionCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate value in zero correctly', () => {
    expect(service.calculateFunctionValue(2)).toBeCloseTo((Math.PI - 2) / 2, 1)
  })
});
