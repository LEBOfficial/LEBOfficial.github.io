const like_button = document.getElementById("like")

function like_button_clicked()
{
    like_button.classList.toggle("active")
}

like_button.addEventListener("click", like_button_clicked)