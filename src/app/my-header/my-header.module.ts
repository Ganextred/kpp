import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Import IonicModule from @ionic/angular
import { MyHeaderComponent } from '../my-header/my-header.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [MyHeaderComponent],
  declarations: [MyHeaderComponent],
})
export class MyHeaderModule {}
