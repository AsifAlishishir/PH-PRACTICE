// const person = {
//   name: "Asif",
//   age: 22,
//   country: "Bangladesh"
// };

// // সাধারণভাবে
// // const name = person.name;
// // const age = person.age;

// // Destructuring দিয়ে
// const {name, age, country} = person;

// console.log(name); // Asif
// console.log(age);  // 22
// console.log(country); // Bangladesh

const person = { name: "Asif", age: 22 };

const { name: fullname, age: boyos } = person;
console.log(fullname, boyos);

const details = {name:'asif', age:22};
const {name:nam, age:boyosh} = details;
const newDetails = {nam, boyosh};
console.log(newDetails); // {nam: 'asif', boyosh: 22}
