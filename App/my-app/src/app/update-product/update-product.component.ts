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
  constructor(private proddata:ProddataService,private router:Router) { }

  ngOnInit(): void {
    this.proddata.getlist().subscribe((data)=>{
      this.products = data;
    })
  }
  deleteproduct(id: any) {
    if (confirm("are you sure you want to delete this item")){
      this.proddata.deleteitem(id).subscribe((data)=>{
        this.products = data;
      })
    }
  }
  update(event:any){
    event.preventDefault();
    if(this.productid ==null){
      console.log("error");
    } else {
      this.product.productID = this.productid;
      this.product.description= this.productdesc;
      this.product.name = this.productname;
      this.product.price = this.productprice;
      this.product.units = this.productunits;

       
      this.proddata.updateitem(this.product).subscribe((data)=>{
        console.log(data);
        this.productid = 0;
        this.productname= "";
        this.productdesc="";
        this.productprice=0;
        this.productunits=0;
      });
    }
  }

}
