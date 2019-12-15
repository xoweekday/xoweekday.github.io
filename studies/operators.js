/**
 * OPERATORS:
 * 
 * 0. Operators play a very important role when it comes to coding in JavaScript.
 * They help us do a plethora of things to help programmers manipulate data in
 * a meaningful way. Operatprs are used to assign values to variables,
 * compare values to each other, and perform airthmetic on values. You can identify
 * an operator by the number of operands they have and by what they do. Operands
 * are simply the values that operators act on. You have three different types of operators
 * which are unary, binary, and ternary operators. Unary operators have only one operand,
 * binary has two operands, and ternary has three operands. In JavaScript there are
 * a total of seven different operators which are assignment, comparison, arithmetic,
 * logical, string, conditional, and unary operators.
 * 
 * 1. Assignment operators assign values to variables based on what the operand is
 * to the right of the equal sign. 
 * 
 * 2. Comparison operators are binary operators that compares two operands and coerces
 * the value to a boolean value. Comparison operators are great for using in conditional 
 * statments to help the control flow of a program. 
 * 
 * 3. Arithmetic operators are binary operators that are simply used to perform 
 * arithmetic between values. 
 * 
 * 4. Logical operators are binary operators that, similar to comparison operators,
 * are mainly used to control flow of a program. They do this by having a few different
 * conditions to be checked before running the code can be ran.
 * 
 * 5. String operators are binary operators that help programmers manipulate strings.
 * One main string operator is the addition opperator that can be used to concatenate
 * strings together. Strings are similar to arrays in the fact thay each charater 
 * inside of a string is zero indexed. So you can use many properties that can be used
 * on arrays can also be used on strings to help use and manlipulate strings even
 * further. 
 * 
 * 6. Conditional operators are the only operators that are ternary operators because
 * they take in three operands. Conditional operators assigns a value to a variable
 * based on if a condition passes or not. It is essemtially a short hand for a 
 * normal conditional statement with if-else statements. 
 * 
 * 7. Unary operators only take in one operand. Some unary operators include assignment
 * operators, typeof, bang, incrementors, and decrementors. 
 * 
 * 8. Bang operators are a type of logical operator that checks if a value is 
 * truthy or falsy. Values with a boolean value of true are truthy, and values with
 * a boolean value of false are falsy. 
 */
 
 // 1. Assignment operators //
 
 let assign;
 assign = "this is how you use assignmet operators";
 console.log(assign); // prints => this is how you use assignmet operators
 
 // 2. Arithmetic operators //
 
 console.log(5 + 5); // prints => 10
 console.log(1 - 1); // prints => 0
 console.log(7 * 4); // prints => 28
 console.log(20 / 5); // prints => 4
 console.log(2 % 2); // prints => 0
 console.log(4 % 3); // prints => 1
 
 // 3. Comparison operators //
 
 console.log(5 > 2); // prints => true
 console.log(2 > 5); // prints => false
 console.log(1 <= 1); // prints => true
 console.log(1 >= 5); // prints => false
 console.log("1" == 1); // prints => true
 console.log(1 === 1); // prints => true
 console.log(1 != '1'); // prints false
 console.log(1 !== "1"); // prints true
 
 /** NOTE: First it is important to note that comparsion operators always gives
  * a boolean value. Also It is very important to always make sure to use strict 
  * comparison over loose comparion operators to aviod possible bugs in your code.
  */
  
  // 4. Logical operators //
  
  let numOne = 10;
  let numTwo = 5;
  
  console.log(numOne > 10 && numTwo <= 5);
  console.log(numOne + numTwo > 14 || numOne + numTwo > 16);
  
  /** NOTE: It is important to note that when dealing with the logical and operator 
   * BOTH condtions must pass in order for the code to run, while dealing with the 
   * logical or operator only requires one condition to pass.
   */
   
   // 5. Unary operators //
   
   let num = 15;
   
   console.log(typeof num); // prints => number
   console.log(num++); // prints => 15
   console.log(num--); // prints => 16
   console.log(!!1); // prints => true
   console.log(!!-1); // prints => true
   console.log(!!0); // prints => false
   
   // 6. String operators // 
   
   let le = "Lebron ";
   let goat = "James";
   let leGoat = le + goat;
   
   console.log(leGoat); // prints => Lebron James
   console.log(leGoat.length); // prints => 12
   console.log(leGoat[5]); // prints => n
   console.log(leGoat.split()); // prints => ['Lebron James']
   
   /** NOTE: It is important to keep note of when and where you inlude spaces in 
    * your strings when you want to concat them together. If you don't pay attention
    * to this your strings may not have the adequates spaces in between them. It is 
    * also important to note since strings are zero indexed, you can use many properties and
    * methods associated with arrays on them.
    */
    
    // 7. Conditional operators (ternary) // 
    
    let age = 18;
    let iCanDrinkWoo = (age >= 18) ? true : false;
    
    console.log(iCanDrinkWoo); // prints => true
    
    /** NOTE: On line 125, anything inside of the parentheses is the conditional
     * that will be checked first; if it evaluates to true then the output after
     * the question mark will be returned; if not then the output after the colon
     * will be returned.
     */
    