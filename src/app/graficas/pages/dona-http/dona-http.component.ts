import { GraficaService } from './../../services/grafica.service';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [  ] ,
        backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor( private grarficaService: GraficaService ) { }

  ngOnInit(): void {
    this.grarficaService.getUsuariosRedes().subscribe( res => {
      console.log("res del servicio ", res);
      const labels :string[] = Object.keys(res);    //Obtiene el nombre de las variables del json en la peticion 
      const values :number[] = Object.values(res);  //Obtiene el valor de las variables del json (Propias de Js "Objects.keys y values")
      console.log(labels);
      console.log(values);

      //MUCHO CUIDADO CON LAS VARIABLES QUE SE QUIEREN GUARDAR Y EN DONDE SE QUIEREN GUARDAR
      for(let i=0 ; i < values.length; i++){
        let valor :number = values[i];
        let cadena :string = labels[i]
        this.doughnutChartData.datasets[0].data.push( valor );
        this.doughnutChartLabels.push(cadena);
      }
    });


    //SEGUNA MANERA DE OBTENER INFORMACION, UTILIZANDO MAP DE RXJS
    this.grarficaService.getUsuariosForMap()
        .subscribe( res => {    //Lo interesante es que puedo destructurizar mis valores en lugar de "res", poniedo "({labels, valores})" o accedes a res.labels, etc. Dependiento lo que regrese en mi map
          console.log("Respuesta utilizando map ", res);
        });
    
  }

}
