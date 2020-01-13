////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  //declare and assign a variable to an array literal to hold our final value
let result = [];
//set up conditional statement to check if step param is greater than zero and is defined
if(step !== undefined && step > 0){
  //if conditional passes loop from start to end and iterate by the step param
  for(let i = start; i <= end; i += step){
    //at each iteration push i into the result array
    result.push(i);
  }
  //set up conditional to check if step is a negative number
} else if(Math.sign(step) === -1){
  //if conditional passes, loop from start param to end param iterating backwards by step param
  for(let i = start; i >= end; i -= step){
    //at each iteration push i into the result array
    result.push(i);
  }
  //set up conditional to check if start and end are even
  //if they are even that means that there is no range to iterate over
} else if(start === end)  {
  //if conditional passes as true, return result which is an empty array
  return result;
} else {
  //if no other conditionals pass simply loop from start to end and iterate by one 
  for(let i = start; i <= end; i++){
    //at each iteration push i to the result array
    result.push(i);
  }
}
//return the result array
return result;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  //assign and declare a variable to zero to act as a counter
let count = 0;
//use forEach method to iterate over the array param to access each element inside
array.forEach((i)=>{
  //at each iteration add and assign the value of count to whatever i is at that iteration
  count += i;
});

return count;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //declare and assign a variable to an empty array
  let arr = [];
  //use for loop to iterate over the passed in array param to iterate backwards over array
for(let i = array.length - 1; i >= 0; i--){
  //at each iteration push the results of array[i] into our newly created array
  arr.push(array[i]);
}
//return arr
return arr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //use for loop to iterate over the passed in array param
  //for stopping condition, stop at array.length / 2 so 
for(let i = 0; i < Math.floor((array.length / 2)); i++){
  let old = array[i];
  array[i] = array[array.length - 1 - i];
  array[array.length - 1 - i] = old;
}
return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
//use the .reduce method to iterate over the passes in array param
return array.reverse().reduce((seedObj, nums, index) => {
  //at each iteration return an array with a value property and a rest property
  //value is assigned to the nums param in our reduce function 
  //rest is assigned to the seedObj param 
  //important to return that object so at each iteration the seedObj is updated
 return {
   value: nums,
   rest: seedObj
 };
}, null);
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
let arr = [];
for(let node = list; node; node = node.rest){
  arr.push(node.value);
}
return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  let updateList = listToArray(list);
updateList.unshift(element);
return arrayToList(updateList);
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
//base case
//set up conditional to check if list is given 
if(!list){
  //if no list is given return undefined
  return undefined;
} 

//edge case
//check if number param is equal to zero
if(number === 0){
  //if conditional passes return list.value
  return list.value;
}

//recursive case
return nth(list.rest, number - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {
if(value1 === value2){
  return true;
} 

if(value1 === null || typeof value1 !== "object" || value2 === null || typeof value2 !== "object"){
  return false;
}

let propsInValue1 = 0;
let propsInValue2 = 0;

for(let prop in value1){
  propsInValue1 += 1;
}

for(let prop in value2){
  propsInValue2 += 1;
  if(!(prop in value1) || !deepEqual(value1[prop], value2[prop])){
    return false;
  }
}
return propsInValue1 === propsInValue2;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
