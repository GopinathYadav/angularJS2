import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PostService } from './post.service';
import { PostsComponent } from './posts.component';
import { selector } from 'rxjs/operator/multicast';
import { NgModule } from '@angular/core';





@NgModule({
    declarations:[PostsComponent],
    providers: [PostService],
     imports:[BrowserModule,CommonModule, FormsModule, ReactiveFormsModule,RouterModule]
})



export class PostModule{

}