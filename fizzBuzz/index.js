function fizzBuzz(begin, end) {
    if (begin > end) return;

    for (let i = begin; i <= end; i += 1) {
        let div3 = '';
        let div5 = '';
        if (i % 3 === 0) div3 = 'Fizz';
        if (i % 5 === 0) div5 = 'Buzz';
        if (div3 || div5) {
            console.log(`${div3}${div5}`);
        } else {
            console.log(i);
        }

    }
}

fizzBuzz(1, 20);