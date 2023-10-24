/// D. isVowel
/*
  Write a function isVowelthat takes a character (i.e. a string of length 1)
  and returns true if it is a vowel, false otherwise.
  The vowel could be upper or lower case. Test your function on every vowel and
  make sure it's working. In general, when you write functions, take a minute to test them
  with different values to make sure they behave the way you want.
*/

console.log(isVowel("a"));
console.log(isVowel("A"));
console.log(isVowel("e"));
console.log(isVowel("E"));
console.log(isVowel("i"));
console.log(isVowel("I"));
console.log(isVowel("o"));
console.log(isVowel("O"));
console.log(isVowel("u"));
console.log(isVowel("U"));
console.log(isVowel("Uh"));
console.log(isVowel("j"));
console.log(isVowel("y"));
console.log(isVowel("sometimes y"));

function isVowel(char)
{
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // console.log(vowels);
  return char.length == 1 && typeof char == 'string' && vowels.indexOf(String(char).toLowerCase()) != -1;
}
