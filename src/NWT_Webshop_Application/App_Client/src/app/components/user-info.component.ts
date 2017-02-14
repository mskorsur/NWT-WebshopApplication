import { Component } from '@angular/core';

import User from './../models/User';
import UserService from './../services/user.service';


@Component({
    selector: 'user-info',
    template: `
        <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
        <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title">User profile information <span class="glyphicon glyphicon-info-sign"></span></h3>
                </div>
                <div class="panel-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h4 class="list-group-item-heading">First name</h4>
                            <p class="list-group-item-text" *ngIf="!firstNameEditMode" 
                            (dblclick)="firstNameEditMode = true">{{currentUser.firstName}}</p>
                            <input #inputFirstName *ngIf="firstNameEditMode" [value]="currentUser.firstName"
							(keyup.enter)="finishUserFirstNameEditing(inputFirstName.value, true)"
							(keyup.esc)="finishUserFirstNameEditing(inputFirstName.value, false)" 
						    />
                        </li>
                         <li class="list-group-item">
                            <h4 class="list-group-item-heading">Last name</h4>
                            <p class="list-group-item-text" *ngIf="!lastNameEditMode"
                            (dblclick)="lastNameEditMode = true">{{currentUser.lastName}}</p>
                            <input #inputLastName *ngIf="lastNameEditMode" [value]="currentUser.lastName"
							(keyup.enter)="finishUserLastNameEditing(inputLastName.value, true)"
							(keyup.esc)="finishUserLastNameEditing(inputLastName.value, false)" 
						    />
                        </li>
                         <li class="list-group-item">
                            <h4 class="list-group-item-heading">Email</h4>
                            <p class="list-group-item-text" *ngIf="!emailEditMode"
                            (dblclick)="emailEditMode = true">{{currentUser.email}}</p>
                            <input type="email" #inputEmail *ngIf="emailEditMode" [value]="currentUser.email"
							(keyup.enter)="finishUserEmailEditing(inputEmail.value, true)"
							(keyup.esc)="finishUserEmailEditing(inputEmail.value, false)" 
						    />
                        </li>
                         <li class="list-group-item">
                            <h4 class="list-group-item-heading">Address</h4>
                            <p class="list-group-item-text" *ngIf="!addressEditMode"
                            (dblclick)="addressEditMode = true">{{currentUser.address}}</p>
                            <input #inputAddress *ngIf="addressEditMode" [value]="currentUser.address"
							(keyup.enter)="finishUserAddressEditing(inputAddress.value, true)"
							(keyup.esc)="finishUserAddressEditing(inputAddress.value, false)" 
						    />
                        </li>
                    </ul>
                </div>
        </div>
        </div>
        </div>
    `
})

export default class UserInfoComponent {
    private currentUser: User;
    private firstNameEditMode: boolean;
    private lastNameEditMode: boolean;
    private emailEditMode: boolean;
    private addressEditMode: boolean;

    constructor(private userService: UserService) {
        //TODO: add code that gets currenttly logged user's info from API
        this.currentUser = this.userService.getCurrentUser();
        this.firstNameEditMode = false;
        this.lastNameEditMode = false;
        this.emailEditMode = false;
        this.addressEditMode = false;
    }

    private finishUserFirstNameEditing (value: string, save: boolean) {
        if (save) {
            this.currentUser.firstName = value;
        }

        this.firstNameEditMode = false;
    }

    private finishUserLastNameEditing (value: string, save: boolean) {
        if (save) {
            this.currentUser.lastName = value;
        }

        this.lastNameEditMode = false;
    }

    private finishUserEmailEditing (value: string, save: boolean) {
        if (save) {
            this.currentUser.email = value;
        }

        this.emailEditMode = false;
    }

    private finishUserAddressEditing (value: string, save: boolean) {
        if (save) {
            this.currentUser.address = value;
        }

        this.addressEditMode = false;
    }


 }