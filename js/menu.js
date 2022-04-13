window.addEventListener('DOMContentLoaded', (event) => {
    const menuIconHamburger = document.querySelector(".hamburger--icon");
    const menuIconClose = document.querySelector(".close--icon");
    const navigationMobile = document.querySelector(".navigation__links");
    const mainPart = document.querySelector(".main--hidden");
    const footerPart = document.querySelector(".footer-information");

    menuIconHamburger.addEventListener("click", (event) => {
        mainPart.classList.add("main--part");
        footerPart.classList.add("main--part");
        navigationMobile.classList.add("navigation--mobile--active");
        menuIconHamburger.classList.add("menu--icon--hidden");
    });

    menuIconClose.addEventListener("click", (event) => {
        navigationMobile.classList.remove("navigation--mobile--active");
        menuIconHamburger.classList.remove("menu--icon--hidden");
        mainPart.classList.remove("main--part");
        footerPart.classList.remove("main--part");
    });


});