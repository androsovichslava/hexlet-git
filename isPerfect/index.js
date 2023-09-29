const isPerfect = (number) => {
    let sumDividers = 0;
    debugger
    for (let i = 1; i <= number / 2; i += 1) {
        if (number % i === 0) {
            sumDividers += i;
        }
        console.log(sumDividers, i)
    }
    return sumDividers === number;
}

console.log(isPerfect(6))
console.log(isPerfect(7))