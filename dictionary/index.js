// Реализуйте и экспортируйте по умолчанию функцию, которая объединяет несколько словарей (объектов) в один общий словарь. 
// Функция принимает любое количество аргументов и возвращает результат в виде объекта, 
// в котором каждый ключ содержит список уникальных значений в виде массива. Элементы в списке располагаются в том порядке, в котором они появляются во входящих словарях.


function merge (...dictionaries) {
    const result = {};
    for (let  i = 0; i < dictionaries.length; i += 1) {
        for (let key in dictionaries[i]) {
            if (!result.hasOwnProperty(key)) {
                result[key] = [];
                result[key].push(dictionaries[i][key]);
            } else {
                if (!result[key].includes(dictionaries[i][key])) {
                    result[key].push(dictionaries[i][key]);
                };
            }
        }
    }
console.log(result);

}














// Примеры работы:

merge({}, {}, {});
// {}
 
merge({ a: 1, b: 2 }, { a: 3 });
// { a: [1, 3], b: [2] }
 
merge(
    { a: 1, b: 2, c: 3 },
    {},
    { a: 3, b: 2, d: 5 },
    { a: 6 },
    { b: 4, c: 3, d: 2 },
    { e: 9 },
  );
// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] }
