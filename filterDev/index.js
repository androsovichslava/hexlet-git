function sameParity(arr) {
    const [first, ...rest] = arr;
    const dev = Math.abs(first % 2);
    const filtered = rest.filter(elem => Math.abs(elem % 2) === dev);
    return [first, ...filtered];
}

console.log(sameParity([-1, 0, 1, -3, 10, -2]))