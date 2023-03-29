import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { ContentComponent } from './Components/content/content.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductComponent } from './Components/product/ProductComponent';

const routes: Routes = [ 
  // Paths ordering is important 
  {path:'',redirectTo:'/Home',pathMatch:'full'}, // Default Page if empty
  {path:'Home',component:ContentComponent,title:'Home Page'},
  {path:'Product',component:ProductComponent,title:'Product Page'},
  {path:'Order',component:OrderComponent,title:'Order Page'},
  {
    path: 'Category', component: CategoryComponent, 
    children:
    [
      { path: 'Product', component: ProductComponent, title: 'Product Page' },
      { path: 'Order', component: OrderComponent, title: 'Order Page' },
     
    ]
  }, 
   { path: 'ProductDetails/:prdID', component: ProductDetailsComponent, title: 'Product Details' },
  // for childern /category/product or /category/order
  {path:'**',component:NotfoundComponent,title:'Not Found Page'},  // wild Card Path
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
