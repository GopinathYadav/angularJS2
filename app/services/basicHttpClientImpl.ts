import { User } from '../domain/User';
import { BasicHttpClient } from './basicHttpClient';
import { Headers, Http, HttpModule, JsonpModule, RequestOptions, Response } from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export  class BasicHttpClientImpl implements BasicHttpClient<User>{

  constructor( private httpClient :Http){

  }


    get(url): Observable<User[]> {
        return this.httpClient.get(url)
        .map(this.extractData)
        
        .catch(this.handleError)
 
   }

  getOne(url): Observable<User> {
        return this.httpClient.get(url)
        .map(this.extractData)
        .catch(this.handleError)
 
   }

   post(url,body:Object) : Observable<User>{
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.httpClient.post(url, body, options) // ...using post request
                         .map(this.extractData) // ...and calling .json() on the response to return data
                         .catch(this.handleError); //...errors if any
   
   }


 private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}