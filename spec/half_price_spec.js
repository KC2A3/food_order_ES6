'use strict';
let halfPrice = require("../src/half_price.js");
describe('half price', () => {
  it('should get the discount price of half sale', () => {
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
    expect(result).toEqual(37);
  });
  it('should get the discount price of half sale', () => {
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
    expect(result).toEqual(50);
  });
});