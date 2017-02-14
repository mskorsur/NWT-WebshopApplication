import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import PageNotFoundRouteComponent  from './components/page-not-found.component';
import ProductListComponent from './components/product-list.component';
import HomepageComponent from './components/homepage.component';
import UserInfoComponent from './components/user-info.component';
import ShoppingCartComponent from './components/shopping-cart.component';
import ProductDetailsComponent from './components/product-details.component';
import AddProductComponent from './components/add-product.component';


const routes: Routes = [
      { path: 'home', component: HomepageComponent },
      { path: 'products/:category', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'profile', component: UserInfoComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: '',   redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundRouteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}