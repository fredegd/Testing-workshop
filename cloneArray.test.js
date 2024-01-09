const cloneArray = require('./cloneArray');

test('properly clones array', () => {
    const array = [1, 2, 3];
    // testing if it returns an array with the same values
    expect(cloneArray(array)).toEqual(array);
    //testing if it creates a copy of the array and not the same array
    expect(cloneArray(array)).not.toBe(array);
}   );