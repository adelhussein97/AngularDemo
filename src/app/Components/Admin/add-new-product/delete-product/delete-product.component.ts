import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
 PrdID: number = 0;
  prd: Iproduct = {} as Iproduct;
  productReturned: Iproduct | undefined = undefined;

  constructor(private activatedRoute: ActivatedRoute, private productApi: ProductsApiService,private router:Router)
  {

  }

  ngOnInit (): void
  {
   
   this.PrdID = this.activatedRoute.snapshot.paramMap.get('prdID')
      ? Number(this.activatedRoute.snapshot.paramMap.get('prdID'))
      : 0;
    // Get from API
    this.productApi.GetProductById( this.PrdID ).subscribe(data=> {this.productReturned=data});

  }
  DeleteProduct()
  {
    debugger
    this.productApi.DeleteProduct(this.PrdID)
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
