/// F. Biggie Smalls
/*
  Create a variable that contains an integer.

  Write an if ... else statement that:
  - console.log()s "little number" if the number is entered is less than 100
  - console.log()s big number if the number is greater than or equal to 100.
*/

let i = Math.floor(Math.random()*200);
if(i < 100)
  console.log("little numba");
else if( i >= 100)
  console.log("big numba");
else
  console.log("not a numba");
