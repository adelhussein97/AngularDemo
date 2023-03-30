import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit
{
  prdList: Iproduct[] = [];
  constructor(private router:Router,private productApi:ProductsApiService)
  {

  }
  ngOnInit (): void
  {
    this.productApi.GetAllProducts().subscribe( data => { this.prdList = data; } )
  }
  AddProduct()
  {
    this.router.navigate(['AddProduct']);
  }
  ProductDetails(PrdID:number)
  {
    // Router when press details show details of product
    this.router.navigate(['ProductDetails',PrdID]); // Path /Product/2
  }
  Edit_Products(PrdID:number)
  {
    
    console.log("this.PrdID");
    // Router when press details show details of product
    
    this.router.navigate(['Edit_Product',PrdID]); // Path /Product/2
  }
  Delete_Products(PrdID:number)
  {
    // Router when press details show details of product
    this.router.navigate(['Delete_Product',PrdID]); // Path /Product/2
  }

  
}
