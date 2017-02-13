import { Injectable } from '@angular/core';

import User from './../models/User';

export default class UserService {
    public user: User;

    constructor () {
        this.user = new User ({
            id: 1,
            firstName: "Marin",
            lastName: "Skorsur",
            email: "m.skorsur@gmail.com",
            address: "Rudera Boskovica 25, Split",
            ratedProducts: [1, 3,5]
        })
    }

    public getCurrentUser(): User {
        return this.user;
    }
}