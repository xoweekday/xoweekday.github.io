
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(n) {
//declare and assign a varaible to an empty string
let str = "";
//use for loop to iterate each level of the triangle
for(let i = 0; i < n; i++){
  str += "#";
  //console log the string that was declared 
  console.log(str);
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //use for loop to iterate from 1 to 15
  for(let i = 1; i <= 15; i++){
    // declare and assign a variable to an empty string
    let fizzBuzz = "";
    //add fizz to fizzbuzz string for numbers divisible by 3
    if(i % 3 === 0){
      fizzBuzz += "fizz";
    }
    //add buzz to fizzbuzz string for numbers divisible by 5
    if(i % 5 === 0){
      fizzBuzz += "buzz";
    } 
   //at each iteration console log either the string fizzBuzz or the current index
    console.log(fizzBuzz || i);
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  
//declare and assign a variable to an empty string
let chessBoard = "";
//loop to get a vertical line of spaces and  "#"
for(let y = 0; y < size; y++){
//loop to get a horozontial line of spaces and "#"
  for(let x = 0; x < size; x++){
    //use ternary operator to see if at any iteration of y plus any iteration
    ((x + y) % 2 === 0) ? chessBoard += " " : chessBoard += "#";
  }
  //after each line create a new character line
chessBoard += "\n";
}
console.log(chessBoard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
