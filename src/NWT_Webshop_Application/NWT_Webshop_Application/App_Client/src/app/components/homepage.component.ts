import { Component } from '@angular/core';
import Product from './../models/Product';
import ProductService from './../services/product.service';
import ShoppingCartService from './../services/shopping-cart.service';

@Component({
    selector: 'homepage-content',
    template:  `
         <!-- Page Content -->
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row carousel-holder">
                    <div class="col-md-12">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img class="slide-image" src="images/car2.png" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="images/car2.png" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="images/car2.png" alt="">
                                </div>
                            </div>
                            <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                               <span class="icon-prev fa-stack fa-lg"></span>
                            </a>
                            <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                 <span class="icon-next fa-stack fa-lg"></span>
                            </a>
                        </div>
                    </div>
        </div>

        <div class="row">
                <div class="page-header">
                  <h1>Promotional items</h1>
                </div>
                    <div class="col-sm-4 col-lg-4 col-md-4" *ngFor="let product of productList">
                        <div class="thumbnail">
                            <img src="{{product.imageURL}}" alt="">
                            <div class="caption">
                                <h4 class="pull-right">{{product.price | currency: 'USD': true}}</h4>
                                <h4><a [routerLink]="['/product', product.id]">{{product.name}}</a>
                                </h4>
                                <p>{{product.description}}</p>
                            </div>
                            <div class="ratings">
                            <p class="pull-right"><a class="btn btn-primary thumb-button" role="button" (click)="saveProductToCart(product.id)">Add to cart</a></p>
                                <p>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

    `
})
export default class HomepageComponent { 
    private productList: Product[];

    constructor(productService: ProductService, private cartService: ShoppingCartService) {
        this.productList = productService.getAllProducts();
    }

    private saveProductToCart(id:number) {
		 this.cartService.saveProductInCartById(id);
	}
}