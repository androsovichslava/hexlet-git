import capitalize from '../src/capitalize.js'
import { strict as assert } from 'node:assert';

// import assert from 'power-assert';
// if (capitalize('hello') !== 'Hello') {
//     throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//     throw new Error('Функция работает неверно!');
// }

// assert.equal(capitalize(''), '');
// Первый параметр actual – то, что пришло
// Второй параметр expected – то, что ожидает тест
// Правильный порядок аргументов имеет большое значение при анализе ошибки
// assert.equal(capitalize('hello'), 'Hello');


// assert.deepEqual({}, {}); // всё ок
// assert.deepEqual({ key: 'value' }, { key: 'value' }); // всё ок
// assert.deepEqual({ key: 'value' }, { key: 'another value' }); // Бум!

// console.log('Все тесты пройдены!');

const user = {
    name: 'Madonna',
    friends: ['Kate', 'Michel'],
    email: 'madonna@example.com',
};

assert(user.name === 'Michel');