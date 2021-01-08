var studenten = [{
    voornaam: 'elisa',
    achternaam: 'smit',
    leeftijd: 17
    },
    {
    voornaam: 'jelle',
    achternaam: 'delbeke',
    leeftijd: 16
    },
    {
    voornaam: 'stefanie',
    achternaam: 'peeters',
    leeftijd: 17
    }
    ];

    studenten.forEach(
        function(persoon){
            console.log(persoon.voornaam + ' ' + persoon.achternaam + ' is ' + persoon.leeftijd + ' jaar');
        }
    )