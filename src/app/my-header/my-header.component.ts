import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent {

  @Input() name: string = "Лабороторна робота"

  constructor() { }

}
