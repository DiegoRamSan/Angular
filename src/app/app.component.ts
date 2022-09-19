import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo1Angular';
  
  pelicula={
    titulo:'SuperMan',
    fechalanzamiento:new Date(),
    precio: 235.76,
  }

  duplicarValor(x:number):number{
    return x*2;
  }
}