'use strict';
let originalPrice = require("../src/original_price.js");
describe('get number', () => {
  it('should get the total price', () => {
    let input = [{
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
    }];
    let result = originalPrice(input);
    expect(result).toEqual(50);
  });
  it('should get the total price', () => {
    let input = [{
      id: "ITEM0001",
      num: 2,
      price: 18,
      name: "黄焖鸡"
    }, {
      id: "ITEM0013",
      num: 2,
      price: 12,
      name: "肉夹馍"
    }, {
      id: "ITEM0022",
      num: 2,
      price: 8,
      name: "凉皮"
    }];
    let result = originalPrice(input);
    expect(result).toEqual(76);
  });
});