export const getTotal = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;
  for (let { amount, price } of cart.values()) {
    // console.log(amount, price);
    totalAmount += amount;
    totalCost += price * amount;
  }
  return { totalAmount, totalCost };
};
