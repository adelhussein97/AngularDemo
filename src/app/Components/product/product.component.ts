import { Component } from '@angular/core';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { Iproduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
@Component( {
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.css' ]
} )
export class ProductComponent
{

  productlist: Iproduct[];
  clientName: string;
  // discount=DiscountOffers['25%']
  store:Store
  constructor ()
  {
    this.clientName = "Adel Hussein";
    this.store=new Store("Main Store",["branch1,branch2"],"") ;
    this.productlist =
      [
        { id:1, name:"Iphone", quantity:5, price:2200, categoryID:1,purchaseDate:new Date(),discount:0.25, imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCcvXPBEVKmWQVcczqPqjFIYMiuD0RI3HcJa2bq-j3A&s" },
        { id:2, name:"Samsung",quantity:1, price:2000, categoryID:2,purchaseDate:new Date(),discount:0, imgUrl:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbtypOQn3kxao-0u9NPXUoKZQMiJgE9rzXlUa3jmcE5wYJOQ9TINnZoWaCHpGgYcMzMhRhCraMtQ&usqp=CAc" },
        { id:3, name:"Apple",quantity:35, price:1000, categoryID:1,purchaseDate:new Date(),discount:0.30, imgUrl:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNBIdF2cgy9BYcWiowe3peWahrPRtTLQWUvR9jbbWG67esXmho8O8KdHx8uYJcW_xa8kv6zda9IWY&usqp=CAc" },
        { id:4, name:"Oppo",quantity:15, price:3500, categoryID:3,purchaseDate:new Date(),discount:0.2, imgUrl:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVU_ibR5jvXb3sEYS4oGMdxSslvDKjHZEXDDyVfmqPLuFaINOBKg9-1SfdWGXagI-dkVZOpQpXPrc&usqp=CAc" },
        { id:5, name:"Relme",quantity:2, price:200, categoryID:1,purchaseDate:new Date(),discount:0, imgUrl:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqX1xj_G6GHgz0c-6Cq15Or3Zm5lveZZzsAFzRbJB2MYyQncdnudj4kJUxdolFp5mo6X1dIa6MRZwOtmWiyxvmvOISFo0U82sZ2Xo32AB2&usqp=CAc" },
        { id:6, name:"Shawmi",quantity:20, price:2000, categoryID:2,purchaseDate:new Date(),discount:0.45, imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZsdlqSeCytX5Ql2drZW8snp-xt8bUKlrSe5qBUcaAMTbC663AtW7u&usqp=CAE&s" },
        { id: 7, name: "Samsung Pro", quantity: 22, price: 3000, categoryID: 3,purchaseDate:new Date(),discount:0, imgUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmSwvc5Tz_I_yVLNZPI4yl0ciohQpuDhRWJ-Z3zGrZ75tKxbE7AvARA9k5wyUEH8DTFqtBZ6m1Vhg&usqp=CAc" },
        { id:8, name:"Relme",quantity:3, price:200, categoryID:3,purchaseDate:new Date(),discount:0.10, imgUrl:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqX1xj_G6GHgz0c-6Cq15Or3Zm5lveZZzsAFzRbJB2MYyQncdnudj4kJUxdolFp5mo6X1dIa6MRZwOtmWiyxvmvOISFo0U82sZ2Xo32AB2&usqp=CAc" },

      ];

  }


  Buy (item:Iproduct)
  {
    if ( item.quantity < 1 )
      return
    else
      item.quantity -= 1;

  }
}





