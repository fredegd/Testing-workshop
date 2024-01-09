const { fibonacci } = require("./utils");

test("properly calculate a fibonacci sequance, given a length", () => {
  expect(fibonacci(7)).toBe([0, 1, 1, 2, 3, 5, 8]);
});
