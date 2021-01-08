import {gebouw} from './gebouw'
import { huis, school } from './huis';

let g: gebouw = new gebouw();
let h: huis = new huis();
h.setRuimte(3);
let h2: huis = new huis();
h2.setRuimte(5);
let s: school = new school();
console.log(g.getRuimte());
console.log(h.getRuimte());
console.log(h2.getRuimte());
console.log(s.getRuimte())