const sentence = "The quick brown fox jumps over the lazy dog";
if (
  sentence.includes("a") &&
  sentence.includes("e") &&
  sentence.includes("i") &&
  sentence.includes("o") &&
  sentence.includes("u")
) {
  console.log("This string contains all the vowels.");
} else {
  console.log("This string does not contains all the vowels.");
}
