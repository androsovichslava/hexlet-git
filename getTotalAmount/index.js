const money2 = [
    'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'
];

function getTotalAmount(money, currency) {
    let sum = 0;
    for (const elem of money) {
        if (elem.slice(0, 3) === currency) {
            const amount = parseInt(elem.split(' ')[1]);
            sum += amount;
            // console.log(elem, parseInt(elem))
        }
    }
    return sum;
}
console.log(getTotalAmount(money2, 'eur'))