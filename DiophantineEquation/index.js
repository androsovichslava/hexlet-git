function solequa(n) {
    let result = [];
    for (let x = 0; x <= n; x++) {

        for (let y = 0; y <= n; y++) {
            if ((x - 2 * y) * (x + 2 * y) === n) result.push([x, y]);
        }
    }
    return result.reverse();
}

console.log(solequa(90005));