import { requiredString } from './common.js';
import { len } from './len.js';
import { isInteger } from '../number-utils/is-integer.js';

/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
  requiredString(text);

  function checkIndex(index, argName) {
    const isNumber = typeof index === 'number';
    const isPositive = () => index >= 0;
    const isTextLength = () => index <= len(text);
    if (!(isNumber && isInteger(index) && isPositive() && isTextLength()))
      throw Error(`invalid ${argName} index`);
  }

  // добавляем пропущенные индексы
  const validStart = start ?? 0;
  const validEnd = end ?? text.length;

  checkIndex(validStart, 'start');
  checkIndex(validEnd, 'end');
  if (validStart > validEnd) throw Error('invalid start and end index');
  
  let result = '';
  for (let i = validStart; i < validEnd; i += 1) {
    result += text[i];
  }
  return result;
}
