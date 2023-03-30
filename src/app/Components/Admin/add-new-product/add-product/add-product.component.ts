import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 cat: Icategory[] = [];
 prd: Iproduct = {} as Iproduct;

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
        this.router.navigate(['/AllProduct'])
        },
        error: ( err ) => { console.log( err.message ) }
      }
    )
  }

}
