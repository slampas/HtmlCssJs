



/******************************/
/*     EXO FIZZBUZZ           */
/******************************/
console.log("---------------")
console.log("  EXO FIZZ BUZZ  ")
console.log("---------------")
function FizzBuzz(nbr){

    for (var i=0; i < nbr; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("BUZZFIZZ");
        } else if (i % 5 == 0) {
            console.log("BUZZ");
        } else if (i % 3 == 0) {
            console.log("FIZZ");
        } else {
            console.log(i);
        }

    }
}


FizzBuzz(200);

/******************************/
/*     EXO roller coaster        */
/******************************/
console.log("---------------")
console.log("  EXO Roller coaster  ")
console.log("---------------")


function rollerCoaster(){
  
    var file = [2,3,5,4];

    console.log(file);
    var prix = 0;
    var remplissage = 0;
    var places = 5;
    var tours = 3;


    while (tours > 0) {
        var p = file[0];
        // tant que la capacite permets de faire un tour
        while (p <= 5 && (p + remplissage <= 5)) {

            remplissage += p;
            prix += p;
            file.push(file[0]);
            file.slice[0]; 
            p = file[0];

            console.log(remplissage);
            console.log(prix);
            console.log(file.toString());
        }
        // si on sort c 'est que un tour est fait
        tours--;
        remplissage = 0;
    }

    console.log("le profit " + prix);


}
rollerCoaster();










