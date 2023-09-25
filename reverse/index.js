// Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы 
// исходного массива в обратном порядке. Функция должна мутировать переданный в нее массив. 
// Новый массив из нее возвращать не надо.
function reverse(arr) {
    let temp;
    for (let i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

console.log(reverse([1, 2, 3, 4, 5, 6]));