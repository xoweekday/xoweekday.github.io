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
  //at each iteration return an object with a value property and a rest property
  //value is assigned to the nums param in our reduce function 
  //rest is assigned to the seedObj param 
  //important to return that object so at each iteration the seedObj is updated
  //seedObj is given a value of null becuase that's the value we want our inner most object to be
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
  //declare and assign a variable to an empty array
let arr = [];
//assign and declare the starting conditional to the list param
//assign stopping condition the list param / which means the loop will keep iterating until it gets to the inner most object of the list
//the for loop will iterate by each objects rest property
for(let node = list; node; node = node.rest){
  //at each iteration push the value of that object's value property into the array that we created
  arr.push(node.value);
}
//return updated arr
return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  //assign and declare a variable to the function call of listToArray to change our list into an array filled the each object's value property
  let updateList = listToArray(list);
  //use the unshift method to push the input element into the updateList variable that we created 
updateList.unshift(element);
//return the function call of arrayToList on current updateList array to change our array with our element param inside back into a list
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

function deepEqual(obj1, obj2) {
  //set up conditional to check if obj1 is strictly equal to obj2
  //if conditional passes return true
if(obj1 === obj2){
  return true;
} 
//set up conditional to check if obj1 or obj2 is either null or not an object
//if conditional passes return false
if(obj1 === null || typeof obj1 !== "object" || obj2 === null || typeof obj2 !== "object"){
  return false;
}

//declare and assign variables to hold the amount of properties in each of the passes in object parameters 
let propsInObj1 = 0;
let propsInObj2 = 0;

//iterate over the obj1 param using a for-in loop
for(let prop in obj1){
  //at each iteration, add one to propsInObj1 for each property found during the loop
  propsInObj1 += 1;
}

//iterate over obj2 param using a for-in loop
for(let prop in obj2){
  //at each iteration, add one to propsInObj2 for each property found during the loop
  propsInObj2 += 1;
  //set up conditional to check if the properties in obj1 and obj2 are equal by calling the deepEqual function
  if(!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop])){
    return false;
  }
}

//return the boolean value of strictly comparing propsInObj1 and propsInObj2
return propsInObj1 === propsInObj2;

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
