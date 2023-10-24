/// A. Q & A
/*
  Q: How do we assign a value to a variable?
  A: Define a new variable and assign a value with the "=" sign. 
*/
let a = 0;

/*    
  Q: How do we change the value of a variable?
  A: Variables can be changed by reassigning them.
     Use the "=" operator on an already defined variable or use a shorthand like ++ or --.
*/
a = "value";
a = a + 6;
a += 5; // Is actually a = a + 5; under the hood
a++; // Is actually a = a + 1; under the hood
a--; // Is actually a = a - 1; under the hood

/*    
  Q: How do we assign an existing variable to a new variable?  
  A: Define a new variable and the preexisting variable to it with the "=" operator.
*/
let b = a;

/*
  Q: Remind me, what are declare, assign, and define?
  A: Declare creates a new variable without any value, assign puts a value onto the variable, define is initializing a variable on declaration.
*/

let c; // Declaration
c = 6; // Assignment
let d = 6; // Defining 
  
/*
  Q: What is pseudocoding and why should you do it?
  A: Creating a human readable template that looks like code so it can be implemented as actual code
     later in development. This helps outline the logic and structure of code before having to write
     it so any mistakes can be caught before creating a program. I also allows developers to write
     code in different languages using a similar template if need be. 
*/

/*  
  Q: What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
  A: 90% Thinking, 10% Coding. That's what Google taught me.
*/
