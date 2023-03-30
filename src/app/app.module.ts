import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ContentComponent } from './Components/content/content.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from "./Components/product/ProductComponent";
import { OrderComponent } from './Components/order/order.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { CategoryComponent } from './Components/category/category.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HoverDirective } from './Directives/hover.directive';
import { BGColorDirective } from './Directives/bgcolor.directive';
import { CalcBirthdatePipe } from './Pipes/calc-birthdate.pipe';
import { FormatCardvisaPipe } from './Pipes/format-cardvisa.pipe';
import { HttpClientModule} from '@angular/common/http';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';
import { EditProductComponent } from './Components/Admin/add-new-product/edit-product/edit-product.component';
import { DeleteProductComponent } from './Components/Admin/add-new-product/delete-product/delete-product.component';
import { AddProductComponent } from './Components/Admin/add-new-product/add-product/add-product.component';
import { AllProductsComponent } from './Components/Admin/add-new-product/all-products/all-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    ProductComponent,
    OrderComponent,
    NotfoundComponent,
    CategoryComponent,
    ProductDetailsComponent,
    HoverDirective,
    BGColorDirective,
    CalcBirthdatePipe,
    FormatCardvisaPipe,
    AddNewProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    AddProductComponent,
    AllProductsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
