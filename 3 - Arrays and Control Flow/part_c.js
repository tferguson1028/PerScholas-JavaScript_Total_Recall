///C. Accessing elements
/*
  Given the following array const randomThings = [1, 10, "Hello", true]
  Q: How do you access the 1st element in the array?
  A: To access the first element, use the access operator "[int #]" starting with 0 as the first element
    randomThings[0];
  
  - Change the value of "Hello" to "World"
  - Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
*/

const randomThings = [1, 10, "Hello", true];
randomThings[2] = "World";
console.log(randomThings[2]);



