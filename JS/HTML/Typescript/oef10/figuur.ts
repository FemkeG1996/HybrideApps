export class figuur{

    private hoogte : number;
    private lengte : number ;

    constructor(hoogte : number, lengte : number){
        this.hoogte = hoogte;
        this.lengte = lengte;
    }

    public setHoogte(hoogte: number)
    {
        this.hoogte = hoogte;
    }
    public setLengte(lengte : number)
    {
        this.lengte = lengte;
    }
    private Berekenoppervlakte(): number
    {
         return  this.hoogte*this.lengte;
    }
    public geefOppervlakte() : number
    {
        return this.Berekenoppervlakte();
    }

    public draaiFiguur()
    {
        let nummer = this.hoogte;
        this.hoogte = this.lengte;
        this.lengte = nummer;
    }
}