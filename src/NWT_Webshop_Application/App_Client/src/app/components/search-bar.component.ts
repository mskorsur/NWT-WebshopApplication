import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import Product from './../models/Product';
import ProductService from './../services/product.service';


@Component({
    selector: 'search-bar',
    template:  ` 
    <form class="navbar-form navbar-left">
         <div class="form-group">
          <select class="form-control" #searchOption>
            <option value="name">Name</option>
            <option value="description">Description</option>
            <option value="tags">Tags</option>
          </select>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search..." #searchTerm>
        </div>
        <button type="submit" class="btn btn-default" 
        (click)="onSearchClick(searchOption.value, searchTerm.value)">Submit</button>
      </form> `
})
export default class SearchBarComponent {

    constructor (private router: Router) {}

    private onSearchClick(searchOption: string, searchTerm: string) {
        let searchProperties: NavigationExtras = {
        queryParams: { 'option': searchOption,
                       'term': searchTerm }
      };

        this.router.navigate(['/search'], searchProperties);
        
    }
}