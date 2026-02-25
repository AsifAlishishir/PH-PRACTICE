// function sum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // 6

const num = [1, 2, 3];
const numbers = [5, 6];

const New = [...num, 4, ...numbers];
console.log(New);
