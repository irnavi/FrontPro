
let names = [
    {id: 1, name: 'Steven', salary: '5000'},
    {id: 2, name: 'Neena', salary: '10000'},
    {id: 3, name: 'John', salary: '4500'},
    {id: 4, name: 'Rogers', salary: '3400'},
    {id: 5, name: 'Cevin', salary: '500'},
    {id: 6, name: 'Alshey', salary: '1210'},
    {id: 7, name: 'Milki', salary: '110'},
    {id: 8, name: 'Polar', salary: '120'},
    {id: 9, name: 'Grindell', salary: '10'},
    ]
    
    //!Посчитайте количество юзеров, у которых ID представляет нечетное число

    let res = 0 ;
    for(let i = 0; i < names.length; i++){
    
        if(names[i].id % 2==1){
        res += 1;
        }
    
    }
    
    console.log(res);

    //!  Посчитайте сумму всех зарплат в массиве


    let sum = 0;

    for(let i = 0;  i < names.length; i++){
     sum += +names[i].salary;
    }

console.log(sum);


//! Посчитайте количество юзеров, у которых в имени есть буква ‘e’

let count = 0 ;
    for(let elem of names){
        if(elem.name.includes('e')){
            count += 1;
        }
    }
console.log(count); 


//! Найдите запись, где зарплата будет не кратна 100

let result = names.find((value) =>  value.salary % 100 !== 0);

console.log(result);



//! Найдите запись, где вычисляется квадратный корень у атрибута ID без остатка

let a = names.find((value) => (value.id ** 0.5) % 1 === 0);

console.log(a);



//! Найдите запись, где вычисляется квадратный корень у длины имени

let b = names.find((value) => (value.name.length ** 0.5) % 1 === 0);

console.log(b);
