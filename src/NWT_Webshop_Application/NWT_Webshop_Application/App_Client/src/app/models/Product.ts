export default class Product {
    public id: number;
    public name: string;
    public description: string;
    public imageURL: string;
    public price: number;
    public averageScore: number;
    public numOfScores: number;
    public amount: number;
    public tags: string[];

    constructor(prodObj: ProductConstrucorObject){
        this.id = prodObj.id;
        this.name = prodObj.name;
        this.description = prodObj.description;
        this.imageURL = prodObj.imgURL;
        this.price = prodObj.price;
        this.averageScore = prodObj.avgScore;
        this.numOfScores = prodObj.numScores;
        this.amount = prodObj.amount;
        this.tags = prodObj.tags;
    }
}


interface ProductConstrucorObject {
    id: number;
    name: string;
    description: string;
    imgURL: string;
    price: number;
    avgScore: number;
    numScores: number
    amount: number;
    tags: string[];
}