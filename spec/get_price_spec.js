'use strict';
let getPrice = require("../src/get_price.js");
describe('get price', () => {
  it('should get the price and name of the dish', () => {
    let input = [{
      id: "ITEM0001",
      num: 1
    }, {
      id: "ITEM0013",
      num: 2
    }, {
      id: "ITEM0022",
      num: 1
    }];
    let result = getPrice(input);
    expect(result).toEqual([{
      id: "ITEM0001",
      num: 1,
      price: 18,
      name: "黄焖鸡"
    }, {
      id: "ITEM0013",
      num: 2,
      price: 12,
      name: "肉夹馍"
    }, {
      id: "ITEM0022",
      num: 1,
      price: 8,
      name: "凉皮"
    }]);
  });
});