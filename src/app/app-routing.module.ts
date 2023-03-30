import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';
import { AddProductComponent } from './Components/Admin/add-new-product/add-product/add-product.component';
import { AllProductsComponent } from './Components/Admin/add-new-product/all-products/all-products.component';
import { DeleteProductComponent } from './Components/Admin/add-new-product/delete-product/delete-product.component';
import { EditProductComponent } from './Components/Admin/add-new-product/edit-product/edit-product.component';
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
  { path: 'AllProduct', component: AllProductsComponent, title: 'All Products' },
   { path: 'ProductDetails/:prdID', component: ProductDetailsComponent, title: 'Product Details' },
   { path: 'AddProduct', component: AddProductComponent, title: 'Add Product' },
   { path: 'Edit_Product/:prdID', component: EditProductComponent, title: 'Edit Product' },
   { path: 'Delete_Product/:prdID', component: DeleteProductComponent, title: 'Delete New Product' },
  // for childern /category/product or /category/order
  {path:'**',component:NotfoundComponent,title:'Not Found Page'},  // wild Card Path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
