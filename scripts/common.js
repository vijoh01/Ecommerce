
var button = document.getElementsByClassName("menu-icon");

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var menu = document.querySelector(".menu-nav");
        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });
}

var productDiv = document.createElement('div');
productDiv.classList.add('product-item');

document.querySelector('.add-item').addEventListener('click', addProduct);
let containerDiv = document.querySelector('.product-container');
containerDiv.appendChild(productDiv);

var i = 0;
function addProduct() {

    let productDetails = `<div class="product-item">
    <img src="https://placedog.net/450/450?random" alt="">
    </div>`;
    if (i >= 1) {
        productDiv.insertAdjacentHTML('afterend', productDetails);
        
    } else {
    productDiv.insertAdjacentHTML('beforeend', productDetails);
    
    }
    i++;
}

document.querySelector('.fi-bs-user').addEventListener('click', function() {
    this.classList.toggle("active");
    var login = document.querySelector('.login');

    if (login.style.display === 'flex') {
        login.style.display = 'none';
    } else {
        login.style.display = 'flex';
    }
});


document.addEventListener('mouseup', function(e) {
    var login = document.querySelector('.login');
    var register = document.querySelector('.register');
    if (!(login.contains(e.target) || register.contains(e.target))) {
        login.style.display = 'none';
        register.style.display = 'none';
    }
});
  

var registerbtn = document.querySelector('.register-btn');

registerbtn.addEventListener('click', function() {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.register').style.display = 'flex';
    document.querySelector('.register').style.maxHeight = '22rem';
});

document.querySelector('.login-btn').addEventListener('click', function() {
    document.querySelector('.register').style.display = 'none';
    document.querySelector('.login').style.display = 'flex';
});
