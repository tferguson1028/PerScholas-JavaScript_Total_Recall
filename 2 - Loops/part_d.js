///D. Savings account
/*
  - Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
  - Check your work! Your bank_account should have $55 in it.
  - You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
  - Check your work! Your bank_account should have $10,100 in it.
*/


let bank_account = 0;
for(let i = 0; i <= 10; i++)
  bank_account += i;
  
console.log(bank_account);

bank_account = 0; // This wasn't stated but the expected output implies this.
for(let i = 1; i <= 100; i++)
  bank_account += i*2;

console.log(bank_account);
  
