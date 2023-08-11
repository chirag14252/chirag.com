const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const navBar = document.querySelector("nav");
btn.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
    navBar.classList.toggle("mb-10");
})