const menuButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('is-active');
    navMenu.classList.toggle('active');    
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    menuButton.classList.remove('is-active');
    navMenu.classList.remove('active');
}));

