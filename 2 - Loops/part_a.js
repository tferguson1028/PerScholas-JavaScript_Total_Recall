/// A. The basics
/*
  Write a loop that will print out all the numbers from 0 to 10, inclusive
  Write a loop that will print out all the numbers from 10 up to and including 400
  Write a loop that will print out every third number starting with 12 and going no higher than 4000
*/

for(let i = 0; i <= 10; i++) console.log(i);
console.log();
for(let i = 10; i < 401; i++) console.log(i);
console.log();
for(let i = 12; i <= 4000; i += 3) console.log(i);

/* Expected output

1
2
3
...
10

10
11
12
...
398
399
400

12
15
18
...
3993
3996
3999
*/
