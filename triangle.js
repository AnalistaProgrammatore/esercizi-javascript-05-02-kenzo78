/**
* Write a loop that makes seven calls to console.log to output the following triangle
*/

//##########################################################Triangolo Rettangolo######################################################################
console.log('\n')
var pezzo = '';

for (var i = 0; i < 7; i++) {
    pezzo = pezzo + '*';
    console.log(pezzo);
}

console.log('_________________________________________________________________' + '\n\n')

//##########################################################Triangolo Isoscile alla stupida :D #######################################################

var contatore = [0, 1, 2, 3, 4, 5, 6, 7]
for (var i = 0; i <= contatore.length; i++) {
    if (contatore[i] == 0) {
        console.log("       *");
    }
    if (contatore[i] == 1) {
        console.log("      ***");
    }
    if (contatore[i] == 2) {
        console.log("     *****");
    }
    if (contatore[i] == 3) {
        console.log("    *******");
    }
    if (contatore[i] == 4) {
        console.log("   *********");
    }
    if (contatore[i] == 5) {
        console.log("  ***********");
    }
    if (contatore[i] == 6) {
        console.log(" *************");
    }
    if (contatore[i] == 7) {
        console.log("***************");
    }

}
