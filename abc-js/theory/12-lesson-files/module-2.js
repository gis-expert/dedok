// начинаем загрузку модуля
console.log('--- module module-2.js started');

// Эта переменная доступна для всех других модулей, но не html.
// Фактически это не глобальная переменная, но она очень похожа на нее.
// Я бы сказал, что это псевдоглобальная переменная.
// Время жизни - пока открыта вкладка.
export let exportedVariable = 'exported variable';

// Эта переменная доступна для всех в пределах модуля,
// но не доступна для других модулей и html.
// Т.е. это переменная уровня модуля.
// Время жизни - пока открыта вкладка.
let notExportedVarable = 'not exported variable';

// Экспортируемая функция дает доступ для чтения
// для не экспортируемой функции.
export function getNotExportedVarableValue() {
  return notExportedVarable;
}

// закончили загрузку модуля
console.log('--- module module-2.js finished');
