function solve(arr) {
    let sort = '';
    let rotated = '';
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            sort = 'A';
        } else if (arr[i] > arr[i + 1]) {
            sort = 'D';
        }
    }
    return 'RA';
}