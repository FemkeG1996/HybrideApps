var pi = 3.14159;
var db = pi * 2;
console.log('[Deel1]', db + " is " + pi + " times two.");
//----
var pie = 'blueberry';
console.log('[Deel2]', "I like to eat " + pie + " pie.");
//----
var isMark;
console.log('[Deel3]', "" + (isMark ? 'Oh, hi Mark' : 'Who are you?'));
//----
var integer = 6;
var float = 6.66;
var hex = '0xf00d';
var binary = '0b1010011010';
var octal = '0o744';
var negZero = -0;
var actuallyNumber = NaN;
var members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber
];
members[0] = '12345';
console.log('[Deel4]', members);
