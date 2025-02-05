import { TestBed } from '@angular/core/testing';

import { DirectFunctionCalculationService } from './direct-function-calculation.service';

describe('DirectFunctionCalculationService', () => {
  let service: DirectFunctionCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectFunctionCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate value in zero correctly', () => {
    expect(service.calculateFunctionValue(1)).toBeCloseTo((Math.PI - 1) / 2, 2);
  });
});
