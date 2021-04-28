
















/******************************/
/*     EXO FIZZBUZZ           */
/******************************/
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