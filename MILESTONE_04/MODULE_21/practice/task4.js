const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(mobiles) {
  let quantity = 0;
  let sum = 0;
  if (Array.isArray(mobiles) === true) {
    for (const mobile of mobiles) {
      sum += mobile.price;
      quantity += 1;
    }
    const average = sum / quantity;
    return average;
  } else {
    return "Please provide an Array!!!";
  }
}

console.log(parseFloat(findAveragePhonePrice(phones).toFixed(2)));
