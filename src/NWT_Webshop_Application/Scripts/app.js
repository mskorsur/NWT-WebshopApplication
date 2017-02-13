webpackJsonp([0],{0:function(t,e,n){"use strict";var o=n(1),r=n(23),i=o.platformBrowserDynamic();i.bootstrapModule(r.AppModule)},23:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=n(21),c=n(24),s=n(60),d=n(70),l=n(57),p=n(58),u=n(63),f=n(64),g=n(67),h=n(68),m=n(69),v=n(59),y=n(62),b=n(65),P=function(){function AppModule(){}return AppModule=o([i.NgModule({imports:[a.BrowserModule,c.AppRoutingModule,s.HttpModule],declarations:[d.AppComponent,u.default,l.default,p.default,h.default,m.default,f.default,g.default],providers:[v.default,y.default,b.default],bootstrap:[d.AppComponent]}),r("design:paramtypes",[])],AppModule)}();e.AppModule=P},24:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=n(25),c=n(57),s=n(58),d=n(63),l=n(64),p=n(67),u=n(68),f=n(69),g=[{path:"",component:d.default},{path:"products/:category",component:s.default},{path:"product/:id",component:u.default},{path:"add-product",component:f.default},{path:"profile",component:l.default},{path:"cart",component:p.default},{path:"**",component:c.default}],h=function(){function AppRoutingModule(){}return AppRoutingModule=o([i.NgModule({imports:[a.RouterModule.forRoot(g)],exports:[a.RouterModule]}),r("design:paramtypes",[])],AppRoutingModule)}();e.AppRoutingModule=h},57:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=function(){function PageNotFoundRouteComponent(){}return PageNotFoundRouteComponent=o([i.Component({selector:"page-not-found",template:"<h4>404 - Page not found</h4>"}),r("design:paramtypes",[])],PageNotFoundRouteComponent)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},58:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=n(59),c=n(62),s=function(){function ProductListComponent(t,e){this.cartService=e,this.productList=t.getAllProducts()}return ProductListComponent.prototype.saveProductToCart=function(t){this.math=Math,this.cartService.saveProductInCartById(t)},ProductListComponent=o([i.Component({selector:"product-list",template:'\n    <div class="container" id="mult-items-main">\n        <div class="row">\n        <h2>Products: </h2> <hr />\n        <div class="col-md-6" *ngFor="let product of productList">\n            <div class="well well-sm">\n                <div class="row">\n                    <div class="col-xs-3 col-md-4 text-center">\n                        <img src="{{product.imageURL}}" alt="desc"\n                            class="img-rounded img-responsive" />\n                    </div>\n                    <div class="col-xs-9 col-md-8 section-box">\n                        <h3>\n                            <a [routerLink]="[\'/product\', product.id]">{{product.name}}</a>\n                        </h3>\n                        <p>\n                            {{product.description}}</p>\n                        <h4><strong>{{product.price | currency:\'USD\':true}}</strong></h4>  \n                        <hr />\n                        <div class="row rating-desc">\n                            <div class="col-md-12">\n                                 <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 1"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 2"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 3"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 4"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore == 5"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 1"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 2"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 3"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 4"></span>({{product.averageScore}})<span class="separator">|</span>\n                                <button class="btn btn-primary" (click)="saveProductToCart(product.id)">Add to cart</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\t</div>\n</div>\n\n    '}),r("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.default&&a.default)&&t||Object,"function"==typeof(e="undefined"!=typeof c.default&&c.default)&&e||Object])],ProductListComponent);var t,e}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=s},59:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=n(60),c=n(61),s=function(){function ProductService(t){var e=this;this.http=t,this.http.get("http://localhost:63757/api/Products").subscribe(function(t){var n=t.json();e.productList=n.map(function(t){return new c.default({id:t.productID,name:t.name,description:t.description,imgURL:t.imageURL,price:t.price,avgScore:t.averageScore,numScores:t.numberOfScores,tags:t.tags,amount:1})})},function(t){console.log("Error when retrieving products from server")})}return ProductService.prototype.getAllProducts=function(){return this.productList},ProductService.prototype.getProductById=function(t){return this.productList.find(function(e){return e.id==t})},ProductService=o([i.Injectable(),r("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.Http&&a.Http)&&t||Object])],ProductService);var t}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=s},61:function(t,e){"use strict";var n=function(){function Product(t){this.id=t.id,this.name=t.name,this.description=t.description,this.imageURL=t.imgURL,this.price=t.price,this.averageScore=t.avgScore,this.numOfScores=t.numScores,this.amount=t.amount,this.tags=t.tags}return Product}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},62:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=n(59),c=function(){function ShoppingCartService(t){this.productService=t,this.productList=[]}return ShoppingCartService.prototype.saveProductInCartById=function(t){return null==this.productList.find(function(e){return e.id==t})&&(this.productList.push(this.productService.getProductById(t)),!0)},ShoppingCartService.prototype.removeProductFromCartById=function(t){var e=this.productList.findIndex(function(e){return e.id==t});this.productList[e].amount=1,this.productList=this.productList.filter(function(e){return e.id!=t})},ShoppingCartService.prototype.returnAllProducts=function(){return this.productList},ShoppingCartService.prototype.returnProductsNumber=function(){var t=0;return this.productList.forEach(function(e){return t+=1}),t},ShoppingCartService.prototype.updateProductAmount=function(t,e){var n=this.productList.findIndex(function(t){return t.id==e});this.productList[n].amount=t},ShoppingCartService.prototype.calculateTotalCost=function(){return this.productList.map(function(t){return t.amount*t.price}).reduce(function(t,e){return t+e},0)},ShoppingCartService=o([i.Injectable(),r("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.default&&a.default)&&t||Object])],ShoppingCartService);var t}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=c},63:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=n(59),c=n(62),s=function(){function HomepageComponent(t,e){this.productService=t,this.cartService=e,this.math=Math}return HomepageComponent.prototype.ngOnInit=function(){this.productList=this.productService.getAllProducts()},HomepageComponent.prototype.saveProductToCart=function(t){this.cartService.saveProductInCartById(t)},HomepageComponent=o([i.Component({selector:"homepage-content",template:'\n         <!-- Page Content -->\n    <div class="container">\n        <div class="row">\n            <div class="col-md-12">\n                <div class="row carousel-holder">\n                    <div class="col-md-12">\n                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n                            <ol class="carousel-indicators">\n                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\n                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>\n                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>\n                            </ol>\n                            <div class="carousel-inner">\n                                <div class="item active">\n                                    <img class="slide-image" src="/Content/header.jpg" alt="">\n                                </div>\n                                <div class="item">\n                                    <img class="slide-image" src="/Content/header.jpg" alt="">\n                                </div>\n                                <div class="item">\n                                    <img class="slide-image" src="/Content/header.jpg" alt="">\n                                </div>\n                            </div>\n                            <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">\n                               <span class="icon-prev fa-stack fa-lg"></span>\n                            </a>\n                            <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">\n                                 <span class="icon-next fa-stack fa-lg"></span>\n                            </a>\n                        </div>\n                    </div>\n        </div>\n\n        <div class="row">\n                <div class="page-header">\n                  <h1>Promotional items</h1>\n                </div>\n                    <div class="col-sm-4 col-lg-4 col-md-4" *ngFor="let product of productList">\n                        <div class="thumbnail">\n                            <img src="{{product.imageURL}}" alt="">\n                            <div class="caption">\n                                <h4 class="pull-right">{{product.price | currency: \'USD\': true}}</h4>\n                                <h4><a [routerLink]="[\'/product\', product.id]">{{product.name}}</a>\n                                </h4>\n                                <p>{{product.description}}</p>\n                            </div>\n                            <div class="ratings">\n                            <p class="pull-right"><a class="btn btn-primary thumb-button" role="button" (click)="saveProductToCart(product.id)">Add to cart</a></p>\n                                <p>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 1"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 2"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 3"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 4"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore == 5"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 1"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 2"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 3"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 4"></span>\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n    '}),r("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.default&&a.default)&&t||Object,"function"==typeof(e="undefined"!=typeof c.default&&c.default)&&e||Object])],HomepageComponent);var t,e}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=s},64:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=n(65),c=function(){function UserInfoComponent(t){this.userService=t,this.currentUser=this.userService.getCurrentUser(),this.firstNameEditMode=!1,this.lastNameEditMode=!1,this.emailEditMode=!1,this.addressEditMode=!1}return UserInfoComponent.prototype.finishUserFirstNameEditing=function(t,e){e&&(this.currentUser.firstName=t),this.firstNameEditMode=!1},UserInfoComponent.prototype.finishUserLastNameEditing=function(t,e){e&&(this.currentUser.lastName=t),this.lastNameEditMode=!1},UserInfoComponent.prototype.finishUserEmailEditing=function(t,e){e&&(this.currentUser.email=t),this.emailEditMode=!1},UserInfoComponent.prototype.finishUserAddressEditing=function(t,e){e&&(this.currentUser.address=t),this.addressEditMode=!1},UserInfoComponent=o([i.Component({selector:"user-info",template:'\n        <div class="row">\n        <div class="col-sm-4 col-sm-offset-1">\n        <div class="panel panel-primary">\n                <div class="panel-heading">\n                    <h3 class="panel-title">User profile information <span class="glyphicon glyphicon-info-sign"></span></h3>\n                </div>\n                <div class="panel-body">\n                    <ul class="list-group">\n                        <li class="list-group-item">\n                            <h4 class="list-group-item-heading">First name</h4>\n                            <p class="list-group-item-text" *ngIf="!firstNameEditMode" \n                            (dblclick)="firstNameEditMode = true">{{currentUser.firstName}}</p>\n                            <input #inputFirstName *ngIf="firstNameEditMode" [value]="currentUser.firstName"\n\t\t\t\t\t\t\t(keyup.enter)="finishUserFirstNameEditing(inputFirstName.value, true)"\n\t\t\t\t\t\t\t(keyup.esc)="finishUserFirstNameEditing(inputFirstName.value, false)" \n\t\t\t\t\t\t    />\n                        </li>\n                         <li class="list-group-item">\n                            <h4 class="list-group-item-heading">Last name</h4>\n                            <p class="list-group-item-text" *ngIf="!lastNameEditMode"\n                            (dblclick)="lastNameEditMode = true">{{currentUser.lastName}}</p>\n                            <input #inputLastName *ngIf="lastNameEditMode" [value]="currentUser.lastName"\n\t\t\t\t\t\t\t(keyup.enter)="finishUserLastNameEditing(inputLastName.value, true)"\n\t\t\t\t\t\t\t(keyup.esc)="finishUserLastNameEditing(inputLastName.value, false)" \n\t\t\t\t\t\t    />\n                        </li>\n                         <li class="list-group-item">\n                            <h4 class="list-group-item-heading">Email</h4>\n                            <p class="list-group-item-text" *ngIf="!emailEditMode"\n                            (dblclick)="emailEditMode = true">{{currentUser.email}}</p>\n                            <input #inputEmail *ngIf="emailNameEditMode" [value]="currentUser.email"\n\t\t\t\t\t\t\t(keyup.enter)="finishUserEmailEditing(inputEmail.value, true)"\n\t\t\t\t\t\t\t(keyup.esc)="finishUserEmailEditing(inputEmail.value, false)" \n\t\t\t\t\t\t    />\n                        </li>\n                         <li class="list-group-item">\n                            <h4 class="list-group-item-heading">Address</h4>\n                            <p class="list-group-item-text" *ngIf="!addressEditMode"\n                            (dblclick)="addressEditMode = true">{{currentUser.address}}</p>\n                            <input #inputAddress *ngIf="addressEditMode" [value]="currentUser.address"\n\t\t\t\t\t\t\t(keyup.enter)="finishUserAddressEditing(inputAddress.value, true)"\n\t\t\t\t\t\t\t(keyup.esc)="finishUserAddressEditing(inputAddress.value, false)" \n\t\t\t\t\t\t    />\n                        </li>\n                    </ul>\n                </div>\n        </div>\n        </div>\n        </div>\n    '}),r("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.default&&a.default)&&t||Object])],UserInfoComponent);var t}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=c},65:function(t,e,n){"use strict";var o=n(66),r=function(){function UserService(){this.user=new o.default({id:1,firstName:"Marin",lastName:"Skorsur",email:"m.skorsur@gmail.com",address:"Rudera Boskovica 25, Split",ratedProducts:[1,3,5]})}return UserService.prototype.getCurrentUser=function(){return this.user},UserService}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},66:function(t,e){"use strict";var n=function(){function User(t){this.id=t.id,this.firstName=t.firstName,this.lastName=t.lastName,this.email=t.email,this.address=t.address,this.ratedProducts=t.ratedProducts}return User}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},67:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=n(62),c=function(){function ShoppingCartComponent(t){this.cartService=t,this.productList=t.returnAllProducts(),this.totalCost=t.calculateTotalCost()}return ShoppingCartComponent.prototype.removeProductButtonClicked=function(t){this.cartService.removeProductFromCartById(t),this.productList=this.cartService.returnAllProducts(),this.totalCost=this.cartService.calculateTotalCost()},ShoppingCartComponent.prototype.updateProductAmountAndCost=function(t,e){this.cartService.updateProductAmount(t,e),this.totalCost=this.cartService.calculateTotalCost()},ShoppingCartComponent=o([i.Component({selector:"shopping-cart",template:'\n    <div class="container">\n\t<div class="row">\n\t\t<div class="col-xs-8">\n\t\t\t<div class="panel panel-primary">\n\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t<div class="panel-title">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t<h5><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="panel-body">\n\t\t\t\t\t<div class="row cart-item" *ngFor="let product of productList">\n\t\t\t\t\t\t<div class="col-xs-2"><img class="img-responsive" src="{{product.imageURL}}">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-4">\n\t\t\t\t\t\t\t<h4 class="product-name"><strong>{{product.name}}</strong></h4>\n\t\t\t\t\t\t\t<h4><small>{{product.description}}</small></h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t<div class="col-xs-6 text-right">\n\t\t\t\t\t\t\t\t<h4><strong>{{product.price | currency:\'USD\':true}} <span class="text-muted">x</span></strong></h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-xs-4">\n\t\t\t\t\t\t\t\t<input type="text" class="form-control input-sm" value="{{product.amount}}" #amountInput \n\t\t\t\t\t\t\t\t (keyup.enter)="updateProductAmountAndCost(amountInput.value, product.id)"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary" (click)="removeProductButtonClicked(product.id)">\n\t\t\t\t\t\t\t\t\t<span class="glyphicon glyphicon-remove"></span>\n\t\t\t\t\t\t\t\t</button>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class="panel-footer">\n\t\t\t\t\t<div class="row text-center">\n\t\t\t\t\t\t<div class="col-xs-9">\n\t\t\t\t\t\t\t<h4 class="text-right">Total <strong>{{totalCost | currency:\'USD\':true}}</strong></h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n    '}),r("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.default&&a.default)&&t||Object])],ShoppingCartComponent);var t}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=c},68:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=n(25),c=n(59),s=n(62),d=function(){function ProductDetailsComponent(t,e,n){this.cartService=n;var o=+e.snapshot.params.id;this.product=t.getProductById(o),this.math=Math,this.addedToCart=!1,this.nameEditMode=!1,this.descriptionEditMode=!1,this.priceEditMode=!1,this.imgURLEditMode=!1,this.tagsEditMode=!1}return ProductDetailsComponent.prototype.saveProductToCart=function(t){0==this.cartService.saveProductInCartById(t)?this.alreadyInCart=!0:this.addedToCart=!0},ProductDetailsComponent.prototype.finishProductNameEditing=function(t,e){e&&(this.product.name=t),this.nameEditMode=!1},ProductDetailsComponent.prototype.finishProductDescEditing=function(t,e){e&&(this.product.description=t),this.descriptionEditMode=!1},ProductDetailsComponent.prototype.finishProductPriceEditing=function(t,e){e&&(this.product.price=parseFloat(t)),this.priceEditMode=!1},ProductDetailsComponent.prototype.finishProductImageEditing=function(t,e){e&&(this.product.imageURL=t),this.imgURLEditMode=!1},ProductDetailsComponent.prototype.finishProductTagsEditing=function(t,e){if(e){var n=t.split(",");this.product.tags=n}this.tagsEditMode=!1},ProductDetailsComponent.prototype.rateProduct=function(t){this.product.averageScore=parseFloat(t)},ProductDetailsComponent=o([i.Component({selector:"product-details",template:'\n        <div class="container">\n\t\t<div class="card">\n\t\t\t<div class="container-fliud">\n\t\t\t\t<div class="wrapper row">\n\t\t\t\t\t<div class="preview col-md-6">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class="preview-pic tab-content">\n\t\t\t\t\t\t  <div class="tab-pane active" id="pic-1"><img *ngIf="!imgURLEditMode" (dblclick)="imgURLEditMode = true" src="{{product.imageURL}}" /></div>\n\t\t\t\t\t\t  <input #inputURL *ngIf="imgURLEditMode" [value]="product.imageURL"\n\t\t\t\t\t\t\t(keyup.enter)="finishProductImageEditing(inputURL.value, true)"\n\t\t\t\t\t\t\t(keyup.esc)="finishProductImageEditing(inputURL.value, false)"\n\t\t\t\t\t\t   />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="details col-md-6">\n\t\t\t\t\t\t<h3 class="product-title" *ngIf="!nameEditMode" (dblclick)="nameEditMode = true">{{product.name}}</h3>\n\t\t\t\t\t\t<input #inputName *ngIf="nameEditMode" [value]="product.name"\n\t\t\t\t\t\t\t(keyup.enter)="finishProductNameEditing(inputName.value, true)"\n\t\t\t\t\t\t\t(keyup.esc)="finishProductNameEditing(inputName.value, false)" \n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<div class="rating">\n\t\t\t\t\t\t\t<div class="stars">\n\t\t\t\t\t\t\t\t <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 1"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 2"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 3"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore >= 4"></span>\n                                   <span class="glyphicon glyphicon-star" *ngIf="product.averageScore == 5"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 1"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 2"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 3"></span>\n                                   <span class="glyphicon glyphicon-star-empty" *ngIf="(5 - math.floor(product.averageScore)) >= 4"></span>\n\t\t\t\t\t\t\t\t   ({{product.averageScore}})\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<p class="product-description" *ngIf="!descriptionEditMode" (dblclick)="descriptionEditMode = true">\n                            {{product.description}}\n                        </p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input #inputDescription *ngIf="descriptionEditMode" [value]="product.description"\n\t\t\t\t\t\t\t(keyup.enter)="finishProductDescEditing(inputDescription.value, true)"\n\t\t\t\t\t\t\t(keyup.esc)="finishProductDescEditing(inputDescription.value, false)" \n\t\t\t\t\t\t/>\n\n\t\t\t\t\t\t<h4 class="price" *ngIf="!priceEditMode" (dblclick)="priceEditMode = true">current price: <span>{{product.price | currency:\'USD\':true}}</span></h4>\n\t\t\t\t\t\t<input #inputPrice *ngIf="priceEditMode" [value]="product.price"\n\t\t\t\t\t\t\t(keyup.enter)="finishProductPriceEditing(inputPrice.value, true)"\n\t\t\t\t\t\t\t(keyup.esc)="finishProductPriceEditing(inputPrice.value, false)" \n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<p class="price" *ngIf="!tagsEditMode" (dblclick)="tagsEditMode = true"><strong>TAGS:</strong> {{product.tags}}</p>\n\t\t\t\t\t\t<input #inputTags *ngIf="tagsEditMode" [value]="product.tags"\n\t\t\t\t\t\t\t(keyup.enter)="finishProductTagsEditing(inputTags.value, true)"\n\t\t\t\t\t\t\t(keyup.esc)="finishProductTagsEditing(inputTags.value, false)" \n\t\t\t\t\t\t/>\n\n             <div class="action">\n\t\t\t  <button type="submit" class="btn btn-primary btn-lg" type="button" (click)="saveProductToCart(product.id)">Add to cart <span class="glyphicon glyphicon-shopping-cart"></span></button>\n\n\t\t\t  <div class="col-md-4">\n\t\t\t\t <div class="input-group">\n\t\t\t\t\t\t<select class="form-control" #ratingSelect>\n\t\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t\t\t<option>4</option>\n\t\t\t\t\t\t\t<option>5</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<span class="input-group-btn">\n\t\t\t\t\t\t<button type="submit" class="btn btn-primary" type="button" (click)="rateProduct(ratingSelect.value)">Rate</button>\n\t\t\t\t\t\t</span>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t\t\t\n            </div>\n\n\t\t\t<h3 *ngIf="addedToCart">Successfully added to cart!</h3>\n\t\t\t<h3 *ngIf="alreadyInCart">This product is already in your cart!</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n    '}),r("design:paramtypes",["function"==typeof(t="undefined"!=typeof c.default&&c.default)&&t||Object,"function"==typeof(e="undefined"!=typeof a.ActivatedRoute&&a.ActivatedRoute)&&e||Object,"function"==typeof(n="undefined"!=typeof s.default&&s.default)&&n||Object])],ProductDetailsComponent);var t,e,n}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=d},69:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=function(){function AddProductComponent(){}return AddProductComponent=o([i.Component({selector:"add-product",template:'\n    <div class="container">\n\t\t<div class="row">\n      <div class="col-sm-4">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<h3>Add a new product:</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<label class="control-label" for="productName">Product Name</label>\n\t\t\t\t\t\t\t<input id="productName" type="text" maxlength="50" class="form-control">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<label class="control-label" for="productDesc">Description</label>\n\t\t\t\t\t\t\t<input id="productDesc" type="text" maxlength="50" class="form-control">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<label class="control-label" for="productPrice">Price</label>\n\t\t\t\t\t\t\t<input id="productPrice" type="text" maxlength="25" class="form-control"  length="10">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<label class="control-label" for="imageUrl">Image URL</label>\n\t\t\t\t\t\t\t<input id="imageUrl" type="text" maxlength="50" class="form-control">\n\t\t\t\t\t\t</div>\n            <div class="form-group">\n\t\t\t\t\t\t\t<label class="control-label" for="productTags">Tags</label>\n\t\t\t\t\t\t\t<input id="productTags" type="text" maxlength="50" class="form-control" placeholder="separated by ,">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<button id="signupSubmit" type="submit" class="btn btn-primary btn-lg">Submit <span class="glyphicon glyphicon-ok"></span></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n      </div>\n\t\t</div>\n\t</div>\n\n    '
}),r("design:paramtypes",[])],AddProductComponent)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},70:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=n(3),a=n(62),c=function(){function AppComponent(t){this.cartService=t}return AppComponent=o([i.Component({selector:"my-app",template:'\n              <nav class="navbar navbar-default navbar-static-top">\n  <div class="container-fluid">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a routerLink="" class="navbar-brand">Webshop</a>\n    </div>\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav">\n        <li class="dropdown">\n          <a routerLink="/products" routerLinkActive="active" role="button" >MEN <span class="caret"></span></a>\n        </li>\n        <li class="dropdown">\n          <a href="#" role="button">WOMEN <span class="caret"></span></a>\n        </li>\n      </ul>\n      <form class="navbar-form navbar-left">\n        <div class="form-group">\n          <input type="text" class="form-control" placeholder="Search...">\n        </div>\n        <button type="submit" class="btn btn-default">Submit</button>\n      </form>\n      <ul class="nav navbar-nav navbar-right">\n      <li role="presentation"><a routerLink="/cart">Shopping cart <span class="badge">{{numberOfShoppingCartItems}}</span></a></li>\n        <li class="dropdown">\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user"></span> Hello, user!</a>\n          <ul class="dropdown-menu">\n            <li><a routerLink="/add-product" routerLinkActive="active">Add new item</a></li>\n            <li><a routerLink="/profile" routerLinkActive="active" >My profile</a></li>\n            <li role="separator" class="divider"></li>\n            <li><a href="#">Log out</a></li>\n          </ul>\n        </li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n      <router-outlet></router-outlet>\n'}),r("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.default&&a.default)&&t||Object])],AppComponent);var t}();e.AppComponent=c}});
//# sourceMappingURL=app.js.map