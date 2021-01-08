"use strict";
exports.__esModule = true;
var com_1 = require("./com");
var computer = new Array();
var com1 = new com_1.com('Acer', 'Type 3 ', 200);
var com2 = new com_1.com('Lenovo', 'Klasse a', 500);
var com3 = new com_1.com('SharkBite', 'Klass S', 700);
var com4 = new com_1.com('Apple', 'Klasse A', 800);
var com5 = new com_1.com('Dell', 'Klasse P', 1000);
computer.push(com1, com2, com3, com4, com5);
for (var e in computer) {
    console.log(computer[e]);
}
