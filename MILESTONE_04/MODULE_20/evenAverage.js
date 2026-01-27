function evenAverage(numbers) {
  const odds = [];
  let sum = 0;
  for (const num of numbers) {
    if (num % 2 === 0) {
      odds.push(num);
      sum += num;
    }
  }
  const total = odds.length;
  const result = sum / total;
  console.log("The even numbers are: ", odds);
  console.log("and the sum is: ", total);
  return result;
}

const number = [12, 53, 21, 63, 55, 88, 24, 61];
const avg = evenAverage(number);
console.log("The average of even numbers are: ", parseFloat(avg.toFixed(2)));
