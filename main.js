$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i=0;i<3;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
});

/*document.addEventListener("DOMContentLoaded", function() {
    getProducts();
    //AJAX call to get (9) profiles
    function getProducts() {
      let url = "https://fakestoreapi.com/products/?results=9";
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        url,
        true
      );
      xhr.onload = function() {
        if(this.status == 200) {
          let result = JSON.parse(this.responseText);
          outputProducts(result.results);
        }
  
      }
      xhr.send();
    }

    // create html and output products to the page

  function outputProducts(product) {
    let productsDiv = document.querySelector(".product-item");
    console.log(product);
    let output = "";
    product.forEach((item) => {
      output+= 
        `<div class="carousel-item ">
            <div class="col-12 col-md-4 col-lg-2 mx-auto">
                <div class="card mb-2">
                <div class="view overlay">
                    <img class="card-img-top" src="${item.image}" alt="Card image cap">
                    <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div class="card-body p-3">
                    <h5 class="card-title font-weight-bold fuchsia-rose-text mb-0">I${item.title}</h5>
                    <p class="aqua-sky-text mb-0">${item.category}</p>
                    <ul class="list-unstyled list-inline my-2">
                    <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                    <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                    <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                    <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                    <li class="list-inline-item mx-0"><i class="far fa-star mimosa-text"></i></li>
                    </ul>
                    <p class="chili-pepper-text mb-0">${item.price}</p>
                </div>
                </div>
            </div>
        </div>`;
    });
    output+= "<hr class='mb-5 mt-3'>";
    productsDiv.innerHTML = output;
  }
})*/

//AJAX
// execute on page load
document.addEventListener("DOMContentLoaded", function() {
    getProducts();
    //AJAX call to get (3) staff profiles
    function getProducts() {
      let url = "https://fakestoreapi.com/products?limit=4";
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        url,
        true
      );
      xhr.onload = function() {
        if(this.status == 200) {
          let result = JSON.parse(this.responseText);
          console.log(result);
          outputProduct(result);
        }
  
      }
      xhr.send();
    }
  
    // create html and output staff profiles to the page
  
    function outputProduct(productList) {
        productList.forEach(product => {
            let data = 
            `<div class="col-md-3" style="float:left">
                <div class="card mb-2 h-100">
                    <img class="card-img"
                        src=${product.image} alt="Card image cap" class="img-fluid">
                    <div class="card-body">
                        <h4 class="title">${product.title}</h4>
                        <p class="category">${product.category}</p>
                        <h4 class="price">${product.price}</h4>
                    </div>
                </div>
            </div>`;
            $(".product-item").append(data);
        });
    }
  
    console.log("loaded");
  })