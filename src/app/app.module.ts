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
