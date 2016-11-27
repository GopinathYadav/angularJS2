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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var User_1 = require('../domain/User');
var empty_validation_1 = require('../common/empty.validation');
var email_validation_1 = require('../common/email.validation');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var forms_2 = require('@angular/forms');
var UserComponent = (function () {
    function UserComponent(_fb, _userService, _router, _activeRouter) {
        this._fb = _fb;
        this._userService = _userService;
        this._router = _router;
        this._activeRouter = _activeRouter;
        this.title = 'Add a User';
        this.newUser = new User_1.User();
        this.populateForm(this.newUser);
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newUser = new User_1.User();
        this._activeRouter.params.subscribe(function (params) {
            if (params["id"] != undefined) {
                _this.newUser.id = params["id"];
                _this.title = 'Edit a User';
                _this._userService.getUser(_this.newUser.id).subscribe(function (user) {
                    _this.newUser = user;
                    _this.populateForm(_this.newUser);
                });
            }
            else {
                _this.populateForm(_this.newUser);
            }
        });
    };
    UserComponent.prototype.populateForm = function (user) {
        this.newUserForm = this._fb.group({
            userGroupForm: this._fb.group({
                name: [user.name, forms_2.Validators.compose([forms_2.Validators.required, empty_validation_1.EmptyValidator.cannotContainSpace])],
                email: [user.email, forms_2.Validators.compose([forms_2.Validators.required, email_validation_1.EmailValidator.InvalidEmail])],
                phone: [user.phone]
            }),
            addressGroupForm: this._fb.group({
                street: [user.address.street],
                suite: [user.address.suite],
                city: [user.address.city],
                zipCode: [user.address.zipcode]
            })
        });
    };
    UserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.newUser = new User_1.User();
        this.newUser.name = this.newUserForm.get('userGroupForm').get('name').value;
        this.newUser.email = this.newUserForm.get('userGroupForm').get('email').value;
        this.newUser.phone = this.newUserForm.get('userGroupForm').get('phone').value;
        this.newUser.address.street = this.newUserForm.get('addressGroupForm').get('street').value;
        this.newUser.address.suite = this.newUserForm.get('addressGroupForm').get('suite').value;
        this.newUser.address.city = this.newUserForm.get('addressGroupForm').get('city').value;
        this.newUser.address.zipcode = this.newUserForm.get('addressGroupForm').get('zipCode').value;
        this._userService.postUser(this.newUser).subscribe(function (user) {
            _this.newUserForm.markAsPristine();
            _this._router.navigate(['users']);
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            templateUrl: './app/user/user.component.html'
        }),
        __param(0, core_1.Inject(forms_1.FormBuilder)),
        __param(1, core_1.Inject(user_service_1.UserService)), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_service_1.UserService, router_1.Router, router_1.ActivatedRoute])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map