import { cel } from './cel';
import { Rapport } from './rapport';
import {rekenblad} from './rekenblad';
import { terminalprinter } from './terminalprinter';



let c : cel = new cel('A',1, '105 euro');
let c2 : cel = new cel('A',2, '205 euro');
let c3 : cel = new cel('A',3, '255 euro');
let test : rekenblad = new rekenblad('Pagina 1');
let arr: cel[] = [c,c2,c3];
test.setInhoud([c,c2,c3])
console.log(test.GeefTeDrukkentxt());

let rapport : Rapport = new Rapport();
rapport.ZetTitel("Nieuw Rapport");
rapport.ZetInhoud("Dit rapport moet gaan over ....");
console.log(rapport.GeefTeDrukkentxt());

let ts : terminalprinter = new terminalprinter();
ts.afdrukken(rapport);
ts.afdrukken(test);