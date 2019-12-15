/**
 * DATATYPES:
 * 
 * 0. In JavaScript, in order to hold values in memory during the life-cycle of 
 * a program we can use varibles. These things that are being held by these variables
 * are called data types. Generally datatypes can be categorized into two different
 * groups, simple data types and complex datatypes. Simple datatypes include numbers,
 * strings, booleans, undefined, null, NaN, and infinity and -infinity. Complex
 * datatypes include arrays, objects, and functions. 
 * 
 * 1. There are a few reasons that make simple datatypes simple and a complex datatypes 
 * complex. Simple datatypes are atomic (immutable), and they are copied by value. 
 * While complex datatypes are mutable, and they are copied by reference. The 
 * difference between a datatypes being mutable or immutable and how they are 
 * copied has to do with the amount of space each takes up in memory. Simple 
 * datatypes have a fixed finite amount of space it has in memory so they just 
 * aren't big enough in size to aggreate other datatypes. While complex data 
 * types on the other hand, are indefinite in size, and can grow beyond the 
 * size of the variable. 
 * 
 * 2. As explained above, simple datatypes are immutable and complex datatypes
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
 * 3. Simple datatypes include:
 *      3a. Numbers: Numbers are any numeric data in mathematics.
 *      3b. Strings: Strings are any characters that are wrapped in either single
 *                   or double quotes. 
 *      3c. Boolean: Booleans have one of two values, either true or false.
 *      3d. undefined: undefined is used to show when a variable dosen't have any
 *                     value at runtime.
 *      3e. null: null is similar to undefined in that it does't have a value, however 
 *                it generally intentionally done by the programmer.
 *      3f. NaN: NaN is a value that represents when a value isnt't a number.
 *      3g. infinity/-infinity: infinity and -infinity represent the mathematical
 *                              equivalent to infinity and -infinity.
 * 
 * 4. Complex datatypes include:
 *      4a. Arrays: Arrays are zero-indexed list that are made with square brackets,
 *                  and each value, (which are called elements) inside are seperated 
 *                  by commas. You can place any datatype inside of an array, and
 *                  you can access this data inside the array by first specifying
 *                  the name of the array you want to access then using bracket notation
 *                  to indicate the position in the array you want to access.
 *      4b. Objects: Objects are similar to arrays where they also can hold any 
 *                   datatype inside, however they have a few key differences 
 *                   between them. One being that instead of square brackets, objects
 *                   can be distinguished by using curly braces to create them. Objects
 *                   are not ordered like arrays, they instead use key/value pairs to
 *                   hold thier values. You can access these key/value pairs by using
 *                   either dot notation or bracket notation. You only use dot notation
 *                   on objects to access key/value pairs ONLY when you know the exact
 *                   key on that object you want to access.
 *      4c. Functions: Functions in JavaScript allow us to store a single block of
 *                     code of that could be used over and over again at any point 
 *                     in our program whenever and however many times we want. 
 */
 
 // 3. Simple datatypes // 
 
 // 3a. creating and storing numbers //
 
 const myNum = 1;
 const myFriendsNum = myNum;
 console.log(myNum); // prints => 1
 console.log(myFriendsNum); // prints => 1
 
 /** NOTE: Since numbers are simple datatypes, when assigning a variable to a value
  * like a number JavaScript copies the exact value from one varaible and to another
  * so now there are myNum and myFriendsNum both have the same value in different
  * spots in memory. This goes the same for every other simple datatype in JavaScript.
  */
  
  // 3b. creating and storing strings //
  
  const myStr = "asus";
  const myLaptop = "I own an " + myStr;
  console.log(myLaptop); // prints => "I own an asus"
  
  // 3c. creating and storing booleans //
  
  const myBool = true;
  const mikeIsCool = myBool;
  console.log(mikeIsCool); // prints => true;
  
  // 3d. creating and storing undefined //
  
  let idk;
  let riddle = "How much wood can a woodchuck chuck, if a woodchuck could chuck wood? Sorry the answer is " + idk;
  console.log(riddle);
  /** prints => "How much wood can a woodchuck chuck, if a woodchuck could 
   * chuck wood? Sorry the answer is undfined."
   */
   
   // 3e. creating and storing null //
   
   let theCousinOfUndefined = null;
   console.log(theCousinOfUndefined); // prints => null
   
   // 3f. creating and storing NaN //
   
   let checkNums = NaN;
   if(isNaN(checkNums)){
       console.log("see im not a number"); // prints => see im not a number
   }
   
   // 3g. infinity and -infinity //
   
   let buzz = "and beyond";
   if(Math.pow(10, 1000) === Infinity){
       console.log("to infinity " + buzz); // prints => to infinity and beyond
   }
  
  // 4a. creating and storing arrays //
  
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
  
  // 4a. accessing arrays //
  
  
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
    
    // 4b. creating and storing objects //
    
    let myObj = {nameFirst: "Mike ", nameLast: "Bazile", favArtist: "the weeknd"};
    let mySecondObj = myObj;
    console.log(myObj); // prints => {nameFirst: "Mike", nameLast: "Bazile", favArtist: "the weeknd"};
    console.log(mySecondObj); // prints => {nameFirst: "Mike", nameLast: "Bazile", favArtist: "the weeknd"};
    
    // 4b. accessing objects //
    
    let myName = myObj['nameFirst'] + mySecondObj.nameLast;
    console.log(myName); // prints => Mike Bazile
    
    // 4c. creating and storing functions //
    
    
    
    