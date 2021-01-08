
export class gebouw{
    protected aantalr : number;

    constructor(){
        this.aantalr = 4;
    }

    public setRuimte(aantalr : number){
        this.aantalr = aantalr;
    }

    public getRuimte(){
        let print : string;
        print = '';

        print += 'Gebouw met ';
        print += this.aantalr;
        print += ' kamers';
        return print;
    }
}