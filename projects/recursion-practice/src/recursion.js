// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //set edge case for negative numbers
  //if n if less that zero return null
  if(n < 0){
    return null;
  }
  
  //base case
  //if n is equal to zero return 1
  if(n === 0){
    return 1;
  }
  
  //recursive case
  //return n * the function call of factorial(n - 1)
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base case
  //if there is no array length return 0
  if(!array.length){
    return 0;
  }
  
  //recursive case
  //return the first element in the array param + the function call sum slicing one element on each call
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //base case
  //if n is equal to 1 return false
  if(n === 1){
    return false;
  }
  //edge case
  //if n is equal to 0 return true
  if(n === 0){
    return true;
  }
  //edge case
  //if n is less than zero return the function call passing in negative n to make n postive 
  if(n < 0){
    return isEven(-n);
  }
  
  //recursive case
  //return the isEven function subtracting 2 from the passed in n param
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base case 
  //if n is equal to zero return 0
  if(n === 0){
    return 0;
  }
  
  //edge case
  //if n is less than zero return (param + 1) + sumBelow(n + 1)
  //this is to check for negative numbers
  if(n < 0){
    return (n + 1) + sumBelow(n + 1);
  }
  
  //recursive case
  //return (n - 1) + sumBelow(n - 1)
  //this is how we recursively get to our base case 
  return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  let arr = [];
  if(x === y){
    return arr;
  }else if(x === y - 1){
    return arr;
  } else if(x === y + 1){
  return arr;
 }else if(x > y){
  let inc2 = --x;
  arr.push(x);
 return arr.concat(range(inc2, y));
}
  let inc = ++x;
  arr.push(x);
  return arr.concat(range(inc, y));
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base case
  //if exp is equal to 0 return 1
  if(exp === 0){
    return 1;
  }
  //base case
  //if exp is equal to 1 return base
  if(exp === 1){
    return base;
  }
  
  //edge case
  //if exp is less than zero return 1 divided by the function call of exponenet(base, -exp)
  //this is to check for negative exponents
  if(exp < 0){
    return 1 / exponent(base, -exp);
  }
  
  //recursive case
  //return base times the function call of exponent passing in the base and exp - 1;
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //base case
  //if n is equal to 1 return true
  if(n === 1){
    return true;
  }
  //edge case
  //if n is equal to 0 return false 
  if(n === 0){
    return false;
  }
  //edge case
  //if n % 2 === 1 return false
  //this is because any number with the remaninder of 1 while being divided by 2 is odd
  if(n % 2 === 1){
    return false;
  }
  
  //recursive case
  //return function call of powerOfTwo passing in n divided by 2
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //base case
  //if string is equal to an equal string return an empty string
  if(string === ""){
    return "";
  }
  
  //recursive case 
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //must remove extra spaces before checking chars
  string = string.trim();
  //base 
  if(string.length === 1 || string.length === 0){
    return true;
  }
  //recusrive case,
  if(string[0].toUpperCase() === string[string.length - 1].toUpperCase()){
    return palindrome(string.slice(1, string.length - 1));
  } else {
    return false;
  }
  

 

  
  
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  //base case
  if(x === 0 || y === 0){
    return 0;
    //recursive case
  } if(y < 0){
    return -x + multiply(x, y + 1);
  } else{
    return x + multiply(x, y - 1);
  }
    
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base case
  if(str1.length === 0 && str2.length === 0){
    return true;
  }
  
  //edge case
  if(str1[0] !== str2[0]){
    return false;
  }
  //recursive case
  return compareStr(str1.slice(1), str2.slice(1)); 
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base case
  if(!str.length){
    return [];
  }
  
  //recursive case
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //console.log(array.slice(-1));
  //base case
  if(array.length === 0){
    return [];
  }
  //recursive case
  return [].concat(reverseArr(array.slice(1)), array[0]);
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //base case
  if(!length){
    return [];
  }
  
  //recursive case
  return  [value].concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //base case
  if(!array.length){
    return 0;
  } 
  
  //base case
  let count = (array[0] === value) ? 1 : 0;
  //revursive case
  return count + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //base case
  if(!array.length){
    return [];
  } 
  //recursive case
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base case
  if(n === 0){
    return 0;
  }
  //base case
  if(n === 1){
    return 1;
  }
  //edge case
  if(n < 0){
    return null;
  }
  
  //recursive case
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //base case
  if(!input.length){
    return [];
  }
  
  //recursive case
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //base case
  if(!array.length){
    return [];
  }
  
  //recursive case
  return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  //base case
  if(!str.length){
    return obj;
  }
  
  //base case
  (!obj[str[0]]) ? obj[str[0]] = 1 : obj[str[0]] += 1;
  
  //recursive case
  return letterTally(str.slice(1), obj);
  
 // return Object.assign({}, )
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //base case
  if(!list.length){
    return [];
  }
  
  //edge case
  if(list[0] === list[1]){
    return compress(list.slice(1));
  }
  //recursive case
  return [list[0]].concat(compress(list.slice(1)));
  
  //recursive case
  //return [].concat(compress(list.slice(1)));
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //base case
  if(!array.length){
    return [];
  }
  //base case
  if(array[0] === 0 && array[1] === 0){
    return minimizeZeroes(array.slice(1));
  }
  //recursive case
  return [array[0]].concat(minimizeZeroes(array.slice(1)));
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //base case
  if(!array.length){
    return [];
  }
  
  //base case
  if(array[0] < 0){
    array[0] = -array[0];
  } 
  //base case
  if(array[1] > 0){
    array[1] = -array[1];
  }
  
  //recursive case
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  let result = "";
  //base case
  if(!str.length){
    return "";
  }
  //declare and assign a variable to an object that contains digits as keys, and their word equivalent as the values
  let numsObj = 
  {0: 'zero',
   1: 'one',
   2: 'two',
   3: 'three',
   4: 'four',
   5: 'five',
   6: 'six',
   7: 'seven',
   8: 'eight',
   9: 'nine'
  };
  

  //base case
  if(numsObj[str[0]]){
    result = result + numsObj[str[0]];
  } else {
    result = result + str[0];
  }
  //recursive case
return result + numToText(str.slice(1));
};
// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
