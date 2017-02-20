import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import Product from './../models/Product';
import User from './../models/User';
import ProductService from './../services/product.service';
import ShoppingCartService from './../services/shopping-cart.service';
import UserService from './../services/user.service';


@Component({
    selector: 'product-details',
    template: `
        <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img *ngIf="!imgURLEditMode" (dblclick)="imgURLEditMode = true" src="{{product.imageURL}}" /></div>
						  <input #inputURL *ngIf="imgURLEditMode" [value]="product.imageURL"
							(keyup.enter)="finishProductImageEditing(inputURL.value, true)"
							(keyup.esc)="finishProductImageEditing(inputURL.value, false)"
						   />
						</div>
					</div>

					<div class="details col-md-6">
						<h3 class="product-title" *ngIf="!nameEditMode" (dblclick)="nameEditMode = true">{{product.name}}</h3>
						<input #inputName *ngIf="nameEditMode" [value]="product.name"
							(keyup.enter)="finishProductNameEditing(inputName.value, true)"
							(keyup.esc)="finishProductNameEditing(inputName.value, false)" 
						/>
						<div class="rating">
							<div class="stars">
								 <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 1"></span>
                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 2"></span>
                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 3"></span>
                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 4"></span>
                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore == 5"></span>
                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 1"></span>
                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 2"></span>
                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 3"></span>
                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 4"></span>
									({{product.averageScore | number : '1.2-2'}})
							</div>
						</div>

						<p class="product-description" *ngIf="!descriptionEditMode" (dblclick)="descriptionEditMode = true">
                            {{product.description}}
                        </p>
						
						<input #inputDescription *ngIf="descriptionEditMode" [value]="product.description"
							(keyup.enter)="finishProductDescEditing(inputDescription.value, true)"
							(keyup.esc)="finishProductDescEditing(inputDescription.value, false)" 
						/>

						<h4 class="price" *ngIf="!priceEditMode" (dblclick)="priceEditMode = true">current price: <span>{{product.price | currency:'USD':true}}</span></h4>
						<input #inputPrice *ngIf="priceEditMode" [value]="product.price"
							(keyup.enter)="finishProductPriceEditing(inputPrice.value, true)"
							(keyup.esc)="finishProductPriceEditing(inputPrice.value, false)" 
						/>
						<p class="price" *ngIf="!tagsEditMode" (dblclick)="tagsEditMode = true"><strong>TAGS:</strong> {{product.tags}}</p>
						<input #inputTags *ngIf="tagsEditMode" [value]="product.tags"
							(keyup.enter)="finishProductTagsEditing(inputTags.value, true)"
							(keyup.esc)="finishProductTagsEditing(inputTags.value, false)" 
						/>

             <div class="action">
			  <button type="submit" class="btn btn-primary btn-lg" type="button" (click)="saveProductToCart(product.id)">Add to cart <span class="glyphicon glyphicon-shopping-cart"></span></button>

			  <div class="col-md-4">
				 <div class="input-group input-group-lg">
						<select class="form-control" #ratingSelect>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
						<span class="input-group-btn">
						<button type="submit" class="btn btn-primary" type="button" 
						(click)="rateProduct(ratingSelect.value, product.id.toString())"
						[disabled]="this.userService.checkIfUserRatedSelectedProduct(user, product.id.toString())">Rate</button>
						</span>
				  </div>
				</div>
						
            </div>

			<h3 *ngIf="addedToCart">Successfully added to cart!</h3>
			<h3 *ngIf="alreadyInCart">This product is already in your cart!</h3>
					</div>
				</div>
			</div>
		</div>
	</div>

    `
})
export default class ProductDetailsComponent {
    private product: Product;
	private user: User;
	private addedToCart: boolean;
	private alreadyInCart: boolean;
	private nameEditMode: boolean;
	private descriptionEditMode: boolean;
	private priceEditMode: boolean;
	private imgURLEditMode: boolean;
	private tagsEditMode: boolean;
	private math: any;

    constructor (private productService: ProductService, 
	             private route: ActivatedRoute, 
				 private cartService: ShoppingCartService,
				 private userService: UserService) {
        const id = +route.snapshot.params['id'];
        this.product = productService.getProductById(id);
		this.user = userService.getCurrentUser();
		this.math = Math;

		this.addedToCart = false;
		this.nameEditMode = false;
		this.descriptionEditMode = false;
		this.priceEditMode = false;
		this.imgURLEditMode = false;
		this.tagsEditMode = false;
    }

	private saveProductToCart (id:number) {
		 if (this.cartService.saveProductInCartById(id) == false)
		 	this.alreadyInCart = true;
		 else
		 	this.addedToCart = true;
	}
	
   private finishProductNameEditing (value: string, save: boolean) {
	   if (save) {
		   this.productService.updateProductName(this.product, value);
	   }

	   this.nameEditMode = false;
   }

   private finishProductDescEditing (value: string, save: boolean) {
	   if (save) {
		   this.productService.updateProductDescription(this.product, value);
	   }

	   this.descriptionEditMode = false;
   }
    
	private finishProductPriceEditing (value: string, save: boolean) {
	   if (save) {
		   var newPrice: number = parseFloat(value);
		   this.productService.updateProductPrice(this.product, newPrice);
	   }

	   this.priceEditMode = false;
   }
	
	private finishProductImageEditing (value: string, save: boolean) {
	   if (save) {
		  this.productService.updateProductImage(this.product, value);
	   }

	   this.imgURLEditMode = false;
   }

   private finishProductTagsEditing (value: string, save: boolean) {
	   if (save) {
		   var newTags: string[] = value.split(",");
		   this.productService.updateProductTags(this.product, newTags);
	   }

	   this.tagsEditMode = false;
   }

   private rateProduct(rating: string, productId: string) {
	   var checkIfUserRatedProduct = this.userService.checkIfUserRatedSelectedProduct(this.user, productId);

	   if (checkIfUserRatedProduct == false) {
		   var productScores: number[] = this.product.scores.map(s => parseFloat(s));
		   var scoreSum = productScores
		   					.reduce((totalScore, currentScore) => { return totalScore + currentScore}, 0);

		   var numOfScores = 0;
		   productScores.forEach(p => numOfScores += 1);

		   var newAverageScore = (scoreSum + parseFloat(rating)) / (numOfScores + 1);

		   productScores.push(parseFloat(rating));

		   this.productService.updateProductAverageScore(this.product, newAverageScore);
		   this.productService.updateProductScores(this.product, productScores);
		   this.userService.updateUserRatedProducts(this.user, productId);
	   }

	   else {
		   console.log("User already rated that product");
	   }
   }
}