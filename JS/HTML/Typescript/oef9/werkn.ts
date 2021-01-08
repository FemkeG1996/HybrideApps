export class werkn{

    private gbdatum : Date;
    private voornaam : string;
    private naam : string;

    constructor(voornaam : string, naam : string , gbdatum : Date)
    {
        this.voornaam = voornaam;
        this.naam = naam;
        this.gbdatum = gbdatum;
    }

    public setVoornaam(voornaam:string)
    {
        this.voornaam = voornaam;
    }

    public setNaam(naam:string){
        this.naam = naam;
    }
    public setGbdatum(gbdatum : Date)
    {
        this.gbdatum = gbdatum;
    }
    public getWerknemer(): string
    {
        let output : string = '';

       output += 'Voornaam: ' + this.voornaam + '\n';
       output += 'Naam:' + this.naam + '\n';
       output += 'Geboortedatum: ' + this.gbdatum.getDate()+ '/' + (this.gbdatum.getMonth()+1) + '/' + this.gbdatum.getFullYear();

       return output
    }

}