

let names = [
    {id: 1, name: 'Steven', image: 'https://i.ibb.co/tXqmKKR/1.png', salary: '5000'},
    {id: 2, name: 'Neena', image: 'https://i.ibb.co/yYxK3cq/2.png', salary: '10000'},
    {id: 3, name: 'John', image: 'https://i.ibb.co/SNqFDbB/3.png', salary: '4500'},
    {id: 4, name: 'Rogers', image: 'https://i.ibb.co/WnG0fVZ/4.png', salary: '3400'},
    {id: 5, name: 'Cevin', image: 'https://i.ibb.co/vdQK54J/6.png', salary: '500'},
    {id: 6, name: 'Alshey', image: 'https://i.ibb.co/wSJN6db/5.png', salary: '1210'},
    {id: 7, name: 'Milki', image: 'https://i.ibb.co/JpnDnH5/7.png', salary: '1210'},
    {id: 8, name: 'Polar', image: 'https://i.ibb.co/SnNLhgg/9.png', salary: '1210'},
    {id: 9, name: 'Grindell', image: 'https://i.ibb.co/fGH3RPW/8.png', salary: '1210'},
]





let div_root = document.querySelector('.root');

for(let i = 0; i < names.length; i++){
    
    let user_div = document.createElement('div');
    user_div.className = 'card';

    let user_img = document.createElement('img');
    user_img.setAttribute('src', names[i].image);
    user_img.setAttribute('width', '350');
    user_img.setAttribute('height', '350');


    let user_name = document.createElement('p');
    user_name.innerHTML = `Name: ${names[i].name}`;
    
    let user_salary = document.createElement('p');
    user_salary.innerHTML = `Salary: ${names[i].salary}`;
    

    let user_number = document.createElement('p');
    user_number.innerHTML = `User number: ${names[i].id}`;

    let about_div = document.createElement('div');
    about_div.className = 'about';
    
    about_div.append(user_name, user_salary, user_number);
    user_div.append(user_img, about_div);
    div_root.append(user_div);


}