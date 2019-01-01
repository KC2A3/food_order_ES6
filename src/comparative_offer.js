function comparativeOffer(one, two) {
  let promotion;
  let orderList = loadPromotions();
  if (one > two) {
    promotion = orderList[0];
  } else if (one < two) {
    promotion = orderList[1];
  } else {
    promotion = orderList[0];
  }
  return promotion;
}
module.exports = comparativeOffer;