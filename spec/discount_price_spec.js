'use strict';
let discountPrice = require("../src/discount_price.js");
describe('half price', () => {
  it('should get the price of discount', () => {
    let input = (1, 2);
    let result = comparativeOffer(input);
    expect(result).toEqual(2);
  });
  it('should get the price of discount', () => {
    let input = (2, 1);
    let result = comparativeOffer(input);
    expect(result).toEqual(2);
  });
});