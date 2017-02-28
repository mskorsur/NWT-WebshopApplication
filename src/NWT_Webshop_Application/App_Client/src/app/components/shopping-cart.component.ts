import { Component, OnInit } from '@angular/core';
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
export default class ShoppingCartComponent implements OnInit {
	private productList: Product[];
	private totalCost: number;

	constructor(private cartService: ShoppingCartService) {	}

	 ngOnInit() {
		this.cartService.getCurrentUserShoppingCart()
			.subscribe(data => { this.productList = data;
						this.totalCost = this.cartService.calculateTotalCost(this.productList); },
					    error => { console.log("Error getting cart items") }); 
	 }

	 /*remove product from the cart, then update product list, mappedProducts and total price */
	 private removeProductButtonClicked(id: number) {
		var currentProductIndex = this.productList.findIndex(prod => prod.id == id);

		this.cartService.removeProductFromCartById(id)
		    .subscribe(response => {
					    /*reset the amount of the product being removed back to 1 */
						this.productList[currentProductIndex].amount = 1;
						/*remove the product from the list */
						this.productList = this.productList.filter(prod => prod.id != id);
						this.totalCost = this.cartService.calculateTotalCost(this.productList);
						console.log("Removed product from the cart");
			 		}, error => { console.log("Error removing product from cart") });
	 }

	 /*send id of the product to the cartService so that the amount of 
	 that product can be updated by the cartService, afterwards call service's 
	 total cost method to get a new total cost */
	 private updateProductAmountAndCost(amount: string, id: number) {
		var currentProductIndex = this.productList.findIndex(prod => prod.id == id);

		this.cartService.updateProductAmount(parseInt(amount), id)
		                .subscribe(response => {
             this.productList[currentProductIndex].amount = parseInt(amount);
			 this.totalCost = this.cartService.calculateTotalCost(this.productList);
             console.log("Updated product amount");
         }, error => { console.log("Error updating product amount") });

	 }


 }
