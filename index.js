function nav_click(nav_i)
{
    const homePage = document.getElementById("home");
    const gamePage = document.getElementById("game");
    const aboutPage = document.getElementById("about");

    const new_active = document.getElementById(nav_i);

    document.getElementById("$home").className = "nav_item";
    document.getElementById("$games").className = "nav_item";
    document.getElementById("$about").className = "nav_item";

    new_active.classList.add("topnav_active");

    switch (new_active.id) {
        case "$home":
            homePage.className = "home_page active_page";
            gamePage.className = "game_page";
            aboutPage.className = "about_page";
            return;
        case "$games":
            homePage.className = "home_page";
            gamePage.className = "game_page active_page";
            aboutPage.className = "about_page";
            return;
        case "$about":
            homePage.className = "home_page";
            gamePage.className = "game_page";
            aboutPage.className = "about_page active_page";
            return;
    }
}

function switch_appearance()
{
    document.body.classList.toggle("light-theme");
}