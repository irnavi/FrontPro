// 1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма товара. А так же в самом конце выводится итоговая сумма и количество всех товаров.

// const arr = [
//     {
//     title: "BMW",
//     price: "40000",
//     count: "15"
//     },
//     {
//     title: "Toyota",
//     price: "20000",
//     count: "13"
//     },
//     {
//     title: "Ford",
//     price: "30000",
//     count: "20"
//      },
//     {
//     title: "Chevrolet",
//     price: "60000",
//     count: "9"
//     },
//     {
//     title: "Volkswagen",
//     price: "30000",
//     count: "13"
//     },
//     ]

//     const list = document.createElement('ul');
//     let par = document.createElement('p');
//     let par2 = document.createElement('p');

//     let sumPrice = 0;
//     let sumCount = 0;
   
//     for(let i = 0; i < arr.length; i++){
//         let itogo = 0;
//         itogo = arr[i].price * arr[i].count;
       
//         let elements = document.createElement('li');
//         list.append(elements);
      
//         elements.innerText = ` Марка машины:  ${arr[i].title}. Цена: ${arr[i].price}.  Количество: ${arr[i].count}. Итого: ${itogo}`;

//         sumPrice += itogo;
//         sumCount += +arr[i].count
//    }


// par.innerText = `Итоговая сумма: ${sumPrice}`;
// par2.innerText = `Итоговое кол-во товара: ${sumCount}`;

// document.body.append(list);
// document.body.append(par);
// document.body.append(par2);

//-----------------------------------------------------------


// 3)Дан массив из объектов, в котором хранятся породы собак и их возраст.Напишите цикл, который создаст для каждого объекта параграфы(Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.

// const arr = [
//     {
//       breed: "golden retriever",
//       age: 7,
//     },
//     {
//       breed: "labrador retriever",
//       age: 4,
//     },
//     {
//       breed: "french bulldog",
//       age: 12,
//     },
//     {
//       breed: "beagle",
//       age: 6,
//     },
//     {
//       breed: "german shepherd dog",
//       age: 2,
//     },
//     {
//       breed: "poodle",
//       age: 3,
//     },
//     {
//       breed: "bulldog",
//       age: 4,
//     },
// ];

// for(let i = 0; i < arr.length; i++){

//     let par = document.createElement('p');
//     document.body.append(par);
   
//     par.innerText = `${arr[i].breed}'s age is  ${arr[i].age}`;
   
// }

//-----------------------------------------------------


// 4)Создайте список с названиями фильмов и годов их выпуска из массива объектов. Массив с объектами создавать самому. Каждый объект должен иметь два ключа – name, year.

// const arr = [
//     {
//     name: 'Волк с Уолл-Стрит',
//     year: 2013,
//     },
//     {
//     name: 'Рокки',
//     year: 1976,
//     },
//     {
//     name: 'Парень-каратист',
//     year: 1984,
//     },
//     {
//     name: 'Умница Уилл Хантинг',
//     year: 1997,
//     },
//     {
//     name: '8 миля',
//     year: 2002,
//     },
//     {
//     name: 'Принцесса-невеста',
//     year: 1987,
//     },
//     {
//     name: 'Невидимая сторона',
//     year: 2009,
//     },
//     {
//     name: 'Моя большая греческая свадьба',
//     year: 2002,
//     },
//     {
//     name: 'Форрест Гамп',
//     year: 1994,
//     },
//     {
//     name: 'Мэри Поппинс',
//     year: 1964,
//     },
//     ];

//     let list = document.createElement('ul');
    

//     for(let i = 0; i < arr.length; i++){

//         let listLi = document.createElement('li');

//         listLi.innerText = `${arr[i].name}, ${arr[i].year}`;

//         list.append(listLi);

        
//     }
    
//     document.body.append(list);

//-----------------------------------------------------

// 2)Напишите скрипт, который выводит в интерфейс следующую таблицу(html должен быть пустым, все элементы создаются строго с помощью скриптов):

//tab.setAttribute('border', 'solid');
//tab.setAttribute('border', 'color black');


// document.body.append(tab);
// let trCol = document.createElement('tr');   // колонки
// tab.append(trCol);

// let th1 = document.createElement('th');   
// th1.innerText = 'NO.';
// trCol.append(th1);

// let th2 = document.createElement('th');
// th2.innerText = 'Full Name';
// trCol.append(th2);

// let th3 = document.createElement('th');
// th3.innerText = 'Position';
// trCol.append(th3);

// let th4 = document.createElement('th');
// th4.innerText = 'Salary';
// trCol.append(th4);

// let trStr1 = document.createElement('tr');  //строка первая
// tab.append(trStr1);

// let td1 = document.createElement('td');
// td1.innerText = '1';
// trStr1.append(td1);

// let td2 = document.createElement('td');
// td2.innerText = 'Bill Gates';
// trStr1.append(td2);

// let td3 = document.createElement('td');
// td3.innerText = 'Founder Microsoft';
// trStr1.append(td3);

// let td4 = document.createElement('td');
// td4.innerText = '$1000';
// trStr1.append(td4);

// let trStr2 = document.createElement('tr');  //строка вторая
// tab.append(trStr2);

// let td21 = document.createElement('td');
// td21.innerText = '2';
// trStr2.append(td21);

// let td22 = document.createElement('td');
// td22.innerText = 'Steve Jobs';
// trStr2.append(td22);

// let td23 = document.createElement('td');
// td23.innerText = 'Founder Apple';
// trStr2.append(td23);

// let td24 = document.createElement('td');
// td24.innerText = '$1200';
// trStr2.append(td24);

// let trStr3 = document.createElement('tr');  //строка третья
// tab.append(trStr3);

// let td31 = document.createElement('td');
// td31.innerText = '3';
// trStr3.append(td31);

// let td32 = document.createElement('td');
// td32.innerText = 'Larry Page';
// trStr3.append(td32);

// let td33 = document.createElement('td');
// td33.innerText = 'Founder Coogle';
// trStr3.append(td33);

// let td34 = document.createElement('td');
// td34.innerText = '$1100';
// trStr3.append(td34);

// let trStr4 = document.createElement('tr');  //строка четвертая
// tab.append(trStr4);

// let td41 = document.createElement('td');
// td41.innerText = '4';
// trStr4.append(td41);

// let td42 = document.createElement('td');
// td42.innerText = 'Mark Zuckerberg';
// trStr4.append(td42);

// let td43 = document.createElement('td');
// td43.innerText = 'Founder Facebook';
// trStr4.append(td43);

// let td44 = document.createElement('td');
// td44.innerText = '$1300';
// trStr4.append(td44);

//-----------------------------------

//этот вариант подсмотрен из интернета и адаптирован под нашу задачу


let arr= [

    ['No.','Full Name','Position','Salary'],
    ['1','Bill Gates','Founder Microsoft','$1000'],
    ['2','Steve Jobs','Founder Apple','$1200'],
    ['3','Larry Page','founder Google','$1100'],
    ['4','Mark Zukerberg','Founder Fasebook','$1300'],
    
   
];

let tab = document.createElement('table');
document.body.append(tab);

tab.setAttribute('border','1')

for(let i = 0;i < arr.length;i++){
  let row = document.createElement('tr');

  row.innerHTML = `
  <td>${arr[i][0]}</td>
  <td>${arr[i][1]}</td>
  <td>${arr[i][2]}</td>
  <td>${arr[i][3]}</td>
  
  `
tab.append(row)

}