document.getElementById('btn').onclick = () => {
  let p = document.getElementById('p');
  if (p.textContent === 'pressed') {
    p.textContent = 'unpressed';
    p.setAttribute('class', 'unpressed');
  } else {
    p.textContent = 'pressed';
    p.setAttribute('class', 'pressed');
  }
}
