/* Deze code roept een externe url aan en ontvangt een antwoord in string formaat */
/* JSON wordt vaak gebruikt als "tussentaal" om gegevens te transporteren */
/* We vormen hier de JSON string om naar een echte array/objecten */

const Http = new XMLHttpRequest();
const url = 'http://localhost:3030/query';
Http.open("POST", url);
Http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
Http.send("sql=" + "select * from afd");
Http.onreadystatechange = (e) => {
    if (Http.readyState == 4 && Http.status == 200) {
        var jsonstr = Http.responseText;
        var arr = JSON.parse(jsonstr);
        console.log(jsonstr);
        console.log(arr);
    }
}