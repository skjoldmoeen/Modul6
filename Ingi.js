let loading = document.querySelector('.loading');
let logo = document.querySelector('welcome_logo');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                 span.classList.add('in_action');
             }, (idx + 1) * 400)
        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                     span.classList.remove('in_action');
                     span.classList.add('fade');
                }, (idx + 1) * 50)
            })
         },2000)
         setTimeout(()=>{
             loading.style.top = '-100vh'
         },2300)
    })
})