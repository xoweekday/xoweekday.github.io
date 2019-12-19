// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //create an object literal
    //add each parameter in the makeContact function as a property in our object literal
 let contact = {};
 contact.id = id;
 contact.nameFirst = nameFirst;
 contact.nameLast = nameLast;
 //return the object
 return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //declare and assign a variable to an empty array to hold contacts
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            //push the passesd in contact parameter into out contacts array
            //return contacts
            return contacts.push(contact);
        },
        findContact: function(fullName) {
            //loop through contacts array
            for(let i = 0; i < contacts.length; i++){
                //use conditional statement to check if the input fullName param matches the first and last name of each contact in our contacts array
                if(contacts[i].nameFirst + " " + contacts[i].nameLast === fullName){
                    //return contacts
                    return contacts[i];
                }
            }
            //if no mateches are found return undefined
               return undefined; 
        },
        removeContact: function(contact){
            //loop through contacts array
            for(let i = 0; i < contacts.length; i++){
                //use conditional statement to check if the input contact object matches the objects in our contacts array
                if(contacts[i] === contact){
                    //if the conditional evaluates to true, use splice to remove that contact object from our contacts array
                    contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function(){
            //declare and assign a variable to an empty array
            let strings = [];
            //loop through contacts array
                for(let i = 0; i < contacts.length; i++){
                    //push the whole name of each object into our strings array
                    //make sure to add a white space while pushing
                  strings.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
                }
            //return the strings array using the .join method to seperate each name with a new line character
            return strings.join("\n");
            }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
