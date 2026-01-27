const numbers = [33, 1, 2, 10, 28, 5, 9];
console.log(numbers.sort())
const sorted_numbers = numbers.sort(function (a, b) {
  return a - b;
});
console.log(sorted_numbers);

const sorted = numbers.sort(function (a, b) {
  return b - a;
});
console.log(sorted);
