import { Component, OnInit } from '@angular/core';
import { ProddataService } from '../proddata.service';
import { Products } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Products[] = [];

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
  update(id: any) {
    localStorage.removeItem(id);
    localStorage.setItem('product.id', id);

    this.router.navigateByUrl("/update");
  }

}
