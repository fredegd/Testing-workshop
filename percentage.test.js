const {percentage}= require('./utils');

test('properly calculate the percentage of a value', () => {
    expect(percentage(30, 100)).toBe(30);
}
);
