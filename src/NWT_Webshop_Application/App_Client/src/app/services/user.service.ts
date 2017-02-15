import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import User from './../models/User';

@Injectable()
export default class UserService {
    public user: User;

    constructor (private http: Http) {
        /*this.user = new User ({
            id: 1,
            firstName: "Marin",
            lastName: "Skorsur",
            email: "m.skorsur@gmail.com",
            address: "Rudera Boskovica 25, Split",
            ratedProducts: [1, 3,5]
        })*/

        this.http.get("http://localhost:63757/api/GetCurrentUser")
                 .subscribe( response => {
                     const serverUser = response.json();
                     this.user = new User({
                         id: serverUser.id,
                         firstName: serverUser.firstName,
                         lastName: serverUser.lastName,
                         email: serverUser.email,
                         address: serverUser.address,
                         ratedProducts: []
                     });
                 },
                  error => {console.log("Error getting current user's info.")});
    }

    public getCurrentUser(): User {
        return this.user;
    }

    public syncUser(user: User) {
        this.http.put("http://localhost:63757/api/UpdateCurrentUser",
        {Id: user.id,
         FirstName: user.firstName,
         LastName: user.lastName,
         Email: user.email,
         Address: user.address,
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

}