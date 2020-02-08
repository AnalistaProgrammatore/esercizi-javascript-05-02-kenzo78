/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/

var chessboard = "";
var rigapara = "# # # # ";
var rigadisp = " # # # #";

for (var i = 0; i < 8; i++) {

    if (i % 2 === 0) chessboard += rigapara + '\n';
    else chessboard += rigadisp + '\n';
}

console.log(chessboard)

//##################################################Sviluppo 3 ##############################################################

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 === 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);
