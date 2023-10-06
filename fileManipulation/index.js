import {
    mkfile, mkdir, getChildren, getMeta, getName,
} from '@hexlet/immutable-fs-trees';
import { compressImages } from "./tree.js";


const tree = mkdir('my documents', [
    mkfile('avatar.jpg', { size: 100, attributes: { hide: false, readOnly: true } }),
    mkdir('presentations'),
  ], { owner: 'hexlet' });
// console.log(JSON.stringify(tree, null,2)); 
const newTree = compressImages(tree);
// console.log(JSON.stringify(newTree, null,2))


const oldFile = getChildren(tree)[0];
const oldFileMeta = getMeta(oldFile);

const newFile = getChildren(newTree)[0];
const newFileMeta = getMeta(newFile);
newFileMeta.attributes.hide = true;
console.log(newFile)
console.log(newFileMeta)

console.log(oldFile)
console.log(oldFileMeta)