import { RealMatrixSubtractionService } from './RealMatrixSubtractionService.service';

describe('RealMatrixSubtractionService', () => {
  let service: RealMatrixSubtractionService;

  beforeEach(() => {
    service = new RealMatrixSubtractionService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly subtract the row from the matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expectedResult = [
      [0, 0, 0],
      [3, 3, 3],
      [7, 8, 9],
    ];

    expect(service.substractFromRows(matrix, 0)).toEqual(expectedResult);
  });

  it('should return the original matrix when rowNum is out of bounds', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expectedResult = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    expect(service.substractFromRows(matrix, 3)).toEqual(expectedResult);
  });
});
