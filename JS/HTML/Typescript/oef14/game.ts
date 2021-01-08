export class game{

    protected titel : string ;
    protected uitgever : string ;
    protected prijsexcl: number;

    constructor(){
this.titel = '';
this.uitgever = '';
this.prijsexcl = 0;
    }

    public setTitel(titel:string){
this.titel = titel;
    };

    public getTitel(){
        let print: string;
        print = 'De titel: '
        print += this.titel;
        return print;
    }

    public setUitgever(uitgever:string){
this.uitgever = uitgever;
    }

    public getUitgever(){
        let output: string;
        output = 'De uitgever: '
        output += this.uitgever;
        return output;
    }

    public setPrijs(prijsexcl:number){
this.prijsexcl = prijsexcl;
    }

    public getPrijs(){
        let prijs : string;
        prijs = 'Dit is de prijs excl ';

        prijs += this.prijsexcl;
        return prijs;
    }

    public getVerkoopprijs(){
    let totaal : number
    console.log('Dit is de prijs incl ');
    totaal =  (this.prijsexcl+(this.prijsexcl *0.21));
    return totaal;
    }
}
export class Deluxe extends game{

public getVerkoopprijs(){
    let totaal : number;
    console.log('Dit is de prijs Deluxe ')
    totaal= (this.prijsexcl+(this.prijsexcl * 0.31));
    return totaal;
}

}