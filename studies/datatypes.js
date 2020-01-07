// DATATYPES //

/**
 * 0. In JavaScript, in order to hold values in memory during the life-cycle of 
 * a program we can use varibles. These things that are being held by these variables
 * are called data types. Generally datatypes can be categorized into two different
 * groups, simple data types and complex datatypes. Simple datatypes include numbers,
 * strings, booleans, undefined, null, NaN, and infinity and -infinity. Complex
 * datatypes include arrays, objects, and functions.
 */
 

 
 // 1. Simple datatypes //
 
 /**
  *
  * There are a few reasons that make simple datatypes simple and a complex datatypes 
  * complex. Simple datatypes are atomic (immutable), and they are copied by value. 
  * While complex datatypes are mutable, and they are copied by reference. The 
  * difference between a datatypes being mutable or immutable and how they are 
  * copied has to do with the amount of space each takes up in memory. Simple 
  * datatypes have a fixed finite amount of space it has in memory so they just 
  * aren't big enough in size to aggreate other datatypes. While complex data 
  * types on the other hand, are indefinite in size, and can grow beyond the 
  * size of the variable. 
  * 
  *      Simple datatypes include:
  *      1a. Numbers: Numbers are any numeric data in mathematics.
  *      1b. Strings: Strings are any characters that are wrapped in either single
  *                   or double quotes. Strings are stored similarly to arrays in
  *                   that each character inside of a string is zero-indexed. With
  *                   this being the case, bracket notation is very helpful in 
  *                   accessing and manipulating strings in many different ways.
  *      1c. Boolean: Booleans have one of two values, either true or false.
  *      1d. undefined: undefined is used to show when a variable dosen't have any
  *                     value at runtime.
  *      1e. null: null is similar to undefined in that it does't have a value, however 
  *                it generally intentionally done by the programmer.
  *      1f. NaN: NaN is a value that represents when a value isnt't a number.
  *      1g. infinity/-infinity: infinity and -infinity represent the mathematical
  *                              equivalent to infinity and -infinity.
  */
 
 // 1a. creating and storing numbers //
 
 const myNum = 1;
 const myFriendsNum = myNum;
 console.log(myNum); // prints => 1
 console.log(myFriendsNum); // prints => 1
 
 /** NOTE: Since numbers are simple datatypes, when assigning a variable to a value
  * like a number JavaScript copies the exact value from one varaible and to another
  * so now there are myNum and myFriendsNum both have the same value in different
  * spots in memory. This goes the same for every other simple datatype in JavaScript.
  */
  
  // 1b. creating and storing strings //
  
  const myStr = "asus";
  const myLaptop = "I own an " + myStr;
  console.log(myLaptop); // prints => "I own an asus"
  
  // 1c. creating and storing booleans //
  
  const myBool = true;
  const mikeIsCool = myBool;
  console.log(mikeIsCool); // prints => true;
  
  // 1d. creating and storing undefined //
  
  let idk;
  let riddle = "How much wood can a woodchuck chuck, if a woodchuck could chuck wood? Sorry the answer is " + idk;
  console.log(riddle);
  /** prints => "How much wood can a woodchuck chuck, if a woodchuck could 
   * chuck wood? Sorry the answer is undfined."
   */
   
   // 1e. creating and storing null //
   
   let theCousinOfUndefined = null;
   console.log(theCousinOfUndefined); // prints => null
   
   // 1f. creating and storing NaN //
   
   let checkNums = NaN;
   if(isNaN(checkNums)){
       console.log("see im not a number"); // prints => see im not a number
   }
   
   // 1g. infinity and -infinity //
   
   let buzz = "and beyond";
   if(Math.pow(10, 1000) === Infinity){
       console.log("to infinity " + buzz); // prints => to infinity and beyond
   }
  
  
  
  
  
  // 2. Complex Data Types // 
  
  
  /**
   * As explained above, simple datatypes are immutable and complex datatypes
   * are mutable. This is important becuase this also determines how each datatype
   * is copied. Since simple datatypes are so small in memory, and variables themselves
   * have a fixed amount of space in memory, when trying to reference a variable with 
   * a simple datatype you get the actual value that is inside of that variable at 
   * run time. Complex datatypes on the otherhand are indefinite in size, which 
   * goes beyond the size and variable can hold, you have to point to WHERE a complex
   * datatype is in memory rather than trying to reference all of the values that may
   * be aggreated inside. This distinction is extremely important to understand 
   * when dealing with data in your code. 
   * 
   * 2. Complex datatypes include:
   *     2a. Arrays: Arrays are zero-indexed list that are made with square brackets,
   *                  and each value, (which are called elements) inside are seperated 
   *                  by commas. You can place any datatype inside of an array, and
   *                  you can access this data inside the array by first specifying
   *                  the name of the array you want to access then using bracket notation
   *                  to indicate the position in the array you want to access.
   *      2b. Objects: Objects are similar to arrays where they also can hold any 
   *                   datatype inside, however they have a few key differences 
   *                   between them. One being that instead of square brackets, objects
   *                   can be distinguished by using curly braces to create them. Objects
   *                   are not ordered like arrays, they instead use key/value pairs to
   *                   hold thier values. You can access these key/value pairs by using
   *                   either dot notation or bracket notation. You only use dot notation
   *                   on objects to access key/value pairs ONLY when you know the exact
   *                   key on that object you want to access.
   *       2c. Functions: Functions in JavaScript allow us to store a single block of
   *                     code of that could be used over and over again at any point 
   *                     in our program whenever and however many times we want. 
   */
  
  // 1a. creating and storing arrays //
  
