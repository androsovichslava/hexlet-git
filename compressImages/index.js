import {compressImages} from './compressImages.js'

console.log(compressImages())


const tree = mkdir('my documents', [
    mkfile('avatar.jpg', { size: 100 }),
    mkfile('passport.jpg', { size: 200 }),
    mkfile('family.jpg', { size: 150 }),
    mkfile('addresses', { size: 125 }),
    mkdir('presentations')
  ]);
   
const newTree = compressImages(tree);