import { toLower, toUpper } from "./char-utils.js";
import { len } from "./len.js";

/** возвращает копию строки text в верхнем регистре */
export function upperCase(text) {
  return toCase(text, 'upper');
}

/** возвращает копию строки text в верхнем регистре */
export function lowerCase(text) {
  return toCase(text, 'lower');
}

function toCase(text, caseType) {
  let result = '';
  const func = caseType === 'upper' ? toUpper : toLower;
  const textLength = len(text);
  for (let i = 0; i < textLength; i += 1) {
    result += func(text[i]);
  }
  return result;
}
