// LOOPS //

/**
 * 0. In JavaScript, there are many different kinds of loops, but they all essentially
 * do the same thing. Loops allow programmers to repeat a block of code as many times
 * as needed. Loops are really useful for iterating over collections, or any large
 * amount of data that all require the same action. Instead of having to this manually
 * loops does this for us. There are three common loops that you will see alot in
 * JavaScript which are for-loops, for-in loops, and while loops. 
 */
 
 
 // 1. for loops //
 
/**
 * For loops are especially helpful when a programmer knows the exact number
 * of times a code block needs to be executed. You start a for loop by using the 
 * for keyword, followed by parenthesis. Inside of the parenthesis you place three
 * different conditions which are a starting condition, a stopping condition, and
 * an incrementor/decrementor. Following the parenthesis is where you put a code 
 * block to place whatever action you want your code to do at each iteration. 
 */
 
 // 1a. for loops forwards //
 
 let numsArray = [];
 
 for(let i = 0; i <= 10; i++){
     numsArray.push(i);
 }
 
 console.log(numsArray); // prints => [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
 // 1b. for loop backwards // 
 
 let numsArrayReversed = [];
 for(let i = 10; i >= 0; i--){
     numsArrayReversed.push(i);
 }
 
 console.log(numsArrayReversed); // prints => [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
 
 
 // 2. for-in loops //
 
 
/**
 * For-in loops are used to iterate over objects, and pull out all of an object's
 * keys one by one. You start a for-in loop by using the keyword for, followed by
 * parenthesis. Inside of the parenthesis you place a variable name, the keyword
 * key, the keyword in, then the name of the object that is being iterated over.
 * After the parenthesis is where you put a code block to place whatever action
 * you want your code to do at each iteration.
 */
 
 

 let myObj = {favFruit: "strawberry", favNum: 5, favSong: "Solo", favLang: "JS"};
 
 for(let key in myObj){
     console.log(key); // prints => favFruit, favNum, favSong, favLang
     console.log(myObj[key]); // prints => strawberry, 5, Solo, JS
 }

/** NOTE: Notice on line 60 that inside of the console.log that bracket notation
 * is being used to get the value at each iteration of the for-in loop. This is 
 * an important distinction because if dot notation was used there, undefined would
 * be logged to the console. This is because using dot notation is indicating that
 * there is a key inside of myObj object called key, since there isn't we get back
 * a value of undefined. So always use bracket notation when trying to dynamically
 * access values from an object using a for-in loop.
 */
 
 
 
 // 3. while loop //
 
/**
 * 3. While loops will iterate for an indefinite number of times until a specified
 * condition evaluates to false. Once the condition evaluates to false is when the
 * loop will stop. You start a while loop by first using the keyword while followed
 * by by parenthesis. Inside the parenthesis is where you place a condition to be
 * meet in order for the loop to keep running. Following the parenthesis is where
 * you put a code block to place whatever action you want you code to perform at
 * each iteration. NOTE: When dealing with while loops it is important to always
 * have an incrementor/decrementor inside of your code block so you won't cause
 * an infinite loop because your code will never reach your conditional statement
 * if it isn't incrementing or decrementing. 
 */
 
 
 let count = 0;
 
 while(count < 7){
     count++;
     console.log(count); // prints => 1, 2, 3, 4, 5, 6, 7
     }
 