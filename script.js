/* ------------------------------------------------------
Student Name:       Le Minh Nhat Dang
Student Number:     138205190
Seneca Email:       lmndang@myseneca.ca
Assignment:         05
File Name:          script.js
Course  :           WEB222NBB
Date Completed:     28/07/2020 (DD/MM/YYYY)
-----------------------------------------------------------*/

(function() {
  //Declare nessesary variables:
  const products = window.productsData;
  let main = document.querySelector('main');
  let showed = 8;

  //Add a new product to product section:
  function displayProduct(product) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let h6 = document.createElement('h6');
    let a = document.createElement('a');

    div.setAttribute('class', 'products');
    img.setAttribute('src', 'images/' + product.img);
    h4.innerText = product.name;
    p.innerText = 'Model Name: ' + product.modue;
    h6.innerText = product.price + '.00';
    a.innerText = 'add to cart';
    a.setAttribute('href', '#');

    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(h6);
    div.appendChild(a);
    main.appendChild(div);
  }

  //Show more products:
  let showMore = document.querySelector('#more a');
  showMore.addEventListener('click', function(event) {
    event.preventDefault();

    let i = 0;
    //Show 1, 2, or 3 products if there is no more products:
    if (showed === products.length - 1) {
      i = 3;
    } else if (showed === products.length - 2) {
      i = 2;
    } else if (showed === products.length - 3) {
      i = 1;
    }

    //Show 4 products:
    for (i; i < 4; i++) {
      displayProduct(products[showed]);
      showed++;
    }

    //Hidden the "show more" button if there is no product to show:
    if (showed === products.length) {
      showMore.style.display = 'none';
    }
  });

  //Show all products in categories:
  function sortBycategories(type) {
    let category = document.querySelector('#' + type);
    category.addEventListener('click', function(event) {
      event.preventDefault();
      main.innerHTML = '';
      for (let i = 0; i < products.length; i++) {
        if (products[i].type === type) {
          displayProduct(products[i]);
        }
      }
      showMore.style.display = 'none';
    });
  }

  //Call function to add the event for categories:
  sortBycategories('laptop');
  sortBycategories('thronos');
  sortBycategories('desktop');
  sortBycategories('monitor');

  //Display all product and show the 'Show more' button:
  let all = document.querySelector('#all');
  all.addEventListener('click', function() {
    event.preventDefault();
    main.innerHTML = '';
    for (let i = 0; i < 8; i++) {
      displayProduct(products[i]);
    }
    showMore.style.display = 'inline-block';
    showed = 8;
  });

  //Sort by selection: (Upcomming)
})();
