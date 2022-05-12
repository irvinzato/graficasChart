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
      { data: [], 
        label: 'Series A',
         backgroundColor: '#ED5F76', 
         hoverBackgroundColor: '#000000' 
        },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], 
        label: 'Series B' 
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    this.llenadoDeGrafica();
  }

  llenadoDeGrafica(){
    this.barChartData.datasets[0].data.push(Math.round(Math.random() * 100));
    this.barChartData.datasets[0].data.push(Math.round(Math.random() * 50));
    this.barChartData.datasets[0].data.push(Math.round(Math.random() * 80));
    this.barChartData.datasets[0].data.push(Math.round(Math.random() * 90));
    this.barChartData.datasets[0].data.push(Math.round(Math.random() * 90));
    this.barChartData.datasets[0].data.push(Math.round(Math.random() * 90));
    this.barChartData.datasets[0].data.push(100);
  }

  public randomize(): void {

    location.reload();    //PARA RECARGAR LA PAGINA Y LEA EL DATA. EN MI TS NO RECONOCE "this.chart?.update();"
   
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
