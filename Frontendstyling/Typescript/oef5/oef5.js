for (var i = 0; i < 1000; i++) {
    var getal = i.toString();
    var resultaat = 0;
    for (var j = 0; j < getal.length; j++) {
        resultaat += Math.pow(Number(getal.charAt(j)), getal.length);
    }
    if (resultaat == i) {
        console.log(i);
    }
}
