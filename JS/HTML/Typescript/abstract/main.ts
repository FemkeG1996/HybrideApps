import { Bankrekening } from "./bankrekening";
import { spaarrekening } from "./spaarrekening";
import { zichtrekening } from "./zichtrekening";

let rekenening1 : zichtrekening = new zichtrekening('BE0123456789');
let rekenening2 : spaarrekening = new spaarrekening('BE0123456777');

rekenening1.storten(1000);
rekenening2.storten(1000);

rekenening1.overschrijven(100,rekenening2);
rekenening1.afhalen(20);
console.log(`Saldo R1: ${rekenening1.getSaldo()} - Saldo R2: ${rekenening2.getSaldo()}`);
