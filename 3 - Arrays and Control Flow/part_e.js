/// E. Mix It Up
/*
  Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

  Given the following array: const myArray = [5, 10, 500, 20]
  - Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
  - Remove the 5from the beginning of the array.
  - Add the string "Bob Marley" to the beginning of the array.
  - Remove the string of your choice from the end of the array.
  Q: Reverse this array using Array.prototype.reverse(). 
    1. Did you mutate the array?
    A: .reverse() does mutate the array as JS arrays are mutable.
    
    2. What does mutate mean?
    A. Mutate means that the data structure itself can be changed, meaning it's memory allocation is dynamic. 
        For example, JS String are immutable, so any time a string is changed, under the hood it's actually
        giving back a brand new string and the previous one is deallocated. Since arrays are mutable 
        their contents and size can be dynamically allocated, meaning you can change them freely.
        
    3. Did the .reverse() method return anything?
    A. .reverse() returned the reversed array.
*/

const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("of your choice");
myArray.unshift("Bob Marley");
myArray.pop();
let a = myArray.reverse();

/* Hypothesis
  From what I know, this method does not mutate the array as arrays are immutable,
  it creates a duplicate array with the elements
  reversed, and returns that. The original array should be the same.
*/

console.log(a);
console.log(myArray);

/* Answer
  I was wrong. JS arrays are mutable, so it does mutate the array.
  However, reverse also returns the reversed array.
*/
