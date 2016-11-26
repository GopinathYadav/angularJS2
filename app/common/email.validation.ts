import { FormControl, Validator } from '@angular/forms';




export class EmailValidator{
 constructor(){}
  static  InvalidEmail(c: FormControl) {

        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailReg.test(c.value) ? null : {InvalidEmail:true};
    }

}