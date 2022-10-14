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

//** символы с данной константы будут удалятся функциями
// trim(), trimLeft(), trimRight(). */
const TRIM_SYMBOLS = ' \n\t\v'; 

/** по индексу проверяет совпадают ли все остальные символы
 * между text и searchString и возвращает булевое значение.*/
export function isEqual(firstText, secondText) {
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

/** Возвращает "развернутую" копию text */
export function reverse(text) {
  requiredString(text);

  let resultValue = '';
  for (let i = text.length - 1; i >= 0 ; i -= 1) {
    resultValue += text[i];
  }
  return resultValue;
}

/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
  requiredString(text);
  let validatedCount = count ?? 1;
  if (validatedCount < 0) throw Error('repeat count must be positive value or zero');
  validatedCount = validatedCount % 1 === 0 ? validatedCount : validatedCount - (validatedCount % 1);
  let result = '';
  for (let i = 0; i < validatedCount; i += 1) {
    result += text;
  }
  return result;
}

/** Возвращает копию строки с удаленными пробелами в начале и конце строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trim(text) {
  let result = trimLeft(text);
  return trimRight(result);
}

/** Возвращает копию строки с удаленными пробелами в начале строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trimLeft(text) {
  requiredString(text);
  let i = 0;
  for (; i < text.length; i += 1) {
    if (indexOf(TRIM_SYMBOLS, text[i]) === -1) break; 
  }
  return substring(text, i);
}

/** Возвращает копию строки с удаленными пробелами в конце строки.
 * Удалению подлежат все символы в константе TRIM_SYMBOLS.*/
export function trimRight(text) {
  requiredString(text);
  let i = text.length;
  for (; i !== 0; i -= 1) {
    if (indexOf(TRIM_SYMBOLS, text[i - 1]) === -1) break; 
  }
  return substring(text, 0, i);
}

/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
  // аргумент text обязателен и тип строки
  requiredString(text);

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
  requiredString(text);

  let startIndex = position ?? 0;
  if (typeof startIndex !== 'number') startIndex = Number(startIndex);
  startIndex = Math.floor(startIndex);
  if (startIndex < 0) startIndex = 0;

  if (typeof searchString !== 'string') return -1;
  if (searchString === '') return startIndex;

  for (let i = startIndex; i < text.length; i += 1) {
    if (text[i] === searchString[0]) {
      const cuttedText = substring(text, i, i + searchString.length);
      if (isEqual(cuttedText, searchString)) return i;
    }
  }
  return -1;
}

/** Возвращает строку text, где первое вхождение subStr поменяно на newSubStr.
 * text: строка, копию которой нужно получить.
 * subStr: строка которое нужно поменять.
 * newSubStr: строка, на которую нужно поменять. 
 * Это упрощенная реализация anyString.replace(subStr, newSubstr),
 * для ознакомления с возможностями полной версии: читать документацию. */
export function replace(text, subStr, newSubStr) {
  requiredString(text);
  const validatedSubStr = requiredToString(subStr, 'subStr');
  const validatedNewSubStr = requiredToString(newSubStr, 'newSubStr');

  const startIndex = indexOf(text, validatedSubStr);
  if (startIndex === -1) return text;

  const leftPart = substring(text, 0, startIndex);
  const finishIndex = startIndex + validatedSubStr.length;
  const rightPart = substring(text, finishIndex);
  return leftPart + validatedNewSubStr + rightPart;
}

/** Возвращает строку text, где все вхождения subStr поменяно на newSubStr.
 * text: строка, копию которой нужно получить.
 * subStr: строка которое нужно поменять.
 * newSubStr: строка, на которую нужно поменять. 
 * Это упрощенная реализация anyString.replaceAll(subStr, newSubstr),
 * для ознакомления с возможностями полной версии: читать документацию. */
export function replaceAll(text, subStr, newSubStr) {
  requiredString(text);
  const validatedSubStr = requiredToString(subStr, 'subStr');
  const validatedNewSubStr = requiredToString(newSubStr, 'newSubStr');

  let resultValue = '';
  let rightPart = text;
  let startIndex = indexOf(rightPart, validatedSubStr);
  while (startIndex !== -1) {
    const leftPart = substring(rightPart, 0, startIndex) + validatedNewSubStr;
    resultValue += leftPart;
    const finishIndex = startIndex + validatedSubStr.length;
    rightPart = substring(rightPart, finishIndex);
    startIndex = indexOf(rightPart, validatedSubStr);
  }
  resultValue += rightPart;
  return resultValue;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padStart(text, maxLength, fillString = ' ') {
  return getPadString(text, maxLength, fillString) + text;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = ' ') {
  return text + getPadString(text, maxLength, fillString);
}

/** Вычисляет и возвращает строку pad. */
function getPadString(text, maxLength, fillString) {
  requiredString(text);
  const validatedFillString = requiredToString(fillString);

  let padString = '';
  let currentIndex = padString.length + text.length;
  while (currentIndex < maxLength) {
    const diff = maxLength - currentIndex;
    padString += diff >= validatedFillString.length
      ? validatedFillString
      : substring(validatedFillString, 0, diff);
    currentIndex = padString.length + text.length;
  }
  return padString;
}

/** Возвращает text с приведением в строковый тип предварительно
 * проверив что text объявлен. */
function requiredToString(text, attrName='text') {
  if (text === undefined) requiredString(text, attrName);
  return toString(text);
}

/** Если text не объявлен или имеет не строковый тип,
 * то выкинет исключение. */
function requiredString(text, attrName='text') {
  if (typeof text === 'undefined') throw Error(`${attrName} must not be of undefined`);
  if (typeof text !== 'string') throw Error(`${attrName} must be of type string`);
}
