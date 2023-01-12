import { parseInteger } from '../number-utils/parse-integer.js';
import { requiredString } from './common.js';

/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
  // аргумент text обязателен и тип строки
  requiredString(text);

  // добавляем пропущенные индексы
  let validStart = start ?? 0;
  let validEnd = end ?? text.length;

  // если индексы не пропущены, но не числа или отрицательные
  validStart = parseInteger(validStart);
  validEnd = parseInteger(validEnd);
  if (isNaN(validStart) || validStart < 0) validStart = 0;
  if (isNaN(validEnd) || validEnd < 0) validEnd = 0;

  // отбрасываем дробную часть
  if (validStart % 1 !== 0) validStart -= validStart % 1;
  if (validEnd % 1 !== 0) validEnd -= validEnd % 1;
  
  // начальный индекс должен быть не больше конечного
  if (validStart > validEnd) {
    const tempValue = validStart;
    validStart = validEnd;
    validEnd = tempValue;
  }

  // конченый индекс не должен быть больше длины текста
  if (validEnd > text.length) validEnd = text.length
  
  let result = '';
  for (let i = validStart; i < validEnd; i += 1) {
    result += text[i];
  }
  return result;
}
