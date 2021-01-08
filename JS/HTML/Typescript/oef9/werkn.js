"use strict";
exports.__esModule = true;
exports.werkn = void 0;
var werkn = /** @class */ (function () {
    function werkn(voornaam, naam, gbdatum) {
        this.voornaam = voornaam;
        this.naam = naam;
        this.gbdatum = gbdatum;
    }
    werkn.prototype.setVoornaam = function (voornaam) {
        this.voornaam = voornaam;
    };
    werkn.prototype.setNaam = function (naam) {
        this.naam = naam;
    };
    werkn.prototype.setGbdatum = function (gbdatum) {
        this.gbdatum = gbdatum;
    };
    werkn.prototype.getWerknemer = function () {
        var output = '';
        output += 'Voornaam: ' + this.voornaam + '\n';
        output += 'Naam:' + this.naam + '\n';
        output += 'Geboortedatum: ' + this.gbdatum.getDate() + '/' + (this.gbdatum.getMonth() + 1) + '/' + this.gbdatum.getFullYear();
        return output;
    };
    return werkn;
}());
exports.werkn = werkn;
