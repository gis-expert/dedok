import { requiredString } from './common.js';
import { substring } from './substring.js';
import { isEqual } from './compare.js';
import { len } from './len.js';
import { isInteger } from '../number-utils/is-integer.js';

/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр position задает начальную позицию с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, position) {
  requiredString(text);

  if (typeof searchString !== 'string') throw Error('invalid search string');
  if (searchString === '') return -1;

  let startIndex = position ?? 0;
  if (typeof startIndex !== 'number' || startIndex < 0 || !isInteger(startIndex)) throw Error('invalid index');

  for (let i = startIndex; i + len(searchString) <= text.length; i += 1) {
    if (text[i] === searchString[0]) {
      const cuttedText = substring(text, i, i + len(searchString));
      if (isEqual(cuttedText, searchString)) return i;
    }
  }
  return -1;
}
