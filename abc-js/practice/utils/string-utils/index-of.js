import { requiredString } from './common.js';
import { substring } from './substring.js';
import { isEqual } from './compare.js';

/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр position задает начальную позицию с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, position) {
  requiredString(text);

  let startIndex = position ?? 0;
  if (typeof startIndex !== 'number') startIndex = Number(startIndex);
  if (isNaN(startIndex)) startIndex = 0;
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
