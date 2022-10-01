import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent{

  constructor() {
    this.totalA = [];
  }

ngOnInit():void{
}

total:number=0;
totalA:string[];
numero;

tabla(){
  for(let i=0; i<=10; ++i){
this.totalA[i]=(`${this.numero} x ${i} = ${this.numero*i}`+"\n");
}
}
}