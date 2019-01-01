function originalPrice(order) {
  let totalPrice = 0;
  for (let i = 0; i < order.length; i++) {
    totalPrice += order[i].price * order[i].num;
  }
  return totalPrice;
}
module.exports = originalPrice;