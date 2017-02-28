import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import User from './../models/User';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export default class UserService {
    public user: User;

    constructor (private http: Http) {
        
       this.http.get("http://localhost:63757/api/GetCurrentUser")
                 .subscribe( response => {
                     const serverUser = response.json();
                     this.user = new User({
                         id: serverUser.id,
                         firstName: serverUser.firstName,
                         lastName: serverUser.lastName,
                         email: serverUser.email,
                         address: serverUser.address,
                         ratedProducts: serverUser.ratedProductsIDs.split(",")
                     });
                 },
                  error => {console.log("Error getting current user's info.")}); 
    }

    public getCurrentUser(): User {
        return this.user;
    }
    /*
    public getCurrentUser(): Observable<User> {
        return this.http.get("http://localhost:63757/api/GetCurrentUser")
                        .map(this.extractUserData);
    }

    private extractUserData(response: Response) {
        let serverUser = response.json();
        let user = new User({
                         id: serverUser.id,
                         firstName: serverUser.firstName,
                         lastName: serverUser.lastName,
                         email: serverUser.email,
                         address: serverUser.address,
                         ratedProducts: serverUser.ratedProductsIDs.split(",")
                     });
        return user;
    }
    */
    public syncUser(user: User) {
        this.http.put("http://localhost:63757/api/UpdateCurrentUser",
        {Id: user.id,
         FirstName: user.firstName,
         LastName: user.lastName,
         Email: user.email,
         Address: user.address,
         RatedProductsIDs: user.ratedProducts.join(",")
        }).subscribe(
            response => {console.log("User update OK")},
            error => {console.log("Error", error)}
        );
    }

    public updateUserFirstName(user: User, value: string) {
        user.firstName = value
        this.syncUser(user);
    }

    public updateUserLastName(user: User, value: string) {
        user.lastName = value
        this.syncUser(user);
    }

    public updateUserEmail(user: User, value: string) {
        user.email = value
        this.syncUser(user);
    }

    public updateUserAddress(user: User, value: string) {
        user.address = value
        this.syncUser(user);
    }

    public updateUserRatedProducts(user: User, value: string) {
        user.ratedProducts.push(value);
        this.syncUser(user);
    }

    public checkIfUserRatedSelectedProduct(user:User, productID: string): boolean {
        if (user.ratedProducts.find(p => p == productID))
            return true;
        else
            return false;
    }

}