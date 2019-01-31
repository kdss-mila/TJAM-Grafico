import { Component, ViewChild } from '@angular/core';
import chartJS from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('barCanvas') barCanvas;
  //@ViewChild('pieCanvas') pieCanvas;


  barChart: any;
  //pieChart: any;


  ngAfterViewInit() {
    setTimeout(() => {
      this.barChart = this.getBarChart();
      //this.pieChart = this.getPieChart();
    }, )
  }

   getChart(context, charType, data, options) {
    return new chartJS(context,{
      data,
      options,
      type: charType
    })
  }

  getBarChart() {
    const data = {
      labels: ['vermelho', 'Azul', 'Amarelo', 'verde', 'roxo'],
      datasets: [{
        label: 'numero',
        data: [12, 23, 15, 90, 5],
        backgroundColor: [
          'rgb(255,0,0)',
          'rgb(20,0,255)',
          'rgb(0,255,10)',
          'rgb(255,230,0)',
          'rgb(60,0,70)',

        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginZero: true
          }
        }]
      }
    }
    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);

  }
}
