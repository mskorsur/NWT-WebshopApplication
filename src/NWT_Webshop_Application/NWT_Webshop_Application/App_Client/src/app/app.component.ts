import { Component } from '@angular/core';
import ShoppingCartService from './services/shopping-cart.service';

@Component({
  selector: 'my-app',
  template: `
              <nav class="navbar navbar-default navbar-static-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a routerLink="" class="navbar-brand">Webshop</a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a routerLink="/products" routerLinkActive="active" role="button" >MEN <span class="caret"></span></a>
        </li>
        <li class="dropdown">
          <a href="#" role="button">WOMEN <span class="caret"></span></a>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search...">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
      <li role="presentation"><a routerLink="/cart">Shopping cart <span class="badge">{{numberOfShoppingCartItems}}</span></a></li>
        <li role="presentation">
          <a routerLink="/sign" routerLinkActive="active" role="button"><i class="fa fa-user-circle"></i> Hello, add user name </a>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

      <router-outlet></router-outlet>
`
})
export class AppComponent { 

  constructor(private cartService: ShoppingCartService){
  }
  
}
