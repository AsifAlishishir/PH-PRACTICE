function sumOfNumbers(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

const nums = [1, 2, 3, 4];
const sum = sumOfNumbers(nums);
console.log("Sum of numbers is: ", sum);
