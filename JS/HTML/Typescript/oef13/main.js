"use strict";
exports.__esModule = true;
var gebouw_1 = require("./gebouw");
var huis_1 = require("./huis");
var g = new gebouw_1.gebouw();
var h = new huis_1.huis();
h.setRuimte(3);
var h2 = new huis_1.huis();
h2.setRuimte(5);
var s = new huis_1.school();
console.log(g.getRuimte());
console.log(h.getRuimte());
console.log(h2.getRuimte());
console.log(s.getRuimte());
