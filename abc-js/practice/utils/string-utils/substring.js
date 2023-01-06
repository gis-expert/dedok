import { requiredString } from './common.js';

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
