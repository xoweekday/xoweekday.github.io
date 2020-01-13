// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
//use reduce on input array param 
//at each iteration concat the seed (any empty array), with each element (array)
//return the entire reduce function
return array.reduce((seed, element) => seed.concat(element), []);

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, testFunc, updateFunc, bodyFunc) {
  //implement a higher-order loop that takes in value, a test func, an update func and a body func
  //at each iteration run the test func on the current value 
  //in the code block call bodyFunc on the current value 
  //finally assign value to the update func to create a new value and start the loop from the beginning.
for(let value = start; testFunc(value); value = updateFunc(value)){
  bodyFunc(value);
}
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
//use reduce to iterate over the input array param
return array.reduce((seedBool, element) => {
  //use ternary operator to check if at each iteration that current element passes the passed in test param
  //if conditional statement passes return false
  //else return the seedBool
  return (!test(element)) ? false : seedBool;
}, true);
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  /**assign and declare a variable to the helper counyBy function to return an array
   * of objects, each of which names a group and tells you the number of elements thay
   * were found in that group.
   */
let scriptsArr = countBy(string, (char) => {
  /**assign and declare a variable to the helper characterScript function to either
   * return null if that script is not found, or that script's direction property
   * if it is found.
   */
  let script = characterScript(char.codePointAt(0))
  if(script){
    return script.direction;
  }
  return null;
});

//use the sort method on the scripts variable to sort the array from largest to smallest
scriptsArr.sort((a, b) => {
  return b.count - a.count;
});

//return the the first element in the sorted scriptsArr
return scriptsArr[0].name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
