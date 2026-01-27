function inchToFeet(inch) {
  const feetFraction = inch / 12;
  const inchInt = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const height = inchInt + " feet " + inchRemaining + " inch.";
  return height;
}

const result = inchToFeet(75);
// console.log(result);

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
console.log(mileToKilometer(20).toFixed(2));
