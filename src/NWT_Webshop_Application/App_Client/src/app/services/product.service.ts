import { Injectable } from '@angular/core';

import Product from './../models/Product';

@Injectable()
export default class ProductService {
    public productList: Product[];

    constructor(){
        this.productList = [
            new Product({id: 1, name: "Sweatshirt", 
            description: "A very nice sweatshirt for men.", 
            price: 69.99, 
            imgURL: "http://placehold.it/350x250",
            avgScore: 4.0,
            numScores: 5,
            amount: 1,
            tags: ["men", "sweatshirt", "blue"]}),
            new Product({id: 2, name: "Leather jacket", 
            description: "A very nice jacket for men.", 
            price: 99.99, 
            imgURL: "http://placehold.it/350x250",
            avgScore: 3.2,
            numScores: 4,
            amount: 1,
            tags: ["men", "leather", "jacket", "black"]}),
            new Product({id: 3, name: "Denim trouser", 
            description: "Urban denim trousers for the city.", 
            price: 79.99, 
            imgURL: "http://placehold.it/350x250",
            avgScore: 4.1,
            numScores: 2,
            amount: 1,
            tags: ["men", "jeans", "denim"]})
        ];
    }

    public getAllProducts(): Product[] {
        return this.productList;
    }

    public getProductById(id:number): Product {
       return this.productList.find(prod => prod.id == id);
    }
  
  //TODO: connect with MVC web api
}