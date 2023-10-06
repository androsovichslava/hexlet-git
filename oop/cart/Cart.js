// @ts-check

// import _ from 'lodash';

// BEGIN (write your solution here)
export default class Cart {
  constructor () {
    this.items = [];
  }
  addItem(item, count) {
    this.items.push({item, count})
  }
  getItems() {
    return this.items;
  }
  
  getCost () {
    return this.items.reduce((a,elem, index)=>{
      return a + elem.item.price * elem.count;
    }, 0)
  }
  getCount() {
    return this.items.length;
  }
}
// END
