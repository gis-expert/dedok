import { requiredString } from './common.js';
import { indexOf } from './index-of.js';
import { len } from './len.js';
import { substring } from './substring.js';

/** Возвращает строку text, где первое вхождение search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replace(text, search, target) {
  requiredString(text, 'argument text');
  requiredString(search, 'argument search');
  requiredString(target, 'argument target');

  const startIndex = indexOf(text, search);
  if (startIndex === -1) return text;

  const leftPart = substring(text, 0, startIndex);
  const finishIndex = startIndex + search.length;
  const rightPart = substring(text, finishIndex);
  return leftPart + target + rightPart;
}

/** Возвращает строку text, где все вхождения search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replaceAll(text, search, target) {
  requiredString(text, 'argument text');
  requiredString(search, 'argument search');
  requiredString(target, 'argument target');

  let resultValue = text;
  let index = indexOf(resultValue, search);
  while (index !== -1) {
    resultValue = replace(resultValue, search, target);
    index = indexOf(resultValue, search, index + len(target));
  }
  return resultValue;
}
