function getSameParity(inputArray) {
    if (!Array.isArray(inputArray) || inputArray.length === 0) return [];
    let reminder = Math.abs(inputArray[0] % 2);
    let result = [];
    for (const elem of inputArray) {
        if (Math.abs(elem % 2) === reminder) {
            result.push(elem);
        }
    }
    return result;
}

console.log(getSameParity([1, 2, 3, 4, 5, -7]))