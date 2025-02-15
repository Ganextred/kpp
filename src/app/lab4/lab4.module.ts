import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab4PageRoutingModule } from './lab4-routing.module';

import { Lab4Page } from './lab4.page';
import { MyHeaderModule } from '../my-header/my-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab4PageRoutingModule,
    MyHeaderModule
  ],
  declarations: [Lab4Page],
})
export class Lab4PageModule {}
