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
exports.spaarrekening = void 0;
var bankrekening_1 = require("./bankrekening");
var spaarrekening = /** @class */ (function (_super) {
    __extends(spaarrekening, _super);
    function spaarrekening() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    spaarrekening.prototype.afhalen = function (bedrag) {
        if (bedrag > this.saldo) {
            console.log("Niet Mogelijk");
        }
        else {
            this.saldo -= bedrag;
        }
    };
    return spaarrekening;
}(bankrekening_1.Bankrekening));
exports.spaarrekening = spaarrekening;
