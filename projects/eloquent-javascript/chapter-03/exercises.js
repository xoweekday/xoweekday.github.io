////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(a, b) {
  //use ternary operator to return minimun
  //check if a is less than b
  //if a is less than b return a
  //else return b
return a < b ? a : b;
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(x) {
  //use conditional statement to check if x is an odd number
  //if x if odd return false
if(x % 2 === 1){
  return false;
}

//use conditional statement to check if x is an even number
//if x is even return true
if(x % 2 === 0){
  return true;
}

//use conditional statement to check if x is a negative number
//if x is negative use recursive function to return the isEven function with a negative interger 
if(x < 0){
  return isEven(-x);
}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  //declare and assign value of count to 0
  let count = 0;
  //loop through string 
for(let i = 0; i < string.length; i++){
    // use ternary operator to check if any character in input string matches the input char
  //if any maches are found at each iteration add one to count
 string[i] === char ? count += 1 : null;
}
//return count
return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
//   //declare and assign value of count to 0
// let count = 0;
// // loop through string 
// for(let i = 0; i < string.length; i++){
//   // use ternary operator to check if any character in input string matches a string of "B"
//   //if any maches are found at each iteration add one to count
//   string[i] === "B" ? count += 1 : null;
// }
// //return count
// return count;

//use countChars function to check for the number of capital Bs
return countChars(string, "B");
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
