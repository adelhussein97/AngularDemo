import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit
{
  prd: Iproduct = {} as Iproduct;
  cat: Icategory[] = [];
  constructor(private prdApi:ProductsApiService,private router:Router)
  {
    
  }
  ngOnInit (): void
  {
    this.prdApi.GetAllCategories().subscribe( data => { this.cat = data; } );
    console.log(this.cat)
  }
  AddProduct ()
  {
    this.prdApi.AddNewProduct(this.prd)
      .subscribe
      (
      {
        next: ( data ) => {
          console.log(data);
        this.router.navigate(['/Order'])
        },
        error: ( err ) => { console.log( err.message ) }
      }
    )
  }
}
