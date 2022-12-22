// начинаем загрузку модуля
console.log('--- module load started');

// это глобальная функция
function varFunction() {
  console.log('--- run varFunction started');

  // Это локальная переменная доступная для всех в пределах функции.
  // Время жизни - пока выполняется функция.
  var fnLocalVar = 'function local variable';

  if (true) {
    // Это локальная переменная объявлена в блоке if,
    // она тоже "всплывет" вверх, но до уровня функции.
    // Время жизни - пока выполняется функция.
    var ifLocalVar = 'if variable transformed to function local variable';
  }
  //Доступ в пределах области видимости функции не вызовет ошибок.
  console.log(`ifLocalVar value: "${ifLocalVar}"`);
  console.log(`fnLocalVar value: "${fnLocalVar}"`);
  console.log('--- run varFunction finished');
}

{
  // Это переменная всплывает вверх и станет глобальной.
  // Время жизни - пока открыта вкладка.
  var blockGlobalVar = 'block variable transformed to global variable';
}

// переменная в глобальной видимости, в консоли распечатается
console.log(blockGlobalVar);

// модуль будет успешно загружена, о чем мы узнаем в консоли
console.log('--- module load finished');
