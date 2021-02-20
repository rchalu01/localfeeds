import { Product } from "./product"

export class Productor {
    public id:String
    public name:String
    public address:String
    public contact:String
    public schedule:String
    public description:String
    public productType:Array<Product>

    public toObject(): Object{
        return {
            name: this.name,
            adress: this.address,
            contact: this.contact,
            schedule: this.schedule,
            description: this.description,
            productType: this.productType
        }
    }
}