import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
 
import { AppComponent }   from './app.component';
import PageNotFoundRouteComponent  from './components/page-not-found.component';
import ProductListComponent from './components/product-list.component';
import HomepageComponent from './components/homepage.component';
import UserInfoComponent from './components/user-info.component';
import ShoppingCartComponent from './components/shopping-cart.component';
import ProductDetailsComponent from './components/product-details.component';
import AddProductComponent from './components/add-product.component';
import SearchBarComponent from './components/search-bar.component';


import ProductService from './services/product.service';
import ShoppingCartService from './services/shopping-cart.service';
import UserService from './services/user.service';

@NgModule({
  imports:     
  [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  declarations:
  [
     AppComponent, HomepageComponent, PageNotFoundRouteComponent, 
     ProductListComponent, ProductDetailsComponent, AddProductComponent,
     UserInfoComponent, SearchBarComponent,
     ShoppingCartComponent 
  ],
  providers: [ ProductService, ShoppingCartService, UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
