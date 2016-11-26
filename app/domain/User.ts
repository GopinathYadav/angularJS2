import { Company } from './Company';
import { Address } from './Address';
import { identifierToken } from '@angular/compiler/src/identifiers';


export class User{

  constructor(){
   this.address = new Address()
   this.company = new Company()
  }
     id: number
     name:String
     username: String
     email:String
     address:Address
     phone:String
     website:String
     company:Company

    
}