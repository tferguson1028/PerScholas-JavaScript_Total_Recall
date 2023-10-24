/// F. getMultipleLengths
/*
  Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
  The function should return an array of numbers where each number is the length of the corresponding string.
*/

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

function getMultipleLengths(strArr)
{
  let lenArr = [];
  for(let str of strArr)
    lenArr.push(String(str).length);
  return lenArr;
}
