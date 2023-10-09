import solution from './solutions/solution.js';

const phonebook = [
    { name: 'Alex Bowman', number: '48-2002' },
    { name: 'Aric Almirola', number: '10-1001' },
    { name: 'Bubba Wallace', number: '23-1111' },
];

console.log(solution(phonebook, 'Alex Bowman')); // '48-2002'
console.log(solution(phonebook, 'None')); // 'Name not found!'
console.log(solution([], 'Alex Bowman')); // 'Phonebook is empty!'
