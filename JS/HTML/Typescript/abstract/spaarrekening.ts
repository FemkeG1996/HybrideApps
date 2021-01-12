import { Bankrekening } from "./bankrekening";

export class spaarrekening extends Bankrekening{
    public afhalen(bedrag: number){
        if(bedrag > this.saldo)
        {
         console.log("Niet Mogelijk")
        }
        else{
            this.saldo -= bedrag;
        }
    }
}