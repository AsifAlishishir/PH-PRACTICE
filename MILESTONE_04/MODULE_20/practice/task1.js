function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

const result = celsiusToFahrenheit(40);
console.log(result);
