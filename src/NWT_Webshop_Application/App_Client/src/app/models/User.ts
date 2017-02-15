export default class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public address: string;
    public ratedProducts: any[];

    constructor(userObject: UserConstructorObject){
        this.id = userObject.id;
        this.firstName = userObject.firstName;
        this.lastName = userObject.lastName;
        this.email = userObject.email;
        this.address = userObject.address;
        this.ratedProducts = userObject.ratedProducts;
    }

}


interface UserConstructorObject {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    ratedProducts: any[]
}