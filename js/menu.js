window.addEventListener('DOMContentLoaded', (event) => {
    const menuIconHamburger = document.querySelector(".hamburger--icon");
    const menuIconClose = document.querySelector(".close--icon");
    const navigationMobile = document.querySelector(".navigation__links");
    const mainElement = document.querySelector(".main");
    const footerElement = document.querySelector(".footer-information");

    // function hideGivenElement() {
    //     // tu wpisuję instrukcje, którą funkcja ma zrobić
    // }

    // const hideGivenElement = function() {
    //     // tu wpisuję instrukcje, którą funkcja ma zrobić
    // }

    // funkcja składa się z instrukcji funkcji {to co jest w klamerkach}, z argumentu/parametru, który jest przekazany w () funkcji i czasami w funkcji jest return, który zwraca wartość


    //stworzyłem funkcję, która dodaje mi ukryty element (chowa element) i mogę jej użyć w tych przypadkach, gdzie chcę (w tym przypadku) użyć display: none
    const hideGivenElement = (element) => {
        element.classList.add("element--hidden");
    }
    //skrócony zapis showGivenElement
    const showGivenElement = element => element.classList.remove("element--hidden");
    

    menuIconHamburger.addEventListener("click", (event) => {
        // mainElement.classList.add("element--hidden");
        hideGivenElement(mainElement);
        // footerElement.classList.add("element--hidden");
        hideGivenElement(footerElement);
        navigationMobile.classList.add("navigation--mobile--active");
        menuIconHamburger.classList.add("menu--icon--hidden");
    });

    menuIconClose.addEventListener("click", (event) => {
        navigationMobile.classList.remove("navigation--mobile--active");
        menuIconHamburger.classList.remove("menu--icon--hidden");
        // mainElement.classList.remove("element--hidden");
        showGivenElement(mainElement);
        // footerElement.classList.remove("element--hidden");
        showGivenElement(footerElement);
    });


});