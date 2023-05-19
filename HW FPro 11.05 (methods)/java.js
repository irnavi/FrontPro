// setTimeout(callback, 2000)

// setTimeout(() => {
//     console.log('Hello world');
// }, 5000);

// setInterval(callback, 3000)

// setInterval(() => {
//     console.log('Hello world');
// }, 3000);
//-----------------------------------------------------
// Задача 1: Напишите функцию printWithDelay, которая принимает в качестве аргумента массив строк. Функция должна выводить каждую строку из массива на консоль с задержкой в 1 секунду между каждой строкой.

// const arr = ['Привет!', 'как', 'твои', 'дела?'];
// function printWithDelay(arr) {
//     for(let i = 0; i < arr.length; i++){
//         setTimeout(() => {
//             console.log(arr[i])
//         }, i * 1000)
//     }
// }
// printWithDelay(arr);

// const arr = ['Привет!', 'как', 'твои', 'дела?'];
// function printWithDelay(arr) {
//     arr.forEach((element, index) => {
//         setTimeout(() => {
//             console.log(element)
//         },index * 1000)
//     })
// }
// printWithDelay(arr);

// Задача 2: Напишите функцию getSquares, которая принимает в качестве аргумента массив чисел. Функция должна использовать метод map для возведения в квадрат каждого числа в массиве и возвращать новый массив, содержащий возведенные в квадрат числа.

// const arr = [1, 3, 5, 2, 4, 8, 9, 6, 7];


// function getSquares(arr){
    
//     const arr2 = arr.map((element, index, array) => {
//         return element ** 2;
//     });
//   return console.log(arr2);
// };

// getSquares(arr);



// Задача 3: Напишите функцию sumEvenSquares, которая принимает в качестве аргумента массив чисел. Функция должна использовать методы map и filter  и вернуть сумму оставшихся четных чисел.

// const arr = [1, 3, 5, 2, 4, 8, 9, 6, 7];

// function sumEvenSquares (arr) {
//     const arr2 = arr.map((element) => element ** 2);
//     const evenArr = arr2.filter((element) => element % 2 === 0);
//     let sum = 0;
//     for(let i = 0; i < evenArr.length; i++) {
//         sum += evenArr[i];
//     }
        
//     return sum;
// }
// console.log(sumEvenSquares(arr));


// Задача 4: Напишите функцию с именем delayedUpperCase, которая принимает в качестве аргумента массив строк. Функция должна использовать метод forEach для перебора каждой строки в массиве и выводить на консоль версию строки в верхнем регистре с задержкой в 2 секунды.

// const arr = ["Hello", "world", "how", "are", "you?"];

// function delayedUpperCase(arr) {
//     arr.forEach((element, index) => {
//         setTimeout(() => {
//             console.log(element.toUpperCase())
//         }, index * 2000)
//     });
// };

// console.log(delayedUpperCase(arr));

// Задача 5: Напишите функцию countDown, принимающую в качестве аргумента число. Функция должна использовать метод setTimeout для печати чисел от заданного числа до 1, с задержкой в 1 секунду между каждым числом.


// function countDown(num) {
//     for(let i = num; i >= 1; i--){
//      setTimeout(() => {
//         console.log(i)
//      }, (num - i) * 1000)
//     }
// }

// console.log(countDown(5));

//--------------------------------------------


// Задача 6: Напишите функцию filterNamesByLetter, которая принимает в качестве аргументов массив имен и букву. Функция должна использовать метод filter, чтобы вернуть новый массив, содержащий только те имена из исходного массива, которые начинаются с заданной буквы.


// const arr = ['Irina', 'Ivan', 'Olga', 'Nika', 'Ignat'];
// const Letter = 'I';

// function filterNamesByLetter(arr, Letter) {
//     const newArr = arr.filter((element) => element[0] === Letter);
//     return newArr
// };

// console.log(filterNamesByLetter(arr, Letter));