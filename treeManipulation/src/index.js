import _ from 'lodash';
import * as trees from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here) (write your solution here)
export  function compressImages(tree) {
  const children = trees.getChildren(tree);
  const newMeta = _.cloneDeep(trees.getMeta(tree));
  // reverse изменяет массив, поэтому клонируем
  let newChildren =[];
  if (Array.isArray(children) && children.length > 0) {
  newChildren = [...children].map(elem => {
    if (elem.type === 'file' && /\.jpg$/.test(elem.name)) {
      return {
        name: elem.name,
        meta: {
          size: elem.meta.size / 2
        },
        type: elem.type
      }
    } else {
      return elem;
    }
  });
  }
  const tree2 = trees.mkdir(trees.getName(tree), newChildren, newMeta);

  return tree2;
}



const tree = trees.mkdir('my documents', [
  trees.mkfile('avatar.jpg', { size: 100, attributes: { hide: false, readOnly: true } }),
  trees.mkdir('presentations'),
], { owner: 'hexlet' });



console.log(JSON.stringify(compressImages(tree), null, 2))
  // const tree2 = mkdir(getName(tree), newChildren, newMeta);
  // console.log(tree2);




  // const newTree = compressImages(tree);