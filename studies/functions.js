/**
 * 
 * FUNCTIONS
 * 
 * 0. Functions in JavaScript allow programmers to encapsulate a block of code,
 * and execute that block of code whenever and how ever many times as necessary. 
 * Functions gives programmers a way to structure large programs, reduce repetition,
 * and make code more flexible. Programmers can call a function several times,
 * this in turn can make a program compact by not having to write the same code
 * over and over again to perform the same task. There are a few different ways 
 * in JavaScript to create functions. Even though there are different ways to go
 * about making a function, every single function has only two phases: A function
 * declaration (creating a function), and using (calling) the function. As previsously
 * stated, there are different ways to define a function, which are named functions,
 * function expressions, arrow functions, and anonymous functions. 
 * 
 * 1. When creating a function definition, you start by using the keyword function,
 * followed by a parenthsis. Inside of the parenthsis is where you have the option to
 * place function inputs, which are called parameters. It is important to name parameters 
 * so that they clearly and plainly show what needs to provided when calling the function.
 * Following the parenthesis, is where you place your code block to put what ever 
 * statement you want your function to perform. It also important to note that every
 * function returns a single output. If no return statement is provided by the 
 * programmer inside the code block, the entire function will return a value of 
 * undefined. 
 * 
 * 2. Creating a named function is very similar to the function definition from
 * above, the only difference is that after the function keyword you explicitly
 * put a name that you want to call that function. 
 * 
 * 3. Anonymous functions are simply functions that are defined without a name. 
 * They have the same format and functionality as named functions. Anonymous
 * functions are typically used to be passed to other functions, in JavaScript
 * this concept is called higher order functions. This concept makes code much more
 * flexible and compact. Not to get too off topic from what they are, it's important 
 * to note that anonymous functions are mainly used to be passed into to other functions. 
 * 
 * 4. Creating a function expression is different in the fact that you assign
 * an anonymous function, to a variable or constant. 
 * 
 * 5. Arrow functions were introduced in the recent ES6 update, that simply offer
 * a shorter syntax. The exact same functions can be written as an arrow function
 * with only one line of code. With arrow functions you can ommit the function
 * keyword, if there is only one parameter you can ommit the parenthesis, finally
 * if you have your return statment on one line you can ommit the curly braces
 * and the return keyword. 
 * 
 * 6. In order to use a function, you have to call it. You can think of it as if
 * you had a dog at a dog park and you wanted to call your dog to you, you have
 * to call its name. So when calling a function you first ype the name of the function
 * you want to call. After the name of the function you then put parenthesis, inside
 * the parenthesis is where you place your arguments. Arguments are the actual 
 * value that you want to pass into your function one you call the function to 
 * execute. The amount of parameters that was created when defining a function, must
 * match the amount of arguments when calling a function. 
 * 
 * 7. In JavaScript, scope determines when and where variables are accessible in a 
 * program. One advantage of this concept is that scope provides some level of security
 * in your code by shutting off certain variables from the rest of a program.
 * Scope also helps to identify and reduce bugs in a program. There are three 
 * different types of scopes, which are global, function (local), and block scopes. 
 * Any variable created in the global scope can be accessed and altered at anytime, at any 
 * point of the program. Variables defined inside a function are all in the local
 * scope. With the ES6 update that brought along the variables let and const, now
 * anytime let and const are defined in any code block, not only functions code block,
 * they are bound to that block scope. Every time you nest any of these scopes inside
 * of the global scope, each instance of a new scope creates a child scope. Child
 * scopes have access to parent scopes, parent scopes on the other hand do not. 
 * 
 * 8. In the instance a child scope does indeed access a variable in a parent scope
 * even after that function has returned is called clousre. 
 */
 
 // 2. named function //
 
 function join(numOne, numTwo){
     console.log(numOne + numTwo);
 }
 
 console.log(join(1,1)); // prints => 2 
 
 // 3. anonymous functions //
 
 console.log(function() {}); // prints => undefined
 
 // 4. function expression //
 
 let add = function(a, b){
  return a + b;
 };
 
 console.log(add(5,5)); // prints => 10
 
 // 5. arrow functions //
 
 let subtract = (a, b) => a - b; 
 
 console.log(subtract(10, 5)); // prints => 5
 
 // 7. scope //
 
 let value = 5;
 
 function see(value = 2){
  
  return value;
 }
 
 console.log(value); // prints => 5
 /**
  * NOTE: Notice that the global variable value is logged on line 108 instead
  * of the variable value inside of the see function. This is becuase even though
  * that they both share the same name, each were created in different scopes and
  * unless I console.log(value) inside of the function scope where that variable 
  * was created I do not have access to it from the global scope
 
 // 8. closure // 
 
 let str = " hat";
 
 function concat(value){
  return value + str;
 }
 
 console.log(concat("cool", str)); // prints => cool hat
 
 /**
  * NOTE: Only when a variable is accessed by a child scope to a parent's scope
  * variable is when a clousre can be identified. 
  */ 
 