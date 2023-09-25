function calculateSum(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % 3 === 0) {
            sum += inputArray[i];
        }
    }
    return sum;
}