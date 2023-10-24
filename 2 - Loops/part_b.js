/// B. Get even
/*
  Print out the numbers that are within the range of 1 - 100
  Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/

for(let i = 1; i <= 100; i++)
{
  let outString = String(i);
  if(i%2 === 0)
    outString += " <-- is an even number";
  console.log(outString);
}
