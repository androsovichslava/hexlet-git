function fib(number) {
    if (number === 0) return 0;
    if (number === 1) return 1;
    return fib(number - 1) + fib(number - 2);
}
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(10));