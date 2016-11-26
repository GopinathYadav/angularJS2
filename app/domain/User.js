"use strict";
var Company_1 = require('./Company');
var Address_1 = require('./Address');
var User = (function () {
    function User() {
        this.address = new Address_1.Address();
        this.company = new Company_1.Company();
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map