const toggleMenuElement = document.getElementById('toggle-button');
const mainMenuElement = document.getElementById('menu-list');

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('menu-list--show');
});