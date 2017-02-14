import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import Product from './../models/Product';

@Injectable()
export default class ProductService {
    public productList: Product[];

    constructor(private http: Http){
         this.http.get("http://localhost:63757/api/Products")
                 .subscribe( response => {
                     const serverProducts: Array<any> = response.json();
                     this.productList = serverProducts.map(p => new Product
                     ({id: p.productID, 
                       name: p.name, 
                       description: 
                       p.description, 
                       imgURL: p.imageURL,
                       price: p.price, 
                       avgScore: p.averageScore, 
                       numScores: p.numberOfScores,
                       tags: p.tags.split(","), 
                       amount: 1 }));
                 }, error => {
                     console.log("Error when retrieving products from server")
                 });       
       /* this.productList = [
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
        ];*/
    }

    public getAllProducts(): Product[] {
       return this.productList;
    }

    public getProductById(id:number): Product {
       return this.productList.find(prod => prod.id == id);
    }

    public updateProductName(product: Product, value: string) {
        product.name = value;
        this.syncProduct(product);
    }

    public updateProductDescription(product: Product, value: string) {
        product.description = value;
        this.syncProduct(product);
    }

    public updateProductPrice(product: Product, value: number) {
        product.price = value;
        this.syncProduct(product);
    }

    public updateProductImage(product: Product, value: string) {
        product.imageURL = value;
        this.syncProduct(product);
    }

    public updateProductTags(product: Product, value: string[]) {
        product.tags = value;
        this.syncProduct(product);
    }

    public syncProduct(product: Product) {
        this.http.put(`http://localhost:63757/api/Products/${product.id}`,
        {ProductID: product.id,
         Name: product.name,
         Description: product.description,
         ImageURL: product.imageURL,
         Price: product.price,
         AverageScore: product.averageScore,
         NumberOfScores: product.numOfScores,
         Tags: product.tags.join(",") 
        }).subscribe(
            response => {console.log("Product update OK")},
            error => {console.log("Error", error)}
        );
    }
  
}