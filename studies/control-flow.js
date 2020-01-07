// CONTROL FLOW // 

/**
 * 0. In JavaScript the concept of control flow plays an important role in the way
 * a program is ran by making decisions on true or false questions. Control flow
 * is basically the order that the statements or functions are executed in code.
 * In JavaScript, code is ran starting at the first line and goes until it reaches
 * the end unless something in the code instructs otherwise. The main way to format
 * this in our code is to use if-elseif-else statements or switch statements.
 */
 
 
 // 1. if-elseif-else statements //
 
 /**
 * 1. If statements are the first to start off an if-elseif-else statement chain.
 * You start by using the keyword if, followed by placing which ever condition
 * that needs to be met in order for your code to be ran. The conditionial statements
 * have to evaluate to a boolean value (true or false ) in order for the code to work. 
 * Following the closing parenthese of the conditional statement, you then create 
 * a code block (curly braces), to place the code you want to run if the condition 
 * evaluates to true.
 * 
 * 1a. Following the inital if statement (which you only need one of), you can then
 * join as many else-if statements that you want if the inital statement does not
 * pass the conditional statement. Else-ifs are similar to if statements in that you
 * have a conditional statement, followed by a code block to hold the code to be ran
 * if that conditional evaluates to true. The only difference is in the actual keyword
 * else if, insteated of using if. 
 * 
 * 1b. else statements end the entire if-elseif-else statement. They act as the 
 * default value to evaluate to, if none of the prior statements evaluate to true. 
 * You do this by using the else keyword to followed by a code block to be ran. Notice
 * that there isn't any conditional statement, that is because else statemens only 
 * run at the very end of a conditional statement.
 */
 
 
 const bestEver = "Tom Brady";
 
  if(bestEver === "Drew Brees"){
     console.log("He's kinda, but not quite");
 } else if(bestEver === "Aaron Rodgers"){
     console.log("dont even think about it");
 } else if(bestEver === "Tom Brady"){
     console.log("6 superbowls");
 } else{
     console.log(null);
 }
 
 /**
  * The code above will log to the console a string of "6 superbowls", becuase
  * that is the first conditional that will evaluate to true. With conditional
  * statements, once the first true statement is met that code block will be ran
  * and the if statement will stop.
  */
  
 
 
 // 2. switch statements //
 
 
/**
 * 2. switch statements act as a shorter and cleaner alternative to if-elseif-else 
 * statements in the instance where are a lot of elseif statements. The switch
 * statement evaluates an input expression, matching the expression's value to
 * a case clause, and executes statements associated with that case. You start by
 * using the keyword switch followed by parentheses with an expression to be checked.
 * Following the parentheses, you then add a code block where you place a case clause
 * to be check that it matches the input expression. If the case clause and input 
 * expression match, then the code block will run. It is VERY important to always
 * place a break statement at the end of each case clasue or the code will casue
 * the next block to execute.
 */
 
 const number = 5;
 
 switch(number){
     case 4:
         console.log("no match");
         break;
     case 6: 
         console.log("no match");
         break;
     case 2:
         console.log("no match");
         break;
     case 5:
         console.log("match");
         break;
         default:
         console.log("out of chances, try again :/ ");
 }
 
 /**
  * The code above will log to the console a string of "match", this is becuase
  * similar to if-elseif-else statements, switch statements also will check each
  * case until one evaluates to true. Once the first case evluates to true the 
  * switch statement will exist out right there. 
  */
  
  