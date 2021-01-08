"use strict";
exports.__esModule = true;
exports.com = void 0;
var com = /** @class */ (function () {
    function com(merk, type, prijsexcl) {
        this.merk = merk;
        this.type = type;
        this.prijsexl = prijsexcl;
        this.btw = 0.21;
        this.prijsincl = prijsexcl + (prijsexcl * this.btw);
    }
    return com;
}());
exports.com = com;
