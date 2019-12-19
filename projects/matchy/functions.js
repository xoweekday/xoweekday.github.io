/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name){
    //loop through array
    for(let i = 0; i < animals.length; i++){
        //use conditional to check if name parameter matches any animal object in our animals array
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
            //return object
            return animals[i];
        }
    }
    //if no matches are found return null
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace (animals, name, replacement) {
    //loop through animals array
    for(let i = 0; i < animals.length; i++){
        //use conditional to check if name parameter matches any animal object in our animals array
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
            //reassign object to replacement object
            animals[i] = replacement;
        }
    }
};


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var remove = (animals, name) => {
    //loop through animals array
   for(let i = 0; i < animals.length; i++){
       //use conditional to check if name parameter matches any animal object in our animals array
      if (animals[i].name.toLowerCase() === name.toLowerCase()){
          //remove the matching object using .splice()
      animals.splice(i, 1);
      }
          
   }
          
};


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var add = (animals, animal) => {
    //use conditional to check if input animal parameter has a species and name property greater than 0
   if(animal.name.length > 0 && animal.species.length > 0){
       //if conditional passes - loop through animals array 
       for(let i = 0; i < animals.length; i++){
           //use conditional to check if the animal.name property matches any animal name in our animals array 
           if(animal.name === animals[i].name){
               //if any names match return null
               return null;
           }
       }
       //push the animal object into our array once it passes each condition, and do so - OUTSIDE OF THE THE LOOP
       animals.push(animal);
   }
}
 
 
 /* You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
