import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mkr1PageRoutingModule } from './mkr1-routing.module';

import { Mkr1Page } from './mkr1.page';
import { MyHeaderModule } from '../my-header/my-header.module';
import { Mkr1DinamicFormComponent } from '../mkr1-dinamic-form/mkr1-dinamic-form.component';
import { RealMatrixSubtractionService } from './service/RealMatrixSubtractionService.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mkr1PageRoutingModule,
    MyHeaderModule,
    ReactiveFormsModule,
  ],
  declarations: [Mkr1Page, Mkr1DinamicFormComponent],
  providers: [RealMatrixSubtractionService]
})
export class Mkr1PageModule {}
