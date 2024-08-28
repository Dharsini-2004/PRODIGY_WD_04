let menuIcon=document.querrySelector("#menu-icon");
let navbar=document.everySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toogle('active')
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
windows.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
           navlinks.forEach.apply(links => {
               links.classList.remove('active');
               document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
           });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',windows.scrollY > 100);
    
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
ScrollReveal({
    distance:'80px',
    duration: 2000 ,
    delay: 200,
});
ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container',{origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['Web Developer','User Research','Paper Presenter'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});