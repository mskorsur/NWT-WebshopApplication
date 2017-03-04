import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import Product from './../models/Product';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export default class ProductService {
    public productList: Product[];
    public menProducts: Product[];
    public womenProducts: Product[];

    constructor(private http: Http){
        /*
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
                       scores: p.scores.split(","),
                       tags: p.tags.split(","), 
                       amount: 1 }));
                 }, error => {
                     console.log("Error when retrieving products from server")
                 }); 
        */
    }
    
    /*
    public getAllProducts(): Product[] {
         return this.productList;
    } */

    public getAllProducts(): Observable<Product[]> {
        return  this.http.get("http://localhost:63757/api/Products")
                         .map(this.extractProductsData);
    }

    private extractProductsData(response: Response) {
        let serverProducts: Array<any> = response.json();
        let products: Product[] = serverProducts.map(p => new Product
                     ({id: p.productID, 
                       name: p.name, 
                       description: p.description, 
                       imgURL: p.imageURL,
                       price: p.price, 
                       avgScore: p.averageScore, 
                       scores: p.scores.split(","),
                       tags: p.tags.split(","), 
                       amount: 1 }));
        return products;
    }

    public getProductById(id: number, products: Product[]): Product {
         return products.find(prod => prod.id == id);
    }

    public filterProductsByCategory(category: string, products: Product[]): Product[] {
        if (category == "man") {
            return products.filter(p => p.tags.find(t => t == "man"));
        }
        else {
            return products.filter(p => p.tags.find(t => t == "women"));
        }
    }

    public searchForProducts(option: string, term: string, products: Product[]): Product[] {
        if (option == "name")
            return products.filter(p => p.name.toLowerCase().includes(term.toLowerCase()));
        else if (option == "description")
            return products.filter(p => p.description.toLowerCase().includes(term.toLowerCase()));
        else
            return products.filter(p => p.tags.find(t => t == term.toLowerCase()));
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

    public updateProductAverageScore(product: Product, value: number) {
        product.averageScore = value;
        this.syncProduct(product);
    }

    public updateProductScores(product: Product, values: number[]) {
        product.scores = values.map(s => s.toString());
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
         Scores: product.scores.join(","),
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
            Scores: "5",
            Tags: product.tags,
            ShoppingCarts: []
        }).subscribe(response => {console.log("Successfully added product."); }, 
                     error => {console.log("Error adding product.")})
    }
  
}