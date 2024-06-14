const ele1 = document.getElementById('ele1');

function pintar(e, color = 'green') {
  e.target.style.backgroundColor = color;
}

ele1.addEventListener('click', (e) => {
  pintar(e, 'yellow');
});

