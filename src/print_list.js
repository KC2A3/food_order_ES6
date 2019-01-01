function printList(list, promotion, originalPrice, totalPrice) {
  let promotionList;
  let discountedPrices = originalPrice - totalPrice;
  for (let half of list) {
    if (half.id === promotion[1].items[0] || half.id === promotion[1].items[1]) {
      promotionList += half.name;
    }
  }
  let receipt = '============= 订餐明细 =============\n';
  for (let item of list) {
    let itemOfList = item.name + ' x ' + item.count + ' = ' + item.subtotal + '元\n';
    receipt += itemOfList;
  }
  receipt += '-----------------------------------\n';
  if (!promotion.items) {
    receipt += '使用优惠:\n' + promotion.type + '，省6元\n';
  } else {
    receipt += '使用优惠:\n' + promotion.type + promotionList + '，省' + discountedPrices + '元\n'
  }
  receipt += '-----------------------------------\n';
  receipt += '总计：' + totalPrice + '元\n';
  receipt += '===================================';
  return receipt;
}