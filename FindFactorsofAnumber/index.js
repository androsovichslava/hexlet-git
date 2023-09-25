function factors(x) {
    if (x < 1 || Math.floor(x) !== x) return -1;
    let divisors = [];

    for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
            divisors.push(i);
        }
    }

    return divisors.reverse();
}

console.log(factors(1));
console.log(factors(0));
console.log(factors(1.2));
console.log(factors(54));