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
exports.zichtrekening = void 0;
var bankrekening_1 = require("./bankrekening");
var zichtrekening = /** @class */ (function (_super) {
    __extends(zichtrekening, _super);
    function zichtrekening() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.limiet = -500;
        return _this;
    }
    zichtrekening.prototype.afhalen = function (bedrag) {
        if (this.saldo - bedrag < this.limiet) {
            console.log('Limiet -500 bereikt');
        }
        else {
            this.saldo -= bedrag;
        }
    };
    return zichtrekening;
}(bankrekening_1.Bankrekening));
exports.zichtrekening = zichtrekening;
