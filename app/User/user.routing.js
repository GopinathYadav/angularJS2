"use strict";
var prevent_unsaved_changes_guard_service_1 = require('../common/prevent-unsaved-changes-guard.service');
var user_component_1 = require('./user.component');
var users_component_1 = require('./users.component');
var router_1 = require('@angular/router');
exports.UserRouting = router_1.RouterModule.forChild([
    {
        path: 'users',
        component: users_component_1.UsersComponent
    },
    { path: 'users/new',
        component: user_component_1.UserComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    { path: 'users/:id',
        component: user_component_1.UserComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
]);
//# sourceMappingURL=user.routing.js.map