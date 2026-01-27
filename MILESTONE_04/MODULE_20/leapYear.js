function leapYear(year) {
  if ((year % 100 !== 0 && year % 4 === 0) || year % 4 === 0) {
    return year + " is a Leap Year";
  } else {
    return year + " is not a Leap Year";
  }
}

console.log(leapYear(2200));
