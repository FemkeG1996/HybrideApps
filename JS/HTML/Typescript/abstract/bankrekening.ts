export abstract class Bankrekening{
    private rekeningnummer : string;
    protected saldo : number = 0;
    constructor(rekeningnummer:string)
    {
        this.rekeningnummer = rekeningnummer;
   
    }

    public storten(bedrag:number) :void{
        this.saldo += bedrag;
    }
    public abstract afhalen(bedrag:number): void;

    public  overschrijven(bedrag:number, rekening: Bankrekening) :void{
        this.saldo += bedrag;
        rekening.storten(bedrag);
    }
    public getSaldo():number{
        return this.saldo;
    }
}