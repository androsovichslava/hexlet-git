import _ from 'lodash';
import * as trees from '@hexlet/immutable-fs-trees';

export const compressImages = (tree) => {
    const name = trees.getName(tree);
    const children = trees.getChildren(tree);
    const meta = trees.getMeta(tree);
    const newChildren = children.map(elem =>{
        if (trees.isFile(elem) && /\.jpg$/.test(elem.name)) {
            const newName = trees.getName(elem);
            const newFileMeta = _.cloneDeep(trees.getMeta(elem))
            newFileMeta.size /= 2;
            return trees.mkfile(newName, newFileMeta);
        } else {

            const children = getChildren(tree);
const newChildren = children.map((child) => {
  const name = getName(child);
  const newMeta = _.cloneDeep(getMeta(child));
  if (isDirectory(child)) {
    const children = [...getChildren(child)];
    return mkdir(name.toLowerCase(), children, newMeta);
  }
  return mkfile(name.toLowerCase(), newMeta);
});
// Обязательно копируем метаданные
const newMeta = _.cloneDeep(getMeta(tree));
const tree2 = mkdir(getName(tree), newChildren, newMeta);
            const newName = trees.getName(elem);
            const newFileMeta = _.cloneDeep(trees.getMeta(elem))
            return trees.mkdir(newName, [], newFileMeta);
        }
    })
    return trees.mkdir(name, newChildren, meta);
}