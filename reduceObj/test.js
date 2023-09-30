const obj = [
    {name: "Slava", age :50},
    {name: "Gena", age :50},
    {name: "Petya", age : 40}
];

const result = obj.reduce((acc, elem) => {
    console.log(acc)
    let key = elem[age];
    acc[key] = 1;
    return acc;
}, {})

console.log(result);