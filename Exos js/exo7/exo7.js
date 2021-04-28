//exo 7
var a = 15 ;
var b = 20 ;
var b500 = 500;
var b200 = 200;
var b20 = 20;
var b10 = 10;
var b5 = 5;
var b2 = 2;
var b05 = 05;
var b02 = 02;
function somme() {
    return a + b;
}

console.log("------------------");
console.log(" EXO 7");
console.log("------------------");
console.log("La somme de deux nombre est : "+somme());

// exo11

function monnaieEuro(nombre){
    if (nombre / b500 != 0) {

        console.log("Billet 500 euros: " + (nombre / b500));

        b500 = (nombre % b500);
    }
    if (b500 / b200 != 0) {

        console.log("Billet 200 euros: " + (b500 / 200));
        b200 = b500 % b200;

    }
    if (b200 / b20 != 0) {

        console.log("Billet 20 euros: " + (b200 / 20));
        b20 = b200 % b20;

    }
    if (b20 / b10 != 0) {

        console.log("Billet 20 euros: " +(b20 / 10));
        b10 = b20 % b10;

    }
    if (b10 / b5 != 0) {

        console.log("Billet 5 euros: " + (b10 / 5));
        b10 = b10 % b5;

    }
    if (b5 / b2 != 0) {

        console.log("piece 2 euros: " + (b10 / 2));
        b2 = b5 % b2;

    }
    if (b2 / b05 != 0) {

        console.log("piece 50 centimes: " + (b05 / 0.5));
        b05 = b2 % b05;

    }
    if (b05 / b02 != 0) {

        console.log("piece 20 centimes: " + (b02 / 0.2));
        b02 = b05 % b02;

    }

}

console.log("------------------");
console.log(" EXO 11");
console.log("------------------");
monnaieEuro(2450,35);