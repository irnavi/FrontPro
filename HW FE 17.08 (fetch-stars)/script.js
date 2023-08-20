//!                      HW 17.08.23

let url = "https://dummyjson.com/products";



    fetch(url)
        .then(res => res.json())
        .then(data =>  render(data.products))
    
        function render(arr){ 
    let div_root = document.querySelector('#root')
    for (const elem of arr) {
        let img = document.createElement('img');
        let div_elem = document.createElement('div');
        div_elem.className = 'card';

        img.setAttribute('src', elem.images[0]);
        img.setAttribute('width', '300');
        img.setAttribute('height', '300');

        let title_elem = document.createElement('h2');
        title_elem.innerHTML = elem.title;

        let price_elem = document.createElement('h3');
        price_elem.innerHTML = `Price: ${elem.price}€`;

        let rating_elem = document.createElement('p');
        rating_elem.innerHTML = rating(elem.rating)

        div_elem.append(img, title_elem, price_elem, rating_elem);

        div_root.append(div_elem);
    }
}

function rating(n){
    n = Math.round(n);
    let star = '';
    for(let i = 0; i < 5; i++){
        if (i < n) {
            star += '<span class="fa fa-star active"></span>';
        } else {
            star += '<span class="fa fa-star"></span>';
        }
    }
    return star;

}