const toggleMenuElement = document.getElementById('toggle-button');
const mainMenuElement = document.getElementById('menu-list');
const navigationHeight = document.getElementById('nav-bar').offsetHeight;
const projects = document.querySelectorAll('.project');
const circularProgress = document.querySelectorAll('.skills__circular-bar');

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('menu-list--show');
});

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");

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

Array.from(circularProgress).forEach(circular => {
    const circularProgressValue = getComputedStyle(circular)
    .getPropertyValue('--skill-bar-length').replace('%', ''); 

    let circularBarStartValue = 0, 
    circularBarSpeed = 30;

    let circularBarProgress = setInterval(() => {
        circularBarStartValue++;

        circular.style.background = ` conic-gradient(var(--clr-primary) ${circularBarStartValue}%, black 0deg)`;

        if(circularBarStartValue >= circularProgressValue){
            clearInterval(circularBarProgress);
        }

    }, circularBarSpeed);
});

