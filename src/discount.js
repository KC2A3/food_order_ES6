function discount(order) {
  let totalPrice = 0;
  for (let i = 0; i < order.length; i++) {
    totalPrice += order[i].price * order[i].num;
  }
  if (totalPrice >= 30) {
    totalPrice -= 6;
  }
  return totalPrice;
}
module.exports = discount;