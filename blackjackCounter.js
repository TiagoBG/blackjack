//TRAER LA MESA

var espacio = document.getElementById("table");
var table = espacio.getContext("2d");

var mesa = {
    url: "blackjackTable.jpg",
    loaded: false
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
        url: "2-pica.jpg",
        value: 2
    }, {
        url: "3-pica.jpg",
        value: 3
    }, {
        url: "4-pica.jpg",
        value: 4
    }, {
        url: "5-pica.jpg",
        value: 5
    }, {
        url: "6-pica.jpg",
        value: 6
    }, {
        url: "7-pica.jpg",
        value: 7
    }, {
        url: "8-pica.jpg",
        value: 8
    },
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
];


//BARAJAR CARTAS
var player1 = [cards[Math.floor(Math.random(0, 11) * 13)], cards[Math.floor(Math.random(0, 11) * 13)]];



//ASIGNACIÓN DE VARIABLES
if (player1[0] == "J" || player1[0] == "Q" || player1[0] == "K") {
    card1 = 10;
}

if (player1[1] == "J" || player1[1] == "Q" || player1[1] == "K") {
    card2 = 10;
}

if (player1[0] <= 10 && player1[0] >= 2) {
    card1 = parseInt(player1[0]);
}

if (player1[1] <= 10 && player1[1] >= 2) {
    card2 = parseInt(player1[1]);
}

if (player1[0] == "A") {
    card1 = 11;
}

if (player1[1] == "A") {
    card2 = 11;
}

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