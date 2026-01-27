const statement = "I am a hard working person";
const array = statement.split(" ");
let result = "";
for (const state of array) {
  //   console.log(state);
  result = state + " " + result;
}
console.log(result.trim());
