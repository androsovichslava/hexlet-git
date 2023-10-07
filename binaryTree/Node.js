export default class Node {
  constructor(key) {
    this.key = key ? key : null;
    this.left = null;
    this.right = null;
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  insert(key) {
    if (this.key === undefined || this.key === null) {
      this.key = key;
    } else if (key < this.key) {
      if (this.left === null) {
        this.left = new Node(key);
      } else {
        this.left.insert(key);
      }
    } else if (key > this.key) {
      if (this.right === null) {
        this.right = new Node(key);
      } else {
        this.right.insert(key);
      }
    }
  }
}
