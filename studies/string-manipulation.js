// STRING MANIPULATION //

/**
 * 0. Strings in JavaScript are any characters that are wrapped in either single
 * or double quotes. Each character in a JavaScript string can be accessed by an 
 * index number, and all strings have methods and properties available to them. 
 * 
 * Similar to arrays, strings are zero-indexed, so when trying to access a particular
 * character in a string you can use bracket notation with the index in which that
 * character is to get that value.
 */



 // 1. string access with bracket notation // 
 
 let myStr = "Hi, how are you?";
 console.log(myStr[5]); // prints => o
 
 
 // 2. string concatenation //
 
/**
 * One really common and useful string manipulation is the use of the concatenation
 * operator (+). With this operator you are able to take two seperate strings and 
 * join them together to form one single string. To take it a step further, there 
 * is also a concatenation and assignment operator (+=) that can be used as a short hand
 * syntax.
 */
 
 let best = "Lebron";
 let ever = " James";
 let bestEver = best + ever;
 
 let tvBrands = "";
 tvBrands += "Sony, Samsung, Vizo, LG, Sharp";
 
 console.log(bestEver); // prints => 'Lebron James'
 console.log(tvBrands); // prints => 'Sony, Samsung, Vizo, LG, Sharp'
 
 /** NOTE: It is important to note that when you are concatenating strings to be 
  * aware of the spaces that are in between them.
  */
  
  
  
  // string methods //
  
/**
 * Also similar to arrays, strings have built-in properties and methods that can
 * provide even more ways to manipulate strings. Some of these include:
 *      
 *      3a.) .indexOf(): return the index of the first occurence of a specified character
 *      3b.) .toUpperCase(): returns all characters in a string to uppercase.
 *      3c.) .toLowerCase(): returns all characters in a string to lowercase.
 *      3d.) .split(): returns an array of strings seperated by a specified character
 *      3e.) .charAt(): returns the character at a specifed index in the string.
 *      3f.) .slice(): extracts a part of a string and returns the extracted part in a new string.
 */
 
  // 3a. .indexOf() //
  
  let bestSong = "Girls love beyonce";
  
  console.log(bestSong.indexOf()); // prints => 11
  
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
  
  // 3f. .slice() //
  
  let cars = "Honda, Toyota, Ford, Chevy";
  let affordableCars = cars.slice(0, 13);
  
  console.log(affordableCars); // prints => "Honda, Toyota"
  
  
  
  