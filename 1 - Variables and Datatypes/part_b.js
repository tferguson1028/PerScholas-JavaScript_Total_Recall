/// B. Strings
/*
  - Create a variable called firstVariable
  - Assign it the value of the string "Hello World"
  - Change the value of this variable to some number
  - Store the value of firstVariable in a new variable called secondVariable
  - Change the value of secondVariable to any string.
  - What is the value of firstVariable?
    A: 50 based on my code.
    
  - Create a variable called yourName and set it equal to your name as a string.
    Then, write an expression that takes the string "Hello, my name is " and the
    variable yourName so that it returns a new string with them concatenated.
  ex: Hello, my name is Jean Valjean
*/

let firstVariable;
firstVariable = "Hello World";
firstVariable = 50;
let secondVariable = firstVariable;
secondVariable = "any string";

console.log(firstVariable); // Should be 50 since as far as I know vars in JS aren't pointers.
console.log(secondVariable);

let yourName = "Tesean Ferguson";
console.log("Hello, my name is " + yourName);
