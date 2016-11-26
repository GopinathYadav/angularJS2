import { PreventUnsavedChangesGuard } from './common/prevent-unsaved-changes-guard.service';
import { UserComponent } from './User/user.component';
import { UsersComponent } from './User/users.component';
import { PostComponent } from './post/post.component';
import {Router,RouterModule} from '@angular/router'
import {HomeComponet} from './home/home.component'
 export const routing = RouterModule.forRoot([
    {path:'',component:HomeComponet},
    {path:'home',component:HomeComponet},
    {path:'post',component:PostComponent},
    {path:'**',component:HomeComponet}
]);