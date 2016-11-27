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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var post_service_1 = require('./post.service');
var posts_component_1 = require('./posts.component');
var core_1 = require('@angular/core');
var PostModule = (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        core_1.NgModule({
            declarations: [posts_component_1.PostsComponent],
            providers: [post_service_1.PostService],
            imports: [platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], PostModule);
    return PostModule;
}());
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map