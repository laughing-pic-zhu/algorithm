const array1 = [7, 6, 14, 12, 9, 43, 34, 3, 8, 4, 2, 1,];

const array2 = [35, 7, 8, 4, 2, 4, 55, 67, 23, 11, 34, 67, 98, 56, 91, 45, 65, 57, 89];
const quickSort = require('../src/quickSort');


test('test quickSort', () => {
    expect(quickSort(array1)).toEqual([1, 2, 3, 4, 6, 7, 8, 9, 12, 14, 34, 43])
    expect(quickSort(array2)).toEqual([ 2, 4, 4, 7, 8, 11, 23, 34, 35, 45, 55, 56, 57, 65, 67, 67, 89, 91, 98 ])
});