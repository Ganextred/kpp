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
  s: number = 0;

  constructor() {}

  ras(n: any) {
    this.vectors = [];
    n = parseInt(n);
    this.s = 0;
    for (let i = 0; i < n; i++) {
      let v2d = new Vector2D();
      let v3d = new Vector3D();
      this.vectors.push(v2d);
      this.vectors.push(v3d);
      this.s += v2d.len() + v3d.len();
    }
  }
}
