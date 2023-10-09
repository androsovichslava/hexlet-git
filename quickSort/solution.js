export default function solution(arr, sort) {
    const type = sort ?? 'asc';
    console.log(type)
    if (arr.length < 2) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (type === 'asc') {
            if (pivot > arr[i]) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        } else {
            if (pivot > arr[i]) {
                right.push(arr[i]);
            } else {
                left.push(arr[i]);
            }
        }
    }

    return solution(left, type).concat(pivot, solution(right, type));
}
