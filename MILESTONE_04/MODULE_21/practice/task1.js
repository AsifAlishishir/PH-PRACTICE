const heights2 = [167, 190, 120, 165, 137];

function lowest(numbers) {
  let low = numbers[0];
  if (Array.isArray(numbers) === true) {
    for (const num of numbers) {
      if (num < low) {
        low = num;
      }
    }
  }
  return low;
}

console.log("Lowest number is: ", lowest(heights2));
