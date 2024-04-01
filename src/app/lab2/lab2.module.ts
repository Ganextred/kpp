import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab2PageRoutingModule } from './lab2-routing.module';

import { Lab2Page } from './lab2.page';
import { MyHeaderModule } from '../my-header/my-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab2PageRoutingModule,
    MyHeaderModule
  ],
  declarations: [Lab2Page],
})
export class Lab2PageModule {}
