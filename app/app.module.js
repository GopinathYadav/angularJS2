"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var user_routing_1 = require('./User/user.routing');
var prevent_unsaved_changes_guard_service_1 = require('./common/prevent-unsaved-changes-guard.service');
var common_1 = require('@angular/common');
var basicHttpClientImpl_1 = require('./services/basicHttpClientImpl');
var post_module_1 = require('./post/post.module');
var user_module_1 = require('./User/user.module');
var home_module_1 = require('./home/home.module');
var app_routing_1 = require('./app.routing');
var navbar_component_1 = require('./navbar.component');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, common_1.CommonModule, user_routing_1.UserRouting,
                app_routing_1.routing, home_module_1.HomeModule, user_module_1.UserModule,
                post_module_1.PostModule, http_1.HttpModule, forms_1.ReactiveFormsModule,
                forms_1.FormsModule
            ],
            declarations: [app_component_1.AppComponent, navbar_component_1.NavBarComponent
            ],
            providers: [
                basicHttpClientImpl_1.BasicHttpClientImpl,
                prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map