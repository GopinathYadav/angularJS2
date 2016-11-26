import { PreventUnsavedChangesGuard } from '../common/prevent-unsaved-changes-guard.service';
import { UserComponent } from './user.component';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';


export const  UserRouting = RouterModule.forChild([
    {
        path:'users',
        component:UsersComponent
    },
    {   path:'users/new',
        component:UserComponent,
        canDeactivate:[PreventUnsavedChangesGuard]
    },
    {   path:'users/:id',
        component:UserComponent,
        canDeactivate:[PreventUnsavedChangesGuard]
    },

])