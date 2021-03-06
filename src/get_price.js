let loadAllItems = require("items.js");

function getPrice(order) {
  let item = loadAllItems();
  for (let numbering of order) {
    for (let price of item) {
      if (numbering.id === price.id) {
        numbering.price = price.price * numbering.num;
        numbering.name = price.name;
      }
    }
  }
  return order;
}
module.exports = getPrice;