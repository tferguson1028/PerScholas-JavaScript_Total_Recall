/// E. getTwoLengths
/*
  Write a function getTwoLengths that accepts two parameters (strings). 
  The function should return an array of numbers where each number
  is the length of the corresponding string.
*/

console.log(getTwoLengths("Hank", "Hippopopalous"));
function getTwoLengths(string1, string2)
{
  let retArr = [];
  retArr.push(string1.length);
  retArr.push(string2.length);
  return retArr;
}
