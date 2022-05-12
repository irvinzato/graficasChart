import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent implements OnInit {

  productoData: ChartData<'bar'> = {
    labels: [ '2010', '2011', '2012', '2013', '2014' ],
    datasets: [
      { data: [200, 100, 50, 355, 35], 
        label: 'Carros'
        }
    ]
  };

  proovedoresData: ChartData<'bar'> = {
    labels: [ '2010', '2011', '2012', '2013', '2014', '2015', '2016' ],
    datasets: [
      { data: [100, 50, 24, 36, 35 ,53, 24], 
        label: 'Vendedor Lopez'
        },
      { data: [ 23, 153, 23, 56, 75, 43, 67 ], 
        label: 'Vendedor Jose' 
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
