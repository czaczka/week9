import { Component, OnInit } from '@angular/core';
import { ProddataService } from '../proddata.service';
import { Products } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  products: Products[] = [];
  
  productname:string = "";
  productdesc:string = "";
  productprice:number= 0;
  productunits:number=0;
  productid:number=0 ;
  productobjid:string = "";
  product:Products =  {
    productID: 0,
    name: "",
    description: "",
    price: 0,
    units: 0}
  prod = (localStorage.getItem('product.id'));
  

  constructor(private proddata:ProddataService,private router:Router) { }

  ngOnInit(): void {
    this.proddata.getitem(this.prod).subscribe((data)=>{
      console.log(data);
      this.products = data;
    })
  }

  update(event: any) {
    this.proddata.updateitem(event).subscribe(data =>{
      console.log(data);
      this.router.navigate(['']);
    })
  }

  
  
}

