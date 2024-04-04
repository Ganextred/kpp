import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab8PageRoutingModule } from './lab8-routing.module';

import { Lab8Page } from './lab8.page';
import { MyHeaderModule } from '../my-header/my-header.module';
import { MyDinamicFormComponent } from '../my-dinamic-form/my-dinamic-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab8PageRoutingModule,
    MyHeaderModule,
    ReactiveFormsModule,
  ],
  declarations: [Lab8Page, MyDinamicFormComponent],
})
export class Lab8PageModule {}
