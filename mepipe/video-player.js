const video = document.querySelector(".video");
const video_container = document.querySelector("#video-container");
const controls_container = document.querySelector("#controls-container");

const pauseButton = document.querySelector("#play-button");
const fullscreenButton = document.querySelector("#fullscreen")
const muteButton = document.querySelector("#mute")

let volume = 1

const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

/*Setup Controls Menu*/
const videoPosition = video.getBoundingClientRect();
/* controls_container.style.top = videoPosition.top + "px";
controls_container.style.left = videoPosition.left + "px";
controls_container.style.height = videoPosition.height + "px";
controls_container.style.width = videoPosition.width + "px"; */

video_container.style.top = videoPosition.top + "px";
video_container.style.left = videoPosition.left + "px";
video_container.style.height = videoPosition.height + "px";
video_container.style.width = videoPosition.width + "px";

// Pause / Play Buttons
function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

function updateToggleButton() {
  pauseButton.classList.toggle("fa-play");
  pauseButton.classList.toggle("fa-pause");

}

// Fullscreen
function toggleFullscreen()
{
  video.requestFullscreen()
}

// Mute
function toggleMute()
{
  volume = 1 - volume;
  video.volume = volume;

  muteButton.classList.toggle("fa-volume-low");
  muteButton.classList.toggle("fa-volume-xmark");
}

// Progress
function handleProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Buttons
pauseButton.addEventListener("click", togglePlay);
fullscreenButton.addEventListener("click", toggleFullscreen);
muteButton.addEventListener("click", toggleMute);

// Video
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);
video.addEventListener("timeupdate", handleProgress);

// Progress
progress.addEventListener("click", scrub);
let mousedown = false;
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mouseup", () => (mousedown = false));
