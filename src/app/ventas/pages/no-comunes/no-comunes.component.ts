import { Component } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Susana';
  genero: string ='femenino';


  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarlo'
  }

  // i18nPlural
  clientes: string[] = ['maria','pedro','baruc','yarib','horte'];

  clienteMapa = {
    '=0' : 'No tenemos ningún cliente esperando.',
    '=1' : 'Tenemos un cliente esperando',
    '=2' : 'Tenemos 2 clientes esperando',
    'other' : 'Tenemos # clientes esperando' 
  };


  cambiarcliente(){

    this.nombre = 'Melissa';
    this.genero = 'femenino';
    this.nombre.length
  }

  borrarclienre(){
    this.clientes.pop();
  }

  //keyValue pipe
  persona = {
    Nombre: 'Baruc',
    Edad: 23,
    Direccion: 'ottawa, canada'
  }

  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  // Async Pipe
  miObservavle = interval(1000); 

  // constructor(){
  //   this.miObservavle.subscribe( console.log ) 
  // }

  valorPromesa = new Promise( ( resolve , reject ) =>{

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);

  } );

}
