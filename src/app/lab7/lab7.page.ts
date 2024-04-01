import { Component, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { LoggerService } from './services/logger.service';
import { DirectFunctionCalculationService } from './services/direct-function-calculation.service';
import { SeriesLoopFunctionCalculationService } from './services/series-loop-function-calculation.service';
import { SeriesRecursionFunctionCalculationService } from './services/series-recursion-function-calculation.service';

@Component({
  selector: 'app-lab7',
  templateUrl: './lab7.page.html',
  styleUrls: ['./lab7.page.scss'],
})
export class Lab7Page {
  @ViewChild('lineCanvas') lineCanvas!: ElementRef<HTMLCanvasElement>;
  private lineChart!: Chart;

  constructor(
    private loggerService: LoggerService,
    private directFunctionCalculationService: DirectFunctionCalculationService,
    private seriesLoopFunctionCalculationService: SeriesLoopFunctionCalculationService,
    private seriesRecursionFunctionCalculationService: SeriesRecursionFunctionCalculationService
  ) {}

  graphras(xn: any, xk: any, h: any) {
    xn = parseFloat(xn);
    xk = parseFloat(xk);
    h = parseFloat(h);

    if (this.lineChart) {
      this.lineChart.destroy();
    }

    const dataX: number[] = [];
    const dataY1: number[] = [];
    const dataY2: number[] = [];
    const dataY3: number[] = [];

    for (let x = xn; x <= xk; x += h) {
      const y1 =
        this.directFunctionCalculationService.calculateFunctionValue(x);
      const y2 =
        this.seriesLoopFunctionCalculationService.calculateFunctionValue(x);
      const y3 =
        this.seriesRecursionFunctionCalculationService.calculateFunctionValue(
          x
        );
      dataX.push(x);
      dataY1.push(y1);
      dataY2.push(y2);
      dataY3.push(y3);
      this.loggerService.log(`x: ${x}, y1: ${y1}, y2: ${y2}, y3: ${y3}`);
    }

    this.lineChart = this.getChart(
      dataX,
      [dataY1, dataY2, dataY3],
      ['rgb(75, 192, 192)', 'rgb(255, 99, 132)', 'rgb(54, 162, 235)']
    );
  }

  getChart(dataX: number[], dataY: number[][], colors: string[]) {
    const ctx = this.lineCanvas.nativeElement;
    return new Chart(ctx, {
      type: 'line',
      data: {
        labels: dataX,
        datasets: dataY.map((values, index) => ({
          label: `Function values ${index + 1}`,
          data: values,
          fill: false,
          borderColor: colors[index],
          tension: 0.1,
        })),
      },
    });
  }
}
