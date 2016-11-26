import { UserRouting } from './User/user.routing';
import { RouterModule } from '@angular/router';
import { PreventUnsavedChangesGuard } from './common/prevent-unsaved-changes-guard.service';
import { EmailValidator } from './common/email.validation';
import { CommonModule } from '@angular/common';
import { BasicHttpClientImpl } from './services/basicHttpClientImpl';
import { BasicHttpClient } from './services/basicHttpClient';
import { PostModule } from './post/post.module';
import { UserModule } from './User/user.module';
import { HomeModule } from './home/home.module';
import { routing } from './app.routing';
import { NavBarComponent } from './navbar.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports:        [  BrowserModule,CommonModule,UserRouting,
                     routing, HomeModule,UserModule,
                     PostModule, HttpModule,ReactiveFormsModule,
                     FormsModule 
                  ],
  declarations:   [ AppComponent,NavBarComponent 
                  ],
  providers:      [
                      BasicHttpClientImpl,
                      PreventUnsavedChangesGuard
                  ],
  bootstrap:      [  
                    AppComponent 
                    
                  ]
})
export class AppModule { }
