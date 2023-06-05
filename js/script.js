const toggleMenuElement = document.getElementById('toggle-button');
const mainMenuElement = document.getElementById('menu-list');
const navigationHeight = document.getElementById('nav-bar').offsetHeight;
const projects = document.querySelectorAll('.project');

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('menu-list--show');
});

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 1 + "px");

for(const project of projects){
    project.addEventListener('click', (e) => 
    {
        if(e.target.parentElement.classList.contains("project__header"))
        {
            const projectContent = project.querySelector('.project__content');
            projectContent.classList.toggle("project__content--show");

            project.querySelector(".project__title").classList.toggle("project__title--fixed");
        }
    });
}