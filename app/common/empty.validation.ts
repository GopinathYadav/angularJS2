import { FormControl, Validator } from '@angular/forms';



export class EmptyValidator{


constructor(){}

  static  cannotContainSpace(c: FormControl) {
     
         if ( c.value !=null &&  c.value.indexOf(' ') >0) 
                    return {cannotContainSpace:true}
        return null
    }



}