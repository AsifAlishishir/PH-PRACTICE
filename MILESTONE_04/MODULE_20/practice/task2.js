function countDuplicate(array, number) {
  let temp = [];
  let count = 0;
  for (const num of array) {
    if (num === number) {
      temp.push(num);
      count += 1;
    }
  }
  return count;
}

const output = countDuplicate([1, 2, 3, 4, 5, 5, 5, 6], 25);
console.log(output);
