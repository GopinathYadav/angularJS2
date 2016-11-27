"use strict";
var posts_component_1 = require('./post/posts.component');
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponet },
    { path: 'home', component: home_component_1.HomeComponet },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: '**', component: home_component_1.HomeComponet }
]);
//# sourceMappingURL=app.routing.js.map