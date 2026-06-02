// function maxInThree(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// const num1 = 111;
// const num2 = 22;
// const num3 = 3;
// console.log("The biggest number is : ", maxInThree(num1, num2, num3));

// function lowestInArray(array) {
//   let small = array[0];
//   for (let arr of array) {
//     if (arr < small) {
//       small = arr;
//     }
//   }
//   return small;
// }

// const points = [5, 5, 2, 0, 65, 23, 97];
// console.log("The lowest number in the array is: ", lowestInArray(points));

// const products = [
//   { name: "shampoo", price: 300, quantity: 2 },
//   { name: "chiruni", price: 100, quantity: 0 },
//   { name: "shirt", price: 400, quantity: 4 },
//   { name: "pant", price: 500, quantity: 2 },
// ];

// function cartTotal(products) {
//   let sum = 0;
//   for (const product of products) {
//     let thisProductCost = product.price * product.quantity;
//     sum += thisProductCost;
//   }
//   return sum;
// }

// console.log("The total cost is: ", cartTotal(products));

// task 01 ---------------------------------
// const heights2 = [167, 190, 120, 165, 137];

// function lowestNumberInArray(array) {
//   let low = array[0];
//   for (let arr of array) {
//     if (arr < low) {
//       low = arr;
//     }
//   }
//   return low;
// }

// console.log("The lowest number is : ", lowestNumberInArray(heights2));

// task 02------------------------------

// const heights2 = ["rahim", "robin", "ra", "ron", "rashed"];

// function smallestName(array) {
//   if (Array.isArray(array) === false) {
//     return "Please provide an array!";
//   } else {
//     let small = array[0];
//     for (let arr of array) {
//       if (arr.length < small.length) {
//         small = arr;
//       }
//       // console.log(arr.length);
//     }
//     return small;
//   }
// }
// console.log(smallestName(5));
// console.log("The smallest name is:", smallestName(heights2));

// task 03 --------------------------

// function calculateElectronicsBudget(
//   laptopQuantity,
//   tabletQuantity,
//   mobileQuantity,
// ) {
//   const laptopPrice = 35000;
//   const tabletPrice = 15000;
//   const mobilePrice = 20000;

//   const totalLaptopPrice = laptopPrice * laptopQuantity;
//   const totalTabletPrice = tabletPrice * tabletQuantity;
//   const totalMobilePrice = mobilePrice * mobileQuantity;

//   const totalPrice = totalLaptopPrice + totalMobilePrice + totalTabletPrice;

//   return totalPrice;
// }

// const laptop = 2;
// const tablet = 2;
// const mobile = 1;

// console.log(
//   "The total cost is:",
//   calculateElectronicsBudget(laptop, tablet, mobile),
// );

// task 04------------------------

// const phones = [
//   { model: "PhoneA", brand: "Iphone", price: 95000 },
//   { model: "PhoneB", brand: "Samsung", price: 40000 },
//   { model: "PhoneC", brand: "Oppo", price: 26000 },
//   { model: "PhoneD", brand: "Nokia", price: 35000 },
//   { model: "PhoneE", brand: "Iphone", price: 105000 },
//   { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function findAveragePhonePrice(array) {
//   let sum = 0;
//   let count = array.length;

//   for (let arr of array) {
//     sum += arr.price;
//   }
//   //   console.log(sum);
//   let average = sum / count;
//   return parseFloat(average.toFixed(2));
// }

// console.log(findAveragePhonePrice(phones));

// task 05------------------------

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function salaryCalculator(array) {
  let sum = 0;
  for (const arr of array) {
    let totalIncrementSalary = arr.experience * arr.increment;
    let totalSalary = arr.starting + totalIncrementSalary;
    sum += totalSalary;
  }
  return sum;
}

console.log(salaryCalculator(employees));
