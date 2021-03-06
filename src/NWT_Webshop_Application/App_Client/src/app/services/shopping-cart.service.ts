import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import Product from './../models/Product';
import User from './../models/User';
import ProductService from './product.service';
import UserService from './user.service';

@Injectable()
export default class ShoppingCartService {
    public productList: Product[] = [];
    private currentUser: User;

    constructor(private productService: ProductService,
                private userService: UserService,
                private http: Http) {

                 }

    public getCurrentUserShoppingCart(): Observable<Product[]> {
         return this.http.get(`http://localhost:63757/api/GetAllCartProducts?id=${this.userService.user.id}`)
                 .map(this.extractCartData);
    }

    private extractCartData(response: Response) {
         let serverItems: Array<any> = response.json();
         let products: Product[] = serverItems.map(p => new Product({
                        id: p.product.productID,
                        name: p.product.name,
                        description: p.product.description,
                        imgURL: p.product.imageURL,
                        price: p.product.price,
                        avgScore: p.product.averageScore,
                        scores: p.product.scores.split(","),
                        tags: p.product.tags.split(","),
                        amount: p.amount
                    }));
        return products;
    }

    public saveProductInCartById(id:number) {
        let newProduct: Product;

        //product is not in the cart
        //get product form a service and push it to the server
        this.productService.getAllProducts()
            .subscribe(data => { newProduct = this.productService.getProductById(id, data) },
					   error => { console.log("Error getting single product") });
        this.http.get(`http://localhost:63757/api/SaveProductInCart?userId=${this.userService.user.id}&productId=${id}`)
            .subscribe(response => {
                        console.log("Saved product to the cart");
                    }, error => { console.log("Error saving product to cart") });
    }

    public removeProductFromCartById(id:number): Observable<Response> {
       return this.http
        .get(`http://localhost:63757/api/DeleteCartProduct?userId=${this.userService.user.id}&productId=${id}`);
                     
    }

    public updateProductAmount(amount: number, id: number): Observable<Response> {         
         return this.http.put("http://localhost:63757/api/UpdateCartProduct", {
             UserID: this.userService.user.id,
             ProductID: id,
             Amount: amount
         }); 
    }

    public isProductInCart(productId: number, cart: Product[]): boolean {
       if (cart.find(p => p.id == productId) != undefined) {
           return true;
       }
       else {
           return false;
       }
    }

    public returnAllProducts(): Product[] {
        return this.productList;
    }

    public returnProductsNumber(): number {
        var sum = 0;
        this.productList.forEach(prod => sum += 1);
        return sum;
    }

    public calculateTotalCost(productList: Product[]): number {
        return productList
            .map(prod => {return prod.amount * prod.price})
            .reduce((totalCost, currentPrice) => { return totalCost + currentPrice}, 0);
    }
}