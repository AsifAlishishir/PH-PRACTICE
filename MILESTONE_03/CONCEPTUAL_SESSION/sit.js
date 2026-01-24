let totalRows = 30;
let income = 0;
for (let i = 1; i <= totalRows; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log("Row " + i + "- Primium Row");
    income += 800;
  } else {
    console.log("Row " + i + "- Normal Row");
    income += 500;
  }
}
console.log(income);
