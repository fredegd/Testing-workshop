const { fibonacci } = require("./utils");

test("properly calculate a fibonacci sequance, given a length", () => {
  // expect(fibonacci(13)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,89,144]);
  expect(fibonacci(0)).toEqual([]);
  expect(fibonacci(1)).toEqual([0]);
  expect(fibonacci(2)).toEqual([0, 1]);
  expect(fibonacci(3)).toEqual([0, 1, 1]);
});
