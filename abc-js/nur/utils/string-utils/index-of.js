import { requiredString } from './common.js';
import { substring } from './substring.js';
import { isEqual } from './compare.js';
import { len } from './len.js';
import { isInteger } from '../number-utils/is-integer.js';

/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, index=0) {
  requiredString(text);

  if (typeof searchString !== 'string') throw Error('invalid searchString string');
  if (searchString === '') return -1;

  let startIndex = index ?? 0;
  if (
    typeof startIndex !== 'number' || !isInteger(startIndex)
    || startIndex < 0  || startIndex > len(text)
  ) throw Error('invalid index');

  for (let i = startIndex; i + len(searchString) <= text.length; i += 1) {
    if (text[i] === searchString[0]) {
      const cuttedText = substring(text, i, i + len(searchString));
      if (isEqual(cuttedText, searchString)) return i;
    }
  }
  return -1;
}
