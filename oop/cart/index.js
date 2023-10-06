import Cart from "./Cart.js";
const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);


cart.getItems().length; // 2
console.log(cart.getItems())
console.log(cart.getCost()); // 35
cart.getItems();
console.log(cart.getCount())