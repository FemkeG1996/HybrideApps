function bereken() {
    var begin = (document.frm.begin.value);
    var eind = (document.frm.eind.value);
    document.getElementById('uitkomst').innerHTML = '';
    for (var i = begin; i < eind; i++) {
        var getal = i.toString();
        var uitkomst = 0;
        for (var j = 0; j < getal.length; j++) {
            uitkomst += Math.pow(Number(getal.charAt(j)), getal.length);
        }
        if (uitkomst == i) {
            document.getElementById('uitkomst').innerHTML += uitkomst + '<br>';
            console.log(uitkomst);
        }
    }
}
function bereken2() {
    var begin = (document.frm2.begin2.value);
    var eind = (document.frm2.eind2.value);
    document.getElementById('uitkomst2').innerHTML = '';
    for (var i = begin; i < eind; i++) {
        var getal = i.toString();
        var uitkomst2 = 0;
        for (var j = 0; j < getal.length; j++) {
            uitkomst2 += Math.pow(Number(getal.charAt(j)), getal.length);
        }
        if (uitkomst2 == i) {
            document.getElementById('uitkomst2').innerHTML += uitkomst2 + '<br>';
            console.log(uitkomst2);
        }
    }
}
