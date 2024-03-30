import { Component, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.page.html',
  styleUrls: ['./lab2.page.scss'],
})
export class Lab2Page {
  @ViewChild('lineCanvas') lineCanvas!: ElementRef<HTMLCanvasElement>;
  private lineChart!: Chart;

  graphras(xn: any, xk: any, a: any, h: any) {
    xn = parseFloat(xn);
    xk = parseFloat(xk);
    a = parseFloat(a);
    h = parseFloat(h);

    if (this.lineChart) {
      this.lineChart.destroy();
    }

    const dataX: number[] = [];
    const dataY: number[] = [];

    for (let x = xn; x <= xk; x += h) {
      const y = x <= 0 ? this.f1(x) : x <= a ? this.f2(x) : this.f3(x);
      dataX.push(x);
      dataY.push(y);
    }

    const ctx = this.lineCanvas.nativeElement;

    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dataX,
        datasets: [
          {
            label: 'Function values',
            data: dataY,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });
  }

  f1 = (x: number) =>
    Math.exp(-2 * x) + Math.pow(2 * Math.pow(x, 4) + Math.pow(x, 2) + 1, 1 / 7);

  f2 = (x: number) =>
    (Math.pow(x, 3) + 2 * Math.pow(x, 2) - 4 * x) /
    (Math.pow(x, 5) * (1 / Math.tan(2 * Math.pow(x, 3))));

  f3 = (x: number) =>
    Math.pow(Math.cos(Math.pow(x + 2, 3)), 2) /
    (2 * Math.pow(x, 1 / 3) * Math.sin(Math.pow(x, 3)));
}

