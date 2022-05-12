import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input() line: boolean = false;

  barChartOptions: ChartConfiguration['options'] = {
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

  barChartType: ChartType = 'bar';


  @Input() barChartData: ChartData<'bar'> = {
    labels: [ 
      /* '2006', '2007', '2008', '2009', '2010', '2011', '2012' */ 
  ],
    datasets: [
      /* { data: [ 28, 48, 40, 19, 86, 27, 100 ], 
        label: 'Series A'
        },
      { data: [ 28, 48, 40, 19, 86, 107, 90 ], 
        label: 'Series B' 
      } */
    ]
  };

  constructor() { 
    
  }

  ngOnInit(): void {
    if(this.line){
      this.barChartType = 'line';
    }

  }



}
