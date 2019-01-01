'use strict';
let discount = require("../src/discount.js");
describe('discount', () => {
  it('should get the discount price of 30-6', () => {
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
    let result = discount(input);
    expect(result).toEqual(44)
  });
  it('should get the discount price of 30-6', () => {
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
    let result = discount(input);
    expect(result).toEqual(70);
  });
});