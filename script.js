

const menu = document.querySelector('.menu');
const fullscreenNav = document.getElementById('fullscreenNav');

menu.addEventListener('click', () => {
    fullscreenNav.classList.add('active');
});

function closeNav() {
    fullscreenNav.classList.remove('active');
}
