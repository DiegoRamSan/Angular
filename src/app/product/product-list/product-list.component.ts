import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imgwidth:number=250;
  imgMarge:number=2;
  muestraImg:boolean=false;
  listFilter:string='';

  constructor() { }
  muestraImagen():void{
    this.muestraImg=!this.muestraImg;
  }
  products:IProducto[]=[
  {
    "product1":1,
    "prodctName":'Disney',
    "description":'auto de disney progre',
    "listFilter":"",
    "createDate":'Mayo 21, 2011',
    "price":100000,
    "rating":2,
    "imageUrl":"https://th.bing.com/th/id/OIP.jPu17tUUore8z3UITFKviAHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7"    
  },
  {
    "product1":2,
    "prodctName":'Iron Man',
    "description":'auto iron man',
    "listFilter":"",
    "createDate":'Mayo 21, 2011',
    "price":150000,
    "rating":4.5,
    "imageUrl":"https://th.bing.com/th/id/OIP.TWI6b3Dvjo9Sf4lPi9V4zwHaEw?w=274&h=180&c=7&r=0&o=5&pid=1.7"
  }
  ]

  ngOnInit(): void {
  }

}