// function names(name) {
//   console.log(name);
// }

// names('asif');

function numbers(a, b) {
  const sum = a + b;
  return sum;
}

// const result = numbers(5, 5);
// numbers(4, 5);
// // console.log(numbers(4,5));
// function greet(name) {
//     console.log("Hello, " + name);
// }

// var result = greet("Asif");
// console.log(result); // Output: undefined

function sumAll(...numbers) {
  for (let num of numbers) {
    console.log(num);
  }
}
sumAll(1, 2, 3, 4,5,6,8);
