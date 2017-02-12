import { Component } from '@angular/core';
import Product from './../models/Product';
import ShoppingCartService from './../services/shopping-cart.service';

@Component({
    selector: 'shopping-cart',
    template: `
    <div class="container">
	<div class="row">
		<div class="col-xs-8">
			<div class="panel panel-primary">
				<div class="panel-heading">
					<div class="panel-title">
						<div class="row">
							<div class="col-xs-6">
								<h5><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
							</div>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="row cart-item" *ngFor="let product of productList">
						<div class="col-xs-2"><img class="img-responsive" src="{{product.imageURL}}">
						</div>
						<div class="col-xs-4">
							<h4 class="product-name"><strong>{{product.name}}</strong></h4>
							<h4><small>{{product.description}}</small></h4>
						</div>
						<div class="col-xs-6">
							<div class="col-xs-6 text-right">
								<h4><strong>{{product.price | currency:'USD':true}} <span class="text-muted">x</span></strong></h4>
							</div>
							<div class="col-xs-4">
								<input type="text" class="form-control input-sm" value="{{product.amount}}" #amountInput 
								 (keyup.enter)="updateProductAmountAndCost(amountInput.value, product.id)"/>
							</div>
							<div class="col-xs-2">
								<button type="button" class="btn btn-primary" (click)="removeProductButtonClicked(product.id)">
									<span class="glyphicon glyphicon-remove"></span>
								</button>										
							</div>
						</div>
						<hr>
					</div>
				</div>
				
				<div class="panel-footer">
					<div class="row text-center">
						<div class="col-xs-9">
							<h4 class="text-right">Total <strong>{{totalCost | currency:'USD':true}}</strong></h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    `
})
export default class ShoppingCartComponent {
	private productList: Product[];
	private totalCost: number;

	constructor(private cartService: ShoppingCartService) {
		this.productList = cartService.returnAllProducts();
		this.totalCost = cartService.calculateTotalCost();
	 }

	 

	 /*remove product from the cart, then update product list, mappedProducts and total price */
	 private removeProductButtonClicked(id: number) {
		this.cartService.removeProductFromCartById(id);
		this.productList = this.cartService.returnAllProducts();
		this.totalCost = this.cartService.calculateTotalCost();
	 }

	 /*send id of the product to the cartService so that the amount of 
	 that product can be updated by the cartService, afterwards call service's 
	 total cost method to get a new total cost */
	 private updateProductAmountAndCost(amount: number, id: number) {
		this.cartService.updateProductAmount(amount, id);
		this.totalCost = this.cartService.calculateTotalCost();
	 }


 }
