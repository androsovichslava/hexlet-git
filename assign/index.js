import _ from 'lodash';


function fill(company, list, data) {
    const pickObj = _.pick(data, list);
    if (list.length === 0) {
        Object.assign(company, data);
        console.log(company)
        return company;
    } else {
        const result = Object.assign(company, _.pick(data, list));
        console.log(result)
        return result;
    }
}


const company = {
    name: null,
    state: 'moderating',
};

const data = {
    name: 'Hexlet',
    state: 'published',
};

// Вызовы ниже нужно рассматривать как независимые

// fill(company, ['name'], data);
// // {
// //   name: 'Hexlet',
// //   state: 'moderating',
// // }

fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }