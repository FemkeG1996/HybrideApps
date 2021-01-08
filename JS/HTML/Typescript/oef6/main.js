"use strict";
exports.__esModule = true;
var factuur_1 = require("./factuur");
var factuur1 = new factuur_1.factuur();
factuur1.klantnummer = 1;
factuur1.nummer = 30;
factuur1.bedrag = 200;
var factuur2 = new factuur_1.factuur();
factuur2.klantnummer = 2;
factuur2.nummer = 31;
factuur2.bedrag = 150;
for (var e in factuur1) {
    console.log(factuur1[e]);
}
for (var e in factuur2) {
    console.log(factuur2[e]);
}
