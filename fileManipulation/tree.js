import _ from "lodash";
import * as trees from "@hexlet/immutable-fs-trees";

export const compressImages = (tree) => {
  const name = trees.getName(tree);
  const children = trees.getChildren(tree);
  const meta = trees.getMeta(tree);
  const newChildren = children.map((elem) => {
    if (trees.isFile(elem) && /\.jpg$/.test(elem.name)) {
      const newName = trees.getName(elem);
      const newFileMeta = _.cloneDeep(trees.getMeta(elem));
      newFileMeta.size /= 2;
      return trees.mkfile(newName, newFileMeta);
    } else {
      const children = trees.getChildren(tree);
      const newChildren = children.map((child) => {
        const name = trees.getName(child);
        const newMeta = _.cloneDeep(trees.getMeta(child));
        if (trees.isDirectory(child)) {
          const children = [...trees.getChildren(child)];
          return trees.mkdir(name.toLowerCase(), children, newMeta);
        }
        return trees.mkfile(name.toLowerCase(), newMeta);
      });
      // Обязательно копируем метаданные
      const newMeta = _.cloneDeep(trees.getMeta(tree));
      const tree2 = trees.mkdir(trees.getName(tree), newChildren, newMeta);
      return tree2;
    }
  });
  return trees.mkdir(name, newChildren, meta);
};
