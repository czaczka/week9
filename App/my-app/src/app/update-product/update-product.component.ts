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
  
  
  prod = (localStorage.getItem('product.id'));
  
  

  constructor(private proddata:ProddataService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.prod);
    this.proddata.getitem(this.prod).subscribe((data)=>{
      console.log(data);
      this.products = data;
    })
  }

  update(event: any) {
    event.preventDefault();

    this.proddata.updateitem(event).subscribe(data =>{
      console.log("posting"+data);
      this.router.navigate(['']);
    })
  }

  update2(prod:any) {
    console.log(prod);
  
    
    this.proddata.updateitem(prod).subscribe(data =>{
      console.log("posting"+data);
      this.router.navigate(['']);
    })
  }

  
  
}

