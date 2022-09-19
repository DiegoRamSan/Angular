import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  total:number=0;
  numero1;
  numero2:string;
  Sumar:string;
  Restar:string;
  Multiplicar:string;
  Dividir:string;

  constructor() { }
  
  Calculo(){
    Sumar(this.total= parseInt(this.numero1) + parseInt(this.numero2))

    Restar(this.total= parseInt(this.numero1) - parseInt(this.numero2))

    Multiplicar(this.total= parseInt(this.numero1) * parseInt(this.numero2))

    Dividir(this.total= parseInt(this.numero1) / parseInt(this.numero2))
}
}

