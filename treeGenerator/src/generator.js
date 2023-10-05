import {
    mkfile, mkdir, isDirectory, isFile, map,
} from '@hexlet/immutable-fs-trees';

const tree =()=> mkdir('nodejs-package', [
    mkfile('Makefile'),
    mkfile('README.md'),
    mkdir('dist'),
    mkdir('__tests__', [mkfile('half.test.js', {type: 'text/javascript' })]),
    mkfile('babel.config.js', { type: 'text/javascript' }),
    mkdir('node_modules',[mkdir('@babel',[mkdir('cli',[mkfile('LICENSE')])])], { owner: 'root', hidden: false })
], { hidden: true });

console.log(JSON.stringify(tree(), null, 2));

export default tree;

// # Обратите внимание на метаданные
 
// nodejs-package # директория (метаданные: { hidden: true })
// ├── Makefile # файл
// ├── README.md # файл
// ├── dist # пустая директория
// ├── __tests__ # директория
// │   └── half.test.js # файл (метаданные: { type: 'text/javascript' })
// ├── babel.config.js # файл (метаданные: { type: 'text/javascript' })
// └── node_modules # директория (метаданные: { owner: 'root', hidden: false })
//     └── @babel # директория
//         └── cli # директория
//             └── LICENSE # файл




// {
//     "name": "nodejs-package",
//     "children": [
//       {
//         "name": "Makefile",
//         "meta": {},
//         "type": "file"
//       },
//       {
//         "name": "README.md",
//         "meta": {},
//         "type": "file"
//       },
//       {
//         "name": "dist",
//         "children": [],
//         "meta": {},
//         "type": "directory"
//       },
//       {
//         "name": "__tests__",
//         "children": [
//           {
//             "name": "half.test.js",
//             "meta": {
//               "type": "text/javascript"
//             },
//             "type": "file"
//           }
//         ],
//         "meta": {},
//         "type": "directory"
//       },
//       {
//         "name": "babel.config.js",
//         "meta": {
//           "type": "text/javascript"
//         },
//         "type": "file"
//       },
//       {
//         "name": "node_modules",
//         "children": [
//           {
//             "name": "@babel",
//             "children": [
//               {
//                 "name": "cli",
//                 "children": [],
//                 "meta": {},
//                 "type": "directory"
//               },
//               [
//                 {
//                   "name": "LICENSE",
//                   "meta": {},
//                   "type": "file"
//                 }
//               ]
//             ],
//             "meta": {},
//             "type": "directory"
//           }
//         ],
//         "meta": {
//           "owner": "root",
//           "hidden": false
//         },
//         "type": "directory"
//       }
//     ],
//     "meta": {
//       "hidden": true
//     },
//     "type": "directory"
//   }