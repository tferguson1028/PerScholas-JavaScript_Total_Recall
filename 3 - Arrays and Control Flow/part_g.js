/// G. Monkey in the Middle
/*
  Write an if ... else if ... else statement:
  - console.log() little number if the number entered is less than 5.
  - If the number entered is more than 10, log big number.
  - Otherwise, log "monkey".
*/

let number = Math.floor(Math.random()*20);
if(number < 5)
  console.log("little number");
else if(number > 10)
  console.log("big number");
else
  console.log("monkey");



