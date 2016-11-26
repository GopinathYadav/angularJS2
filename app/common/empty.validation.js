"use strict";
var EmptyValidator = (function () {
    function EmptyValidator() {
    }
    EmptyValidator.cannotContainSpace = function (c) {
        if (c.value != null && c.value.indexOf(' ') > 0)
            return { cannotContainSpace: true };
        return null;
    };
    return EmptyValidator;
}());
exports.EmptyValidator = EmptyValidator;
//# sourceMappingURL=empty.validation.js.map