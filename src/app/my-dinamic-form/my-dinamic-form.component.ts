import { Component } from '@angular/core';
import { Reader } from '../lab8/Class/Reader';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-dinamic-form',
  templateUrl: './my-dinamic-form.component.html',
  styleUrls: ['./my-dinamic-form.component.scss'],
})
export class MyDinamicFormComponent {
  readerForm!: FormGroup;
  reader!: Reader;

  constructor(private fb: FormBuilder) {
    this.readerForm = this.fb.group({
      readerNumber: [''],
      readerName: [''],
      address: [''],
      email: [''],
      phone: [''],
      books: new FormArray([new FormControl()]),
    });
  }

  addBook() {
    console.log('Add');
    (this.readerForm.controls['books'] as FormArray).push(new FormControl());
  }
  removeBook(i: any) {
    console.log('Delete');
    (this.readerForm.controls['books'] as FormArray).removeAt(i);
  }
  getControls() {
    return (this.readerForm.get('books') as FormArray).controls;
  }

  onSubmit() {
    console.log('submit');
  }
}
