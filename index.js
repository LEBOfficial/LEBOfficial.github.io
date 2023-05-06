function switch_appearance()
{
    document.body.classList.toggle("light-theme");
}

//#region NAV BUTTONS / SCROLL
const nav_buttons = document.getElementsByClassName("nav-btn");

let currentSection = 0;

const sections = 
["home-section", 
"game-section",
"contact-section"];



function nav_btn_click(btn) {

    update_nav_btn(btn);

    //GETTING THE BUTTONS SECTIONS
    scrollElement(nav_buttons[btn].dataset.section);

    currentSection = btn;
}

function update_nav_btn(btn) {
    //SELECTING
    for (let i = 0; i < nav_buttons.length; i++)
    {
        nav_buttons[i].classList.remove("selected");
    }
    nav_buttons[btn].classList.add("selected");
}

var scrollPercent;

function scrollElement(sect) {
    document.getElementById(sect).scrollIntoView({block: "start", behavior: "smooth"})
    
}

window.addEventListener("scroll", function (event) {

    /*
    const homeRect = this.document.getElementById("home-section").getBoundingClientRect()
    const gameRect = this.document.getElementById("game-section").getBoundingClientRect()
    const contactRect = this.document.getElementById("contact-section").getBoundingClientRect()

    
    if (this.window.scrollY < gameRect.top)
    {
        update_nav_btn(0);
    }
    else if (this.window.scrollY > gameRect.top && this.window.scrollY < contactRect.bottom)
    {
        update_nav_btn(1);
    }
    else {
        update_nav_btn(2);
    }*/

    scrollPercent = (document.documentElement.scrollTop||document.body.scrollTop) / ((document.documentElement.scrollHeight||document.body.scrollHeight) - document.documentElement.clientHeight) * 100;

    if (scrollPercent < 30)
    {
        update_nav_btn(0);
    }
    else if (scrollPercent > 30 && scrollPercent < 70)
    {
        update_nav_btn(1);
    }
    else
    {
        update_nav_btn(2);
    }

})

//#endregion

const clipboard_mouse = document.getElementById("clipboard-mouse")


function discord_profile_click()
{
    console.log("Copied")
    navigator.clipboard.writeText("LEB#3729");

    clipboard_mouse.classList.remove("clipboard-active");
    void clipboard_mouse.offsetWidth;
    clipboard_mouse.classList.add("clipboard-active");
}

const nav_menu = document.getElementById("nav-menu")
const nav_menu_opener = document.getElementById("nav-menu-opener")
const nav_btns = document.getElementsByClassName("nav-btn")
window.addEventListener("DOMContentLoaded", function (event) {
    if (this.window.innerWidth <= 600)
    {
        for (let i = 0; i < nav_btns.length; i++)
        {
            nav_btns[i].style.display = "none";
        }

    }
    else {
        nav_menu_opener.style.display = "none";
    }
    nav_menu.style.display = "none";
});

let menu_open = false;

nav_menu_opener.addEventListener("click", function (event) {
    if (!menu_open)
    {
        nav_menu.style.display = "flex";
        nav_menu.classList.remove("nav-menu-active")
        void nav_menu.offsetWidth;
        nav_menu.classList.add("nav-menu-active")
    }
    else {
        nav_menu.style.display = "none";
    }
    menu_open = !menu_open
})