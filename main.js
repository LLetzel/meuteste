const box = document.querySelector('#myForm');

function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  box.style.borderColor = `rgb(${r}, ${g}, ${b})`;
}

setInterval(changeColor, 1000);