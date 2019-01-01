'use strict';
let loadAllItems = require("items.js");
let loadPromotions = require("promotions");
let getNumber = require("get_number.js");
let getPrice = require("get_price.js");
let originalPrice = require("original_price.js");
let discount = require("discount.js");
let halfPrice = require("half_price.js");
let comparativeOffer = require("comparative_offer.js");
let discountPrice = require("discount_price.js");
let printList = require("print_list.js");



let bestCharge = selectedItems => {
  let listNumber = getNumber(selectedItems);
  let listPrice = getPrice(listNumber);
  let original = originalPrice(listPrice);
  let full30 = discount(listPrice);
  let halfDiscount = halfPrice(listPrice);
  let choosePromotion = comparativeOffer(full30, halfDiscount);
  let discountPrice = discountPrice(full30, halfDiscount);
  return printList(listPrice, choosePromotion, original, discountPrice);
}
export default bestCharge;