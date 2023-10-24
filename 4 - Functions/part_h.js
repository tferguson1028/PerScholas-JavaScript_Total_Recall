/// H. printLongestWord
/*
  Write a function printLongestWord that accepts a single argument, an array of strings.
  The method should return the longest word in the array. In case of a tie, the method
  should return the word that appears first in the array.
*/

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

function printLongestWord(strArr)
{
  let longest = "";
  for(let str of strArr)
    if (str.length > longest.length)
      longest = str;
  
  return longest;
}
