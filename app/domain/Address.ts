


export class Address{

    constructor() {
        this.geo = new Geo()
    }
street:String
suite:String
city:String
zipcode:String
 geo:Geo    
}

export class Geo{
    lat
    lng

}