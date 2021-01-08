"use strict";
exports.__esModule = true;
exports.figuur = void 0;
var figuur = /** @class */ (function () {
    function figuur(hoogte, lengte) {
        this.hoogte = hoogte;
        this.lengte = lengte;
    }
    figuur.prototype.setHoogte = function (hoogte) {
        this.hoogte = hoogte;
    };
    figuur.prototype.setLengte = function (lengte) {
        this.lengte = lengte;
    };
    figuur.prototype.Berekenoppervlakte = function () {
        return this.hoogte * this.lengte;
    };
    figuur.prototype.geefOppervlakte = function () {
        return this.Berekenoppervlakte();
    };
    figuur.prototype.draaiFiguur = function () {
        var nummer;
        nummer = this.hoogte;
        this.hoogte = this.lengte;
        this.lengte = nummer;
        return this.hoogte;
    };
    return figuur;
}());
exports.figuur = figuur;
