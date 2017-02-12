import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import PageNotFoundRouteComponent  from './components/page-not-found.component';
import ProductListComponent from './components/product-list.component';
import HomepageComponent from './components/homepage.component';
import UserInfoComponent from './components/user-info.component';
import ShoppingCartComponent from './components/shopping-cart.component';
import ProductDetailsComponent from './components/product-details.component';
import AddProductComponent from './components/add-product.component';


import ProductService from './services/product.service';
import ShoppingCartService from './services/shopping-cart.service';

@NgModule({
  imports:     
  [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations:
  [
     AppComponent, HomepageComponent, PageNotFoundRouteComponent, 
     ProductListComponent, ProductDetailsComponent, AddProductComponent,
     UserInfoComponent,
     ShoppingCartComponent 
  ],
  providers: [ ProductService, ShoppingCartService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
