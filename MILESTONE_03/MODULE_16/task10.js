let str = "asif ali shishir";

let newStr = str
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(str);
console.log(newStr);
