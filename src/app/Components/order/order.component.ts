import { Component } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  category: Icategory[]=[]
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

}
