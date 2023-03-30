import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
 PrdID: number = 0;
  prd: Iproduct = {} as Iproduct;
   cat: Icategory[] = [];
  productReturned: Iproduct ={} as Iproduct;

  constructor(private activatedRoute: ActivatedRoute, private productApi: ProductsApiService,private router:Router)
  {

  }

  ngOnInit (): void
  {
    console.log("hello")
   this.productApi.GetAllCategories().subscribe( data => { this.cat = data; } );
   this.PrdID = this.activatedRoute.snapshot.paramMap.get('prdID')
      ? Number(this.activatedRoute.snapshot.paramMap.get('prdID'))
      : 0;
    // Get from API
    this.productApi.GetProductById( this.PrdID ).subscribe(data=> {this.productReturned=data});

  }
  EditProduct()
  {
    this.productApi.UpdateProduct(this.PrdID,this.productReturned)
      .subscribe
      (
      {
        next: ( data ) => {
          console.log(data);
        // this.router.navigate(['/AllProduct'])
        },
        error: ( err ) => { console.log( err.message ) }
      }
    )
  }

  

}
