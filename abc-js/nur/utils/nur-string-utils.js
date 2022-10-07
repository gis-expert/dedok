/** по индексу проверяет совпадают ли все остальные символы
 * между text и searchString и возвращает булевое значение.*/
export function isItMatch(firstText, secondText) {
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
  for (let i = 0; i < text.length; i += 1) {
    
  }
}
