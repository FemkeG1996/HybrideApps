"use strict";
exports.__esModule = true;
exports.gebouw = void 0;
var gebouw = /** @class */ (function () {
    function gebouw() {
        this.aantalr = 4;
    }
    gebouw.prototype.setRuimte = function (aantalr) {
        this.aantalr = aantalr;
    };
    gebouw.prototype.getRuimte = function () {
        var print;
        print = '';
        print += 'Gebouw met ';
        print += this.aantalr;
        print += ' kamers';
        return print;
    };
    return gebouw;
}());
exports.gebouw = gebouw;
