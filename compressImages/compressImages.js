import _ from 'lodash';
import * as trees from '@hexlet/immutable-fs-trees';

export function compressImages(tree) {
    const children = trees.getChildren(tree);
    const newMeta = _.cloneDeep(trees.getMeta(tree));
    // reverse изменяет массив, поэтому клонируем
    let newChildren = [];
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

// Реализуйте и экспортируйте функцию compressImages(), которая принимает на вход директорию, находит внутри нее картинки и "сжимает" их. 
// Под сжиманием понимается уменьшение свойства size в метаданных в два раза. Функция должна вернуть новую директорию со сжатыми 
// картинками и всеми остальными данными, которые были внутри этой директории.

// Картинками считаются все файлы заканчивающиеся на .jpg.