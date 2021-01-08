import { format } from "path";
import {factuur} from './factuur';

let factuur1 = new factuur();
factuur1.klantnummer= 1;
factuur1.nummer = 30;
factuur1.bedrag = 200;

let factuur2 = new factuur();
factuur2.klantnummer= 2;
factuur2.nummer = 31;
factuur2.bedrag = 150;

for(let  e in factuur1){
    console.log(factuur1[e])
}
for(let  e in factuur2){
    console.log(factuur2[e])
}