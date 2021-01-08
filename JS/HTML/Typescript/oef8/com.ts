export class com{
    public merk : string;
    public type : string;
    public prijsexl : number;
    public prijsincl : number;
    public btw : number;

    constructor (merk : string, type : string, prijsexcl : number)
    {
        this.merk = merk;
        this.type = type;
        this.prijsexl = prijsexcl;

        this.btw = 0.21
        this.prijsincl = prijsexcl + (prijsexcl * this.btw);
    }
}