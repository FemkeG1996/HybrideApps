let pi : number = 3.14159;
let db : number= pi * 2;
console.log('[Deel1]', `${db} is ${pi} times two.`);
//----
let pie: string = 'blueberry';
console.log('[Deel2]', `I like to eat ${pie} pie.`);
//----
let isMark: boolean;
console.log('[Deel3]', `${isMark ? 'Oh, hi Mark' : 'Who are you?'}`);
//----
let integer: number = 6;
let float: number = 6.66;
let hex : number  = 0xf00d;
let binary: number = 0b1010011010;
let octal: number= 0o744;
let negZero: number = -0;
let actuallyNumber: number = NaN;
let members: number[] = [
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
