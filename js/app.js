const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

});

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("active");

});

});