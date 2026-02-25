// function sum(...numbers) {
//   console.log(numbers);
// }

// sum(1, 2, 3, 4);
const { name, ...rest } = { name: "Asif", age: 21, country: "BD" };

console.log(name); // Asif
console.log(rest); // { age: 21, country: "BD" }
