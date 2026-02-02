function longestWord(string) {
  let bigger = "";
  const sentence = string.split(" ");
  for (const word of sentence) {
    if (word.length > bigger.length) {
      bigger=word
    }
  }
  return bigger;
}

const output = longestWord("Asif Ali Shishir");
console.log(output);
