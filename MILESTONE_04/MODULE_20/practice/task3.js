function findVowel(strings) {
  let count = 0;
  const vowel = "aeiou";
  for (const letter of strings.toLowerCase()) {
    if (vowel.includes(letter)) {
      count += 1;
    }
  }
  return count;
}

const output = findVowel("Asif Ali Shishir");
console.log(output);
