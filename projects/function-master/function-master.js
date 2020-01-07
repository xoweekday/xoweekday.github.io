//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //use object.values() put the values inside of object param 
    //return the array full of the object values
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //use object.keys() put the values inside of object param
    //return the array full of the object strings
return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //declare and assign a variable to an empty array to hold string values
let result = [];
//declare and assign a varible using Object.values() to get all of the param values in a array
let valuesArr = Object.values(object);
//loop through array to access each value inside
for(let i = 0; i < valuesArr.length; i++){
    //use conditional to check if each element is a string 
    if(typeof valuesArr[i] === "string"){
        //push all elements that pass the conditional
        result.push(valuesArr[i]);
    }
}
//use .join() to return a string with a space in between
return result.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //use ternary operator to check if the passed in param is a collection
    //if true return 'array' else return 'object'
    return (Array.isArray(collection)) ? 'array' : 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //use bracket notation to access the first character of input string
    //use .toUpperCase() to capitalize the first character of input string
    //use  + operator to add the rest of the input string
    //use .slice to add the rest of the input string to the capital letter
    //return the string
    return string[0].toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //declare and assign a variable to an empty string
    let result = [];
    //declare and assign a variable to an array of the input string
    //use .split() to do this
    let strArr = string.split(" ");
    //loop through array to access each element inside newly created array
    for(let i = 0; i < strArr.length; i++){
    //use bracket notation to access the first character of input string
    //use .toUpperCase() to capitalize the first character of input string
    //use  + operator to add the rest of the input string
    //use .slice to add the rest of the input string to the capital letter
    //push the results into result array that was created earlier
        result.push(strArr[i][0].toUpperCase() + strArr[i].slice(1));
    }
    //return result array using .join() to make the array into a string
    return result.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //use bracket notation to access the first character of name property inisde of the input object
    //use .toUpperCase() to capitalize the first character of name property
    //use .slice to access the rest of the name property
    //use template literals to return a welcome message by accessing the name property inside of the input object.
return `Welcome ${object.name[0].toUpperCase()}${object.name.slice(1)}!`;

}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //assign and declare a variable to the input object's name prop with the first letter capitalized
let name = `${object.name[0].toUpperCase()}${object.name.slice(1)}`;
    //assign and declare a variable to the input object's species prop with the first letter capitalized
let species = `${object.species[0].toUpperCase()}${object.species.slice(1)}`;
    //return the string "Name is a Species" by using template literals to access the variables we created above
return `${name} is a ${species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //use ternary operator to check if the input object has a property called noises 
    //use .hasOwnProperty to check if the property exists
    //use .length property to check if there are any elements inside of the noises property
    //if conditional evlauates to true / return the noises array into a string using .join()
    //if conditional evluates to false / return a string 'there are no noises'
return (object.hasOwnProperty('noises') && object.noises.length > 0) ? object.noises.join(" ") : 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //declare and assign a variable to an array of strings from the input string using the .split() method
    //use ternary operator to check if out array of strings has the input word inside of it using the .includes method
    //if conditional evluates to true / return true
    //if conditional evluates to false / return false
    //return the conditional statement
let strOfWords = string.split(" ");
return (strOfWords.includes(word)) ? true : false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //access friends array on input object by using dot notation
    //use .push() to add input name on the friends prop on our input object
object.friends.push(name);
//return input object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //use ternary operator to check if input name is listed on the input object friends property
    //use .hasOwnProperty() to check if object has friends prop on it
    //use .length prop to then check if there is anything inside of friends prop on the input object
    //use .includes() method to check if name is listed on the input object friends prop
    //if conditional evaluates to true / return true
    //if conditional evluates to false / return false
return (object.hasOwnProperty('friends') && object.friends.length > 0 && object.friends.includes(name)) ? true : false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //declare and assign a variable to an empty array
let nonFriendsList = []
    // loop through input array to access each element (which are objects)
for(let i = 0; i < array.length; i++){
    //set up conditional to check which objects does not include the input name 
    //check to make sure that at each iteration the name prop does not equal input name
    //use bang operator to then check if the input name isn't included on the friends prop using the .includes() method
    if(array[i].name !== name && !(array[i].friends.includes(name)) ){
        //if conditional evluates to true / push results to the array we created eariler
        nonFriendsList.push(array[i].name);
        
    } 
   

}
//return the array OUTSIDE OF THE LOOP!!
return nonFriendsList;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //use conditional statement to check if input object has the input key prop by using the .hasOwnProperty() method
if(!object.hasOwnProperty('key')){
    //if conditional evaluates to true, add the input key prop on the input object and assign it to input value
       object[key] = value;
}
//return object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //loop through input array
for(let i = 0; i < array.length; i++){
    //loop through input object
    for(let key in object){
        //use conditional to check if at each iteration the array element equals the object key
        if(array[i] === key){
            //if conditional evluates to true, delete the input object key
            delete object[key];
        }
    }
}
//return object 
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //declare and assign a variable to an empty array
let result = [];
//loop through input array 
for(let i = 0; i < array.length; i++){
    //use conditional statement to check if there are any duplicate elements inside of input array
    //use .indexOf() method to check at a each iteration if the current element's index equals the current array element
    if(array.indexOf(array[i]) === i){
        //if conditional evlautes to true, use .push() to push elements to the array we created
        result.push(array[i]);
    }
}
//return result array
return result;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}