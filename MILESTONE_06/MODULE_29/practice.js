// Create an arrow function that returns te sum of two numbers.
// const sum = (a, b) => a + b;
// console.log(sum(5, 4));

// Use an arrow function to double all elements of an array.

// 1. Store your name and age in variables.
// 2. Use a template string to create a sentence like: “My name is ___ and I am ___ years old.”

// let name = "asif";
// let age = 24;

// console.log(`My name is ${name} and I am ${age} year old.`);

// 1. Write a function that returns a greeting.
// 2. If no name is provided, the default should be “Friend”.

// function greeting(greet = "Friend") {
//   return `Greetings! ${greet}`;
// }

// console.log(greeting());

// Declare an array [10, 20, 30]. Use destructuring to store the first two elements in separate variables.
// const num = [10, 20, 30];
// const [first, second] = num;
// // console.log(first, second);

// const NewNum = [first, second];
// console.log(NewNum);

// Create an object {name: "Asif", age: 22}. Use destructuring to store name and age in separate variables.

// const obj = { name: "Asif", age: 22 };
// const { name, age } = obj;
// const nam = name;
// const boyos = age;
// console.log(nam, boyos);

// Merge two arrays [1,2,3] and [4,5] using the spread operator.

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];

// const newArr = [...arr1, ...arr2];
// console.log(newArr);

function sum(...numbers) {
  let total = 0;
  for (num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
