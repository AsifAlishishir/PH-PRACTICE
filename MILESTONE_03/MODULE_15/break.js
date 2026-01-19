// for (let i = 0; i < 10; i++) {
//   if (i >= 5) {
//     break;
//   }
//   console.log(i);
// }

// Write a loop 1 to 200. Use break to exit the loop once you find 100.

// for (let i = 1; i <= 100; i++) {
//   if (i === 100) {
//     break;
//   }
//   console.log(i);
// }

// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

// let i = 1;
// let sum = 0;
// while (i >= 1) {
//   sum += i;
//   if (sum >= 100) {
//     break;
//   }
//   i++;
//   console.log(sum);
// }

// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (let i = 1; i <= 100; i++) {
  let square = i * i;
  if (square !== 1) {
    console.log(square);
    break;
  }
}
