/** Модуль предназначен для изучения основ программирования.
 * Все эти функции уже присутствуют в js, поэтому практической пользы
 * от данной реализации мы не получим. Но основная цель которая
 * ставится данными задачами, это получение студентом:
 * 1. научиться находить алгоритм решения поставленной задачи
 * и переводить их в компьютерные инструкции.
 * 2. изучить внутреннее строение популярных функции.
 * 3. поиск решений задач в условиях ограничений.
 *
 * Разрешения, можно использовать:
 * 1. использовать все встренные операторы (ветвления, циклы, логические и т.д.);
 * 2. получение доступа к символу через его индекс anyString[i];
 * 3. получение длины объекта anyString.length;
 * 4. использование объекта Math, но особо упоротые могут постараться
 * обойтись без них;
 *
 * Ограничения, нельзя использовать:
 * 1. Любые встроенные функции и атрибуты строк;
 * 2. Любые другие встроенные функции вроде parseInt, toString и т.д.;
 * 3. Объекты, в том числе массивы (для string-utils, number-utils, boolean-utils);
 */

/** для получения цифры строки по его индексу */
const DIGIT_STRINGS = '0123456789';

/** по индексу проверяет совпадают ли все остальные символы
 * между text и searchString и возвращает булевое значение.*/
export function isMatch(firstText, secondText) {
  if (typeof firstText === 'undefined' || typeof secondText === 'undefined')
    throw Error('both parameters are required');

  if (typeof firstText !== 'string' || typeof secondText !== 'string')
    return false;

  if (firstText.length !== secondText.length) return false;

  for (let i = 0; i < firstText.length; i += 1) {
    if (firstText[i] !== secondText[i]) return false;
  }
  return true;
  }

/** Переводит переданный аргумент в тип строки.
 * Можно переводить в строку только простые типы:
 * number, boolean, string, undefined, null.
 * Другие типы вызовут ошибку. */
export function toString(value) {
  const typeOfValue = typeof value;
  if (typeOfValue === 'string') return value;
  else if (typeOfValue === 'boolean') return value ? 'true' : 'false';
  else if (value === undefined) return typeOfValue;
  else if (value === null) return 'null';
  else if (typeOfValue === 'number') return floatToString(value);
  throw Error('this type is not supported');
}

/** Для сохранения значения первой цифры в ходе работы функции shiftFirstDigit. */
let firstDigit;
/** Для сохранения остатка числа в ходе работы функции shiftFirstDigit. */
let residualNumber;
/** Входящее значение */
let expectNumber;
/** Текущее значение */
let currentNumber;

/** переводит целое число в строку и возрвращает это значение*/
function intToString(value) {
  if (value === 0) return '0';
  residualNumber = expectNumber = value < 0 ? -value : value;
  currentNumber = 0;

  let resultValue = '';
  let integerPlaceCount = 0;
  while (expectNumber - currentNumber >= 1) {
    shiftFirstDigit();
    resultValue += DIGIT_STRINGS[firstDigit];
    currentNumber = currentNumber * 10 + firstDigit;
    if (integerPlaceCount > 10) throw Error();
    integerPlaceCount += 1;
  }
  return value < 0 ? '-' + resultValue : resultValue;
}

/** Переводит десятично число и возвращает это значение*/
function floatToString(value) {
  let resultValue = intToString(value);
  if (residualNumber === 0) return resultValue;

  resultValue += '.';
  let dicimalPlaceCount = 1;
  while (currentNumber !== expectNumber) {
    residualNumber *= 10;
    shiftFirstDigit(residualNumber);
    resultValue += DIGIT_STRINGS[firstDigit];
    currentNumber = currentNumber + firstDigit / (10 ** dicimalPlaceCount);
    dicimalPlaceCount += 1;
  }
  return resultValue;
}

/** Сдвигает число на одну цифру влево и возвращает массив из:
 * Самая левая цифра числа (первая) возвращается как строка в первом элементе
 * Отсток числа (без первого числа) возвращается как число во втором элементе
 */
function shiftFirstDigit() {
  let tenPowerCount = 0;
  for (; 10 ** (tenPowerCount + 1) <= residualNumber; tenPowerCount++) {};

  const roundValue = 10 ** tenPowerCount;
  let nextRoundValue = 0;
  for (; (nextRoundValue + roundValue) <= residualNumber; nextRoundValue += roundValue) {};
  firstDigit = (residualNumber - (residualNumber - nextRoundValue)) / roundValue;
  residualNumber = residualNumber - nextRoundValue;
}

/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
  if (typeof text === 'undefined') throw Error('text must not be of undefined');
  if (typeof text !== 'string') throw Error('text must be of type string');
  let validatedCount = count ?? 1;
  if (validatedCount < 0) throw Error('repeat count must be positive value or zero');
  validatedCount = validatedCount % 1 === 0 ? validatedCount : validatedCount - (validatedCount % 1);
  let result = '';
  for (let i = 0; i < validatedCount; i += 1) {
    result += text;
  }
  return result;
}

/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
  // аргумент text обязателен и тип строки
  if (typeof text === 'undefined') throw Error('text must not be of undefined');
  if (typeof text !== 'string') throw Error('text must be of type string');

  // добавляем пропущенные индексы
  let validatedStart = start ?? 0;
  let validatedEnd = end ?? text.length;

  // если индексы не пропущены, но не числа или отрицательные
  validatedStart = Number(validatedStart);
  validatedEnd = Number(validatedEnd);
  if (isNaN(validatedStart) || validatedStart < 0) validatedStart = 0;
  if (isNaN(validatedEnd) || validatedEnd < 0) validatedEnd = 0;

  // отбрасываем дробную часть
  if (validatedStart % 1 !== 0) validatedStart -= validatedStart % 1;
  if (validatedEnd % 1 !== 0) validatedEnd -= validatedEnd % 1;
  
  // начальный индекс должен быть не больше конечного
  if (validatedStart > validatedEnd) {
    const tempValue = validatedStart;
    validatedStart = validatedEnd;
    validatedEnd = tempValue;
  }

  // конченый индекс не должен быть больше длины текста
  if (validatedEnd > text.length) validatedEnd = text.length
  
  let result = '';
  for (let i = validatedStart; i < validatedEnd; i += 1) {
    result += text[i];
  }
  return result;
}

/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр position задает начальную позицию с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, position) {
  // аргумент text обязателен и тип строки
  if (typeof text === 'undefined') throw Error('text must not be of undefined');
  if (typeof text !== 'string') throw Error('text must be of type string');

  let startIndex = position ?? 0;
  if (typeof startIndex !== 'number') startIndex = Number(startIndex);
  startIndex = Math.floor(startIndex);
  if (startIndex < 0) startIndex = 0;

  if (typeof searchString !== 'string') return -1;
  if (searchString === '') return startIndex;

  for (let i = startIndex; i < text.length; i += 1) {
    if (text[i] === searchString[0]) {
      const cuttedText = substring(text, i, i + searchString.length);
      if (isMatch(cuttedText, searchString)) return i;
    }
  }
  return -1;
}
