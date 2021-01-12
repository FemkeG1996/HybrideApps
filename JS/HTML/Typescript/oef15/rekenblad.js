"use strict";
exports.__esModule = true;
exports.rekenblad = void 0;
var rekenblad = /** @class */ (function () {
    function rekenblad(titel) {
        this.arrCellen = [];
        this.titel = titel;
    }
    rekenblad.prototype.setInhoud = function (cellen) {
        var _this = this;
        cellen.forEach(function (x) {
            _this.arrCellen.push(x);
        });
    };
    rekenblad.prototype.GeefTitel = function () {
        return this.titel;
    };
    rekenblad.prototype.GeefTeDrukkentxt = function () {
        var output = '';
        output += 'Rekenblad ' + this.titel + '\n';
        this.arrCellen.forEach(function (cel) {
            output += 'CEL' + cel.getRij() + cel.getKolom() + ':' + cel.getWaarde() + '\n';
        });
        return output;
    };
    rekenblad.prototype.GeefLettertypeId = function () {
        return 30;
    };
    return rekenblad;
}());
exports.rekenblad = rekenblad;
