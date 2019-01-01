'use strict';
let comparativeOffer = require("../src/comparative_offer.js");
describe('should get the plan of discount', () => {
  it('should get the plan of discount', () => {
    let input = (1, 2);
    let result = comparativeOffer(input);
    expect(result).toEqual({
      items: ["ITEM0001", "ITEM0022"]
      type: "指定菜品半价"
    });
  });
  it('should get the plan of discount', () => {
    let input = (2, 1);
    let result = comparativeOffer(input);
    expect(result).toEqual({
      type: "满30减6元"
    });
  });
});