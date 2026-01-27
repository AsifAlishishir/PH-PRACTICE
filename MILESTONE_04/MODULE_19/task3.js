let sum = 0;
let avg;
function make_avg(array, arraySize) {
  for (let arr of array) {
    sum += arr;
    avg = sum / arraySize;
  }
  return avg;
}

console.log(make_avg([10, 10, 10, 10, 10], 5));
