import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import Product from './../models/Product';
import ProductService from './../services/product.service';

@Component({
    selector: 'add-product',
    template: `
    <div class="container">
		<div class="row">
      <div class="col-sm-4">
					<form #productForm="ngForm" (ngSubmit)="onFormSubmit(productForm)">
						<div class="form-group">
							<h3>Add a new product:</h3>
						</div>
						<div class="form-group">
							<label class="control-label" for="productName">Product Name</label>
							<input id="productName" type="text" class="form-control" name="name" ngModel>
						</div>
						<div class="form-group">
							<label class="control-label" for="productDesc">Description</label>
							<input id="productDesc" type="text" class="form-control" name="description" ngModel>
						</div>
						<div class="form-group">
							<label class="control-label" for="productPrice">Price</label>
							<input id="productPrice" type="text" class="form-control" name="price" ngModel>
						</div>
						<div class="form-group">
							<label class="control-label" for="imageUrl">Image URL</label>
							<input id="imageUrl" type="text" class="form-control" name="imageURL" ngModel>
						</div>
            <div class="form-group">
							<label class="control-label" for="productTags">Tags</label>
							<input id="productTags" type="text" class="form-control" placeholder="separated by ," name="tags" ngModel>
						</div>
						<div class="form-group">
							<button id="signupSubmit" type="submit" class="btn btn-primary btn-lg">
							Submit <span class="glyphicon glyphicon-ok"></span></button>
						</div>
					</form>
      </div>
		</div>
	</div>

    `
})

export default class AddProductComponent {
	constructor(private productService: ProductService) {}

	private onFormSubmit(productForm: NgForm) {
		var inputProduct = new Product({
			id: 1,
			name: productForm.value.name,
			description: productForm.value.description,
			price: productForm.value.price,
			imgURL: productForm.value.imageURL,
			amount: 1,
			scores: [],
			avgScore: 5,
			tags: productForm.value.tags
		});

		console.log(inputProduct);
		this.productService.addNewProduct(inputProduct);
		productForm.reset();
	}
}