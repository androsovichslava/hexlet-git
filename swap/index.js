function swap(arr) {
    if (arr.length < 2) return arr;
    let first = arr[0];
    arr[0] = arr.at(-1);
    arr[arr.length - 1] = first;
    return arr;
}

console.log(swap([1, 2, 3, 4, 5]));