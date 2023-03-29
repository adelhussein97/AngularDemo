import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component( {
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.css' ]
} )
export class ProductComponent implements OnInit, OnChanges,AfterViewInit
{

  productlist: Iproduct[]=[];
  clientName: string="";
  // Property Component Decorator Parent to Child from Input Decorator
  @Input() selectedCatID: number = 0;

  store: Store;
  prdCatList: Iproduct[] = [];
  cartList: Iproduct[] = [];
  totalcartPrice: number = 0;
// Create evant Handler for TotalPrice Calling child from parent
  @Output() totalcartPriceEvent: EventEmitter<number>;

  // intailize , inject service  router:Router to navigate from component to another component id
  constructor(private productService: ProductService,private router:Router,private productApi:ProductsApiService)
  {
    // Initialze Event
    this.totalcartPriceEvent = new EventEmitter<number>();
    this.clientName = "Adel Hussein";
    this.store = new Store( "Main Store", [ "branch1,branch2" ], "" );
    // this.productlist =
    //   [
    //     { id: 1, name: "Iphone", quantity: 5, price: 2200, categoryID: 1, purchaseDate: new Date(), discount: 0.25, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCcvXPBEVKmWQVcczqPqjFIYMiuD0RI3HcJa2bq-j3A&s" },
    //     { id: 2, name: "Samsung", quantity: 1, price: 2000, categoryID: 2, purchaseDate: new Date(), discount: 0, imgUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbtypOQn3kxao-0u9NPXUoKZQMiJgE9rzXlUa3jmcE5wYJOQ9TINnZoWaCHpGgYcMzMhRhCraMtQ&usqp=CAc" },
    //     { id: 3, name: "Apple", quantity: 35, price: 1000, categoryID: 1, purchaseDate: new Date(), discount: 0.30, imgUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNBIdF2cgy9BYcWiowe3peWahrPRtTLQWUvR9jbbWG67esXmho8O8KdHx8uYJcW_xa8kv6zda9IWY&usqp=CAc" },
    //     { id: 4, name: "Oppo", quantity: 15, price: 3500, categoryID: 3, purchaseDate: new Date(), discount: 0.2, imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVU_ibR5jvXb3sEYS4oGMdxSslvDKjHZEXDDyVfmqPLuFaINOBKg9-1SfdWGXagI-dkVZOpQpXPrc&usqp=CAc" },
    //     { id: 5, name: "Relme", quantity: 2, price: 200, categoryID: 1, purchaseDate: new Date(), discount: 0, imgUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqX1xj_G6GHgz0c-6Cq15Or3Zm5lveZZzsAFzRbJB2MYyQncdnudj4kJUxdolFp5mo6X1dIa6MRZwOtmWiyxvmvOISFo0U82sZ2Xo32AB2&usqp=CAc" },
    //     { id: 6, name: "Shawmi", quantity: 20, price: 2000, categoryID: 2, purchaseDate: new Date(), discount: 0.45, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZsdlqSeCytX5Ql2drZW8snp-xt8bUKlrSe5qBUcaAMTbC663AtW7u&usqp=CAE&s" },
    //     { id: 7, name: "Samsung Pro", quantity: 22, price: 3000, categoryID: 3, purchaseDate: new Date(), discount: 0, imgUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmSwvc5Tz_I_yVLNZPI4yl0ciohQpuDhRWJ-Z3zGrZ75tKxbE7AvARA9k5wyUEH8DTFqtBZ6m1Vhg&usqp=CAc" },
    //     { id: 8, name: "Relme", quantity: 3, price: 200, categoryID: 3, purchaseDate: new Date(), discount: 0.10, imgUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqX1xj_G6GHgz0c-6Cq15Or3Zm5lveZZzsAFzRbJB2MYyQncdnudj4kJUxdolFp5mo6X1dIa6MRZwOtmWiyxvmvOISFo0U82sZ2Xo32AB2&usqp=CAc" },
    //   ];

  }

  ngOnInit (): void
  {
    // this.getproductCategoryID();
  }

  ngOnChanges():void
{
 //this.prdCatList= this.productService.getproductCategoryID(this.selectedCatID);
 // calling data from API
 
    if ( this.selectedCatID == 0 )
    {
      this.productApi.GetAllProducts().subscribe( data => { this.prdCatList = data; } )
    }
    else
    {
      this.productApi.GetAllProductsByCategoryId( this.selectedCatID ).subscribe( data => { this.prdCatList = data; } );
    }
}
  // Buy (item:Iproduct)
  // {
  //   if ( item.quantity < 1 )
  //     return
  //   else
  //     item.quantity -= 1;
  // }
  addtocart ( item: Iproduct, qty: number ): void
  {
    this.cartList.push( {
      id: item.id, name: item.name, price: item.price, purchaseDate: new Date,
      quantity: qty, categoryID: item.categoryID, discount: item.discount, imgUrl: item.imgUrl
    } );
    item.quantity -= qty;
    this.totalcartPrice += item.price * qty;
    // To Fire Event Total Price use emit
    this.totalcartPriceEvent.emit( this.totalcartPrice );
  }
// Get Product Details based on id
ProductDetails(PrdID:number)
{
  // Router when press details show details of product
  this.router.navigate(['ProductDetails',PrdID]); // Path /Product/2
}
  // Remove item from cart
  remove: boolean = true;
  removeitem (item:Iproduct,index:number)
  {
    this.cartList.splice(index,item.id)


  }



  // getproductCategoryID ()
  // {

    // if PArameter =0 Select All
    // if ( this.selectedCatID == 0 )
    // {
    //   this.prdCatList = Array.from( this.productlist );
    //   return;
    // }
    // // Select Specific ID
    // this.prdCatList = this.productlist.filter( ( prd ) => prd.categoryID == this.selectedCatID );

  // }

  // View child Get Element from html to use it into class
  @ViewChild( 'receiveTotalFromParent' ) totalpriceRef!: ElementRef;

  ngAfterViewInit (): void
  {
    this.totalpriceRef.nativeElement.value = this.totalcartPrice;
  }
}
