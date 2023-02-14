import { DIGITS } from "./common.js";


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
  residualNumber = expectNumber = value < 0 ? -value : value;
  currentNumber = 0;

  let resultValue = '';

  if (expectNumber - currentNumber < 1) {
    resultValue = '0';
  } else {
    let integerPlaceCount = 0;
    let i = 0;
    while (expectNumber - currentNumber >= 1) {
      shiftFirstDigit();
      resultValue += DIGITS[firstDigit];
      currentNumber = currentNumber * 10 + firstDigit;
      if (integerPlaceCount > 10) throw Error();
      integerPlaceCount += 1;
      if (++i > 20) throw Error('infinity');
    }
  }
  return value < 0 ? '-' + resultValue : resultValue;
}

/** Переводит десятично число и возвращает это значение*/
function floatToString(value) {
  let resultValue = intToString(value);
  console.log('res: ' + residualNumber);
  console.log('resМ: ' + resultValue);
  if (residualNumber === 0) return resultValue;

  resultValue += '.';
  let dicimalPlaceCount = 1;
  let i = 0;
  while (currentNumber !== expectNumber) {
    residualNumber *= 10;
    shiftFirstDigit(residualNumber);
    resultValue += DIGITS[firstDigit];
    currentNumber = currentNumber + firstDigit / (10 ** dicimalPlaceCount);
    dicimalPlaceCount += 1;
    if (++i > 20) throw Error('float infinity');
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
  console.log('resN: ' + residualNumber);
  residualNumber = residualNumber - nextRoundValue;
}
