import { cel } from "./cel";
import { IAfdrukbaar } from "./IAfrdrukbaar";

export class rekenblad implements IAfdrukbaar{
    private titel: string;
    private arrCellen: cel[] = [];
    constructor(titel:string)
    {
  this.titel = titel;
    }

    setInhoud(cellen:cel[]): void
    {
        cellen.forEach(
            (x) =>{
                this.arrCellen.push(x);
            }
        )
    }

     GeefTitel(): string{

return this.titel;
    }

    GeefTeDrukkentxt(): string{

let output : string = '';
output += 'Rekenblad ' + this.titel + '\n';
this.arrCellen.forEach(function(cel)
{
    output += 'CEL' + cel.getRij() + cel.getKolom() + ':' + cel.getWaarde() + '\n';
}
)

return output;

    }
    GeefLettertypeId(): number{
        return 30;
    }
}

