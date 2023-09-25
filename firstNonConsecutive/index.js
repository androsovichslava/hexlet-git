function solution(number) {
    let resultArr = [];
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) resultArr.push(i);
    }
    console.log(resultArr);
    return resultArr.reduce((a, c) => c + a, 0);

}

console.log(solution(1000));