import { Component } from '@angular/core';
import Product from './../models/Product';
import ProductService from './../services/product.service';

@Component({
    selector: 'add-product',
    template: `
    <div class="container">
		<div class="row">
      <div class="col-sm-4">
					<form>
						<div class="form-group">
							<h3>Add a new product:</h3>
						</div>
						<div class="form-group">
							<label class="control-label" for="productName">Product Name</label>
							<input id="productName" type="text" maxlength="50" class="form-control">
						</div>
						<div class="form-group">
							<label class="control-label" for="productDesc">Description</label>
							<input id="productDesc" type="text" maxlength="50" class="form-control">
						</div>
						<div class="form-group">
							<label class="control-label" for="productPrice">Price</label>
							<input id="productPrice" type="text" maxlength="25" class="form-control"  length="10">
						</div>
						<div class="form-group">
							<label class="control-label" for="imageUrl">Image URL</label>
							<input id="imageUrl" type="text" maxlength="50" class="form-control">
						</div>
            <div class="form-group">
							<label class="control-label" for="productTags">Tags</label>
							<input id="productTags" type="text" maxlength="50" class="form-control" placeholder="separated by ,">
						</div>
						<div class="form-group">
							<button id="signupSubmit" type="submit" class="btn btn-primary btn-lg">Submit <span class="glyphicon glyphicon-ok"></span></button>
						</div>
					</form>
      </div>
		</div>
	</div>

    `
})

export default class AddProductComponent {
    //TODO: add code to post data to web api

}