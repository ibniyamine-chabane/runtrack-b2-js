
const background = document.querySelector('html');
console.log(background)

window.addEventListener("resize", myChangeBackgroundColor);


function myChangeBackgroundColor() {

        if (window.innerWidth >= 1337) {
            background.style.backgroundColor = "#ffb703";
        } else if (window.innerWidth >= 505 && window.innerWidth <= 1336) {
            background.style.backgroundColor = "#d90429";
        } else if (window.innerWidth <= 504) {
            background.style.backgroundColor = "#003049";
        }
    };