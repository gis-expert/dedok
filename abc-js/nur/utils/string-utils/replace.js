import { requiredString } from './common.js';
import { indexOf } from './index-of.js';
import { len } from './len.js';
import { substring } from './substring.js';

/** Возвращает строку text, где первое вхождение search поменяно на replace.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * replace: строка, на которую нужно поменять. */
export function replace(text, search, replace) {
  requiredString(text, 'argument text');
  requiredString(search, 'argument search');
  requiredString(replace, 'argument replace');

  const startIndex = indexOf(text, search);
  if (startIndex === -1) return text;

  const leftPart = substring(text, 0, startIndex);
  const finishIndex = startIndex + search.length;
  const rightPart = substring(text, finishIndex);
  return leftPart + replace + rightPart;
}

/** Возвращает строку text, где все вхождения search поменяно на replaceValue.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * replaceValue: строка, на которую нужно поменять. */
export function replaceAll(text, search, replaceValue) {
  requiredString(text, 'argument text');
  requiredString(search, 'argument search');
  requiredString(replaceValue, 'argument replaceValue');

  let resultValue = text;
  let index = indexOf(resultValue, search);
  while (index !== -1) {
    resultValue = replace(resultValue, search, replaceValue);
    index = indexOf(resultValue, search, index + len(replaceValue));
  }
  return resultValue;
}
