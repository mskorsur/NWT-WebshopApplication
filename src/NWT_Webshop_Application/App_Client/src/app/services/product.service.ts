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
                       description: p.description, 
                       imgURL: p.imageURL,
                       price: p.price, 
                       avgScore: p.averageScore, 
                       numScores: p.numberOfScores,
                       tags: p.tags.split(","), 
                       amount: 1 }));
                 }, error => {
                     console.log("Error when retrieving products from server")
                 });    
    }

    public getAllProducts(): Product[] {
         return this.productList;
    }

    public getProductById(id:number): Product {
         return this.productList.find(prod => prod.id == id);
    }

    public getProductsByCategory(category: string): Product[] {
        this.http.get(`http://localhost:63757/api/Products/GetByCategory/${category}`)
                 .subscribe(
                     response => {
                         const serverProducts: Array<any> = response.json();
                         this.productList = serverProducts.map(p => new Product
                           ({id: p.productID, 
                            name: p.name, 
                            description: p.description, 
                            imgURL: p.imageURL,
                            price: p.price, 
                            avgScore: p.averageScore, 
                            numScores: p.numberOfScores,
                            tags: p.tags.split(","), 
                            amount: 1 })); 
                     },
                     error => {console.log("Error getting products by category")}
                 );
        return this.productList;
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

    public addNewProduct(product: Product) {
        this.http.post("http://localhost:63757/api/Products", {
            Name: product.name,
            Description: product.description,
            ImageURL: product.imageURL,
            Price: product.price,
            AverageScore: product.averageScore,
            NumberOfScores: product.numOfScores,
            Tags: product.tags,
            ShoppingCarts: []
        })
                 .subscribe(response => {console.log("Successfully added product.");
                            product.id = response.json().id;
                            this.productList.push(product); }, 
                           error => {console.log("Error adding product.")})
    }
  
}