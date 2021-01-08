var week;
(function (week) {
    week[week["maandag"] = 1] = "maandag";
    week[week["dinsdag"] = 2] = "dinsdag";
    week[week["woensdag"] = 3] = "woensdag";
    week[week["donderdag"] = 4] = "donderdag";
    week[week["vrijdag"] = 5] = "vrijdag";
    week[week["zaterdag"] = 6] = "zaterdag";
    week[week["zondag"] = 7] = "zondag";
})(week || (week = {}));
console.log('maandag' + ' ' + week.maandag);
console.log('dinsdag' + ' ' + week.dinsdag);
console.log('woensdag' + ' ' + week.woensdag);
console.log(' donderdag' + ' ' + week.donderdag);
console.log('vrijdag' + ' ' + week.vrijdag);
console.log('zaterdag' + ' ' + week.zaterdag);
console.log('zondag' + ' ' + week.zondag);
