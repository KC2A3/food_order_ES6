function discountPrice(one, two) {
  let price;
  let orderList = loadPromotions();
  if (one > two) {
    price = one;
  } else {
    price = two;
  }
  return price;
}
module.exports = discountPrice;