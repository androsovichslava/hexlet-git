import Random from "./Random.js";
const rand1 = new Random(100);

console.log(rand1);
console.log(rand1.getNext());
console.log(rand1.getNext());
console.log(rand1.getNext());

console.log(rand1.reset());
console.log(rand1.getNext());
console.log(rand1.getNext());
