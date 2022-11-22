
// DOM Element 
const SUN = document.getElementById("sun");

// Variables
let index = 0;

// Colors 
const COLORS = ["red", "green", "blue", "yellow"];

// Handler
const initColor = () => {
  SUN.style.backgroundColor = COLORS[index];
}

const changeColor = () => {
  index++;
  if (COLORS[index]) {
    SUN.style.backgroundColor = COLORS[index];
  }
}

// Event Listeners 
window.addEventListener("DOMContentLoaded", initColor);

SUN.addEventListener("click", changeColor)
#sun {
  width: 400px;
  cursor: pointer;
  height: 200px;
  border: 1px solid black;
}
