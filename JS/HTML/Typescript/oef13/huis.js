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
exports.school = exports.huis = void 0;
var gebouw_1 = require("./gebouw");
var huis = /** @class */ (function (_super) {
    __extends(huis, _super);
    function huis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return huis;
}(gebouw_1.gebouw));
exports.huis = huis;
var school = /** @class */ (function (_super) {
    __extends(school, _super);
    function school() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    school.prototype.getRuimte = function () {
        var print;
        print = '';
        print += 'Dit is een School met ';
        print += this.aantalr;
        print += ' lokalen';
        return print;
    };
    return school;
}(gebouw_1.gebouw));
exports.school = school;
