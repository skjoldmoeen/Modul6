//Steffen java

// Funktion til smoothscroll
const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll('.navbar_link');

  for(let n in navLinks){
     if(navLinks.hasOwnProperty(n)){
       navLinks[n].addEventListener('click', e =>{
         e.preventDefault();
         document.querySelector(navLinks[n].hash)
         .scrollIntoView({
           behavior: "smooth"
         });
       });
     }
  }
}

//Skift aktive links når man scroller

const spyScrolling = () => {
  const sections = document.querySelectorAll('.main_content');

  window.onscroll = () => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

     for(let s in sections)
       if(sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos){
         const id = sections[s].id;
         document.querySelector('.navbar_link_active').classList.remove('navbar_link_active');
         document.querySelector(`a[href*=${id}]`).parentNode.classList.add('navbar_link_active');
       }

  }
}








//function call for smoothscroll
makeNavLinksSmooth();

//function kald på aktive links
spyScrolling();
