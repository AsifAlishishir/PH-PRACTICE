// const colors = ["red", "blue", "green", "yellow", "orange"];

// const reversedColors = [];

// for (let color of colors) {
//   reversedColors.unshift(color);
// }
// console.log(reversedColors);

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];
// for (let num of numbers) {
//   if (num % 2 === 0) {
//     evenNumbers.push(num);
//   }
// }
// console.log(evenNumbers);

// var numbers = ["Tom", "Tim", "Tin", "Tik"];
// var number = "";

// for (let num of numbers) {
//   number += num;
// }
// console.log(number);

// const statement = "I am a hard working person";
// let str = "";
// const result = statement.split(" ");

// for (let res of result) {
//   str = res +" "+ str ;
// }
// console.log(str);

// const first = [1, 2, 3];
// const second = [...first];
// second[0] = 99;
// console.log(first);
// console.log(second);

// const object = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 },
// ];

// for (let obj of object) {
//   console.log(obj.name, "scored", obj.marks);
// }

const twoArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
twoArray[1][0] = 99;
console.log(twoArray);
