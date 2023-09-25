function flatten(arr) {
    let result = [];
    for (const elem of arr) {
        // console.log(elem)
        if (Array.isArray(elem)) {
            result.push(...elem);
        } else {
            result.push(elem);
        }
    }
    return result;
}

console.log(flatten([1, [[2], [3]], [9]]))