function switch_appearance()
{
    document.body.classList.toggle("light-theme");
}

//#region TYPEWRITER I'M _______
var texts = ["Game Developer", "Artist", "Musician", "I'm LEB"];
var currentText = 0;
var textPosition = 0;

var typing_speed = 100;
var deleting_speed = 50;
var waiting_speed = 800;

var deleting = false;

typer = () => {
    document.getElementById("msg").innerHTML = texts[currentText].substring(0, textPosition) + '<span id="im-cursor">\u25ae</span>';

    if (textPosition++ != texts[currentText].length) {
        setTimeout(typer, typing_speed);
    } 
    else 
    {
        if (currentText == 3) return;
        deleting = true;
        setTimeout(deleter, waiting_speed);
    }
}
deleter = () => {
    document.getElementById("msg").innerHTML = texts[currentText].substring(0, textPosition) + '<span id="im-cursor">\u21e6</span>';
    if (textPosition-- != 0) {
        setTimeout(deleter, deleting_speed);
    }
    else {
        deleting = false;
        setTimeout(typer, waiting_speed);

        currentText++;
    }
}

window.addEventListener("load", typer());
//#endregion