/*
 * Intro sequence
 */
let intro = document.querySelector('.intro');
let introShort = document.querySelector('.intro_short');
let logo = document.querySelector('.intro_logo');
let logoSpan = document.querySelectorAll('.logo_span');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 10)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx - 1) * 5)
            });
        }, 800);

        setTimeout(()=>{
            intro.style.top = '110vh';
            intro.style.transition = 'all .5s ease-in-out';
        }, 1000);

    });
});

/*
 * Mobile menu that replaces navbar for small devices
 */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


menuLinks.addEventListener('click', ()=>{
    if (menu.classList.contains('is-active')) {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }
});

