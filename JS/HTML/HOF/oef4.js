var fruits = [{
    name: "Apple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",ranking: 3
    }, {
    name: "Banana",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
    ranking: 1
    }, {
    name: "Pineapple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
    ranking: 2
    }];


var fruitarray = fruits.map(
    function(elem)
    {
        return{
            naam: elem.name,
            afbeelding: elem.image
        }
    }
)

fruits2.forEach(
    function(tonen){
        document.write(tonen.naam + ' ' + '<img src="afbeelding" style="background-image: url(' + tonen.afbeelding + ');"></div><br>');
    }
)

