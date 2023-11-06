let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("toggle");
});

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("toggle");
}