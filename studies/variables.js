/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use 
 * variables. Variables are named identifiers that can point to values of a 
 * particular type, like a Number, String, Boolean, Array, Object or another 
 * data-type.  Variables are called so because once created, we can CHANGE the 
 * value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or 
 * alias) for our variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or 
 * assignment).
 * 
 * 3. After the first two phases of declaring and initializing the variable var,
 * you can then re-assign that variable to which ever data type you want by using
 * the same name you used to declare the varibale followed by an assignment operator
 * then typing whichever data type you want to change it to.
 * 
 * 4. As mentioned above to hold things in memory during the life-cycle of a 
 * program, we can use variables. This is helpful to programmers because, it 
 * allows data to be stored in memory then used later in the program without
 * that data disappering. Along side of using the keyword var to declare a varibale,
 * there are also to more keywords that can be used which are let and const that
 * can both hold data. Each of these keywords have both similarties and differences
 * between them.
 * 
 * 4A. The keyword var has been around and has been being used primarly for years
 * up until a recent ES6 update introduced the keywords let and const. Var is 
 * function-scoped, meaning that if var is declared inside of a function it can only
 * be accessed in that function. The flip side to this is that, if var is declared
 * outside a function it is avaiable to the entire window. Var can be re-assigned, and
 * var is hoised to the top of its scope. The reason the recent ES6 update brought
 * along let and const is because var had issues with the fact that you can
 * reassign var. Programmers may have not realized that they have reassinged a 
 * variable and this may have caused lots of unforseen bugs in a lot of code.
 * 
 * 4B. The keyword let came about after the recent ES6 update, and it brought
 * many improvements to var. First of all, let is blocked-scoped meaning that
 * if let is declared inside any code block it can be only accessed inside of that
 * code block. Similar to var, let can be re-assinged but ONLY inside of the code
 * block that it is declared inside of. Also similar to var, let is hoisted to
 * the top of whichever scope that it is declared inside of. However, if you try
 * to use a let variable before it is declared you will get a reference error 
 * instead of undefined like in the case of var.
 * 
 * 4C. The keyword const also came about after the recent ES6 update. Similar to
 * let, the keyword const is block-scoped. The speical thing about const is that
 * it cannot be re-assinged after it has been declared and assinged (hence the
 * name const aka constant). Any attempt to re-assign a const variable will throw
 * a reference error. However with that being said, although you cannot re-assign
 * a const varible, you are still able to dynamiclly update any complex data types
 * that are assinged to const. Alos const variables are also hoisted to the top
 * of its scope. 
 * 
 * 5. Hoisting in JavaScript is where all variable and function declarations are
 * moved to the top of their scope at run time before the code executes. This 
 * means that it really does not matter where functions and variables are declared,
 * (local or global scope) they are moved to the top of their scope. As described
 * in the aforementioned information about var, let, and const - var will be 
 * assigned a value of undefined upon trying to use it before it is declared and
 * initilized while let and const will throw a reference error. 
 */

// 1. declaration //
var myName;

/**
 * At the declaration phase, the variable myName is undefined because we have 
 * NOT initialized it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

/** NOTE: We can assign and re-assign anything to a variable - we cannot do this 
 * with constants
 */
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4a. var, let - hoisting //

console.log(hoist()); // prints => undefined
function hoist(){
    //console.log(theBestVar) // prints reference error
    // console.log(error) // prints reference error
    console.log(see); // prints => undefined 
    var see;
    let error;
    const theBestVar = "const";
    console.log(error); // prints => undefined
    console.log(theBestVar); // prints "const";
    
}
/** NOTE: The code above works because both the variable see and the function
 * hoist are both hoisted to the top of their respective scopes so you can first
 * call hoist before it has been declared and second console log see before it 
 * has been declared. 
 */
 
 // 4b. let //
 
 // 1. let declaration //
 let mySong;
 console.log(mySong); // => prints undefined 
 
 // 2. let - initialization or assignemt // 
 
 mySong = "Highest in the room";
 console.log(mySong); // prints => Highest in the room
 
 // 3. let - re-assignment //
 mySong = "heartless";
 console.log(mySong); // prints => heartless;
 
 // NOTE: We can re-assign let, however we cannot re-declare let //
 
 let myNewSong = "a lot";
 myNewSong = "gone";
 // let myNewSong = "in my room"; => this will throw a reference error 
 console.log(myNewSong); // prints => gone
 
 // 4. let - hoisting //
 console.log(hoist());
 
 /** NOTE: The hoist function being called on line 129 works because of where
  * the console.log() is placed. This is because if you try 
  * to use a let variable before it is declared you will get a reference error 
  * instead of undefined like in the case of var. So in the function hoist the
  * console.log(error) will print undefined.
  */
  
  // 4c. const //
  
  // 1. const - declaration //
  
  // const myHeight; this will throw a reference error
  
  // 2. const - initialization or assignment //
  const myHeight = '6ft';
  console.log(myHeight); // prints => '6ft';
  
  // 3. const - re-assignment //
  
  // const myHeight = "5ft"; this will throw a reference error 
  
  // 4 const - hoisting // 
  console.log(hoist());
  
  /** NOTE: The hoist function being called on line 155 works because of where
  * the console.log() is placed. This is because if you try 
  * to use a const variable before it is declared you will get a reference error 
  * instead of undefined like in the case of var. So in the function hoist the
  * console.log(theBestVar) will print "const";
  */
  
 
 