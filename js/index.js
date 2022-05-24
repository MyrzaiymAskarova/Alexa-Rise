

const burger = document.querySelector('.burger');
const adaptivemenu = document.querySelector('.nav');

const openMenu = () => {
    burger.classList.toggle('burger-active');
    adaptivemenu.classList.toggle('open-menu');
}
const closeMenu = (event) => {
    if (event.target.classList.contains('nav-link')) {
        burger.classList.remove('burger-active');
        adaptivemenu.classList.remove('open-menu');
    }
}

burger.addEventListener('click', openMenu);
adaptivemenu.addEventListener('click', closeMenu);