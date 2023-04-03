
function nav_click(nav_i)
        {
            console.log("HELLO!");
            var clickedElement = document.getElementById(nav_i);
            if (clickedElement.className === "nav_item")
            {
                document.getElementById("$home").className = "nav_item";
                document.getElementById("$games").className = "nav_item";
                document.getElementById("$about").className = "nav_item";
                clickedElement.className += " topnav_item_active";
            }
        }