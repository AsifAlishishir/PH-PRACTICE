function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity,
) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const totalLaptopCost = laptopQuantity * laptopPrice;
  const totalTabletCost = tabletQuantity * tabletPrice;
  const totalMobileCost = mobileQuantity * mobilePrice;

  const totalCost = totalLaptopCost + totalTabletCost + totalMobileCost;

  return totalCost;
}

const expense = calculateElectronicsBudget(1, 3, 4);
console.log(expense);
