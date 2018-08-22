const beers = [];
let counter = 0;

const addBeer = function(name, category, rateing){
    const tempObj = {name: name, category: category, rateing: rateing}
    beers.push(tempObj);
}

$(".post-beer").click(function() {
    const beerName = $(".beer-input").val();
    const beerCategory = $(".category-input").val();
    const rateing = $(".rateing-input").val();
    addBeer(beerName, beerCategory, rateing);
    renderBeers();
})

$(".sort-beers").click(() => {
    if (counter % 2 == 0) {
        for(i in beers) {
            for(j in beers) {
                if(beers[i].rateing > beers[j].rateing) {
                    let temp = beers[i];
                    beers[i] = beers[j];
                    beers[j] = temp;
                }
            }
        }
    } else {
        for(i in beers) {
            for(j in beers) {
                if(beers[i].rateing < beers[j].rateing) {
                    let temp = beers[i];
                    beers[i] = beers[j];
                    beers[j] = temp;
                }
            }
        }
    }
    counter ++;
    renderBeers();
})

const renderBeers = () => {
    $(".beers-list").empty();
    for(i in beers) {
        $(".beers-list").append("<li>" + beers[i].name + " " + beers[i].category + " " + beers[i].rateing + " Stars </li>");
    }
}