let myArr = [1, "a", true, null, undefined, NaN];
let waitNoItsMyArr = myArr;
console.log(myArr); // prints => [1, "a", true, null, undefined, NaN];
console.log(waitNoItsMyArr); // prints => [1, "a", true, null, undefined, NaN];
    
/** NOTE: Since arrays are complex datatypes, when assigning a variable to a value
  * like an array JavaScript copies the reference from where one varaible is in
  * memory to another so now myArr and waitNoItsMyArr both have the same value 
  * that points to the same array in memory. This goes the same for every other 
  * complex datatype in JavaScript.
  */
  
  // 1a. accessing arrays //
  
  
    let myNums = myArr[0];
    let myStrs = myArr[1];
    let myBoos = myArr[2];
    let myNull = myArr[3];
    let myUndefined = myArr[4];
    let myNaN = myArr[myArr.length - 1];
    console.log(myNums); // prints => 1
    console.log(myStrs); // prints => "a"
    console.log(myBoos); // prints => true
    console.log(myNull); // prints => null
    console.log(myUndefined); // prints => undefined 
    console.log(myNaN); // prints => NaN
    
    // 2b. creating and storing objects //
    
    let myObj = {nameFirst: "Mike ", nameLast: "Bazile", favArtist: "the weeknd"};
    let mySecondObj = myObj;
    console.log(myObj); // prints => {nameFirst: "Mike", nameLast: "Bazile", favArtist: "the weeknd"};
    console.log(mySecondObj); // prints => {nameFirst: "Mike", nameLast: "Bazile", favArtist: "the weeknd"};
    
    // 2b. accessing objects //
    
    let myName = myObj['nameFirst'] + mySecondObj.nameLast;
    console.log(myName); // prints => Mike Bazile
    
    // 2c. creating and storing functions //
    
    let divide = function(a, b){
  return a + b;
 };
 
 console.log(divide(5,5)); // prints => 1
 
 // Copy by value //
 
 let numOne = 1;
 let newNumOne = numOne;
 
 console.log(numOne); // prints => 1
 console.log(newNumOne); // prints => 1
 
 /**
  * In the code above it is important to note that when assigning newNumOne to 
  * the value of numOne has, is an example of copying by value. Since the value
  * that is being assigned is a simple datatype a brand new copy of that value
  * will be assigned and now both numOne and newNumOne will both have the exact
  * same value stored in different parts of memory.
  */
  
  // Copy by Reference //
  
  let fruitList = ["apple", "grape", "strawberry"];
  fruitList.push("bananna");
  let newFruitList = fruitList;
  
  console.log(fruitList); // prints => [ 'apple', 'grape', 'strawberry', 'bananna' ]
  console.log(newFruitList); // prints => [ 'apple', 'grape', 'strawberry', 'bananna' ]

/**
 * In the code above it is important to note that when assigning newFruitList to
 * the value of fruitList is an example of copying by reference. Since the value
 * that is being assigned is a complex datatype, both fruitList and newFruitList
 * will now reference where that array is in memory insteaed of creating and copying
 * a whole new array. This is the case because complex datatypes are too big in size
 * to constantly have to copy its entire contents from variable to variable. It's
 * easier to then just point to where this complex datatype is in memory and access
 * them from there.
 */
 
 
  
  
 
 
 
 
    
    