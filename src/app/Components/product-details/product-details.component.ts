import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';
import { ProductsApiService } from 'src/app/Services/products-api.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit
{
  PrdID: number = 0;
  productReturned: Iproduct | undefined = undefined;
  Birthdate:string='29502041255021';
  creditCard:string='0000000000000000';
  
  constructor ( private activatedRoute: ActivatedRoute, private productService: ProductService,
    private location: Location, private productApi: ProductsApiService ) // to hold parameters on url use activatedRoute
  {

  }
  ngOnInit (): void
  {
    // let prdID=this.activatedRoute.snapshot.paramMap.get('prdID');
     this.PrdID = this.activatedRoute.snapshot.paramMap.get('prdID')
      ? Number(this.activatedRoute.snapshot.paramMap.get('prdID'))
      : 0;
    // Traditional Method
    //let product=this.productService.getproductbyID( this.PrdID );
    // Get from API
    this.productApi.GetProductById( this.PrdID ).subscribe(data=> {this.productReturned=data});
    // if(product)
    // {
    //   this.productReturned=product;
    // }
    // else
    // {
    //   alert ('This Product NotFound');
    //   this.location.back();
    // }

  }
  addItemtocart (item:Iproduct,qty: number )
  {
    
    this.productService.addtocart( item, qty );
  }

}
