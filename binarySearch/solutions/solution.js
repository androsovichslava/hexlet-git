export default function solution(book, name) {
    if (Array.isArray(book) && book.length === 0) return 'Phonebook is empty!';

    let first = 0;
    let last = book.length - 1;

    while (first <= last) {
        const middle = Math.floor((first + last) / 2);
        if (name === book[middle].name) {
            return book[middle].number;
        }

        if (name < book[middle].name) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return 'Name not found!';
} 