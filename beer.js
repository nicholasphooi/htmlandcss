function createBottles() {
    var divElem = document.createElement('div');

    for (var i = 0; i < numofBottles; i++)   {
        var imgElm = document.createElement('img');
        imgElm.setAttribute('src', '/images/beer.png');
        imgElm.classList.add('small');

        divElem.appendChild(imgElm);
    }
    
    return (divElem);

    }
function createText(line) {
    var divElem = document.createElement('div');
    divElem.textContent = line;
    return(divElem);
}
    var beerSongElem = document.body.querySelector('#beer-song');

    for(var i = 99; i > 0; i--) {
        var pElem = document.createElement('p');
        var bottles = createBottles(i);
        beerSongElem.appendChild(bottles);
        var text = createText('${i} bottles of beer on the wall, ${i} botles of beer');
        beerSongElem.appendChild(text);
        text = createText('Take one down and pass it around,${i-1} botles of beer')
        beerSongElem.appendChild(Text);

    }