   //BURGUER MENU
   document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");
    burgerMenu.addEventListener("click", function () {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("active");
        burgerMenu.classList.toggle("active");
        
    });
  });
