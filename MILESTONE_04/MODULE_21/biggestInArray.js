// function bigger(numbers) {
//   let big = 0;
//   for (const num of numbers) {
//     if (num > big) {
//       big = num;
//     }
//   }
//   return big;
// }
// const points = [5, 5, 2, 99, 65, 23, 97];
// console.log("The biggest number is:", bigger(points));

function smaller(numbers) {
  let small = numbers[0];
  for (const num of numbers) {
    if (num < small) {
      small = num;
    }
  }
  return small;
}
const points = [5, 5, 2, 1, 65, 23, 97];
console.log("The smallest number is:", smaller(points));
