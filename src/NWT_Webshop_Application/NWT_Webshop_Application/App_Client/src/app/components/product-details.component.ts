import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import Product from './../models/Product';
import ProductService from './../services/product.service';
import ShoppingCartService from './../services/shopping-cart.service';


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
								<span class="fa fa-star checked *ngFor="let i=index" *ngIf="i < product.averageScore"></span>
								<span class="fa fa-star" *ngFor="let i=index" *ngIf="i < (5 - Math.Floor(product.averageScore)"></span>
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
						<p class="price"><strong>TAGS:</strong> men, shoes</p>

             <div class="action">
			  <button type="submit" class="btn btn-primary btn-lg" type="button" (click)="saveProductToCart(product.id)">Add to cart <span class="glyphicon glyphicon-shopping-cart"></span></button>

			  <div class="col-md-4">
				 <div class="input-group">
						<select class="form-control" #ratingSelect>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
						<span class="input-group-btn">
						<button type="submit" class="btn btn-primary" type="button" (click)="rateProduct(ratingSelect.value)">Rate</button>
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
	private addedToCart: boolean;
	private alreadyInCart: boolean;
	private nameEditMode: boolean;
	private descriptionEditMode: boolean;
	private priceEditMode: boolean;
	private imgURLEditMode: boolean;

    constructor (productService: ProductService, route: ActivatedRoute, private cartService:ShoppingCartService) {
        const id = +route.snapshot.params['id'];
        this.product = productService.getProductById(id);
		
		this.addedToCart = false;
		this.nameEditMode = false;
		this.descriptionEditMode = false;
		this.priceEditMode = false;
		this.imgURLEditMode = false;
    }

	private saveProductToCart (id:number) {
		 if (this.cartService.saveProductInCartById(id) == false)
		 	this.alreadyInCart = true;
		 else
		 	this.addedToCart = true;
	}
	
   private finishProductNameEditing (value: string, save: boolean) {
	   if (save) {
		   this.product.name = value;
	   }

	   this.nameEditMode = false;
   }

   private finishProductDescEditing (value: string, save: boolean) {
	   if (save) {
		   this.product.description = value;
	   }

	   this.descriptionEditMode = false;
   }
    
	private finishProductPriceEditing (value: string, save: boolean) {
	   if (save) {
		   this.product.price = parseFloat(value);
	   }

	   this.priceEditMode = false;
   }
	
	private finishProductImageEditing (value: string, save: boolean) {
	   if (save) {
		   this.product.imageURL = value;
	   }

	   this.imgURLEditMode = false;
   }

   private rateProduct(value: string) {
	   this.product.averageScore = parseFloat(value);
   }
}