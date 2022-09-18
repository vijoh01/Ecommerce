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