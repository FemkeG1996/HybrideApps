import {com} from './com';



let computer = new Array();

let com1 : com = new com ('Acer', 'Type 3 ', 200);
let com2 : com = new com ('Lenovo', 'Klasse a' , 500)
let com3 : com = new com ('SharkBite', 'Klass S' , 700)
let com4 : com = new com ('Apple', 'Klasse A' , 800)
let com5 : com = new com ('Dell', 'Klasse P' , 1000)
computer.push(com1,com2,com3,com4,com5)

for( let e in computer)
{
    console.log(computer[e])
}