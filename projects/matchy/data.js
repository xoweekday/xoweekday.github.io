/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create object literal
var animal = {};
//use dot notation
animal.species = "meerkat";
//use bracket notation
animal["name"] = "Timon";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create array literal
var noises = [];
// use bracket notation
noises[0] = "eekk";
// use .push()
noises.push("squeek");
// use .unshift()
noises.unshift("meeek");
noises[noises.length] = "hakunamtata";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//use bracket notation to assign a noises proprty on our animal object
animal["noises"] = noises;
//use .push to add a noise into our noises array
animal.noises.push("raarw");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// make array literal
var animals = [];
//push animal object into animals array
animals.push(animal);
console.log(animals);
//create 3 new animal objects and push each one into animals array
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var warthog = {species: "warthog", name: "Pumbaa", noises: ['chomp', 'snort']};
var lion = {species: "lion", name: "Mufasa", noises: ['GROOWL', 'purrr']};
animals.push(warthog, lion);
console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * An array would be a good choice to hold a list of friends becuase, first of
 * all all the data inside are similar and also all the friends will be ordered
 * and indexed in case we have to go back an maniplulate the data.
 */

//assign and declare a variable to an empty array
var friends = [];
//define a getRandom function to get a random index
function getRandom(animals){
    //use math.floor - rounds down
    //use math.radom - gets random number between 0 and a specifed stopping index NOT INCLUDING THE stopping index
    return Math.floor(Math.random() * animals.length);
}
//use getRandom function to push random object name into frinds array
friends.push(animals[getRandom(animals)].name);
//add friends array as a property on one of the objects in animals array
animals[0].friends = friends;




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
