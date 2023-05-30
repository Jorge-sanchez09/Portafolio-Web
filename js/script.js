const toggleMenuElement = document.getElementById('toggle-button');
const mainMenuElement = document.getElementById('menu-list');
const navigationHeight = document.getElementById('nav-bar').offsetHeight;

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('menu-list--show');
});

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 1 + "px");