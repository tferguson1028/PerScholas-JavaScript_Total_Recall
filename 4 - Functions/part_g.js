/// G. maxOfThree
/*
  Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
  If all numbers are the same, it doesn't matter which one is returned. 
  If the two largest numbers are the same, one of them should be returned. 
  Be sure to test it with larger values in each of the three locations.
*/

// Expected: should be 9 every time.
console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(9, 6, 1));
console.log(maxOfThree(6, 1, 9));
console.log(maxOfThree(6, 6, 9));
console.log(maxOfThree(6, 9, 9));
console.log(maxOfThree(6, 9, 6));
console.log(maxOfThree(9, 1, 9));

function maxOfThree(num1, num2, num3)
{
  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);
  
  // return num1 > num2  && num1 > num3 ? num1 : num2 > num3 ? num2 : num3; // lol this works
  
  if(num1 >= num2 && num1 >= num3)
    return num1
  if(num2 >= num1 && num2 >= num3)
    return num2;
  if(num3 >= num1 && num3 >= num2)
    return num3
  return num1 // Above should cover all bases 
}
