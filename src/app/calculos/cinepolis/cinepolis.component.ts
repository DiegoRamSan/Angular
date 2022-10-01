import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  total:number=0;
  MaximoBoletos:number=7;
  error:string;

  comprador;
  nombre;
  boletos;
  tarjSi;
  tarjNo;

  procesar(){
      if(this.comprador==1){
          this.MaximoBoletos=7;
          if(this.boletos<=2)
        {
          if(this.tarjSi){
            this.total=this.total-(this.total*0.10);
          }
        }
        else if(this.boletos>=3 && this.boletos<=5)
        {
          this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
          if(this.tarjSi){
            this.total=this.total-(this.total*0.10);
          }
        }
        else if(this.boletos>=6 && this.boletos<=7){
          this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
          if(this.tarjSi){
            this.total=this.total-(this.total*0.10);
          }
        }
        else if(this.boletos>=8){
          this.error=(`error no se puede comprar mas de 7 boletos`);
          }
      }


      if(this.comprador==2){
        this.MaximoBoletos=7*2;
        if(this.boletos<=2)
      {
        if(this.tarjSi){
          this.total=this.total-(this.total*0.10);
        }
      }
      else if(this.boletos>=3 && this.boletos<=5)
      {
        this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
        if(this.tarjSi){
          this.total=this.total-(this.total*0.10);
        }
      }
      else if(this.boletos>=6 && this.boletos<=14){
        this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
        if(this.tarjSi){
          this.total=this.total-(this.total*0.10);
        }
      }
      else if(this.boletos>=15){
        this.error=(`error no se puede comprar mas de 14 boletos`);
        }
    }


    if(this.comprador==3){
      this.MaximoBoletos=7*3;
      if(this.boletos<=2)
    {
      if(this.tarjSi){
        this.total=this.total-(this.total*0.10);
      }
    }
    else if(this.boletos>=3 && this.boletos<=5)
    {
      this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
      if(this.tarjSi){
        this.total=this.total-(this.total*0.10);
      }
    }
    else if(this.boletos>=6 && this.boletos<=21){
      this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
      if(this.tarjSi){
        this.total=this.total-(this.total*0.10);
      }
    }
    else if(this.boletos>=22){
      this.error=(`error no se puede comprar mas de 21 boletos`);
      }
  }


  if(this.comprador==4){
    this.MaximoBoletos=7*4;
    if(this.boletos<=2)
  {
    if(this.tarjSi){
      this.total=this.total-(this.total*0.10);
    }
  }
  else if(this.boletos>=3 && this.boletos<=5)
  {
    this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
    if(this.tarjSi){
      this.total=this.total-(this.total*0.10);
    }
  }
  else if(this.boletos>=6 && this.boletos<=28){
    this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
    if(this.tarjSi){
      this.total=this.total-(this.total*0.10);
    }
  }
  else if(this.boletos>=29){
    this.error=(`error no se puede comprar mas de 28 boletos`);
    }
}


if(this.comprador==5){
  this.MaximoBoletos=7*5;
  if(this.boletos<=2)
{
  if(this.tarjSi){
    this.total=this.total-(this.total*0.10);
  }
}
else if(this.boletos>=3 && this.boletos<=5)
{
  this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
  if(this.tarjSi){
    this.total=this.total-(this.total*0.10);
  }
}
else if(this.boletos>=6 && this.boletos<=35){
  this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
  if(this.tarjSi){
    this.total=this.total-(this.total*0.10);
  }
}
else if(this.boletos>=36){
  this.error=(`error no se puede comprar mas de 35 boletos`);
  }
}
else if(this.comprador >=6){
  this.error=(`error no se puede mas de 5 compradores`);
}
        
    }
  }