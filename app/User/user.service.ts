import { Observable } from 'rxjs/Rx';
import { User } from '../domain/User';

import { BasicHttpClientImpl } from '../services/basicHttpClientImpl';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';




@Injectable()
export class UserService{
    userServiceURL='http://jsonplaceholder.typicode.com/'


   constructor(private _httpClient:BasicHttpClientImpl){
       
   }
    
   getUsers() : Observable<User[]>{
       return this._httpClient.get(this.userServiceURL+'users')
       
   }
    getUser(id) : Observable<User>{
       return this._httpClient.getOne(this.userServiceURL+'users/'+id)
       
   }

   postUser(user:User) : Observable<User>{
      return this._httpClient.post(this.userServiceURL+'posts',user)
   }
    

}