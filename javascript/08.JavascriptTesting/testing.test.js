const {default: TestRunner} = require("jest-runner");
const sumTwoNumbers = require('./testing');

test("adds the two numbers", ()=> 
    expect(sumTwoNumbers(3,4)).toBe(7)
);