import {IAfdrukbaar} from './IAfrdrukbaar';

export class Rapport implements IAfdrukbaar{
    private titel: string;
    private inhoud: string;
    GeefTitel(): string{
       return this.titel;
    }
    ZetTitel(titel:string)
    {
        this.titel = titel;
    }
    ZetInhoud(inhoud:string)
    {
        this.inhoud = inhoud;
    }
    GeefTeDrukkentxt(): string{
        return this.inhoud;
    }

    GeefLettertypeId(): number{
        return 5;
    }
}