/// C. Give me Five
/*
  - For the numbers 0 - 100, print out "I found a {number}. High five!" if the number is a multiple of five
  - Add to the code from above to print out "I found a {number}. Three is a crowd" if the number is a multiple of three
  - For numbers divisible by both three and five, be sure your code prints both messages
*/
for(let i = 0; i <= 100; i++)
{
  if(i % 3 === 0)
    console.log(`I found a ${i}. Three is a crowd`);
  if(i % 5 === 0)
    console.log(`I found a ${i}. High five!`); // 0 is a multiple of all numbers.
}
