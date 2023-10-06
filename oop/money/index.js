import {Money}  from "./Money.js";

// const money1 = new Money(10.2);
// console.log((money1.exchangeTo('eur').getValue()));
// console.log((money1.exchangeTo('eur').getCurrency()));
// console.log((money1.exchangeTo('usd').getValue()));

// const money2 = new Money(200, 'eur');
// console.log((money2.getValue()));
// const money3 = money2.add(money1);
// console.log((money3.getValue()));
// const money4 = money1.add(money2);
// //console.log((money4.getValue()));
// console.log(money1.format())

const money1 = new Money(100);
// expect(money1.getValue()).toBe(100);
// expect(money1.exchangeTo('eur').getValue()).toBe(70);
// expect(money1.exchangeTo('eur').getCurrency()).toBe('eur');
// expect(money1.exchangeTo('usd').getValue()).toBe(100);
const money2 = new Money(200, 'eur');
// expect(money2.getValue()).toBe(200);
const money3 = money2.add(money1);
// expect(money3.getValue()).toBe(270);
// const money4 = money1.add(money2);
// expect(money4.getValue()).toBe(340);

// expect(money1.format()).toBe('$100.00');
// expect(money2.format()).toBe('€200.00');

// const money5 = new Money(10000);
// expect(money5.format()).toBe('$10,000.00');
console.log(money2)
console.log(money3)

const money6 = money3.add(money2);
console.log(money6);