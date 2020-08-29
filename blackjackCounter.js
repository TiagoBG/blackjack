//TRAER LA MESA

var espacio = document.getElementById("table");
var table = espacio.getContext("2d");

var mesa = {
    url: "imagenes/blackjackTable.jpg",
    cargaOK: false
}

mesa.imagen = new Image();
mesa.imagen.src = mesa.url;
mesa.imagen.addEventListener("load", cargarMesa);

function cargarMesa() {
    mesa.cargaOK = true;
    if (mesa.cargaOK == true) {
        table.drawImage(mesa.imagen, 0, 0);
    }
}


//DEFINIR VARIABLES Y LA BARAJA DE CARTAS
var card1;
var card2;

var cards = [{
    url: "imagenes/2-pica.jpg",
    value: 2
}, {
    url: "imagenes/3-pica.jpg",
    value: 3
}, {
    url: "imagenes/4-pica.jpg",
    value: 4
}, {
    url: "imagenes/5-pica.jpg",
    value: 5
}, {
    url: "imagenes/6-pica.jpg",
    value: 6
}, {
    url: "imagenes/7-pica.jpg",
    value: 7
}, {
    url: "imagenes/8-pica.jpg",
    value: 8
}, {
    url: "imagenes/9-pica.jpg",
    value: 9
}, {
    url: "imagenes/10-pica.jpg",
    value: 10
}, {
    url: "imagenes/J-pica.jpg",
    value: "J"
}, {
    url: "imagenes/Q-pica.jpg",
    value: "Q"
}, {
    url: "imagenes/K-pica.jpg",
    value: "K"
}, {
    url: "imagenes/A-pica.jpg",
    value: "A"
}];



//BARAJAR CARTAS
var player1 = [cards[Math.floor(Math.random(0, 11) * 13)], cards[Math.floor(Math.random(0, 11) * 13)]];



//ASIGNACIÓN DE VARIABLES
if (player1[0].value == "J" || player1[0].value == "Q" || player1[0].value == "K") {
    card1 = 10;
}

if (player1[1].value == "J" || player1[1].value == "Q" || player1[1].value == "K") {
    card2 = 10;
}

if (player1[0].value <= 10 && player1[0].value >= 2) {
    card1 = player1[0].value;
}

if (player1[1].value <= 10 && player1[1].value >= 2) {
    card2 = player1[1].value;
}

if (player1[0].value == "A") {
    card1 = 11;
}

if (player1[1].value == "A") {
    card2 = 11;
}
console.log(player1[0].value, player1[1].value);
document.write("PLAYER 1 has: " + card1 + ", " + card2);


//LÓGICA DEL JUEGO BLACKJACK
if (card1 + card2 > 21) {
    document.write(" - YOU LOSE");
} else if (card1 + card2 == 21) {
    document.write(" - YOU WON");
} else if (card1 + card2 > 16) {
    document.write(" - HOLD ON");
} else {
    document.write(" - TAKE ANOTHER CARD");
}