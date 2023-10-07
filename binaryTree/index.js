import Node from "./Node.js";

const rootNode = new Node();
const tree = new Node();
tree.insert(9);
tree.insert(4);
tree.insert(17);
console.log(tree);
console.log(tree.getKey());
