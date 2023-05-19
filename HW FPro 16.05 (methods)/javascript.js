

//! Задача 1: Превратите массив чисел в длинную строку, состоящую из всех этих чисел.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr2 = arr.join(', ')

console.log(arr2)

//-------------------------------------------------------

//! Задача 2: Используя метод reduce, посчитайте сколько людей проголосовали.

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];


const numberOfVoters = voters.reduce((acc, current) => {
    if(current.voted === true){
       return acc + 1;
    } else {
         return acc;
    };
    
}, 0);

console.log(numberOfVoters);


//--------------------------------------------------

//! Задача 3: Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const totalPrice = wishlist.reduce((acc, current) => acc + current.price, 0);

console.log(totalPrice)

//--------------------------------------------------------

//! Задача 4: У вас есть массив объектов, представляющих список клиентов с их заказами. Каждый объект имеет свойства name и orders, где orders - это массив строк, представляющих товары, которые заказал клиент. Ваша задача - создать новый массив объектов, где каждый объект имеет свойства name и totalOrders, где totalOrders - общее количество товаров, заказанных клиентом.


const customers = [
    { name: 'John', orders: ['iPhone', 'MacBook', 'AirPods'] },
    { name: 'Alice', orders: ['iPad', 'Apple Watch'] },
    { name: 'Bob', orders: ['Samsung Galaxy', 'Smart TV', 'Headphones'] },
    { name: 'Emily', orders: ['PlayStation', 'Games', 'Controller'] }
  ];

 const customers2 = customers.map((element) => {
    return {name: element.name, totalOrders: element.orders.length}
 });

 console.log(customers2)

 //----------------------------------------------------

 //! Задача 5: Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.

 const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 42 },
    { name: 'Emily', age: 12 },
    { name: 'Irina', age: 43 },
    { name: 'Nika', age: 12 },
    { name: 'Anastasia', age: 15 },
  ];

  let adult = people.reduce((acc, current) => {
    if(current.age >= 18){
       return acc + 1;
    } else {
        return acc
    }
  }, 0)

  let minor = people.reduce((acc, current) => {
    if(current.age < 18){
       return acc + 1;
    } else {
        return acc
    }
  }, 0)

  console.log(adult, minor)

//-------------------------------------------------

//! Задача 6: Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.

const people1 = [
    { name: 'John', age: 31 },
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 42 },
    { name: 'Emily', age: 12 },
    { name: 'Irina', age: 43 },
    { name: 'Nika', age: 12 },
    { name: 'Anastasia', age: 15 },
  ];

const over30yearsOld = people1.filter((element) => element.age > 30);

console.log(over30yearsOld)