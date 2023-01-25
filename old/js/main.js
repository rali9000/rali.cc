/*
 * Mobile menu that replaces navbar for small devices
 */
const menu = document.querySelector("#mobile-menu");
const menuItems = document.querySelector(".navbar_items");

menu.addEventListener("click", ()=>{
    menu.classList.toggle("is-active");
    menuItems.classList.toggle("active");
});


menuItems.addEventListener("click", ()=>{
    if (menu.classList.contains("is-active")) {
        menu.classList.toggle("is-active");
        menuItems.classList.toggle("active");
    }
});

/*
 * Dark/light mode toggle
 */
const root = document.querySelector(":root");

const colorToggle = document.querySelector("#colorToggle");
const toggleIcon = document.querySelector("#toggle_icon");

var dark;

// ORIGINAL COLORS
// --main-color: #24201e
// --accent-color: #302924
// --tertiary-color-light: #ccd88d
// --body-text-color: #F0EAD2

// DARK MODE
// --tertiary-color: #9ac563
function toggleDarkMode (root) {

    root.style.setProperty("--main-color", "#24201e");
    root.style.setProperty("--accent-color", "#302924");
    root.style.setProperty("--tertiary-color-light", "#ccd88d");
    root.style.setProperty("--body-text-color", "#F0EAD2");
    root.style.setProperty("--tertiary-color", "#9ac563");

    root.classList.add("dark");
    toggleIcon.classList.remove("icon-sun");
    toggleIcon.classList.add("icon-moon");
}

// LIGHT MODE
// --tertiary-color: #344e41
function toggleLightMode (root) {
    root.style.setProperty("--main-color", "#F0EAD2");
    root.style.setProperty("--accent-color", "#ccd88d");
    root.style.setProperty("--tertiary-color-light", "#302924");
    root.style.setProperty("--body-text-color", "#24201e");
    root.style.setProperty("--tertiary-color", "#344e41");

    root.classList.remove("dark");
    toggleIcon.classList.remove("icon-moon");
    toggleIcon.classList.add("icon-sun");
}



if (localStorage.getItem("dark") == null) {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        dark = true;
    } else {
        dark = false;
        toggleLightMode(root);
    }
} else {
    dark = JSON.parse(localStorage.getItem("dark"));
    if (!dark) {
        toggleLightMode(root);
    }
}

localStorage.setItem("dark", JSON.stringify(dark));

/*
 * Animation sequence for switching color modes
 */
let aBackground = document.querySelector(".intro");
let aLogo = document.querySelector(".intro_logo");
let aLogoSpan = document.querySelectorAll(".logo_span");

colorToggle.addEventListener("click", ()=>{

    setTimeout(()=>{

        aBackground.style.transition = "all .3s ease-in-out";
        aBackground.style.bottom = "0vh";
        dark = !dark;
        localStorage.setItem("dark", JSON.stringify(dark));

        setTimeout(()=>{
            aLogoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.add("active");
                }, (idx + 1) * 10)
            });
        }, 50);

        setTimeout(()=>{
            aLogoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove("active");
                    span.classList.add("fade");
                }, (idx - 1) * 5)
            });
        }, 450);

        setTimeout(()=>{
            if (dark) {
                toggleDarkMode(root);
            } else {
                toggleLightMode(root);
            }
            aBackground.style.transition = "all .2s ease-in-out";
        }, 650);

        setTimeout(()=>{
            aBackground.style.bottom = "100vh";
        }, 750);

    });

    aLogoSpan.forEach((span)=>{
        span.classList.remove("fade");
    });
});