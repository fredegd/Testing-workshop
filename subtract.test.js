const {subtract} = require("./utils");

test("properly subtracting two numbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});
