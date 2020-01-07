// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-xoweekday");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //iterate over the array param using the _.filter method to access each customer object
    // at each iteration check if that customer object has a gender property that has a value of male
    //return the array's length of the number of males that were found during the iteration
return _.filter(array, (custObj, i, a) => custObj.gender === "male").length;

};




var femaleCount = function(array){
    //iterate over the array param using the _.reduce method to access each customer object
   let numOfFemales = _.reduce(array, (seed, currentObj, index) => {
       //at each iteration check if the current object has a gender property that has a value of female
       if(currentObj.gender === "female"){
       //if conditional evaluates to true, add one to seed
           seed++
       }
       //return seed, so that at the next iteration the proper number of females found will be updated
       return seed;
   }, 0)
   
   // return numOfFemales
   return numOfFemales;
};




var oldestCustomer = (array) =>{
  //iterate over the array param using the _.reduce method to access each customer object
         //at each iteration check if the prevObj.age prop is greater than the currentObj.age prop
         //if conditional evaluates to true, return prevObj.name, else return currentObj.name
   return _.reduce(array, (prevObj, currentObj) => prevObj.age > currentObj.age ? prevObj : currentObj).name;
};




var youngestCustomer = (array) => {
     //iterate over the array param using the _.reduce method to access each customer object
         //at each iteration check if the prevObj.age prop is less than the currentObj.age prop
         //if conditional evaluates to true, return prevObj.name, else return currentObj.name
    return _.reduce(array, (prevObj, currentObj) => prevObj.age < currentObj.age ? prevObj : currentObj).name;
};



var averageBalance = (array) => {
    //declare and assign a variable to a value to zero to count the number of objects in our array
    let objCount = 0;
    //iterate over the array param using the _.reduce method to access each customer object
    let total = _.reduce(array, (seed, currentObj, index) => {
        //check if the value of the currentObj.balance is a number
        if(isNaN(currentObj.balance)){
            //if conditional doesnt pass, use the .replace and Number methods to add the number value of currentObj.balance to seed
             seed += Number(currentObj.balance.replace(/[^\d.]/g, ''));
        }
        //return seed, so at each iteration the value of each customer object balance property is added 
        return seed;
    }, 0);
    
    //use _.each function to iterate over the array param 
    _.each(array, (e, i, a) => {
        //at each iteration check if the value is truthy 
        if(e){
            //if conditional passes, add one to objCount
            objCount++;
        }
    });
    
    //return the total divided by objCount
    return total / objCount;
} ;




var firstLetterCount = (array, letter) => {
    //iterate over the array param using the _.reduce method to access each customer object
   let numCount = _.reduce(array, (seed, currentObj, index) => {
       //at each iteration set up conditional to check if the first letter of the currentObj name prop is equal to the letter param
        if(currentObj.name[0].toUpperCase() === letter.toUpperCase()){
            //if conditional evaluates to true, add one to the seed
            seed++;
        }
        //return seed, so at each iteration the value of seed is updated 
        return seed;
    }, 0);
    
    //return numCount
    return numCount;
};





var friendFirstLetterCount = (array, customer, letter) =>{
  //iterate over the array param using the _.reduce method to access each customer object
   let friendNumCount = _.reduce(array, (seed, currentObj) => {
       //set up conditional statment to check if the customer param is equal to the currentObj name prop
         if(customer === currentObj.name){
             //if conditional passes, use the _.each method to iterate over the currentObj friends prop to gain access to each name 
         _.each(currentObj.friends, (e, i, a) => {
             //at each iteration set up conditional to check if the first letter of the currentObj friend prop is equal to the letter param
          if(e['name'][0].toUpperCase() === letter.toUpperCase()){
              //if conditional evaluates to true, add one to the sees
              seed++;
          }
       });
             
         }
         //return seed, so at each iteration the value of seed is updated 
       return seed;
       //console.log(seed);
    }, 0);
    
    //return friendNumCount
    return friendNumCount;
};




var friendsCount = (array, name) => {
    //declare and assign a variable to an empty array
    let myArr = [];
    //set up edge case, to see if name param is given 
   if(!name){
       //if conditional passes return an empty array
       return myArr;
   }
    
        //iterate over the array param using the _.reduce method to access each customer object
    let finalFriendArr =  _.reduce(array, (seed, currentObj) => {
        //iterate over the currentObj friends prop using the _.each method
         _.each(currentObj.friends, (friendObj, i, a) => {
             //set up conditional statement to see if friendObj name prop matches the name prop
          if(friendObj['name'].toUpperCase() === name.toUpperCase()){
              //if conditional passes push currentObj.name to seed
              seed.push(currentObj.name);
          }
       });
       //return seed, so at each iteration the value of seed is updated
       return seed;
       //console.log(seed);
    }, []);
    
    //return finalFriendArr
    return finalFriendArr;
};





var topThreeTags = (array) => {
    //assign and declare a variable to an empty array
    let result = [];
    
    //iterate over the array param using the _.reduce method 
let tagObj = _.reduce(array, (seedObj, currentObj, index) =>{
    //iterate over the currentObj tags prop to access each element inside of that array
      _.each(currentObj.tags, (tag, i, a) => {
          //set up conditional statment to check if tag is a key on the seedObj
          //if conditional passes add one to seedObj[tag]
          //if conditional does not pass assign seedObj[tag] to one
    (seedObj[tag]) ? seedObj[tag] += 1 : seedObj[tag] = 1;
      });
      //return seedOnj, so at each iteration the value of seed is updated
      return seedObj;
    }, {});
   
   //assign and declare a variable to an array using Object.keys()
   //
    let tagObjKeys = Object.keys(tagObj);
    let sortArr = _.map(tagObjKeys, sortedTag => [sortedTag, tagObj[sortedTag]]).sort((a, b) => a[1] - b[1]).slice(-3);
    
    result.push(sortArr[0][0], sortArr[1][0], sortArr[2][0]);
    return result;
  
};




var genderCount = (array) => {
    //iterate over array param using the _.reduce method
     let resultObj = _.reduce(array, (seedObj, currentObj, index)=>{
         //iterate over seedObj to access each key/value pair 
        _.each(seedObj, (e, key, a) => {
            //set up conditional to see if currentObj gender prop equal the seed key prop
            //if conditional passes add one to the seedObj[key]
            //if conditional doenst pass assin the seedObj[key] to zero
            (currentObj.gender === key) ? seedObj[key] += 1 : seedObj[key] += 0;
        });
        //return seedObj, so at each iteration the seedObj is updated
        return seedObj;
    }, {male: 0, female: 0, 'non-binary': 0});
    
    //return resultObj
    return resultObj;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
