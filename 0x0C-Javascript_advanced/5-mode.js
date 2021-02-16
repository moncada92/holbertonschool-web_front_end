const body = document.querySelector('body');

function changeMode(size, weight, transform, background, color){

  return function () {

    body.style.fontSize = size;
    body.style.fontWeight = weight;
    body.style.textTransform = transform;
    body.style.backgroundColor = background;
    body.style.color = color;
    
  };
}
const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

body.addEventListener('click', (e) => {

  if(e.target.textContent === "Spooky") {
    spooky();
  }
  else if(e.target.textContent === "Dark mode") {
    darkMode();
  }
  else if(e.target.textContent === "Scream mode") {
    screamMode();
  }
})