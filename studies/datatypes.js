/**
 * DATATYPES:
 * 
 * 0. In JavaScript, in order to hold values in memory during the life-cycle of 
 * a program we can use varibles. These things that are being held by these variables
 * are called data types. Generally datatypes can be categorized into two different
 * groups, simple data types and complex datatypes. Simple datatypes include numbers,
 * strings, booleans, undefined, null, NaN, and infinity and -infinity. Complex
 * datatypes include arrays, objects, and functions. 
 * 
 * 1. There are a few reasons that make simple datatypes simple and a complex datatypes 
 * complex. Simple datatypes are atomic (immutable), and they are copied by value. 
 * While complex datatypes are mutable, and they are copied by reference. The 
 * difference between a datatypes being mutable or immutable and how they are 
 * copied has to do with the amount of space each takes up in memory. Simple 
 * datatypes have a fixed finite amount of space it has in memory so they just 
 * aren't big enough in size to aggreate other datatypes. While complex data 
 * types on the other hand, are indefinite in size, and can grow beyond the 
 * size of the variable. 
 * 
 * 2. As explained above, simple datatypes are immutable and complex datatypes
 * are mutable. This is important becuase this also determines how each datatype
 * is copied. Since simple datatypes are so small in memory, and variables themselves
 * have a fixed amount of space in memory, when trying to reference a variable with 
 * a simple datatype you get the actual value that is inside of that variable at 
 * run time. Complex datatypes on the otherhand are indefinite in size, which 
 * goes beyond the size and variable can hold, you have to point to WHERE a complex
 * datatype is in memory rather than trying to reference all of the values that may
 * be aggreated inside. This distinction is extremely important to understand 
 * when dealing with data in your code. 
 * 
 * 3. Simple datatypes include:
 *      3a. Numbers: Numbers are any numeric data in mathematics.
 * 
 *