"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Deluxe = exports.game = void 0;
var game = /** @class */ (function () {
    function game() {
        this.titel = '';
        this.uitgever = '';
        this.prijsexcl = 0;
    }
    game.prototype.setTitel = function (titel) {
        this.titel = titel;
    };
    ;
    game.prototype.getTitel = function () {
        var print;
        print = 'De titel: ';
        print += this.titel;
        return print;
    };
    game.prototype.setUitgever = function (uitgever) {
        this.uitgever = uitgever;
    };
    game.prototype.getUitgever = function () {
        var output;
        output = 'De uitgever: ';
        output += this.uitgever;
        return output;
    };
    game.prototype.setPrijs = function (prijsexcl) {
        this.prijsexcl = prijsexcl;
    };
    game.prototype.getPrijs = function () {
        var prijs;
        prijs = 'Dit is de prijs excl';
        prijs += this.prijsexcl;
        return prijs;
    };
    game.prototype.getVerkoopprijs = function () {
        var totaal;
        console.log('Dit is de prijs incl ');
        totaal = (this.prijsexcl + (this.prijsexcl * 0.21));
        return totaal;
    };
    return game;
}());
exports.game = game;
var Deluxe = /** @class */ (function (_super) {
    __extends(Deluxe, _super);
    function Deluxe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deluxe.prototype.getVerkoopprijs = function () {
        var totaal;
        console.log('Dit is de prijs Deluxe ');
        totaal = (this.prijsexcl + (this.prijsexcl * 0.31));
        return totaal;
    };
    return Deluxe;
}(game));
exports.Deluxe = Deluxe;
