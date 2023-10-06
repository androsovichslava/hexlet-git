import make from './rational.js';
const rat1 = make();
// console.log(rat1);
rat1.setNumer(3);
rat1.setDenom(8);
rat1.getNumer(); // 3
rat1.getDenom(); // 8
 
const rat2 = make(10, 3);

console.log(rat2)
console.log(rat1.add(rat2));