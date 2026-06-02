// function inchToFeet(inch) {
//   let remainingFeet = parseInt(inch / 12);
//   const remainingFractionInch = parseFloat(inch % 12);

// //   console.log(remainingFeet, remainingFractionInch);
//     const result = remainingFeet + " feet " + remainingFractionInch + " inch ";
//     return result;
// }

// console.log(inchToFeet(75));

// function leapYear(year) {
//   if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
//     return year + " is a leap year";
//   } else {
//     return year + " is a leap year";
//   }
// }

// console.log(leapYear(2012));

// function avgOfOddNumbers(numbers) {
//   let sum = 0;
//   let count = 0;
//   for (let num of numbers) {
//     if (num % 2 !== 0) {
//       sum += num;
//       count++;
//     }
//   }
//   let result = sum / count;
//   return result;
// }

// const numbers = [42, 13, 58, 65, 81, 96, 7, 5];
// const avg = avgOfOddNumbers(numbers);
// console.log("Average of the odd numbers is: ", avg);

// const biriyaniKhor = ["asif", "shishir", "asif", "ali", "ali", "mili"];

// const array = [1, 2, 3, 4, 5, 6];
// console.log(Math.min(array));
// console.log(Math.max(2,5,6,9,78,5));

// console.log(new Date());
// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.toDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString("en-GB"));
// const time = Date.now();
// console.log(time);

// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a, b);  // Output: 10 5

// function celsiusToFarhenheit(celsius) {
//   let fahrenhiet = (celsius * 9) / 5 + 32;
//   return fahrenhiet;
// }
// console.log(celsiusToFarhenheit(36));

// function countRepeat(array, number) {
//   let count = 0;
//   for (let arr of array) {
//     // console.log(arr);
//     if (arr === number) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countRepeat([5, 6, 11, 5, 5, 5, 5, 12, 98, 5], 115));

// function countVowel(sentence) {
//   let count = 0;
//   for (let letter of sentence) {
//     // console.log(letter);
//     if (
//       letter.toLowerCase() === "a" ||
//       letter.toLowerCase() === "e" ||
//       letter.toLowerCase() === "i" ||
//       letter.toLowerCase() === "o" ||
//       letter.toLowerCase() === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowel("ASIF ALI SHISHIR"));

// let number = Math.floor(Math.random() * 11 + 10);
// console.log(number);

// function longestWord(string) {
//   let asif = string.split(" ");
//   asif.join("-");
//   console.log(asif);
// }

// longestWord("asif ali shishir");

function findLongestWord(string) {
  let longestWord = "";
  let sentence = string.split(" ");
  for (let currentWord of sentence) {
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}

console.log(findLongestWord("I am learning Programming to become a programasdfasdmer"));
