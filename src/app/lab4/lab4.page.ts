import { Component } from '@angular/core';
import { Vector2D } from './classes/vector2D';
import { Vector } from './classes/vector';
import { Vector3D } from './classes/vector3D';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
})
export class Lab4Page {
  vectors: Vector[] = [];

  constructor() {}

  ras(n: any) {
    this.vectors = []
    n = parseInt(n);
    for (let i = 0; i < n; i++) {
      this.vectors.push(new Vector2D());
      this.vectors.push(new Vector3D());
    }
  }
}
