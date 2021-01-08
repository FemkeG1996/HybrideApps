for ( let i= 0; i < 1000; i++)
{
    let getal:string = i.toString();
    let uitkomst:number = 0 
    for (let j = 0; j < getal.length; j++) {
        uitkomst += Math.pow(Number(getal.charAt(j)), getal.length);
    }
    if ( uitkomst == i){
        console.log(i);
    }
}