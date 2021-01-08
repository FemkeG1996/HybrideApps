export class opleiding{
public naam : string;
public docent : string ;
public datum : Date;
public einddatum : Date;
public aantaldagen : number;

constructor(naam: string, docent: string, datum : Date, eindd : Date ){
this.naam = naam;
this.docent = docent;
this.datum = datum;
this.einddatum = eindd;

let teller: number = 0;
        let start: Date = new Date(datum);
        while (start <= eindd) {
            if (start.getDay() != 0 && start.getDay() != 6) 
                teller++;
                start.setDate(start.getDate() + 1)
        }
        this.aantaldagen = teller;
console.log(this.aantaldagen)
}
}