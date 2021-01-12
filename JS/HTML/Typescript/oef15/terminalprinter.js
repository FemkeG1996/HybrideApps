"use strict";
exports.__esModule = true;
exports.terminalprinter = void 0;
var terminalprinter = /** @class */ (function () {
    function terminalprinter() {
    }
    terminalprinter.prototype.afdrukken = function (document) {
        console.log(document.GeefTitel() + '\n'
            +
                document.GeefTeDrukkentxt()
            + Date());
    };
    return terminalprinter;
}());
exports.terminalprinter = terminalprinter;
