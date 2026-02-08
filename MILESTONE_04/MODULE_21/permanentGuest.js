function shopping(shirtQuantity, pantQuantity, shoeQuantity) {
  const shirtPrice = 500;
  const pantPrice = 300;
  const shoePrice = 1000;

  const shirtTotalPrice = shirtQuantity * shirtPrice;
  const pantTotalPrice = pantQuantity * pantPrice;
  const shoeTotalPrice = shoeQuantity * shoePrice;

  const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
  return totalPrice;
}
const items = shopping(4, 5, 2);
console.log("Total cost:", items);
