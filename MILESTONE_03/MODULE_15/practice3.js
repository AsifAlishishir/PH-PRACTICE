// Display sum of all the odd numbers from 81 to 131.

let num = 81;
let sum = 0;
while (num <= 131) {
  if (num % 2 != 0) {
    console.log("This is a Odd number: ", num);
    sum += num;
  }
  num += 1;
}

console.log("The sum of all the odd numbers from 81 to 131 is: ", sum);
