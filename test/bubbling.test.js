const array = [7, 6, 14, 12, 9, 43, 34, 3, 8, 4, 2, 1,];
const bubbling = require('../src/bubbling');

test('test bubbling', () => {
    expect(bubbling(array)).toEqual([1, 2, 3, 4, 6, 7, 8, 9, 12, 14, 34, 43])
});