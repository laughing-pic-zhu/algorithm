function binarySearch(origin, key) {
    function search(array, k) {
        const binary = Math.round(array.length / 2);
        const start = array.slice(0, binary);
        const end = array.slice(binary);
        if (array.length === 1) {
            if (array[0] === k) {
                console.log(k)
            } else {
                console.log('cannot find');
            }
            return;
        }
        if (array[binary] === k) {
            console.log(k)
        } else if (array[binary] > k) {
            search(start, k)
        } else {
            search(end, k)
        }
    }

    search(origin, key);

}

const arr = [1, 3, 4, 5, 6, 8, 9, 12];
binarySearch(arr, 12);

module.exports = binarySearch;