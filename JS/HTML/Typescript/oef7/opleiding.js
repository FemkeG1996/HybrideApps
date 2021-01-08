"use strict";
exports.__esModule = true;
exports.opleiding = void 0;
var opleiding = /** @class */ (function () {
    function opleiding(naam, docent, datum, eindd) {
        this.naam = naam;
        this.docent = docent;
        this.datum = datum;
        this.einddatum = eindd;
        var teller = 0;
        var start = new Date(datum);
        while (start <= eindd) {
            if (start.getDay() != 0 && start.getDay() != 6)
                teller++;
            start.setDate(start.getDate() + 1);
        }
        this.aantaldagen = teller;
        console.log(this.aantaldagen);
    }
    return opleiding;
}());
exports.opleiding = opleiding;
