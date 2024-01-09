const { factorial } = require("./utils");

test("properly calculate the factorial of a value", () => {
  expect(factorial(5)).toBe(120);
});
