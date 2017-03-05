import { Component, OnInit } from '@angular/core';
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
                                    <img class="slide-image" src="/Content/header.jpg" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="/Content/header2.jpg" alt="">
                                </div>
                                <div class="item">
                                    <img class="slide-image" src="/Content/header.jpg" alt="">
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
                    <div class="col-sm-4 col-lg-4 col-md-4" *ngFor="let product of promoProducts">
                        <div class="thumbnail">
                            <img src="{{product.imageURL}}" alt="">
                            <div class="caption">
                                <h4 class="pull-right">{{product.price | currency: 'USD': true}}</h4>
                                <h4><a [routerLink]="['/product', product.id]">{{product.name}}</a>
                                </h4>
                                <p>{{product.description}}</p>
                            </div>
                            <div class="ratings">
                            <p class="pull-right">
                            <a class="btn btn-primary thumb-button" role="button" #cartButton (click)="saveProductToCart(product.id, cartButton)">Add to cart</a></p>
                                <p>
                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 1"></span>
                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 2"></span>
                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 3"></span>
                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 4"></span>
                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore == 5"></span>
                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 1"></span>
                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 2"></span>
                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 3"></span>
                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 4"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

    `
})
export default class HomepageComponent implements OnInit { 
    private math: any;
    private promoProducts: Product[];

    constructor(private productService: ProductService, 
                private cartService: ShoppingCartService) {
        this.math = Math;
    }

    ngOnInit() {
        this.productService.getAllProducts()
            .subscribe(data => { this.promoProducts = this.filterPromoProducts(data); },
                       error => { console.log("Error getting promo products") });
    }

    private saveProductToCart(id:number, cartButton: HTMLButtonElement) {
         this.cartService.getCurrentUserShoppingCart()
             .subscribe(data => {
                 if (this.cartService.isProductInCart(id, data)) {
                    console.log("The product is already in the cart");
                    cartButton.innerText = "Already in cart!";

                 }
                 else {
                     this.cartService.saveProductInCartById(id);
                     cartButton.innerText = "Added!";
                 }
             }, error => { console.log("Error sending to cart") });	 
	}

    private filterPromoProducts(products: Product[]): Product[] {
        return products.filter(p => p.tags.find(t => t == "promo"));
    }
}