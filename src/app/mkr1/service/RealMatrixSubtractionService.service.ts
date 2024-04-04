import { Injectable } from '@angular/core';

@Injectable()
export class RealMatrixSubtractionService {
  substractFromRows(matrix: number[][], rowNum: number): number[][] {
    const substractValue = matrix[rowNum];

    const result = matrix.map((row, index) => {
      if (index !== rowNum) {
        return row.map((val, i) => val - substractValue[i]);
      }

      return row;
    });

    return result;
  }
}
