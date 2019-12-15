/**
 * STRING MANIPULATION
 * 
 * 0. Strings in JavaScript are any characters that are wrapped in either single
 * or double quotes. Each character in a JavaScript string can be accessed by an 
 * index number, and all strings have methods and properties available to them. 
 * 
 * 1. Similar to arrays, strings are zero-indexed, so when trying to access a particular
 * character in a string you can use bracket notation with the index in which that
 * character is to get that value. 
 * 
 * 2. One really common and useful string manipulation is the use of the concatenation
 * operator (+). With this operator you are able to take two seperate strings and 
 * join them together to form one single string. 
 * 
 * 3. Also similar to arrays, strings have built-in properties and methods that can
 * provide even more ways to manipulate strings. Some of these include:
 *      
 *      3a.) .length: returns the number of characters in a string.
 *      3b.) .toUpperCase(): returns all characters in a string to uppercase.
 *      3c.) .toLowerCase(): returns all characters in a string to lowercase.
 *      3d.) .split(): returns an array of strings seperated by a specified character
 *      3e.) .charAt(): returns the character at a specifed index in the string.
 */
 
 // 1. string access with bracket notation// 
 
 let myStr = "Hi, how are you?";
 console.log(myStr[5]); // prints => o
 
 // 2. string concatenation //
 
 let best = "Lebron";
 let ever = " James";
 let bestEver = best + ever;
 
 console.log(bestEver);
 
 /** NOTE: It is important to note that when you are concatenating strings to be 
  * aware of the spaces that are in between them.
  */
  
  // 3a. .length //
  
  let bestSong = "Girls love beyonce";
  
  console.log(bestSong.length); // prints => 18
  
  // 3b. .toUpperCase() //
  
  let fruit = "strawberry";
  fruit = fruit.toUpperCase();
  
  console.log(fruit); // prints => STRAWBERRY
  
  // 3c. .toLowerCase() //
  
  let grain = "Honey Wheat";
  grain = grain.toLowerCase();
  
  console.log(grain); // prints => honey wheat
  
  // 3d. .split() //
  
  let phrase = "bown chick a wown wownnn";
  phrase =phrase.split("");
  
  console.log(phrase); // prints => ['brown', 'chick', 'a', 'wown', 'wownn']
  
  // 3e. charAt() // 
  
  let language = "JavaScript";
  let spot = language.charAt(5);
  
  console.log(spot); // prints => c
  
  
  