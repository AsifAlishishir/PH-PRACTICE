const mobile = {
  brand: "samsung",
  price: 25000,
  color: "black",
  camera: "12mp",
  isNew: true,
};

// console.log(mobile['brand']);
// const name = Object.keys(mobile);
// console.log(Object.values(mobile));

// for (const prop in mobile) {
//   console.log(prop,": ",mobile[prop]);
// }
const count = Object.entries(mobile).length;
console.log(count);
