import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './user.service';
import { User } from '../domain/User';
import { EmptyValidator } from '../common/empty.validation';
import { EmailValidator } from '../common/email.validation';
import { FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';


@Component({
    selector:'user',
    templateUrl:'./app/user/user.component.html'
})
export class UserComponent implements OnInit{
   title:String



   newUserForm:FormGroup
   newUser : User
   constructor( @Inject(FormBuilder) private _fb: FormBuilder,
                @Inject(UserService) private _userService : UserService,
                private _router:Router,
                private _activeRouter:ActivatedRoute){
                this.title='Add a User'
                this.newUser = new User();
                this.populateForm(this.newUser)


   }



   ngOnInit(){
     this.newUser = new User();
     this._activeRouter.params.subscribe(params =>{
      if( params["id"] != undefined){
                 this.newUser.id = params["id"]
                 this.title='Edit a User'
                 this._userService.getUser(this.newUser.id) .subscribe(user =>{
                 this.newUser = user
                 this.populateForm(this.newUser)
                    })         
    } else{
        this.populateForm(this.newUser)
    }
   
   })

  
  
    

   }

    populateForm(user:User){
     this.newUserForm = this._fb.group({
     userGroupForm:  this._fb.group({
         name:[user.name, Validators.compose([ Validators.required,EmptyValidator.cannotContainSpace])],
         email:[user.email,Validators.compose([Validators.required,EmailValidator.InvalidEmail]) ],
         phone:[user.phone]
      }),
      addressGroupForm:this._fb.group({
          street:[user.address.street],
          suite:[user.address.suite],
          city:[user.address.city],
          zipCode:[user.address.zipcode]
      })
    })
    }


   onSubmit(){
    this.newUser = new User();
    this.newUser.name = this.newUserForm.get('userGroupForm').get('name').value;
    this.newUser.email = this.newUserForm.get('userGroupForm').get('email').value;
    this.newUser.phone = this.newUserForm.get('userGroupForm').get('phone').value;
    this.newUser.address.street = this.newUserForm.get('addressGroupForm').get('street').value;
    this.newUser.address.suite = this.newUserForm.get('addressGroupForm').get('suite').value;
    this.newUser.address.city = this.newUserForm.get('addressGroupForm').get('city').value;
    this.newUser.address.zipcode = this.newUserForm.get('addressGroupForm').get('zipCode').value;
    this._userService.postUser(this.newUser).subscribe(user=>{
                   this.newUserForm.markAsPristine()
                   this._router.navigate(['users'])
                    }
            );
  


   }

}