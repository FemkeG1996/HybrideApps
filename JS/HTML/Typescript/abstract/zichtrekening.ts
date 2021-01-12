import { Bankrekening } from "./bankrekening";

export class zichtrekening extends Bankrekening{
    private limiet : number = -500;
    
    public afhalen(bedrag:number){
        if(this.saldo - bedrag < this.limiet)
        {
            console.log('Limiet -500 bereikt')
        }
        else{
            this.saldo -= bedrag;
        }
    }
}