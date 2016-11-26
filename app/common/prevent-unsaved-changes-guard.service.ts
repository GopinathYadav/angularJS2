import { UserComponent } from '../User/user.component';
import { CanDeactivate } from '@angular/router';




export class PreventUnsavedChangesGuard implements CanDeactivate<UserComponent>{

   canDeactivate(component:UserComponent){
       if(component.newUserForm.dirty){
                return confirm('Are you sure ?')
       }
       return true;
   }


}