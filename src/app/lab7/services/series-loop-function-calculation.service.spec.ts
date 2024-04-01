import { TestBed } from '@angular/core/testing';

import { SeriesLoopFunctionCalculationService } from './series-loop-function-calculation.service';

describe('SeriesLoopFunctionCalculationService', () => {
  let service: SeriesLoopFunctionCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesLoopFunctionCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate value in zero correctly', () => {
    expect(service.calculateFunctionValue(2)).toBeCloseTo((Math.PI - 2) / 2, 1);
  });
});
