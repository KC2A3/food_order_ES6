let loadPromotions = require("promotions");

function halfPrice(order) {
  let orderList = loadPromotions();
  for (let half of order) {
    if (half.id === orderList[1].items[0] || half.id === orderList[1].items[1]) {
      half.price = half.price / 2;
    }
  }
  let totalPrice = 0;
  for (let i = 0; i < order.length; i++) {
    totalPrice += order[i].price * order[i].num;
  }
  return totalPrice;
}
module.exports = halfPrice;