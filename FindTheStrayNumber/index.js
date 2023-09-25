function stray(numbers) {
    let first = numbers[0];
    let second = numbers[1];
    let third = numbers[2];
    let equalElem;
    debugger
    if ((first === second) || (first === third)) {
        equalElem = first;
    } else {
        equalElem = second;
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== equalElem) {
            return numbers[i];
        }
    }

}

console.log(stray([1, 2, 1]))
console.log(stray([1, 1, 2]))
console.log(stray([2, 1, 1]))