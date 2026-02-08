const mobiles = [
  { name: "samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "nokia", price: 8000, camera: "5mp", color: "gray" },
  { name: "xiaomi", price: 15000, camera: "48mp", color: "blue" },
  { name: "iphone", price: 80000, camera: "24mp", color: "orange" },
  { name: "htc", price: 1000, camera: "8mp", color: "white" },
];

function cheapestPhone(phones) {
  // console.log(phones)
  let sosta = phones[0];
  for (const phone of phones) {
    if (phone.price < sosta.price) {
      sosta = phone;
    }
  }
  return sosta;
}

const cheap = cheapestPhone(mobiles);
console.log("The cheapest phone is:", cheap);
