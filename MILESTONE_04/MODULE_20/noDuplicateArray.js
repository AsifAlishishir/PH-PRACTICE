const biriyaniKhor = ["asif", "shishir", "asif", "ali", "ali", "mili"];

function duplicate(names) {
  const unique = [];
  for (const name of names) {
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique.sort();
}

const result = duplicate(biriyaniKhor);
console.log(result);
