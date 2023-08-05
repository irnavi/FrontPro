let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
 ]
 
 
//todo  Используя этот массив, необходимо решить ряд задач:
 
//! Задача 1.
// Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID

let newGoods = goods.filter(item => item.id % 2 === 0);
console.log(newGoods)


//! Задача 2.
// Посчитайте сумму всех товаров, учитывая их количество

let sum = goods.reduce((acc, carr) => acc + carr.price * carr.count, 0);
console.log(sum);

 
//! Задача 3.
// Найдите значение элемента массива (продукта), цена которого будет кратна 5

let elem = goods.find(item => item.price % 5 === 0);
console.log(elem);


//! Задача 4.
// Найдите индекс элемента, count которого будет больше 11

let goodsIndex = goods.findIndex(item => item.count > 11);
console.log(goodsIndex);

//! Задача 5.
// Посчитайте количество элементов, count которых является нечетным числом

let goodsSum = goods.reduce((acc, curr) => acc + (curr.count % 2 !== 0), 0);
console.log(goodsSum);

//! Задача 6.
// Посчитайте количество элементов, имя которых начинается на “Т”

let goodsT = goods.reduce((acc, curr) => acc + (curr.title[0] === 'Т'), 0);
console.log(goodsT);

//! Задача 7.
// Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)

let goodsPrice = goods.map(item => item.price * 0.65);
console.log(goodsPrice);

//! Задача 8.
// Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)

let goodsCount = goods.map(item => ({...item, count: 0}));
console.log(goodsCount)

//! Задача 9.
// Отфильтруйте массив по сво-ву title

let goodsTitle = goods.filter(item => item.title);
console.log(goodsTitle);
