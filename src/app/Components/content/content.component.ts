import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  item1: Product = new Product( "Iphone", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCcvXPBEVKmWQVcczqPqjFIYMiuD0RI3HcJa2bq-j3A&s" );
  item2: Product = new Product( "Samsung", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbtypOQn3kxao-0u9NPXUoKZQMiJgE9rzXlUa3jmcE5wYJOQ9TINnZoWaCHpGgYcMzMhRhCraMtQ&usqp=CAc" );
  item3: Product = new Product( "Apple", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNBIdF2cgy9BYcWiowe3peWahrPRtTLQWUvR9jbbWG67esXmho8O8KdHx8uYJcW_xa8kv6zda9IWY&usqp=CAc" );
  item4: Product = new Product( "Oppo", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVU_ibR5jvXb3sEYS4oGMdxSslvDKjHZEXDDyVfmqPLuFaINOBKg9-1SfdWGXagI-dkVZOpQpXPrc&usqp=CAc" );
  item5: Product = new Product( "Relme", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqX1xj_G6GHgz0c-6Cq15Or3Zm5lveZZzsAFzRbJB2MYyQncdnudj4kJUxdolFp5mo6X1dIa6MRZwOtmWiyxvmvOISFo0U82sZ2Xo32AB2&usqp=CAc" );
  item6: Product = new Product( "Shawmi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZsdlqSeCytX5Ql2drZW8snp-xt8bUKlrSe5qBUcaAMTbC663AtW7u&usqp=CAE&s" );
  item7: Product = new Product( "Samsung Pro", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmSwvc5Tz_I_yVLNZPI4yl0ciohQpuDhRWJ-Z3zGrZ75tKxbE7AvARA9k5wyUEH8DTFqtBZ6m1Vhg&usqp=CAc" );



  prdItems: Product[] = [this.item1,this.item2,this.item3,this.item4,this.item5,this.item6,this.item7];

}


