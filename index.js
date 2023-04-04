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

var appearance = -1;
function switch_appearance()
{
    appearance *= -1;

    switch (appearance)
    {
        case 1:
            document.styleSheets[0].rules[0].style.setProperty("--primary-background-color", "--primary-background-color-light");
            document.styleSheets[0].rules[0].style.setProperty("--secondary-background-color", "--secondary-background-color-light");
            document.styleSheets[0].rules[0].style.setProperty("--tertiary-background-color", "--tertiary-background-color-light");

            document.styleSheets[0].rules[0].style.setProperty("--primary-color", "--primary-color-light");
            document.styleSheets[0].rules[0].style.setProperty("--secondary-color", "--secondary-color-light");
        case -1:
            document.styleSheets[0].rules[0].style.setProperty("--primary-background-color", "--primary-background-color-dark");
            document.styleSheets[0].rules[0].style.setProperty("--secondary-background-color", "--secondary-background-color-dark");
            document.styleSheets[0].rules[0].style.setProperty("--tertiary-background-color", "--tertiary-background-color-dark");

            document.styleSheets[0].rules[0].style.setProperty("--primary-color", "--primary-color-dark");
            document.styleSheets[0].rules[0].style.setProperty("--secondary-color", "--secondary-color-dark");
    }
}