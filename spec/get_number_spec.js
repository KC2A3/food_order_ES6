'use strict';
let getNumber = require("../src/get_number.js");
describe('get number', () => {
  it('should separate quantity', () => {
    let input = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    let result = getNumber(input);
    expect(result).toEqual([{
      id: "ITEM0001 ",
      num: " 1"
    }, {
      id: "ITEM0013 ",
      num: " 2"
    }, {
      id: "ITEM0022 ",
      num: " 1"
    }])
  });
});