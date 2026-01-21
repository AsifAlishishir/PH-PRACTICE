// 1. Reversing a string using for of loop

// const sentence = "I am learning web dev.";
// let reverse = "";
// for (const letter of sentence) {
//   reverse = letter + reverse;
// }
// console.log(reverse);

// 2. Reversing a String using split(), reverse(), join() method
const sentence = "I am learning web dev.";
console.log(sentence.split("").reverse().join(""));
