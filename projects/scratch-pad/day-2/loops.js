// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // use for loop to iterate over input array
  
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //use for loop to iterate over input array
  
  for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //use method object.keys() to extract keys from input object
  // declare and intinalize an array to store keys from input object
  //return array
  
  let arrayOfKeys = Object.keys(object);
  return arrayOfKeys;
  
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //use for in loop to iterate over each key/value pair in input object
  //use console.log() to print each key to the console.
  
  for(let key in object){
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //use method Object.values() to extract values from input object
  //declare and initialze an array to hold values from input object
  //return array
  
  let arrayOfValues = Object.values(object);
  return arrayOfValues;
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //use for in loop to iterate over input object to access its values
  //on each iteration use console.log() to print each value to the console.
  
  for(let key in object){
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //use Object.keys() to extract keys from input object
  //declare a variable to hold keys from input
  //use the .length property on the variable to get length 
  
  let objectLength = Object.keys(object);
  return objectLength.length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //use Object.values to extract values from input object
  //declare a variable to hold input object's values
  //use for loop to iterate backwards over the object values
  
  let objectValuesReversed = Object.values(object);
  let values = objectValuesReversed.reverse();
  
  for(let i = 0; i < values.length; i++){
    console.log(values[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
