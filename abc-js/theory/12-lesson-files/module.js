// данная инструкция выполнится после загрузки "module-2.js"
console.log('--- module module.js started');

import { exportedVariable, getNotExportedVarableValue } from './module-2.js';

function main() {
  console.log('--- run main function started');
  console.log(`printed from main: "${exportedVariable}"`);
  console.log(`printed from main: "${getNotExportedVarableValue()}"`);
  someFunc();
  console.log('--- run main function finished');
}

function someFunc() {
  console.log('--- run someFunc function started');
  if (true) {
    // Если добавлять скрипты как module,
    // то объявление переменных без операторов let и var невозможна.
    // Выполнение следующей строки вызовет ошибку выполнения.
    moduleVariable = 'throw error';
  }
  console.log('--- run someFunc function finished');
}

main();

// сюда поток выполнения не дойдет, функция main()
// вызовет ошибку выполнения
console.log('--- module module.js finished');
