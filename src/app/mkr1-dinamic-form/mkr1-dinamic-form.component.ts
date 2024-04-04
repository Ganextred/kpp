import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { RealMatrixSubtractionService } from '../mkr1/service/RealMatrixSubtractionService.service';

@Component({
  selector: 'app-mkr1-dinamic-form',
  templateUrl: './mkr1-dinamic-form.component.html',
  styleUrls: ['./mkr1-dinamic-form.component.scss'],
})
export class Mkr1DinamicFormComponent implements OnInit {
  matrixForm!: FormGroup;
  result_matrix: number[][] = [];

  @Input() max_size: string = '6';

  constructor(
    private fb: FormBuilder,
    private matrixService: RealMatrixSubtractionService
  ) {}

  ngOnInit() {
    const max_size = Number(this.max_size);

    this.matrixForm = this.fb.group({
      height: [4, Validators.max(max_size)],
      width: [4, Validators.max(max_size)],
      rowNum: [2, Validators.required],
      matrix: new FormArray([]),
    });

    this.populateMatrix();
  }

  get matrix(): FormArray {
    return this.matrixForm.get('matrix') as FormArray;
  }

  populateMatrix() {
    let height = this.matrixForm.value.height;
    let width = this.matrixForm.value.width;
    this.matrix.clear();
    for (let i = 0; i < height; i++) {
      let row = new FormArray<FormControl>([]);
      for (let j = 0; j < width; j++) {
        console.log(i, j);
        row.push(new FormControl(0));
      }
      this.matrix.push(row);
    }
  }

  getControls() {
    return (this.matrixForm.get('matrix') as FormArray).controls.map(
      (row) => (row as FormArray).controls
    );
  }

  onSubmit() {
    let inputMatrix = this.matrixForm.value.matrix;
    let rowNum = this.matrixForm.value.rowNum - 1;

    this.result_matrix = this.matrixService.substractFromRows(
      inputMatrix,
      rowNum
    );
  }
}
