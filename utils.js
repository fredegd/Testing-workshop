const sum = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const percentage = (a, b) => {
  return (a / b) * 100;
};

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

const fibonacci = (length) => {
  var sequence = [0, 1];
  if (length === 1) {
    return [0];
  } else if (length === 2) {
    return sequence;
  } else if (length > 2) {
    for (var i = 2; i < length; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  } else {
    return [];
  }
};

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
  percentage,
  factorial,
  fibonacci,
};
