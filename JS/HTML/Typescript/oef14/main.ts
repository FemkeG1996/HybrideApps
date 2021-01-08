import {game, Deluxe} from './game';

let g: game = new game();
g.setTitel('Het huis');
g.setUitgever('Noorderkempen');
g.setPrijs(20);

let d: Deluxe = new Deluxe();
d.setTitel('Noorderzon')
d.setUitgever('Niemandsland')
d.setPrijs(20)

console.log(g.getTitel()) ;
console.log(g.getUitgever());
console.log(g.getPrijs());
console.log(g.getVerkoopprijs());
console.log(d.getTitel()) ;
console.log(d.getUitgever());
console.log(d.getVerkoopprijs());


