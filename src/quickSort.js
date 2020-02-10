function quickSort(array) {
    const sort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) return;
        const key = arr[left];
        let i = left;
        let j = right;
        while (i < j) {
            while (i < j && arr[j] > key) {
                j--;
            }
            arr[i] = arr[j];
            while (i < j && arr[i] <= key) {
                i++;
            }
            arr[j] = arr[i];
        }
        arr[i] = key;
        sort(arr, left, i - 1);
        sort(arr, i + 1, right);
        return arr;
    };
    const temp = [...array];
    return sort(temp);
}

module.exports = quickSort;
