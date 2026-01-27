let zero = 0;
function count_zero(strings) {
  for (const str of strings) {
    if (str === "0") {
      zero += 1;
    }
  }
  return ("Total zero in this string is: ", zero);
}

console.log(count_zero("01001010010110110011000"));
