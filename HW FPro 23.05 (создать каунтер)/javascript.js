//! Задача: Создать каунтер. Страница с двумя кнопками "+" и "-" и при нажатии на какое-либо число должно меняться в соответстуующую сторону. Значение каунтер не должно слетать при перезагрузке страницы.

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const p = document.querySelector('p');

let number = localStorage.getItem('counter');
if(number){
  p.innerText = number;
 } else {
  number = 0;
 }



btn1.onclick = () => {
  number++
  p.innerText = number;
  localStorage.setItem('counter', number);
}


btn2.onclick = () => {
  number--;
  p.innerText = number;
  localStorage.setItem('counter', number);
}

