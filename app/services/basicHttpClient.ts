import { TakeSignature } from 'rxjs/operator/take';
import { Observable } from 'rxjs/Rx';
import { HttpModule } from '@angular/http'; 


export interface BasicHttpClient<T>{
    getOne(url:String): Observable<T>
    get(url:String): Observable<T[]>
    post(url:String,body:Object): Observable<T>
    obj : any
}