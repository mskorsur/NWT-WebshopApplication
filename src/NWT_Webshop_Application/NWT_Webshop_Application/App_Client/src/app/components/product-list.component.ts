import { Component, Input, Output } from '@angular/core';
import Product from './../models/Product';
import ProductService from './../services/product.service';
import ShoppingCartService from './../services/shopping-cart.service';

@Component({
    selector: 'product-list',
    template: `
    <div class="container" id="mult-items-main">
        <div class="row">
        <h2>Products: </h2> <hr />
        <div class="col-md-6" *ngFor="let product of productList">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-xs-3 col-md-4 text-center">
                        <img src="{{product.imageURL}}" alt="desc"
                            class="img-rounded img-responsive" />
                    </div>
                    <div class="col-xs-9 col-md-8 section-box">
                        <h3>
                            <a [routerLink]="['/product', product.id]">{{product.name}}</a>
                        </h3>
                        <p>
                            {{product.description}}</p>
                        <h4><strong>{{product.price | currency:'USD':true}}</strong></h4>  
                        <hr />
                        <div class="row rating-desc">
                            <div class="col-md-12">
                                <span class="glyphicon glyphicon-star" *ngFor="let i=index" *ngIf="i < product.averageScore"></span>
                                <span class="glyphicon glyphicon-star-empty" *ngFor="let i=index" *ngIf="i < (5 - Math.Floor(product.averageScore)"></span>({{product.averageScore}})<span class="separator">|</span>
                                <button class="btn btn-primary" (click)="saveProductToCart(product.id)">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>

    `
})

export default class ProductListComponent {
   private productList: Product[];

   constructor(productService: ProductService, private cartService: ShoppingCartService) {
       this.productList = productService.getAllProducts();
   }

   private saveProductToCart(id:number) {
		 this.cartService.saveProductInCartById(id);
	}
}