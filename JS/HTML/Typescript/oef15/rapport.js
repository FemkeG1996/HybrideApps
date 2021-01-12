"use strict";
exports.__esModule = true;
exports.Rapport = void 0;
var Rapport = /** @class */ (function () {
    function Rapport() {
    }
    Rapport.prototype.GeefTitel = function () {
        return this.titel;
    };
    Rapport.prototype.ZetTitel = function (titel) {
        this.titel = titel;
    };
    Rapport.prototype.ZetInhoud = function (inhoud) {
        this.inhoud = inhoud;
    };
    Rapport.prototype.GeefTeDrukkentxt = function () {
        return this.inhoud;
    };
    Rapport.prototype.GeefLettertypeId = function () {
        return 5;
    };
    return Rapport;
}());
exports.Rapport = Rapport;
