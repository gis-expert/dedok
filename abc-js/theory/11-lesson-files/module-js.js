console.log('load module.js file started');
import { printToConsole } from './module2-js.js';

function main() {
  console.log('run main');
  document.getElementById('btn').onclick = btnHandler;
  printToConsole();
}

export function btnHandler () {
  console.log('btnHandler function runned');
  let p = document.getElementById('p');
  if (p.textContent === 'pressed') {
    p.textContent = 'unpressed';
    p.setAttribute('class', 'unpressed');
  } else {
    p.textContent = 'pressed';
    p.setAttribute('class', 'pressed');
  }
}

console.log('before run main');
main();

console.log('load module.js file finished');
