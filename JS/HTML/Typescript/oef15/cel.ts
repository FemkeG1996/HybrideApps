export class cel{
    private rij: number;
    private kolom : string;
    private waarde: string;
    constructor(k:string, r:number, w:string)
{
    this.kolom = k;
    this.rij = r;
    this.waarde = w;

}

public getRij(): number{
return this.rij
}
public getKolom(): string{
    return this.kolom
    }
    public getWaarde(): string{
        return this.waarde
        }
}