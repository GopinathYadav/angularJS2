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
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var UsersComponent = (function () {
    function UsersComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.test = 'true';
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers().subscribe(function (users) {
            return _this.userList = users;
        });
    };
    UsersComponent.prototype.openNewUserForm = function () {
        this._router.navigate(['users/new']);
    };
    UsersComponent.prototype.delete = function (user) {
        var index;
        if (confirm('Are you want to delete this user?') == true) {
            // user = this.userList.filter( user=>user.id, 0)[0];
            index = this.userList.indexOf(user);
            this.userList.splice(index, 1);
        }
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: './app/User/users.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map