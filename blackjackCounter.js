//DEFINIR VARIABLES Y LA BARAJA DE CARTAS
var card1;
var card2;

var cards = [{
    url: "imagenes/2-pica.jpg",
    value: 2,
    cargaOK: false
}, {
    url: "imagenes/3-diamante.jpg",
    value: 3,
    cargaOK: false
}, {
    url: "imagenes/4-corazon.jpg",
    value: 4,
    cargaOK: false
}, {
    url: "imagenes/5-trebol.jpg",
    value: 5,
    cargaOK: false
}, {
    url: "imagenes/6-pica.jpg",
    value: 6,
    cargaOK: false
}, {
    url: "imagenes/7-diamante.jpg",
    value: 7,
    cargaOK: false
}, {
    url: "imagenes/8-corazon.jpg",
    value: 8,
    cargaOK: false
}, {
    url: "imagenes/9-trebol.jpg",
    value: 9,
    cargaOK: false
}, {
    url: "imagenes/10-pica.jpg",
    value: 10,
    cargaOK: false
}, {
    url: "imagenes/J-diamante.jpg",
    value: "J",
    cargaOK: false
}, {
    url: "imagenes/Q-corazon.jpg",
    value: "Q",
    cargaOK: false
}, {
    url: "imagenes/K-trebol.jpg",
    value: "K",
    cargaOK: false
}, {
    url: "imagenes/A-pica.jpg",
    value: "A",
    cargaOK: false
}];


//CARGAR LA MESA Y LAS CARTAS

var espacio = document.getElementById("table");
var table = espacio.getContext("2d");

var mesa = {
    url: "imagenes/blackjackTable.jpg",
    cargaOK: false
}

mesa.imagen = new Image();
mesa.imagen.src = mesa.url;
mesa.imagen.addEventListener("load", cargarJuego);

//REVISAR COMO CARGAR LAS CARTAS
/*cards.imagen = new Image();
cards.imagen.src = cards[0].url;
cards.imagen.addEventListener("load", cargarJuego);

cards.imagen = new Image();
cards.imagen.src = cards[1].url;
cards.imagen.addEventListener("load", cargarJuego);*/


//BARAJAR Y REPARTIR CARTAS
var player1 = [cards[Math.floor(Math.random(0, 11) * 13)], cards[Math.floor(Math.random(0, 11) * 13)]];

console.log(player1[0].cargaOK, player1[1].cargaOK);

function cargarJuego() {
    mesa.cargaOK = true;
    cards.carga
    if (mesa.cargaOK == true) {
        table.drawImage(mesa.imagen, 0, 0);
    }
    player1[0].cargaOK = true;
    player1[1].cargaOK = true;

    console.log(player1[0].cargaOK, player1[1].cargaOK);
    console.log(player1[0].value, player1[1].value);

    if (cards.carga) {

    }
}



//ASIGNACIÓN DE PUNTOS
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
var sum = card1 + card2;
document.write("PLAYER 1 has this cards: " + player1[0].value + " and " + player1[1].value + ". That means you have: " + card1 + " + " + card2 + " (" + sum + ") points");


//LÓGICA DEL JUEGO BLACKJACK
if (sum > 21) {
    document.write(" - YOU LOSE");
} else if (sum == 21) {
    document.write(" - YOU WON");
} else if (sum > 16) {
    document.write(" - HOLD ON");
} else {
    document.write(" - TAKE ANOTHER CARD");
}