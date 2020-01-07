// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// use arrow function to return the passed in value param
_.identity = value => value;

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = (value)=>{
    
    //use conditional statement to check which typeof data type the passed in value param is.
    //implement the typeof unary operator in conditional to check the different datatypes of value param
    //if conditional passes as true return that datatype as a string
    
    if(typeof value === 'string'){
        return 'string';
    } else if(typeof value === 'number'){
        return 'number';
    } else if(typeof value === 'boolean'){
        return 'boolean';
    } else if(typeof value === 'undefined'){
        return 'undefined';
    } else if(value === null){
        return 'null';
    } else if(Array.isArray(value)){
        return 'array';
    } else if(typeof value === 'function'){
        return 'function';
    } else if(typeof value === 'object'){
        return 'object';
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = (array, number) =>{
    //declare a variable to an empty array
    //set up conditional statement to check if input array is an array using Array.isArray()
    //check edge case to see if input number param is negative
    //if input array isnt an array or number is negative return an empty array
    let myArr = [];
    if(!Array.isArray(array) || number < 0){
        return myArr;
        //use conditional statement to check if input number param is a number 
        //implement _.typeOf function to test 
        //if false return first element of input param
    } else if(_.typeOf(number) !== 'number'){
        return array[0];
        //use conditional to check if number is greater than array.length 
        //if true return the entire array
    } else if(number > array.length){
        return array;
        // if no other conditional statements pass, return the first [number] elements inside array
        //use .slice method to take out specified number of elements starting at zero and ending at [number]
    } else {
        return array.slice(0, number);
    }
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
    
    

_.last = (array, number) =>{
//declare a variable to an empty array
    //set up conditional statement to check if input array is an array using Array.isArray()
    //check edge case to see if input number param is negative
    //if input array isnt an array or number is negative return an empty array

let myArr = [];
if(!Array.isArray(array) || number < 0){
    return myArr;
        //use conditional statement to check if input number param is a number 
        //implement _.typeOf function to test 
        //if false return last element of input param
} else if(_.typeOf(number) !== 'number'){
    return array[array.length - 1];
        //use conditional to check if number is greater than array.length 
        //if true return the entire array
} else if(number > array.length){
    return array;
        // if no other conditional statements pass, return the last [number] elements inside array
        //use .slice method to take out specified number of elements 
} else {
    return array.slice(-number);
}
    
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = (array, value) => {
//     let num;
    
//     _.each(array, (e, i, a)=>{
//         e === value ? num = i : num = -1;
//     });
// return num;

//loop through array to access each element 
  for(let i = 0; i < array.length; i++){
      //use conditional statement to check if element is equal to value param
      //if true, return the index at which the element is inside of the array at each iteration
      if(array[i] === value){
          //return index if conditional evluates to true
          return i;
      }
  }
  //after the loop is completed if no condition evluates to true return -1
  return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = (array, value) => {
    // use ternary operator to check if input array param contains input param
    //implement the .includes() method on input array param to check if value is included
    // if the conditional evluates to true return true, else return false 
    return (array.includes(value)) ? true : false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = (collection, action) => {
    //use conditional to check if passed in param is an array or object
    //implement the Array.isArray() method to check if collection is an array
    if(Array.isArray(collection)){
        //if conditional evluates to true, use for loop to iterate through the collection
        for(let i = 0; i < collection.length; i++){
            //at each iteration call the passed in callback function on the element, index, and entire collection
            action(collection[i], i, collection);
        }
    } else {
        //if the first conditional doesnt evaluate to true, use for in loop to iterate through collection as an object
        for(let key in collection){
            //at each iteration call the passed in callback function on the collection[key], key, collection
            action(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = array => {
    // declare and assign the variable to an empty array
    let result = [];
    //loop through passed in array to access each element inside 
    for(let i = 0; i < array.length; i++){
        //use conditional statement to check if at each iteration the indexof array[i] matches the current iteration
        //use indexOf function as part of implementation
        if(_.indexOf(array, array[i]) === i){
            //if conditional evaluates to true, push elements into result array
            result.push(array[i]);
        }
    }
    //return result array
    return result;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = (array, action) => {
    // declare and assign a variable to an empty array
    let result = [];
    //use _.each function to iterate over passed in array param
   _.each(array, (e, i, a) =>{
       //set up conditional statement to test at each iteration if passed in param evaluates to true on the element, index, and array
       if(action(e, i, a)){
           //if conditional evaluates to true, push the element into result array
           result.push(e);
       }
   });
   //return result array
   return result;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = (array, action) => {
    // declare and assign a variable to an empty array
    //let result = [];
        //use _.filter function to iterate over passed in array param
   return  _.filter(array, (e, i, a) => {
         //set up conditional statement to test if at each iteration, if the passed in param evaluates to false on the element, index, and array
        if(!action(e, i, a)){
            //if conditional evaluates to false, push the element into result array
           return e;
        }
    });
    //return result array
   // return result;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = (array, action) => {
    //create an array with two sub arrays inside
    //one array will be all values for which the function returns something truthy
    //one array will be all values for which the function returns something falsy
    //return an array literal with the _.filter function, and _.reject function inside
    
    return [_.filter(array, action), _.reject(array, action)];
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = (collection, action) => {
    //declare and assign a variable to an empty array
    let result = [];
        //use _.each function to iterate over passed in collection param
   _.each(collection, (e, i, a) =>{
       //check if passed in collection param is an array or an object
       //implement Array.isArray() function inside conditional 
       if(Array.isArray(collection)){
           //if conditional statement evaluate to true, at each iteration push the value of passed in callback param into result array
       result.push(action(e, i, a));
          
       } else {
           //if passed in collection is an object, push the value of passed in callback param into result array
           result.push(action(e, i, a));
       }
   });
           
       //return result array
   return result;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = (array, prop) => {
    //use _.map function to iterate over passed in array param 
    //return the entire _.map function to get an array as a return value
       //at each iteration through the passed in array param, return that elements property
   return  _.map(array, (e, i, a) => e[prop]);
       
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = (collection, action) => {
    // set up conditional statement to check if passed in function param is given 
    if(action === undefined){
        //if no function is given, loop through passed in collection param 
        for(let i = 0; i < collection.length; i++){
            // set up conditional to to check if the values inside are truthy or falsy
            if(collection[i] === false){
                //if at any time through the iteration, an element is falsy return false
                return false;
            }
        }
        //check if collection is an array using Array.isArray method
    } else if(Array.isArray(collection)){
        //if conditional is true, use for loop to iterate over collection
        for(let i = 0; i < collection.length; i++){
            //at each iteration check to see if the value of the call back function is fasly
            if(!action(collection[i], i, collection)){
                //if the conditional evaluates to false return false 
                return false;
            } 
            
        }
    } else {
        //use for in loop to loop over collection as an object
        for(let key in collection){
            //at each iteration check to see if the value of the call back function is fasly
            if(!action(collection[key], key, collection)){
                //if the conditional evaluates to false return false 
                return false;
            }
         
        }
    }
    //if at no point through any conditional or loop doesn't run, return true
    return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = (collection, action) => {
    //declare and assign a varaible to a value of false
    let answer = false;
    //use conditional statement to test edge case if function is not given
    if(!action){
        //if conditional passes, use _.each function to iterate over collection
        _.each(collection, (e, i, a) =>{
            //at each iteration check if any elements are truthy values
        if(e === true){
            //if conditional passes re-assign answer to true
            answer = true;
     }
    });
    }
    
    //use conditional statement to test if passed in func param is given
    if(action){
        //if conditional passes, use _.each to iterate over collection
        _.each(collection, (e, i, a) =>{
            //at each iteration check if the value of the callback funtion us truthy
        if(action(e, i, a)){
            //if conditional passes at any iteration, re-assign answer to true
            answer = true;
        }
    });
    }
    //if at no point through any conditional or loop doesn't run, return answer
    return answer;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = (array, func, seed) => {
//   return _.map(array, (prevResult, e, i) => {
//         if(seed === undefined){
//             seed = array[0];
//         } else {
//         seed = (func(prevResult, e, i));
//             }
        
//     return seed;
//     });
    
    
    //loop through passed in array param to access each element 
    for(let i = 0; i < array.length; i++){
        //set up conditional to check if seed if given
        if(seed === undefined){
            //if no seed is given, assign seed to the first element inside array
            seed = array[0];
        } else {
            //if seed is given at each iteration seed is the value of the callback funtion
            seed = func(seed, array[i], i);
        }
    }
    //at the end of the iteration return seed
    return seed;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = (obj1, ...obj2) => {
    //use _.each function to iterate over array containing objects 
    _.each(obj2, (objs, i, a) => {
        //use _.each function to iterate over each object one by one 
        _.each(obj2[i], (value, key, entireObj) =>{
            //at each iteration copy the properties onto obj1
        obj1[key] = obj2[i][key];
            });
    });
    //return obj1;
    return obj1;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
