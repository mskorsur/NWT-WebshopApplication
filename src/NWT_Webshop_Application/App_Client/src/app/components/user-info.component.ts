import { Component } from '@angular/core';


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
                            <p class="list-group-item-text">rtijerjiiyieyipy</p>
                        </li>
                         <li class="list-group-item">
                            <h4 class="list-group-item-heading">Last name</h4>
                            <p class="list-group-item-text">...</p>
                        </li>
                         <li class="list-group-item">
                            <h4 class="list-group-item-heading">Email</h4>
                            <p class="list-group-item-text">...</p>
                        </li>
                         <li class="list-group-item">
                            <h4 class="list-group-item-heading">Address</h4>
                            <p class="list-group-item-text">...</p>
                        </li>
                    </ul>
                </div>
        </div>
        </div>
        </div>
    `
})

export default class UserInfoComponent { }