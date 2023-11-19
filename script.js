const hamBurger = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

hamBurger.addEventListener('click', () => {
    nav.classList.toggle('slide')
})