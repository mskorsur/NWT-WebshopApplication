import { Injectable } from '@angular/core';

import Product from './../models/Product';
import ProductService from './../services/product.service';

@Injectable()
export default class ShoppingCartService {
    private productList: Product[] = [];

    constructor(private productService: ProductService) {

    }

    public saveProductInCartById(id:number): boolean {
        if (this.productList.find(prod => prod.id == id) != null)
            return false;
        else {
            this.productList.push(this.productService.getProductById(id));
            return true;
        }

    }

    public removeProductFromCartById(id:number) {
        /*reset the amount of the product being removed back to 1 */
        var currentProductIndex = this.productList.findIndex(prod => prod.id == id);
		this.productList[currentProductIndex].amount = 1;

        /*remove the product from the list */
        this.productList = this.productList.filter(prod => prod.id != id);

    }

    public returnAllProducts(): Product[] {
        return this.productList;
    }

    public returnProductsNumber(): number {
        var sum = 0;
        this.productList.forEach(prod => sum += 1);
        return sum;
    }

    public updateProductAmount(amount: number, id: number) {
         var currentProductIndex = this.productList.findIndex(prod => prod.id == id);
		 this.productList[currentProductIndex].amount = amount;
    }

    public calculateTotalCost(): number {
        return this.productList
            .map(prod => {return prod.amount * prod.price})
            .reduce((totalCost, currentPrice) => { return totalCost + currentPrice}, 0);
    }
}