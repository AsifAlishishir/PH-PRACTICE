const products = [
  { name: "shampoo", price: 300, quantity: 2 },
  { name: "chiruni", price: 100, quantity: 3 },
  { name: "shirt", price: 400, quantity: 4 },
  { name: "pant", price: 500, quantity: 2 },
];

function cartTotal(products) {
  // console.log(expense);
  let total = 0;
  for (const product of products) {
    let thisProductCost = product.price * product.quantity;
    total += thisProductCost;
  }
  return total;
}

const expense = cartTotal(products);
console.log("Total Cost:", expense);
