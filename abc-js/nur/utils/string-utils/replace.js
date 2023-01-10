import { requiredString, requiredToString } from './common.js';
import { indexOf } from './index-of.js';
import { substring } from './substring.js';

/** Возвращает строку text, где первое вхождение subStr поменяно на newSubStr.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * replace: строка, на которую нужно поменять. 
 * Это упрощенная реализация anyString.replace(subStr, newSubstr),
 * для ознакомления с возможностями полной версии: читать документацию. */
export function replace(text, search, replace) {
  requiredString(text);
  const validatedSearch = requiredToString(search, 'search');
  const validatedReplace = requiredToString(replace, 'replace');

  const startIndex = indexOf(text, validatedSearch);
  if (startIndex === -1) return text;

  const leftPart = substring(text, 0, startIndex);
  const finishIndex = startIndex + validatedSearch.length;
  const rightPart = substring(text, finishIndex);
  return leftPart + validatedReplace + rightPart;
}

/** Возвращает строку text, где все вхождения subStr поменяно на newSubStr.
 * text: строка, копию которой нужно получить.
 * subStr: строка которое нужно поменять.
 * newSubStr: строка, на которую нужно поменять. 
 * Это упрощенная реализация anyString.replaceAll(subStr, newSubstr),
 * для ознакомления с возможностями полной версии: читать документацию. */
export function replaceAll(text, subStr, newSubStr) {
  requiredString(text);
  const validatedSubStr = requiredToString(subStr, 'subStr');
  const validatedNewSubStr = requiredToString(newSubStr, 'newSubStr');

  let resultValue = '';
  let rightPart = text;
  let startIndex = indexOf(rightPart, validatedSubStr);
  while (startIndex !== -1) {
    const leftPart = substring(rightPart, 0, startIndex) + validatedNewSubStr;
    resultValue += leftPart;
    const finishIndex = startIndex + validatedSubStr.length;
    rightPart = substring(rightPart, finishIndex);
    startIndex = indexOf(rightPart, validatedSubStr);
  }
  resultValue += rightPart;
  return resultValue;
}
