import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab3PageRoutingModule } from './lab3-routing.module';

import { Lab3Page } from './lab3.page';
import { MyHeaderModule } from '../my-header/my-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab3PageRoutingModule,
    MyHeaderModule
  ],
  declarations: [Lab3Page],
})
export class Lab3PageModule {}
