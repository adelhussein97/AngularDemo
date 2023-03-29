import { Component } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  category: Icategory[] = [];
  totalpriceChange: number = 0;
  selectedCategoryID:number=0
  constructor()
  {
    this.category =
      [
        {id:1,name:"Phones"},
        {id:2,name:"Iphone"},
        { id: 3, name: "TVs" },
        { id: 4, name: "Computers" },
      ];
  }

  // Calling Event To Print total Price
  ReceiveTotalPrice(total:number)
  {
    this.totalpriceChange=total;
  }

}
