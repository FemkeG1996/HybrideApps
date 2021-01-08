function bereken() {
    let begin: number = (document.frm.begin.value);
    var eind: number = (document.frm.eind.value);

    document.getElementById('uitkomst').innerHTML= '';
    for (let i = begin; i < eind; i++) {
        let getal: string = i.toString();
        let uitkomst: number = 0
        for (let j = 0; j < getal.length; j++) {
            uitkomst += Math.pow(Number(getal.charAt(j)), getal.length);
        }
        if (uitkomst == i) {
          document.getElementById('uitkomst').innerHTML += uitkomst+'<br>';
          console.log(uitkomst)
        }
    }
}
function bereken2() {
    let begin: number = (document.frm2.begin2.value);
    var eind: number = (document.frm2.eind2.value);

    document.getElementById('uitkomst2').innerHTML= '';
    for (let i = begin; i < eind; i++) {
        let getal: string = i.toString();
        let uitkomst2: number = 0
        for (let j = 0; j < getal.length; j++) {
            uitkomst2 += Math.pow(Number(getal.charAt(j)), getal.length);
        }
        if (uitkomst2 == i) {
          document.getElementById('uitkomst2').innerHTML += uitkomst2+'<br>';
          console.log(uitkomst2)
        }
    }
}
