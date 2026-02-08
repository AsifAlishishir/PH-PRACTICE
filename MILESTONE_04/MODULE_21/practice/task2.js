const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallest(names) {
  let small = names[0];
  if (Array.isArray(names) === true) {
    for (const name of names) {
      if (name.length < small.length) {
        small = name;
      }
    }
    return small;
  } else {
    return "Please provide an Array!";
  }
}

console.log(smallest(heights2));
