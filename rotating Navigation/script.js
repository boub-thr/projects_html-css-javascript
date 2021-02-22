const openNav = document.getElementById('open');
const closeNav = document.getElementById('close');
const navMenu = document.querySelector('.container');
console.log(navMenu);

openNav.addEventListener('click', () => {
    navMenu.classList.add('show-nav');
});
closeNav.addEventListener('click', () => {
    navMenu.classList.remove('show-nav');
});