const video_source = document.getElementById("main-source")

                                                                          
// ,--.   ,--.,--.   ,--.                  ,--------.,--.  ,--.  ,--.        
// \  `.'  / `--' ,-|  | ,---.  ,---.     '--.  .--'`--',-'  '-.|  | ,---.  
//  \     /  ,--.' .-. || .-. :| .-. |       |  |   ,--.'-.  .-'|  || .-. : 
//   \   /   |  |\ `-' |\   --.' '-' '       |  |   |  |  |  |  |  |\   --. 
//    `-'    `--' `---'  `----' `---'        `--'   `--'  `--'  `--' `----' 

const title_text = document.getElementById("video-title")

if (video_source.getAttribute("src").endsWith(".mp4"))
{
    title_text.innerHTML = video_source.getAttribute("src").slice(4, -4)
}



                             
// ,--.   ,--.,--. ,--.,------. 
// |  |   |  ||  .'   /|  .---' 
// |  |   |  ||  .   ' |  `--,  
// |  '--.|  ||  |\   \|  `---.
// `-----'`--'`--' '--'`------'

const like_button = document.getElementById("like")

function like_button_clicked()
{
    like_button.classList.toggle("active")
}

like_button.addEventListener("click", like_button_clicked)