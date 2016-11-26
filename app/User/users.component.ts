import { Router } from '@angular/router';
import { User } from '../domain/User';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from "RxJS/Rx";
import 'rxjs/add/operator/map';

@Component({
    selector:'users',
    templateUrl : './app/User/users.component.html' 
})

export class UsersComponent implements OnInit {
    test = 'true'
    userList : User[]

    constructor(private _userService : UserService,private _router:Router){
      
    }
  ngOnInit(){
        this._userService.getUsers().subscribe(users=>
              this.userList=users
         );

  }

  openNewUserForm(){
      this._router.navigate(['users/new']);

  }
   
   delete(user){
       let index: number
      if(  confirm('Are you want to delete this user?') == true){
       // user = this.userList.filter( user=>user.id, 0)[0];
        index = this.userList.indexOf(user)
        this.userList.splice(index,1)
               
      }
   }
 
}