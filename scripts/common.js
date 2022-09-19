var button = document.getElementsByClassName("menu-icon");

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var menu = document.querySelector("nav");
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
    <img src="https://images.footway.com/02/60786-15_001.png?auto=format&fit=max&w=450" alt="">
    </div>`;
    if (i >= 1) {
        productDiv.insertAdjacentHTML('afterend', productDetails);
    } else {
    productDiv.insertAdjacentHTML('beforeend', productDetails);
    }
    i++;
}
