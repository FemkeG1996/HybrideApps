"use strict";
exports.__esModule = true;
exports.cel = void 0;
var cel = /** @class */ (function () {
    function cel(k, r, w) {
        this.kolom = k;
        this.rij = r;
        this.waarde = w;
    }
    cel.prototype.getRij = function () {
        return this.rij;
    };
    cel.prototype.getKolom = function () {
        return this.kolom;
    };
    cel.prototype.getWaarde = function () {
        return this.waarde;
    };
    return cel;
}());
exports.cel = cel;
