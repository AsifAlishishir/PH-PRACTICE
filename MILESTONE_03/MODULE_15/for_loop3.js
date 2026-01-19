// Display sum of all the odd numbers from 91 to 129.

let sum = 0;
for (let num = 91; num <= 129; num++) {
  if (num % 2 != 0) {
    sum += num;
  }
}
console.log(sum);  // → 2860

// console.log(typeof let);          // should be "undefined" in JS
// console.log( (91 + 129) * 10 );   // 2200 in JS, error in Python