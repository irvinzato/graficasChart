import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  constructor( private http: HttpClient ) { }

  getUsuariosRedes(){
    return this.http.get<any>('http://localhost:3000/grafica');
  }

  //Utilizando operadores de rxjs, "map" me permite retornar lo que yo quiera y/o en el formato que quiera
  getUsuariosForMap(){
    return this.getUsuariosRedes().
          pipe(
            map( res =>{
              const labels = Object.keys(res);
              const valores = Object.values(res);
              return {labels, valores};     //Literal puedo retornar un "hola mundo" o lo que quiera
            })
          )
  }

}
