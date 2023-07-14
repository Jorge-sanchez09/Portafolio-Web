// Menú de navegación
const toggleMenuElement = document.getElementById('toggle-button');
const mainMenuElement = document.getElementById('menu-list');
const navigationHeight = document.getElementById('nav-bar').offsetHeight;

// Contenedor de los proyectos
const projectsDiv = document.getElementById('projects-container');
const projects = document.querySelectorAll('.project');

// Barras de skills
const skillsBars = document.querySelectorAll('.skills__bar-fill')

// Barras circulares 
const circularProgress = document.querySelectorAll('.skills__circular-bar');

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('menu-list--show');
});

projectsDiv.addEventListener('click', (e) => {
    if(e.target.parentElement.classList.contains("project__header"))
    {
       const projectContent = e.target.parentElement.parentElement.querySelector('.project__content');
       projectContent.classList.toggle("project__content--show");
    
       const projectTitle = e.target.parentElement.querySelector('.project__title');
       projectTitle.classList.toggle("project__title--fixed");
    }   
});

// Animaciones de las barras circulares
let filled = false;
function circularBarAnimation(){
    if(!filled){
        circularProgress.forEach(bar => {
            const circularProgressValue = getComputedStyle(bar).getPropertyValue('--skill-bar-length').replace('%', ''); 
    
            let circularBarStartValue = 0, 
            circularBarSpeed = 30;
        
            let circularBarProgress = setInterval(() => {
                circularBarStartValue++;
        
                bar.style.background = ` conic-gradient(var(--clr-primary) ${circularBarStartValue}%, black 0deg)`;
        
                if(circularBarStartValue >= circularProgressValue){
                    clearInterval(circularBarProgress);
                    filled = true;
                }
        
            }, circularBarSpeed);
        })    
    }     
}

// IntersectionObserver para las animaciones de los elementos cuando están visibles en el viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const element = entry.target;
            if(element.classList.contains('fade--left'))
                element.classList.add('fade--left-show');
            else if(element.classList.contains('fade--right'))
                element.classList.add('fade--right-show');
            else if(element.classList.contains('skills__bar-fill'))
                element.classList.add('skills__bar-fill--animate');
            else if(element.classList.contains('skills__circular-bar'))
                circularBarAnimation(element);
        }
    });
});

// Otro observer a parte para animar los proyectos, ya que este es un poco diferente
const projectsObserver = new IntersectionObserver(entries => {
    let transitionDelay = 0;
    entries.forEach(entry => {
        const element = entry.target;
        if(entry.isIntersecting){
            element.style.setProperty('--transition-delay', transitionDelay + 's');
            element.classList.add('project--show');
            transitionDelay += 0.1;
        }
    })
});

const fadeLeftElements = document.querySelectorAll('.fade--left');
const fadeRightElements = document.querySelectorAll('.fade--right');

// Animaciones cuando los elementos estén dentro del viewport
fadeLeftElements.forEach(element => observer.observe(element));
fadeRightElements.forEach(element => observer.observe(element));
projects.forEach(element => projectsObserver.observe(element));
skillsBars.forEach(element => observer.observe(element));
circularProgress.forEach(element => observer.observe(element));