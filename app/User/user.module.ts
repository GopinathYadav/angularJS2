import { RouterModule } from '@angular/router';
import { EmailValidator } from '../common/email.validation';
import { UserComponent } from './user.component';
import { UsersComponent } from './users.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule} from '@angular/core'
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';

@NgModule({
    providers: [UserService],
    declarations: [UsersComponent,UserComponent],
    imports:[BrowserModule,CommonModule, FormsModule, ReactiveFormsModule,RouterModule]
    
    
})

export class UserModule{

}