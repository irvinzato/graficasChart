import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    this.barChartData.datasets[0].data[0] = Math.round(Math.random() * 100);
    this.barChartData.datasets[0].data[1] = Math.round(Math.random() * 50);
    this.barChartData.datasets[0].data[2] = Math.round(Math.random() * 80);
    this.barChartData.datasets[0].data[3] = Math.round(Math.random() * 90);
    this.barChartData.datasets[0].data[4] = 100;
    console.log(this.barChartData.datasets[0].data);
   
    /* this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];
    this.chart.update();  */
  }

}
