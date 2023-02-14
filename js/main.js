
const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

const navLinkClick = () => {
    setTimeout (() => {
        toggleNav();
    }, 250)
}

/*
 * Dark/light mode toggle
 */
const root = document.querySelector(":root");

const colorToggle = document.querySelector("#color-toggle");
const toggleIcon = document.querySelector("#toggle-icon");

var dark;

// ORIGINAL COLORS
// --main-color: #24201e
// --main-color-transparent: #24201e00
// --accent-color: #302924
// --tertiary-color-light: #ccd88d
// --body-text-color: #F0EAD2

// DARK MODE
// --tertiary-color: #9ac563
function toggleDarkMode (root) {

    root.style.setProperty("--main-color", "#24201e");
    root.style.setProperty("--main-color-transparent", "#24201e00");
    root.style.setProperty("--accent-color", "#302924");
    root.style.setProperty("--tertiary-color", "#9ac563");
    root.style.setProperty("--tertiary-color-light", "#ccd88d");
    root.style.setProperty("--body-text-color", "#F0EAD2");

    root.style.setProperty("--bg-opacity", "20%");

    toggleIcon.classList.remove("icon-sun");
    toggleIcon.classList.add("icon-moon");
}

// LIGHT MODE
// --tertiary-color: #344e41
function toggleLightMode (root) {
    root.style.setProperty("--main-color", "#F0EAD2");
    root.style.setProperty("--main-color-transparent", "#F0EAD200");
    root.style.setProperty("--accent-color", "#c6ce9c");
    root.style.setProperty("--tertiary-color", "#3e613b");
    root.style.setProperty("--tertiary-color-light", "#344e41");
    root.style.setProperty("--body-text-color", "#24201e");

    root.style.setProperty("--bg-opacity", "45%");

    toggleIcon.classList.remove("icon-moon");
    toggleIcon.classList.add("icon-sun");
}



if (localStorage.getItem("dark") == null) {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        dark = true;
        root.classList.toggle("dark");
    } else {
        dark = false;
        toggleLightMode(root);
    }
} else {
    dark = JSON.parse(localStorage.getItem("dark"));
    if (!dark) {
        toggleLightMode(root);
    } else {
        root.classList.toggle("dark");
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

    dark = !dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    root.classList.toggle("dark");

    if (dark) {
        console.log("dark mode...")
        toggleDarkMode(root);
    } else {
        console.log("light mode...")
        toggleLightMode(root);
    }

    // document.write(dark);

});
