"use strict";
exports.__esModule = true;
exports.Bankrekening = void 0;
var Bankrekening = /** @class */ (function () {
    function Bankrekening(rekeningnummer) {
        this.saldo = 0;
        this.rekeningnummer = rekeningnummer;
    }
    Bankrekening.prototype.storten = function (bedrag) {
        this.saldo += bedrag;
    };
    Bankrekening.prototype.overschrijven = function (bedrag, rekening) {
        this.saldo += bedrag;
        rekening.storten(bedrag);
    };
    Bankrekening.prototype.getSaldo = function () {
        return this.saldo;
    };
    return Bankrekening;
}());
exports.Bankrekening = Bankrekening;
